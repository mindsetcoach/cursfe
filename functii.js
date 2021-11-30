function myFunction(clientName) {
    console.log('hello ' + clientName + ', I am a first function');
    return clientName;
}

let mySecondFunction = function (clientName) {
    console.log('hello ' + clientName + ', I am a second function');
}

let functionResult = myFunction('Tudor');
mySecondFunction('Mihai');

let threeNumbersSum = function (a, b, c) {
    let result = a + b + c;
    return result;
}

let result1 = 4 + 5 + 6;
let result2 = threeNumbersSum(4, 5, 6, 7);
let result3 = threeNumbersSum(40, 50, 60);
let result4 = threeNumbersSum(400, 500, 600);
let result5 = threeNumbersSum(443241, 5423412, 6423242);
console.log(result1);
console.log(result2);