function countWords(str) {
   let matches = str.match(/\S+/g);
   return matches ? matches.length : 0;
}