import asyncHandler from "../utils/asyncHandler.js";
import apiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js"

const getUser = asyncHandler(async(req,res)=>{
    const user = req.user
    console.log("get user")

    let demoUser = {
        fullName : "Anant Ambani" ,
        profilePicture : ""
    }

    console.log(user)

    if(!user){
        res.status(200).json(new ApiResponse(200 , demoUser , "user not found"))
    }

    res.status(200).json(new ApiResponse(200 , user , "user found"))
})

export {getUser}