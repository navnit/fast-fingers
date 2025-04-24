import * as React from "react";

function IconForText({icon}: { icon: React.ElementType }) {
    return React.createElement(icon, {
        fontSize: 'inherit',
        sx: {
            verticalAlign: 'middle',
            mr: 0.5
        }
    });
}
export default IconForText;