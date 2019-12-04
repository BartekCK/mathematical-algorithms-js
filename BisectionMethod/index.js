const equation = require('./equation');

const calculate = (a,b)=>{

    y1 = equation.calculate(a);
    while(true){
        let temp=(a+b)/2;
        let y = equation.calculate(temp);
        if(Math.abs(y) > 0.01){
          if(y1*y<0)
              b=temp;
          else
              a=temp;
        }
        else{
          return temp;
        }
    }
}


console.log(`Pierwsze miejsce zerowe dla X=${calculate(-2,-1)}`);
console.log(`Drugie miejsce zerowe dla X=${calculate(1,2)}`);

