import { useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router";
export default function GamePage()
{
  const[winner , setWinner]=useState(null);
  const[isEven , setEven]=useState(false);
  const [Board,setBoard] = useState(Array(9).fill(null))
   
  function reset(){
    setWinner(null)
    setEven(false)
    setBoard(Array(9).fill(null))
  }
  function checkWinner(b)
  {
    const winnerPattern = [[0,1,2] ,[3,4,5] ,[6,7,8] ,[0,3,6], [1,4,7],[2,5,8],[0,4,8] ,[6,4,2]]
    for(let pattern of winnerPattern)
    {
      if( b[pattern[0]]&&b[pattern[0]]===b[pattern[1]]&& b[pattern[1]]===b[pattern[2]])
      {
        setWinner(b[pattern[0]])
        return b[pattern[0]]
      }
    }
  }
  function isBoardFull(board) {
    if(board.every(cell => cell !== null))
    {
      setWinner("draw")
    }
  }
  function onCl(i)
  {
    
    if(Board[i]===null)
    {
      const newBoard = [...Board]
      newBoard[i] = isEven?"X":"O" ; 
      setBoard(newBoard)
      setEven(prev=>!prev)
      const winner = checkWinner(newBoard)
      if(!winner)
      {
        isBoardFull(newBoard)
      }
      
    }
    

  }
  return <>
  <header><Link className="back" to="/">Main Menu</Link></header>
  <main className="Game-Area">
    {Board.map((value , i)=>(<Button key={i} value={value} onClick={()=>onCl(i)} winner ={winner}/>))}
    </main>
    <div className="reset-area">
    {winner!==null?<h3 className="anounce">{winner === "draw" ? "Match Tied" : `${winner} won the game`}</h3>:<h3></h3>}
    {winner&&<button className="reset" onClick={reset}>Reset</button>}
    </div>
    
    </>
}