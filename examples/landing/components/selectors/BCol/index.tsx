import { UserComponent, useNode, Element } from "@craftjs/core";
import cx from "classnames";
import React from "react";
import styled from "styled-components";

import { BColSettings } from "./BColSettings";

// import { Text } from ""

type BColSettingsProps = {
}

export const BCol: UserComponent<BColSettingsProps> = (props: any) =>{
    const {
        connectors: { connect }
    } = useNode((node) => ({
        selected: node.events.selected
    }))

    return (
        <div ref={connect} className="col-span-3">
            <Element 
                id="BColSettings" 
                is="div" 
                ref={connect} 
            canvas>
                <h1>Drop</h1>
            </Element>
        </div>
    )
}

BCol.craft = {
    displayName: "BCol",
}
