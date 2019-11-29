const joinArrays =(a,b)=>{
    let i =0;
    a.forEach(element => {
        element.push(b[i]);
        i++;
    });
    return a;
}


const gauss = (a,b,c)=>{
    for(let s=0;s<b.length-1;s++){

        for(let i=s+1;i<b.length;i++){

            for(let j= s+1; j<=b.length; j++)
            {
                c[i][j] -= (c[i][s]/c[s][s])*c[s][j];
            }
            c[i][s] = 0;
        }
    }

    return c;
}

const resultTriangle = (gauss)=>{

    let x3 = gauss[2][gauss.length] / gauss[2][gauss.length-1];
    let x2 = (gauss[1][3]-gauss[1][2]*x3)/gauss[1][1];
    let x1 = (gauss[0][3]-gauss[0][2]*x3-gauss[0][1]*x2)/gauss[0][0];
    result = [x1,x2,x3];
    console.log(result);
}


a = [[1.45,-0.44,-0.15],[-0.03,0.34,0.06],[-0.45,0.07,0.65]];
b = [-1.85,0.31,0.37];


resultTriangle(gauss(a,b,joinArrays(a,b)));
