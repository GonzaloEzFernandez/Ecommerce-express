// server.js
import express from "express"
import cors from "cors"
import router from "./routes/payment.routes.js"
import { PORT } from "./config.js"
import dotenv from 'dotenv';


const app = express()
dotenv.config();
// Middleware
app.use(express.json())
app.use(cors())
app.use(router)

// listen
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
