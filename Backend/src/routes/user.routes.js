import express from "express"
import apiError from "../utils/apiError.js"
import { getUser } from "../controllers/user.controllers.js"
import { VerifyJWT } from "../middlewares/auth.middleware.js"
const router = express.Router() 

router.route("/getUser").get(VerifyJWT , getUser)


export default router