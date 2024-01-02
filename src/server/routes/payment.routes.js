// preference.routes.js
import { Router } from "express"
import { createPreference } from "../controllers/preference.controllers.js"

const router = Router()

router.post("/create-preference", createPreference)

export default router
