import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import GamePage from "./pages/GamePage";
import Homepage from "./pages/Homepage";

export default function App()
{
  const router = createBrowserRouter(createRoutesFromElements(<>
  <Route path="/" element={<Homepage/>}/>
  <Route path="/GamePage" element={<GamePage/>}/>
  </>
  ))
  return <RouterProvider router={router}/>
}