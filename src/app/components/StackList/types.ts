import React from "react";

export type StackListProps = {
    stackData: StackItem[];
};

export type StackItem = {
    title: string;
    img: React.ReactNode;
}