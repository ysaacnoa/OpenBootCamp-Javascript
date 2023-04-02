//errors
const myFuntion = val => {
    if (typeof val ==='number') {
        return val*2;
    }
    //return false
    throw new Error('val must be a number');
};

console.log(myFuntion(456));

const num = 5;

try{
    //code that might throw an error
    console.log("esta ejecutandose el try");
    const double = myFuntion(num);
    console.log(double);
}catch(e){
    //code to run if error is thrown
    console.error(e);
    console.error("Error");
}finally{
    //code to run no matter what
    console.log("compiled successfully with bugs");
}

//Internal error, SyntaxError, ReferenceError, TypeError, RangeError, URIError