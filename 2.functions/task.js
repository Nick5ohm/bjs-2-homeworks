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

function getArrayParams(...arr) {
  if (!arr.length){
    return "Nothing";
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;
  let avg = arr.reduce((sum, num) => sum + num)/ arr.length;
  return {min: min, max: max, avg: +avg.toFixed(2)};
}

function summElementsWorker(...arr) {
let sum = 0;
const aver = arr.reduce((sum, current) => sum + current);
return aver;
}

function differenceMaxMinWorker(...arr) {
let min = Math.min(...arr);
let max = Math.max(...arr);
const minMax = max - min;
return minMax;
}

function differenceEvenOddWorker(...arr) {
  sumEven = 0;
  sumOdd = 0;
  for (let num of arr){
    if (num % 2 === 0){
      sumEven += num;
    }
    else if(num % 2 !== 0){
      sumOdd += num;
    }
    const difference = sumOdd - sumEven;
    return difference;
  }
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for(num in arr){
    if (num % 2 == 0){
      sumEvenElement += num;
      countEvenElement += num;
    }
    let averageEven = sumEvenElement/countEvenElement;
    return averageEven;
  }
}

function makeWork (arrOfArr, func) {
let maxWorkerResult = arrOfArr;

}
