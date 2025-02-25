export interface Chesspiece {
    type:string;
    color?:string;
    castleKing?:boolean;
    castleQueen?:boolean;
    enpassant?:boolean;
}