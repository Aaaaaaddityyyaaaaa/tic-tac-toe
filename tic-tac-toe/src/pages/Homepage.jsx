import { Link, Navigate, NavLink, useNavigate } from "react-router";

export default function Homepage()
{
  const navigate = useNavigate() ; 
  function nav(){
    navigate("/GamePage")
  }
  function close()
  {
    window.location.href = "https://www.google.com";
  }
  return <>
  <header><h1 className="main-heading">Tic-Tac-Toe</h1></header>
  <main className="home-main" >
  <button className="new-game" onClick={nav}>NewGame</button>
  <button className="exit" onClick={close}>Exit</button>  
  </main></>
}