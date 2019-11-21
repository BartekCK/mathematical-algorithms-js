function makeEmptyTab(x,y){
    let emptyTab = [];
    for (let i = 0; i < x.length +1; i++) {
        emptyTab[i] = [];
    }
    x.forEach(e=>{
        emptyTab[0].push(e);
    });
    y.forEach(e=>{
        emptyTab[1].push(e);
    });
    for (let i = 2; i < x.length+1; i++) {
        for (let j = 0; j < x.length; j++) {
            emptyTab[i].push(0);
        }
}
    return emptyTab;
}
function taylor(array){
    let value = 2;
    let result1 =0;
    for(let j=2;j<array.length;j++){
        for(let i=(array.length-1)-value;i>=0;i--){
            array[j][i]= array[j-1][i+1]-array[j-1][i];
        }
        result1 += 1/(j-1) *array[j][(array.length-1)-value];
        value++;
    }
    return result1*(1/(array[0][1]-array[0][0]));
}

x=[0,0.2,0.4,0.6,0.8,1,1.2];
y=[1,1.221403,1.491825,1.822119,2.225541,2.718282,3.320117];
const emptyTab = makeEmptyTab(x,y);
console.log('Wynik z uzyskanych danych')
console.log(taylor(emptyTab));

x2=[-0.4,-0.2,0,0.2,0.4,0.6,0.8,1,1.2];
y2=[0.6,0.8,1,1.221403,1.491825,1.822119,2.225541,2.718282,3.320117];
console.log('Wynik z uzyskanych danych + 2 punkty')
const emptyTab2 = makeEmptyTab(x2,y2);
console.log(taylor(emptyTab2));
