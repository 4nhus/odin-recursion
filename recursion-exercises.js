function sumRange(number) {
  return number === 1 ? 1 : number + sumRange(number - 1);
}

function power(base, exponent) {
  return exponent >= 0
    ? exponent === 0
      ? 1
      : base * power(base, exponent - 1)
    : (1 / base) * power(base, exponent + 1);
}

function factorial(number) {
  return number === 1 ? 1 : number * factorial(number - 1);
}

function all(array, callback) {
  return array.length !== 0
    ? callback(array[0]) && all(array.slice(1), callback)
    : true;
}

function productOfArray(array) {
  return array.length !== 0 ? array[0] * productOfArray(array.slice(1)) : 1;
}

function contains(nestedObject, searchValue) {
  return typeof nestedObject === "object"
    ? Object.values(nestedObject).some((value) => contains(value, searchValue))
    : nestedObject === searchValue;
}

function totalIntegers(array) {
  return array.length === 0
    ? 0
    : (Array.isArray(array[0])
        ? totalIntegers(array[0])
        : Number.isInteger(array[0])) + totalIntegers(array.slice(1));
}

function sumSquares(list) {
  return list.length === 0
    ? 0
    : (Array.isArray(list[0]) ? sumSquares(list[0]) : list[0] * list[0]) +
        sumSquares(list.slice(1));
}

function replicate(times, number) {
  return times <= 0 ? [] : [number].concat(replicate(times - 1, number));
}
