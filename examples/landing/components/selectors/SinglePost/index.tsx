import { UserComponent, useNode } from "@craftjs/core";
import React, { useState } from "react";

type SinglePostProps = {

}

export const SinglePost: UserComponent<SinglePostProps> = (props: any) => {
    const {
        connectors: { connect }
    } = useNode((node) => ({
        selected: node.events.selected
    }))
    return (
        <div ref={connect}>
            <div className="container max-h-full max-w-5xl px-4">
                <div style={{gridTemplateRows: 'repeat(2, minmax(0, 0.8fr)'}} className="h-full grid grid-rows-2 grid-flow-col col-span-2">
                <div className="h-80 col-span-3 bg-white shadow-md  rounded-md" />
                <div className="col-span-3" style={{marginTop: '0 auto'}}>
                    <div className="col-span-3 h-full flex">
                    <div className="px-3 w-full">
                        <h1 className="text-slate-700 font-medium text-4xl">
                        Lorem Ipsum Title
                        </h1>
                        <div className="flex my-5">
                        <p className="text-slate-700 font-normal text-sm">
                            Wednesday, December 22, 2021 &nbsp;&nbsp;&nbsp;
                        </p>
                        <p className="mx-4 text-slate-700 font-normal text-sm">
                            John Cena
                        </p>
                        </div>
                        <p className="w-full py-2 text-slate-400 font-normal text-xl w-full">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book. It has<br />
                        survived not only...<br />
                        <br />
                        five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the release of Letraset sheets<br />
                        containing Lorem Ipsum passages, and more recently with desktop publishing software<br />
                        like Aldus PageMaker including versions of Lorem Ipsum.                </p>
                        <div className="flex  my-6 w-full">
                        <p className="w-2/12 text-blue-300 font-medium text-sm flex ">
                            <img src="/dist/static/icons8-heart-80.png" />
                            <span className="mx-2 text-center my-2">153 likes</span>
                        </p>
                        <p className="text-blue-400 font-normal text-sm flex items-center justify-center">
                            <img src="/dist/static/icons8-comments-80.png" />
                            <span className="mx-2">3 comments</span>
                        </p>
                        </div>
                    </div>
                    </div>  
                </div>
                <br />
                </div>
            </div>
        </div>
    )
}