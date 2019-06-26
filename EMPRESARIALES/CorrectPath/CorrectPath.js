function CorrectPath(str) {
    
    var path = function(str) {
      var x = 1;
      var y = 1;
    
      str.split('').forEach(function(char) {
        if (char === 'u') { y -= 1 }
        if (char === 'd') { y += 1 }
        if (char === 'r') { x += 1 }
        if (char === 'l') { x -= 1 }
      });
      
      return [x, y];
    }
    
    for (var i = 0; i < str.length; i++) {
      var [x, y] = path(str);
      
      if (str[i] === '?') {
        if (x < 5 && x < y && str[i - 1] !== 'l') {
          str = str.replace(/\?/, 'r');
        } 
        else if (y < 5 && y < x && str[i - 1] !== 'u') {
          str = str.replace(/\?/, 'd');
        } 
        else if (y >= 5 && y >= x) {
          str = str.replace(/\?/, 'u');
        }
        else if (x >= 5 && x >= y) {
          str = str.replace(/\?/, 'l');
        }
      }
    }
    
    return str;
  }