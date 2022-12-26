import React, { FC } from "react";

type PropsType = {
    condition: boolean
    children: React.ReactElement[]
}
export const ConditionalRender: FC<PropsType> = ({children, condition }) => {
    return (
        <div>
            {
               condition ? children[0] : children[1]
            }
        </div>
    );
};
