var removeFromArray = function(inputArray) {
  //This function removes any values provided as arguments from inputArray
  //Loop through all arguments provided, excluding the first where the array is. This is why we start at 1
  for (i = 1; i < arguments.length; i++) {
    //Loop through the array, checking to see if the argument exists, then removing it
    let j = 0;
    while (j < inputArray.length) {
    //Compare the argument to the array element
      if (arguments[i] === inputArray[j]) { 
      // Remove match, don't increment j
        inputArray.splice (j,1)
      }
      else { 
      //Move on to the next one
        j++;
      }
    }
  }
  return inputArray
}

module.exports = removeFromArray
