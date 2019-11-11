const myFunction = require('./calculate.js');

function simpson(h,tab_y){
    let result;
    for(let i=0;i<tab_y.length;i++){
        if(i == 0)
            result = tab_y[i];
        else if(i==(tab_y.length-1))
            result = result + tab_y[i];
        else if(i%2==0)
            result = result +(2*tab_y[i]);
        else
            result = result +(4*tab_y[i]);
    }

    return (h/3)*result;
}


function integration(a,b,n){
    h = myFunction.integration_step(a,b,n);
    tab_x = myFunction.calculate_x(a,n,h);
    tab_y = myFunction.calculate_y(tab_x);
    return simpson(h,tab_y);
}

module.exports.integration = integration;