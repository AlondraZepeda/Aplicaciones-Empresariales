function EightQueens(strArr) {
    for (let i = 0; i < strArr.length; i ++) {
      for (let j = i + 1; j < strArr.length; j ++) {
        let x = strArr[j][1] - strArr[i][1];
        let y = strArr[j][3] - strArr[i][3];
        if (y === 0 || x === 0 || x/y === 1 || x/y === -1) return strArr[i];
      }
    }
    return 'true';
  }