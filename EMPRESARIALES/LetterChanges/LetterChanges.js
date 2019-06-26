function LetterChanges(str) { 

    let shift = str.replace(/[a-z]/gi, function(letter) {
        return (letter === 'z' || letter === 'Z') ? 'a' : String.fromCharCode(letter.charCodeAt() + 1);
    });
    let answer = shift.replace(/a|e|i|o|u/gi, function(letter) {
        return letter.toUpperCase();
    })
    return answer;           
}