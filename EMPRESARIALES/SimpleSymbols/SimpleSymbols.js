function SimpleSymbols(str) { 
    var r = /[a-z][^+]|[^+][a-z]|^[a-z]|[a-z]$/i;
    if(str.match(r)){
        return false
    }
    else{
        return true
    }
}