const isContinuousSequence = (arr) => {
  let isTrue = 0;
  let isFalse = 0;

  for(let i = 0, j = 1; i < arr.length && j < arr.length; i++, j++) {

    if((Math.abs(arr[j]) - Math.abs(arr[i])) === 1 || (Math.abs(arr[j]) - Math.abs(arr[i])) === -1) {
      isTrue += 1;
    } else {
      return false;
    }
  }

  if(isTrue > isFalse) {
    return true;
  }
}

console.log(isContinuousSequence([10, 11, 12]));