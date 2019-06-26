function AlphabetSoup(str) { 

  let arr = str.split('').sort();
  return arr.toString().split(',').join(''); 
         
}