
module.exports = {
    conv: function conv(vec1, vec2){
        var disp = 0; 
        var convVec = [];
        for (j = 0; j < vec2.length ; j++){
            convVec.push(vec1[0] * vec2[j]);
        }
        disp = disp + 1;
        for (i = 1; i < vec1.length ; i++){
            for (j = 0; j < vec2.length ; j++){
                if ((disp + j) !== convVec.length){
                    convVec[disp + j] = convVec[disp + j] + (vec1[i] * vec2[j])
                }
                else{
                    convVec.push(vec1[i] * vec2[j]);
                }
            }
            disp = disp + 1;
        }
        return convVec;
    },

    addPolynomials : function addPolynomials(x,y){
        let result = [];
        for(let i=0;i<x.length;i++){
            result.push(x[i]+y[i]);
        }

        return result;
    }

}

