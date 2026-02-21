import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import Layout from "./layouts/Layout"
import Characters from "./views/Characters"
import Spells from "./views/Spells"
import Houses from "./views/Houses"
import Books from "./views/Books"
export default function AppRouter() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/characters" element={<Characters/>}/>
          <Route path="/houses" element={<Houses/>}/>
          <Route path="/characters/:house" element={<Characters/>}/>
          <Route path="/spells" element={<Spells/>}/>
          <Route path="/books" element={<Books/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}