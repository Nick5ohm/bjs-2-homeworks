function getArrayParams(...arr) {
  if (!arr.length){
    return "Nothing";
  }
  let min = arr[0];
  for (let num of arr){
    if (num < min){
      min = num;
    }
  }
  let max = arr[0];
    for (let num of arr){
    if (num > max){
      max = num;
    }
  }
  let sum = 0;
  for (let num of arr){
    sum += num;
  }
  let avg = sum/arr.length;
  return { min: min, max: max, avg: +avg.toFixed(2)};
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
