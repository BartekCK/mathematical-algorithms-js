function integration_step(a,b,n){
    return (b-a)/n;
}
function calculate_x(a,n,h){
    let tab_x = [];
    for (let i=0;i<=n;i++){
        tab_x[i] = a + (i*h);
    }
    return tab_x;
}
function calculate_y(tab_x){
    let tab_y = [];

    for(let i=0;i<tab_x.length;i++){
        tab_y[i] = Math.sin(2*Math.pow(tab_x[i],2)+1);
       // tab_y[i] = Math.pow(tab_x[i],2)+3*tab_x[i]+2;
    }
    return tab_y;
}

module.exports = {
    integration_step : integration_step,
    calculate_x : calculate_x,
    calculate_y : calculate_y
}
// exports.integration_step = integration_step;
// exports.calculate_x = calculate_x;
// exports.calculate_y = calculate_y;