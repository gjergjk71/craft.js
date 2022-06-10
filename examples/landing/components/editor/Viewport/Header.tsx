import { useEditor } from '@craftjs/core';
import { Tooltip } from '@material-ui/core';
import cx from 'classnames';
import bloggrs from 'lib/bloggrs-sdk';
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router'

import Checkmark from '../../../public/icons/check.svg';
import Customize from '../../../public/icons/customize.svg';
import RedoSvg from '../../../public/icons/toolbox/redo.svg';
import UndoSvg from '../../../public/icons/toolbox/undo.svg';

const HeaderDiv = styled.div`
  width: 100%;
  height: 45px;
  z-index: 99999;
  position: relative;
  padding: 0px 10px;
  background: #d4d4d4;
  display: flex;
`;

const Btn = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border-radius: 3px;
  color: #fff;
  font-size: 13px;
  svg {
    margin-right: 6px;
    width: 12px;
    height: 12px;
    fill: #fff;
    opacity: 0.9;
  }
`;

const Item = styled.a<{ disabled?: boolean }>`
  margin-right: 10px;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    fill: #707070;
  }
  ${(props) =>
    props.disabled &&
    `
    opacity:0.5;
    cursor: not-allowed;
  `}
`;

export const Header = () => {
  const { enabled, canUndo, canRedo, actions, query } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));
  const router = useRouter();
  const { apikey, page } = router.query;
  console.log({ router })
  return (
    <HeaderDiv className="header text-white transition w-full">
      <div className="items-center flex w-full px-4 justify-end">
        {enabled && (
          <div className="flex-1 flex">
            <Tooltip title="Undo" placement="bottom">
              <Item disabled={!canUndo} onClick={() => actions.history.undo()}>
                <UndoSvg />
              </Item>
            </Tooltip>
            <Tooltip title="Redo" placement="bottom">
              <Item disabled={!canRedo} onClick={() => actions.history.redo()}>
                <RedoSvg />
              </Item>
            </Tooltip>
          </div>
        )}
        <div className="flex">
          <Btn
            className={cx([
              'transition cursor-pointer',
              {
                'bg-green-400': enabled,
                'bg-primary': !enabled,
              },
            ])}
            onClick={() => {
              console.log(query.serialize())
              fetch(bloggrs.serverUrl + `/blogs/${apikey}/update_page_state/${page}`, {
                method: "PATCH",
                headers: {
                  "Authorization": "Bearer " + localStorage.getItem("bloggrs::token"),
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  craftjs_json_state: query.serialize()
                })
              })
              actions.setOptions((options) => (options.enabled = !enabled));
            }}
          >
            {enabled ? <Checkmark /> : <Customize />}
            {enabled ? 'Finish Editing' : 'Edit'}
          </Btn>
        </div>
      </div>
    </HeaderDiv>
  );
};
