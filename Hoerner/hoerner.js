
function calculatePolynomial(array, X){
    let result = array[0] * X;
    for(let i=1;i<array.length;i++){
        result = array[i] + result;
        if(i == (array.length-1))
            break;   
        result = result * X;
    }
    return result;
}

module.exports.calculatePolynomial = calculatePolynomial;
