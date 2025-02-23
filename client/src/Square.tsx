import './App.css';

function Square({x, y} : {x:number, y:number, piece:string}) {

    const color = (x+y)%2;
    const squareClass:string = color ? "squareWhite square" : "squareBlack square";

    


    return (
        <>
            <div className={squareClass}>{x}, {y}
                <img src={'/chesspieces/' + {piece} + '.svg'}/>
            </div>
        </>
    )
}

export default Square