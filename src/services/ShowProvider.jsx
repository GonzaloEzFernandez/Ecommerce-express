import { createContext, useState } from "react"

export const showContext = createContext(null)

const ShowProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }
  const handleShowOrder = () => {
    console.log("click");
    setShowOrder(!showOrder)
    setShowMenu(false)
  }
  return (
    <showContext.Provider
      value={{
        handleShowMenu,
        handleShowOrder,
        showMenu,
        showOrder,
      }}
    >
      {children}
    </showContext.Provider>
  )
}

export default ShowProvider
