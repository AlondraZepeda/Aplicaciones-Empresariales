function VowelSquare(strArr) { 
    for(var i = 0; i < strArr.length; i++){
        for(var j = 0; j < strArr[0].length; j++){
            if(/[aeiou]/.test(strArr[i][j]) && /[aeiou]/.test(strArr[i][j+1]) && /[aeiou]/.test(strArr[i+1][j]) && /[aeiou]/.test(strArr[i+1][j+1])){
                return i + "-" + j;
            }
            
        }
    }
    return "no encontrado";
}