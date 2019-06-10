function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  let retArr = [];
  while (arr.length > 0) {
    let min = Math.min(...arr)
    let minIndex = arr.indexOf(min)
    retArr.push(arr.splice(minIndex, 1))
  }
  return retArr;
}
