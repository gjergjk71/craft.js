import { Element, useEditor } from '@craftjs/core';
import { Tooltip } from '@material-ui/core';
import { BCol } from 'components/selectors/BCol';
import { BContainer } from 'components/selectors/BContainer';
import { BRow } from "components/selectors/BRow";
import { CategoriesCard } from 'components/selectors/CategoriesCard';
import { PostsCard } from 'components/selectors/PostsCard';
import React from 'react';
import styled from 'styled-components';

import ButtonSvg from '../../../public/icons/toolbox/button.svg';
import SquareSvg from '../../../public/icons/toolbox/rectangle.svg';
import TypeSvg from '../../../public/icons/toolbox/text.svg';
import YoutubeSvg from '../../../public/icons/toolbox/video-line.svg';
import { Button } from '../../selectors/Button';
import { Container } from '../../selectors/Container';
import { Text } from '../../selectors/Text';
import { Video } from '../../selectors/Video';
import { BHeader } from "../../selectors/BHeader";
import { Home } from "../../selectors/Home";
import { SinglePost } from "../../selectors/SinglePost";
import { Div } from "../../selectors/Div";

const ToolboxDiv = styled.div<{ enabled: boolean }>`
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  ${(props) => (!props.enabled ? `width: 0;` : '')}
  ${(props) => (!props.enabled ? `opacity: 0;` : '')}
`;

const Item = styled.a<{ move?: boolean }>`
  svg {
    width: 22px;
    height: 22px;
    fill: #707070;
  }
  ${(props) =>
    props.move &&
    `
    cursor: move;
  `}
`;

export const Toolbox = () => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <ToolboxDiv
      enabled={enabled && enabled}
      className="toolbox transition w-12 h-full flex flex-col bg-white"
    >
      <div className="flex flex-1 flex-col items-center pt-3">
        <div
          ref={(ref) =>
            create(
              ref,
              <Element
                canvas
                is={Container}
                background={{ r: 78, g: 78, b: 78, a: 1 }}
                color={{ r: 0, g: 0, b: 0, a: 1 }}
                height="300px"
                width="300px"
              ></Element>
            )
          }
        >
          <Tooltip title="Container" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <SquareSvg />
            </Item>
          </Tooltip>
        </div>
        <div
          ref={(ref) =>
            create(ref, <Text fontSize="12" textAlign="left" text="Hi there" />)
          }
        >
          <Tooltip title="Text" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <TypeSvg />
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Button />)}>
          <Tooltip title="Button" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <ButtonSvg />
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Video />)}>
          <Tooltip title="Video" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <YoutubeSvg />
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <CategoriesCard />)}>
          <Tooltip title="Categories Card" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              {/* < /> */}
              <span style={{ fontWeight: "bold" }}>CC</span>
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <PostsCard />)}>
          <Tooltip title="Posts Card" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              {/* < /> */}
              <span style={{ fontWeight: "bold" }}>PC</span>
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <BContainer />)}>
          <Tooltip title="BContainer" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              {/* < /> */}
              <span style={{ fontWeight: "bold" }}>BC</span>
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <BRow />)}>
          <Tooltip title="BRow" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              {/* < /> */}
              <span style={{ fontWeight: "bold" }}>BR</span>
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <BCol />)}>
          <Tooltip title="BCol" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              {/* < /> */}
              <span style={{ fontWeight: "bold" }}>BCol</span>
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <BHeader />)}>
          <Tooltip title="BHeader" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              {/* < /> */}
              <span style={{ fontWeight: "bold" }}>BHeader</span>
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Div />)}>
          <Tooltip title="Div" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              {/* < /> */}
              <span style={{ fontWeight: "bold" }}>Div</span>
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Home />)}>
          <Tooltip title="Home" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              {/* < /> */}
              <span style={{ fontWeight: "bold" }}>Home</span>
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <SinglePost />)}>
          <Tooltip title="SinglePost" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              {/* < /> */}
              <span style={{ fontWeight: "bold" }}>SinglePost</span>
            </Item>
          </Tooltip>
        </div>

      </div>
    </ToolboxDiv>
  );
};
