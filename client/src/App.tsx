import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Square from './Square';
import Chessboard from './Chessboard';

function App() {

  

  //return (
  //  <>
  //    <img src={"/chesspieces/pawn_white.svg"}/>
  //  </>
  //)

  return (
    <>
      <Chessboard></Chessboard>
    </>
  )
}

export default App
