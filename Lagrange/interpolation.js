const calculate = require('./calculate');


exports.interpolation = function interpolation(x, y){
    let vector = [];
    let result = [];
    for(let k=0;k<x.length;k++){
        result.push(0);
    }
    for(let i=0;i<x.length;i++){
        let w = [1];
        let denominator=1;
        for(let j=0;j<x.length;j++){
            if(j!=i){
                let temp = [1, -x[j]];
                w = calculate.conv(w,temp);
                denominator = denominator * (x[i] - x[j]);
                
            }

        }

        vector = calculate.conv([y[i]/denominator],w);
        result = calculate.addPolynomials(vector,result);
    } 

    return result;
}

