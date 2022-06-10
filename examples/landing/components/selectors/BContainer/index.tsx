import { UserComponent, useNode, Element } from "@craftjs/core";
import cx from "classnames";
import React from "react";
import styled from "styled-components";

import { BContainerSettings } from "./BContainerSettings";

// import { Text } from ""

type ContainerProps = {
}

export const BContainer: UserComponent<ContainerProps> = (props: any) =>{
    const {
        connectors: { connect }
    } = useNode((node) => ({
        selected: node.events.selected
    }))

    return (
        <div ref={connect}>
            <Element 
                id="BContainer" 
                is="div"
                style={{ minWidth: 100 }}
                className="h-80vh grid gap-8 space-x-1 lg:grid-cols-8 my-5 col-offset-1 "
            canvas>
                <h1>Drop</h1>
            </Element>
        </div>
    )
}

BContainer.craft = {
    displayName: "BContainer",
}
