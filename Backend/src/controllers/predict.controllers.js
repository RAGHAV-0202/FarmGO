import {PythonShell} from "python-shell"
import apiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js"
import asyncHandler from "../utils/asyncHandler.js";
import axios from "axios"

const predictCrop = asyncHandler(async (req, res) => {
    const { N, P, K, rainfall, temperature, humidity } = req.body;

    // console.log({ N, P, K, rainfall, temperature, humidity })
    const cropData = { N, P, K, rainfall, temperature, humidity }

    const response = axios.post("http://127.0.0.1:5000/predict" , cropData ,{
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(response)
    

    // let options = {
    //     mode: 'text',
    //     pythonOptions: ['-u'],
    //     scriptPath: 'C:/Users/renuk/OneDrive/Desktop/Farm/Backend/src/controllers',
    //     args: [N, P, K, rainfall, temperature, humidity]
    // };

    // console.log(options.scriptPath)

    // PythonShell.run("test.py" , options , (err , result)=>{
    //     if(err){
    //         console.log(err)
    //     }else{
    //         console.log(result)
    //     }
    // })

    // PythonShell.run('predict.py', options, (err, results) => {
    //     console.log("py")
    //     if (err) {
    //         console.error('PythonShell error:', err);
    //         throw new apiError(500, 'Failed to execute Python script');
    //     }
    //     if (results) {
    //         console.log('PythonShell results:', results);
    //         res.status(200).json(new ApiResponse(200, results[0], 'Predicted Successfully'));
    //     } else {
    //         console.log('No results from PythonShell');
    //         res.status(500).json(new ApiResponse(500, null, 'No result returned from Python script'));
    //     }
    // });
});
export default predictCrop