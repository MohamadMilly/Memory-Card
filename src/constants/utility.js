function randomiseArray(arr) {
  const randomisedArray = new Array(arr.length - 1);
  let i = 0;
  while (i < arr.length) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    if (!randomisedArray[randomIndex]) {
      randomisedArray[randomIndex] = arr[i];
      i++;
    } else continue;
  }
  return randomisedArray;
}

export { randomiseArray };
