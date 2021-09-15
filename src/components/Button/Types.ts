import { Dispatch, SetStateAction } from "react";

export interface IbuttonProps {
    text: string,
    onClick: Dispatch<SetStateAction<number>> | (() => void)
}