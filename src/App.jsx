import { Route, Routes } from "react-router-dom"
import Layout from "./shared/Layout"
import MainPage from "./components/MainPage"
import Login from "./accesibilty/Login"
import { useEffect, useContext } from "react"
import { auth } from "./accesibilty/firebase"
import { Context } from "./services/Context"
import { Toaster } from "sonner"
function App() {
  const [state, dispatch] = useContext(Context)

  const user = state.user

  useEffect(() => {
    const unSuscribe = auth.onAuthStateChanged(userState => {
      if (userState) {
        dispatch({
          type: "LOGIN",
          payload: {
            uid: userState.uid,
            email: userState.email,
          },
        })
      } else {
        dispatch({
          type: "LOGAUT",
        })
      }
    })
    return unSuscribe
  }, [])

  return (
    <div>
      <Routes>
        <Route
          path="/Ecommerce-express/"
          element={user ? <Layout /> : <Login />}
        >
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
      <Toaster richColors position="top-left" expand={false} />
    </div>
  )
}
export default App
