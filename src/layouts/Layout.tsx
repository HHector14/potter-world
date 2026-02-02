import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"
export default function Layout(){
  return(
    <>
    <div className="layout">
        <SideBar/>
        <main className="content">
          <Outlet />
        </main>
    </div>

    </>
  )
}