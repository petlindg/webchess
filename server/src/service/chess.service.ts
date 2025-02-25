import { Chessboard } from "../model/chessboard.model";
import { Chesspiece } from "../model/chesspiece.model";
import { Move } from "../model/move.model";

function getDefaultBoard() : Chessboard {
    return {board:[
        [
            {type:"rook", color:"white", castleQueen:true},
            {type:"knight", color:"white"},
            {type:"bishop", color:"white"},
            {type:"queen", color:"white"},
            {type:"king", color:"white", castleKing:true, castleQueen:true},
            {type:"bishop", color:"white"},
            {type:"knight", color:"white"},
            {type:"rook", color:"white", castleKing:true}
        ],

        [
            {type:"pawn", color:"white", enpassant:false},
            {type:"pawn", color:"white", enpassant:false},
            {type:"pawn", color:"white", enpassant:false},
            {type:"pawn", color:"white", enpassant:false},
            {type:"pawn", color:"white", enpassant:false},
            {type:"pawn", color:"white", enpassant:false},
            {type:"pawn", color:"white", enpassant:false},
            {type:"pawn", color:"white", enpassant:false}
        ],

        [{type:"empty"}, {type:"empty"}, {type:"empty"}, {type:"empty"}, {type:"empty"}, {type:"empty"}, {type:"empty"}, {type:"empty"}],

        [{type:"empty"}, {type:"empty"}, {type:"empty"}, {type:"empty"}, {type:"empty"}, {type:"empty"}, {type:"empty"}, {type:"empty"}],

        [{type:"empty"}, {type:"empty"}, {type:"empty"}, {type:"empty"}, {type:"empty"}, {type:"empty"}, {type:"empty"}, {type:"empty"}],

        [{type:"empty"}, {type:"empty"}, {type:"empty"}, {type:"empty"}, {type:"empty"}, {type:"empty"}, {type:"empty"}, {type:"empty"}],

        [
            {type:"pawn", color:"black", enpassant:false},
            {type:"pawn", color:"black", enpassant:false},
            {type:"pawn", color:"black", enpassant:false},
            {type:"pawn", color:"black", enpassant:false},
            {type:"pawn", color:"black", enpassant:false},
            {type:"pawn", color:"black", enpassant:false},
            {type:"pawn", color:"black", enpassant:false},
            {type:"pawn", color:"black", enpassant:false}
        ],

        [
            {type:"rook", color:"black", castleQueen:true},
            {type:"knight", color:"black"},
            {type:"bishop", color:"black"},
            {type:"queen", color:"black"},
            {type:"king", color:"black", castleKing:true, castleQueen:true},
            {type:"bishop", color:"black"},
            {type:"knight", color:"black"},
            {type:"rook", color:"black", castleKing:true}
        ]
    ],
    colorToMove:"white"
    }
}

export class ChessService {
    private chessboard:Chessboard = getDefaultBoard();

    async getBoard() :Promise<Chessboard> {
        return JSON.parse(JSON.stringify(this.chessboard));
    }

    async move(m:Move) :Promise<Chessboard> {
        const p:Chesspiece = this.chessboard.board[m.xFrom][m.yFrom];
        this.chessboard.board[m.xTo][m.yTo] = p;
        this.chessboard.board[m.xFrom][m.yFrom] = {type:"empty"};
        return this.getBoard();
    }
}