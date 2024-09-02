import {PythonShell} from "python-shell"
import apiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js"
import asyncHandler from "../utils/asyncHandler.js";
import axios from "axios"

const predictCrop = asyncHandler(async (req, res) => {
    const { N, P, K, rainfall, temperature, humidity } = req.body;

    // console.log({ N, P, K, rainfall, temperature, humidity })
    const cropData = { N, P, K, rainfall, temperature, humidity }

    const {data} = await axios.post("http://127.0.0.1:5000/predict" , cropData ,{
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(data)

    res.status(200).json(new ApiResponse(200 , data , "predicted"))
    
});
export default predictCrop


// import { PythonShell } from "python-shell";
// import apiError from "../utils/apiError.js";
// import ApiResponse from "../utils/apiResponse.js";
// import asyncHandler from "../utils/asyncHandler.js";

// const testSimplePredict = asyncHandler(async (req, res) => {
//     const { N, P, K, rainfall, temperature, humidity } = req.body;

//     console.log("Input data:", { N, P, K, rainfall, temperature, humidity });

//     let options = {
//         mode: 'text',
//         pythonPath: 'python', // or the path to your Python executable
//         pythonOptions: ['-u'],
//         scriptPath: 'C:/Users/renuk/OneDrive/Desktop/Farm/Backend/src/controllers',
//         args: [N, P, K, rainfall, temperature, humidity],
//         stderrParser: line => console.error(`Python stderr: ${line}`),
//         stdoutParser: line => console.log(`Python stdout: ${line}`)
//     };

//     console.log("PythonShell options:", options);

//     try {
//         const result = await new Promise((resolve, reject) => {
//             PythonShell.run("predict.py", options, (err, results) => {
//                 if (err) reject(err);
//                 else resolve(results);
//             });
//         });

//         console.log("PythonShell results:", result);

//         if (result && result.length > 0) {
//             res.status(200).json(new ApiResponse(200, result, 'Prediction completed'));
//         } else {
//             throw new apiError(500, 'No result returned from Python script');
//         }
//     } catch (error) {
//         console.error("Error in testSimplePredict:", error);
//         throw new apiError(500, `Failed to execute Python script: ${error.message}`);
//     }
// });

// export default testSimplePredict;