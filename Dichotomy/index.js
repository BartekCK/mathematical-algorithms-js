

toCalcuate = (x)=> Math.pow(1 - (Math.pow(Math.E, x) * Math.sin(x)), 2);

function dychotomia(a, b, d) {

    let xL =0, xP=0;
    while(true){
        xL = ((a + b)/2) - (d/2);
        xP = ((a + b)/2) + (d/2);

        if (toCalcuate(xL) >= (toCalcuate(xP)))
            a = xL;
        if (toCalcuate(xL) <= (toCalcuate(xP)))
            b = xP;
        if(Math.abs(b-a) < d)
            return (a+b)/2;
    }
}

let X = dychotomia(-10,1,0.01);
console.log(`x = ${X}`);
console.log(`y = ${toCalcuate(X)}`);