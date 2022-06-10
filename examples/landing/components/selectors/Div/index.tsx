import { UserComponent, useNode, Element } from "@craftjs/core";
import cx from "classnames";
import React from "react";
import styled from "styled-components";

import { DivSettings } from "./DivSettings";

// import { Text } from ""

type DivProps = {
    className: string;
}

export const Div: UserComponent<DivProps> = (props: any) =>{
    const {
        connectors: { connect }
    } = useNode((node) => {
        console.log(node.dom)
        if (node.dom) {
            node.dom.className = props.className;
        }
        return {
            selected: node.events.selected
        }
    })
    // alert(JSON.stringify(props.className))
    const { className } = props;
    return (
        <div className={className} ref={connect}>
            <Element
                id="Div"
                is="div"
            canvas>
                <div>Drop</div>
            </Element>
        </div>
    )
}

Div.craft = {
    displayName: "Div",
    props: {
        className: "bg-slate-500",
    },
    related: {
        toolbar: DivSettings
    }
}
