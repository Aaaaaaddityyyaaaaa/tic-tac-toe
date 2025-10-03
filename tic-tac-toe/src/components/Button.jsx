import { useState } from "react";

export default function Button({value ,onClick ,winner})
{
  return<button className={"Game-Button"} onClick={onClick} disabled={winner!==null}>{value}</button>
}