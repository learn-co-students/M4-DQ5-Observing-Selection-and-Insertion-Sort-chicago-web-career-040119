function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])

  for (let n = 1; n < arr.length; n++) {
    if (arr[n] < arr[n-1]) {
      arr[n] ^= arr[n-1];
      arr[n-1] ^= arr[n];
      arr[n] ^= arr[n-1];
      n = 0
    }
  }
  return arr
}
