import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Square from './Square';
import { Board } from './model/board.model';
import { API } from './api';

function Chessboard() {

  function emptyBoard(): Board {
    const board = [];
    for(let i=0; i<8; i++) {
      const row = [];
      for(let j=0; j<8; j++) {
        row.push({type: "empty"})
      }
      board.push(row)
    }
    return {board:board, colorToMove:"white"}
  }

  const [chessboard, setChessboard] = useState<Board>(emptyBoard());
  useEffect(() => {
    updateBoard()
  }, [])

  async function updateBoard(): Promise<void> {
    await API.getBoard().then((response: Board | undefined) => {
      if(response) {
        setChessboard(response);
      }
    })
  }

  return (
    <>
      <div>
        {Array.from({length:8}, (_, i) => 8-i).map((x:any) => {
          return (
            <div className="row">
              {Array.from({length:8}, (_, i) => i+1).map((y:any) => {
                return (<Square x={x} y={y} piece={chessboard.board[x][y]}/>)
              })}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Chessboard
