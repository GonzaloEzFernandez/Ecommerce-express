import { Outlet } from "react-router-dom"
import Main from "./Main"
import MenuMovil from "./MenuMovil"
import SideBar from "./SideBar"

function Layout() {
  return (
    <div>
        <SideBar />
        <MenuMovil />
        <Main>
          <Outlet />
        </Main>
    </div>
  )
}
export default Layout
