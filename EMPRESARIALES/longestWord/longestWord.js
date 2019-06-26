function LongestWord(sen) { 

    let arr = sen.match(/[a-z0-9]+/gi);
    let sorted = arr.sort(function(a, b){
        return b.length - a.length; });
        return sorted[0]; 
           
  }