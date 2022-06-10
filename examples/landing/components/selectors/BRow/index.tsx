import { UserComponent, useNode, Element } from "@craftjs/core";
import cx from "classnames";
import React from "react";
import styled from "styled-components";

import { BRowSettings } from "./BRowSettings";

// import { Text } from ""

type BRowProps = {
}

export const BRow: UserComponent<BRowProps> = (props: any) =>{
    const {
        connectors: { connect }
    } = useNode((node) => ({
        selected: node.events.selected
    }))

    return (
        <div ref={connect} className="h-full grid grid-rows-3 grid-flow-col col-span-2 gap-4">
            <Element 
                id="BRow" 
                is="div" 
                ref={connect} 
            canvas>
                <h1>Drop</h1>
            </Element>
        </div>
    )
}

BRow.craft = {
    displayName: "BRow",
}
