function map(array, callbackFunction) {
  let newArray = []
  for (const item of array) {
    newArray.push(callbackFunction(item))
  }
  return newArray;
}

function reduce(array, callbackFunction, startingPoint) {
  let startingAmount = (!!startingPoint) ? startingPoint : array[0]
  let i = (!!startingPoint) ? 0 : 1
  for (; i < array.length; i++) {
    startingAmount = callbackFunctionntion(array[i]. startingAmount)
  }
  return startingAmount
}
