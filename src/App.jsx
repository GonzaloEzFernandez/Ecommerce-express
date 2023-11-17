import { Route, Routes } from "react-router-dom"
import Layout from "./shared/Layout"
import MainPage from "./components/MainPage"

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
          </Route>
        </Routes>
    </div>
  )
}
export default App
