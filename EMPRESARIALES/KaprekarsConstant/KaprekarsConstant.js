function KaprekarsConstant(num) {
    var c = 0;
    while (num != 6174) {
      c += 1;
      var d = num.toString().split('');
      while (d.length < 4) {
        d.push('0');
      }
      var pequenio = d.sort().join('');
      var grande = d.reverse().join('');
      num = grande - pequenio;
    }
    return c;
  }
  