//Please create a function that takes in an array. The function should console.log() the sum of the first value in the array and the last value in the array

let numbers = [1, 2, 3, 4];

function run(numbers) {
    let firstNum = numbers[0];
    let lastNum = numbers[numbers.length - 1];
    let result = (firstNum + lastNum);
    console.log(result);
}
run(numbers)
