import NumberHandling from "./resources.js";

const success_failure = {
    success: "Success",
    failure: "Failure",
};

let newPromise = new Promise((resolve, reject) => {
    let parameters={
        number1:"23",
        number2:24}
    
    if ((typeof(parameters.number1)!=="number")||(typeof(parameters.number2)!=="number")){
        reject(success_failure.failure)
    }else{
        let calculation_object= new NumberHandling(parameters);
        let answer = {
            sum: calculation_object.sum(),
            multiply: calculation_object.multiply()
        }
        resolve(answer)
    }
})

newPromise.then((value)=>console.log(value)).catch((err)=>console.log(err));