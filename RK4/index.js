
const E = 2.71828182845904523536028747135266249775724709369995;

const dydx=(x,y)=> Math.pow(E,-(y-1))+2*x;

function rungeKutta( x0,  y0,  x,  h) 
{ 
    
    let n = ((x - x0) / h); 
  
    let k1, k2, k3, k4;
  
    
    let y = y0; 
    for (let i=1; i<=n; i++) 
    { 
        
        k1 = h*dydx(x0, y); 
        k2 = h*dydx(x0 + 0.5*h, y + 0.5*k1); 
        k3 = h*dydx(x0 + 0.5*h, y + 0.5*k2); 
        k4 = h*dydx(x0 + h, y + k3); 
  
        y = y + (1.0/6.0)*(k1 + 2*k2 + 2*k3 + k4);; 
  
        x0 = x0 + h; 
    } 
  
    return y; 
} 

let x0 = 0, y = 0.3, x = 0.5, h = 0.05; 
console.log(rungeKutta(x0, y, x, h));