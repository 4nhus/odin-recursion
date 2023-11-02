function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const left = mergeSort(array.slice(0, array.length / 2));
  const right = mergeSort(array.slice(array.length / 2));

  let leftCounter = 0;
  let rightCounter = 0;

  while (leftCounter < left.length && rightCounter < right.length) {
    if (left[leftCounter] <= right[rightCounter]) {
      array[leftCounter + rightCounter] = left[leftCounter];
      leftCounter++;
    } else {
      array[leftCounter + rightCounter] = right[rightCounter];
      rightCounter++;
    }
  }

  while (leftCounter < left.length) {
    array[leftCounter + rightCounter] = left[leftCounter];
    leftCounter++;
  }

  while (rightCounter < right.length) {
    array[leftCounter + rightCounter] = right[rightCounter];
    rightCounter++;
  }

  return array;
}
