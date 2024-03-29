import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./App.css"
import "./index.css"
import Memory from "./services/Memory.jsx"
import { BrowserRouter } from "react-router-dom"
import ShowProvider from "./services/showProvider.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Memory>
      <ShowProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ShowProvider>
    </Memory>
  </BrowserRouter>
)
