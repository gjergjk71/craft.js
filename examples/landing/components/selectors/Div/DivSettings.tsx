import { ToolbarRadio } from "components/editor/Toolbar/ToolbarRadio";
import React from "react";

import { ToolbarSection, ToolbarItem } from "../../editor";

export const DivSettings = () => {
    return (
        <React.Fragment>
            <ToolbarSection
                title="General"
                props={['className']}
            >
                <ToolbarItem propKey="className" type="text" label="className" />
            </ToolbarSection>
        </React.Fragment>
    )
}