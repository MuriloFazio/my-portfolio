import React from "react";

import { StackCards, StackItem, StackContainer } from "./styles";
import { StackListProps } from "./types";


export const StackList: React.FC<StackListProps> = ({
    stackData
}) => {
    return (
        <StackContainer>
            <StackCards>
                {stackData.map((item, index) =>
                    <StackItem key={index}>
                        {item.img}
                    </StackItem>
                )}
            </StackCards>
        </StackContainer>
    )
};

export default StackList;