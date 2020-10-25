function map(array, callbackFunction) {
  let newArray = []
  for (const item of array) {
    newArray.push(callbackFunction(item))
  }
  return newArray;
}