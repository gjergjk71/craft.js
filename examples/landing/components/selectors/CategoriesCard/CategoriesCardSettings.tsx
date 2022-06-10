import { ToolbarRadio } from "components/editor/Toolbar/ToolbarRadio";
import React from "react";

import { ToolbarSection, ToolbarItem } from "../../editor";
// import { ToolbarRadio } from "../../editor/Toolbar/ToolbarRadio"

export const CategoriesCardSettings = () => {
    return (
        <React.Fragment>
            <ToolbarSection
                title="General"
                props={['title', 'categories_count', 'display_posts_count']}
            >
                <ToolbarItem propKey="title" type="text" label="Title" />
                <ToolbarItem propKey="categories_count" type="text" label="Limit" />
                <ToolbarItem propKey="display_posts_count" type="radio" label="display_posts_count">
                    <ToolbarRadio value={"true"} label="True" />
                    <ToolbarRadio value={"false"} label="False" />
                </ToolbarItem>
            </ToolbarSection>
            <ToolbarSection
                title="Connection"
                props={[ 'category_resource_path' ]}
            >
                <ToolbarItem propKey="category_resource_path" type="category_resource_path" label="Resource link:" />
            </ToolbarSection>
        </React.Fragment>
    )
}