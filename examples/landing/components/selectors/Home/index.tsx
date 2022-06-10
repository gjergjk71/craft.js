import { UserComponent, useNode } from "@craftjs/core";
import React, { useState } from "react";
import { CategoriesCard } from "../CategoriesCard";
import { PostsCard } from "../PostsCard";

// import { HomeSettings } from "./HomeSettings";

type HomeProps = {

}

export const Home: UserComponent<HomeProps> = (props: any) => {
    const { 
        connectors: { connect }
    } = useNode((node) => ({
        selected: node.events.selected
    }))

    return (
        <div ref={connect}>
            <div className="container max-h-full max-w-8xl py-9 px-4">
                <div className="h-80vh grid gap-8 space-x-1 lg:grid-cols-8 my-5 col-offset-1">
                    <PostsCard/>
                    <CategoriesCard/>
                </div>    
            </div>
        </div>
    )
}

Home.craft = {
    displayName: "Home",
    props: {},
}