function SimpleAdding(num){
    if(num < 1){return NaN;}
    if(num === 1){return 1;}
    
    return SimpleAdding(num - 1) + num;
}