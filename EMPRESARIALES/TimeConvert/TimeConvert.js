function TimeConvert(num){
        function splitter(hour, min) {
          if (min < 60) {
            return hour + ":" + min;
          }
          return splitter(hour + 1, min - 60);
        }
        return splitter(0, num);
}