import './App.css';
import { Chesspiece } from './model/chesspiece.model';

function Square({x, y, piece} : {x:number, y:number, piece:Chesspiece}) {

    const color = (x+y)%2;
    const squareClass:string = color ? "squareWhite square" : "squareBlack square";

    if(piece.type != "empty") {
        const path = '/chesspieces/' + piece.type + '_' + piece.color + '.svg'
        return (
            <>
                <div className={squareClass}>{x}, {y}
                    <img src={path}/>
                </div>
            </>
        )
    }
    return (
        <>
            <div className={squareClass}>{x}, {y}
            </div>
        </>
    )
}

export default Square