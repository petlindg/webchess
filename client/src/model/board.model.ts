import { Chesspiece } from "./chesspiece.model";

export interface Board {
    board:Chesspiece[][];
    colorToMove:String;
}