import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Square from './Square';

function App() {

  return (
    <>
      <div>
        {Array.from({length:8}, (_, i) => i+1).map((x:any) => {
          return (
            <div className="row">
            {Array.from({length:8}, (_, i) => i+1).map((y:any) => {
            return (<Square x={x} y={y}/>)
          })}
          </div>
        )
        })}
      </div>
    </>
  )
}

export default App
