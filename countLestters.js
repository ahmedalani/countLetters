// Function signature
// name: countLetters
// arguments: str a string
// return: object

// Given a string, returns an object with a each different letter as a property
// property set to the number of the letter repeated in the string
// Has no side-effects.


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

