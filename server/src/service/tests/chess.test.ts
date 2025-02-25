import { ChessService } from "../chess.service";
import { Chessboard } from "../../model/chessboard.model";

describe("Chess service test", () => {

    it("Tests that board initial state is okay", async () => {

        const chessService: ChessService = new ChessService();

        const cb: Chessboard = await chessService.getBoard();

        expect(cb).toBeDefined()
        let count: number = 0
        for(let i=0; i < cb.board.length; i++) {
            for(let j=0; j<cb.board[0].length; j++) {
                let p = cb.board[i][j];
                if(p.type != "empty") {
                    count += 1;
                }
            }
        }
        expect(count).toEqual(32);
    })
})