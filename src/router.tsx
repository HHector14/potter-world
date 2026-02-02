import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import Layout from "./layouts/Layout"
export default function AppRouter() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}