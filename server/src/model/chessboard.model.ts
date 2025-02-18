import { Chesspiece } from "./chesspiece.model";

export interface Chessboard {
    board:Chesspiece[][];
    colorToMove:String;
}