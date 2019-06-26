function LetterCapitalize(str){
    let strArr = str.split(" ");

	strArr = strArr.map(word => {
		return word[0].toUpperCase() + word.slice(1);
	})
 
  return strArr.join(" ");       
}