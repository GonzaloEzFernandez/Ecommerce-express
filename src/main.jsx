import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./App.css"
import "./index.css"
import Memory from "./services/Memory.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Memory>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Memory>
)
