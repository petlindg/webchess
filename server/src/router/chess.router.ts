import express, {Request, Response} from "express";
import { ChessService } from "../service/chess.service";
import { Chessboard } from "../model/chessboard.model";
import { Chesspiece } from "../model/chesspiece.model";
import { Move } from "../model/move.model";

const chessService = new ChessService();

export const chessRouter = express.Router();

chessRouter.get("/",
    async (
        req: Request<{}, {}, {}>,
        res: Response<Chessboard|String>
    ) => {
    try {
        const cb:Chessboard = await chessService.getBoard();
        res.status(200).send(cb);
    } catch (e:any) {
        res.status(500).send(e.message)
    }
});

chessRouter.patch("/"),
    async (
        req: Request<{}, {}, {move:Move}>,
        res: Response<Chessboard|String>
    ) => {
        try {
            const move:Move = req.body.move;
            const cb:Chessboard = await chessService.move(move);
            res.status(200).send(cb)
        }
        catch (e:any) {
            res.status(500).send(e.message)
        }
    }