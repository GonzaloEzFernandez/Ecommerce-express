import Main from "./shared/Main"
import MenuMovil from "./shared/MenuMovil"
import SideBar from "./shared/SideBar"
import { useState } from "react"

function App() {

  const [showMenu, setShowMenu] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }
  const handleShowOrder = () => {
    setShowOrder(!showOrder)
    setShowMenu(false)
  }

  return (
    <div>
      <SideBar showMenu={showMenu} />
      <MenuMovil
        showMenu={showMenu}
        handleShowMenu={handleShowMenu}
        handleShowOrder={handleShowOrder} 
      />
      <Main 
      handleShowOrder={handleShowOrder} 
      showOrder={showOrder}/>
    </div>
  )
}
export default App
