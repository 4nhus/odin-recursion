function fibs(number) {
  if (number < 0) {
    return [];
  }

  let sequence;

  switch (number) {
    case 0:
      return [];
    case 1:
      return [0];
    case 2:
      return [0, 1];
    default:
      sequence = [0, 1];
  }

  for (let counter = 2; counter < number; counter++) {
    sequence.push(sequence[counter - 1] + sequence[counter - 2]);
  }

  return sequence;
}

console.log(fibs(8));
