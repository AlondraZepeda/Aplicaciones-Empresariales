function CheckNums(num1, num2){
    if ((num1 - num2) < 0){
        return true;
    }    
    else if ((num1 - num2) > 0) {
        return false;
    }
    else return -1;
}