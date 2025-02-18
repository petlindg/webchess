import './App.css';
import Draggable from 'react-draggable';

function Square({x, y} : {x:number, y:number}) {

    const color = (x+y)%2;
    const squareClass:string = color ? "squareWhite square" : "squareBlack square";

    return (
        <>
            <Draggable>
                <div className={squareClass}>{x}, {y}</div>
            </Draggable>
        </>
    )
}

export default Square