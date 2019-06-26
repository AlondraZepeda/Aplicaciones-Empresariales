function QuestionsMarks(str) { 
    var re = new RegExp(/[0-9]/);
    var count = 0;
    
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            if (re.test(str[i])) {
                if (str[j] === '?') {
                    count++;
                }
                if (re.test(str[j]) && re.test(str[i]) && +str[j] + +str[i] !== 10 ) {
                    count = 0;
                } else if (re.test(str[j]) && +str[i] + +str[j] === 10 && count === 3) {
                    return true;
                }
                
            }
            
        }
    }
  return false; 
}