function ClosestEnemyII(strArr) { 

    let checkTwo = strArr.filter(val=>{
       return val.includes('2'); 
    });
    
    if(!checkTwo.length){
        return 0;
    }
    
    targetY = strArr.findIndex(val=>{
        return val.includes('1');
    });
    
    targetX = strArr[targetY].search(/1/);
    
    let res = strArr.length * strArr[0].length;
    
    for(let row = 0, len = strArr.length; row < len; row++){
        for(let col = 0, height = strArr[0].length; col < height; col++){
            if(strArr[row][col] === '2'){
                xShift = disCheck(targetX, col, height);
                yShift = disCheck(targetY, row, len);
                res = Math.min(res, xShift + yShift);
            }
        }
    }
    
    return res;
}

function disCheck(y,x,len){
    return Math.min(Math.abs(x-y), Math.abs(y-x+len));
}