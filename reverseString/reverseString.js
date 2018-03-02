var reverseString = function(inString) {
  let outString = "";
  let i = inString.length - 1;
  while (i >= 0) {
    outString = outString + inString.charAt(i);
    i--;
  }
  return outString;
}

module.exports = reverseString
