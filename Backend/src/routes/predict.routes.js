import express from "express"
import predictCrop from "../controllers/predict.controllers.js"
const router = express.Router()


router.route("/suggest").post(predictCrop)

export default router