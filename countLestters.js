function countLetters(str) {
  var strNoSpace = str.replace(/ /g,'');
  var output = {};
  // for (var i in str) {
  for (var i = 0; i < strNoSpace.length; i++) {
    var char = strNoSpace[i];
    if (output[char]) {
      output[char] += 1;
    } else {
      output[char] = 1;
    }
  }
  return output;
}

console.log(countLetters('hello s'));