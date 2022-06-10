import { ToolbarRadio } from "components/editor/Toolbar/ToolbarRadio";
import React from "react";

import { ToolbarSection, ToolbarItem } from "../../editor";
// import { ToolbarRadio } from "../../editor/Toolbar/ToolbarRadio"

export const PostsCardSettings = () => {
    return (
        <React.Fragment>
            <ToolbarSection
                title="General"
                props={[ 'title', 'posts_count', 'post_resource_path' ]}
            >
                <ToolbarItem propKey="title" type="text" label="Title" />
                <ToolbarItem propKey="posts_count" type="text" label="Limit" />
                <ToolbarItem propKey="post_resource_path" type="post_resource_path" label="Resource link:" />
                {/* <ToolbarItem propKey="display_posts_count" type="radio" label="display_posts_count">
                    <ToolbarRadio value={"true"} label="True" />
                    <ToolbarRadio value={"false"} label="False" />
                </ToolbarItem> */}
            </ToolbarSection>
        </React.Fragment>
    )
}