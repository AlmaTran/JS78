var integerArray = [];

function addToIntegerArray() {
    var inputElement = document.getElementById("integerInput");
    var inputValue = inputElement.value;
    var integerValue = parseInt(inputValue);

    if (!isNaN(integerValue)) {
        integerArray.push(integerValue);
        inputElement.value = ""; // Clear the input field
        updateArrayDisplay();
    }
}

function updateArrayDisplay() {
    var arrayDisplayElement = document.getElementById("arrayDisplay");
    arrayDisplayElement.innerHTML = "Mảng số nguyên: " + integerArray.join(", ");
}
//tính tổng các số dương


function updateArrayDisplay() {
    var arrayDisplayElement = document.getElementById("arrayDisplay");
    arrayDisplayElement.innerHTML = "Mảng số nguyên: " + integerArray.join(", ");
}

function calculateSumOfPositiveNumbers() {
    var sum = 0;
    for (var i = 0; i < integerArray.length; i++) {
        if (integerArray[i] > 0) {
            sum += integerArray[i];
        }
    }
    var sumDisplayElement = document.getElementById("sumDisplay");
    sumDisplayElement.innerHTML = "Tổng số dương: " + sum;
}

//đếm số lượng số dương


function updateArrayDisplay() {
    var arrayDisplayElement = document.getElementById("arrayDisplay");
    arrayDisplayElement.innerHTML = "Mảng số nguyên: " + integerArray.join(", ");
}

function countPositive() {
    var positiveCount = 0;
    for (var i = 0; i < integerArray.length; i++) {
        if (integerArray[i] > 0) {
            positiveCount++;
        }
    }
    var countPositiveInput = document.getElementById("countPositiveInput");
    countPositiveInput.value = positiveCount;

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Số lượng số dương: " + positiveCount;
}
//tìm số nhỏ nhất trong mảng
function updateArrayDisplay() {
    var arrayDisplayElement = document.getElementById("arrayDisplay");
    arrayDisplayElement.innerHTML = "Mảng số nguyên: " + integerArray.join(", ");
}

function findMin() {
    if (integerArray.length === 0) {
        return;
    }

    var min = integerArray[0];
    for (var i = 1; i < integerArray.length; i++) {
        if (integerArray[i] < min) {
            min = integerArray[i];
        }
    }
    var minInput = document.getElementById("minInput");
    minInput.value = min;
}
//tìm số dương nhỏ nhất trong mảng
function updateArrayDisplay() {
    var arrayDisplayElement = document.getElementById("arrayDisplay");
    arrayDisplayElement.innerHTML = "Mảng số nguyên: " + integerArray.join(", ");
}

function findMinPositive() {
    var minPositive = -1;
    for (var i = 0; i < integerArray.length; i++) {
        if (integerArray[i] > 0 && (minPositive === -1 || integerArray[i] < minPositive)) {
            minPositive = integerArray[i];
        }
    }
    var minPositiveInput = document.getElementById("minPositiveInput");
    minPositiveInput.value = minPositive;
}
// tìm sô chẵn cuối cùng
function updateArrayDisplay() {
    var arrayDisplayElement = document.getElementById("arrayDisplay");
    arrayDisplayElement.innerHTML = "Mảng số nguyên: " + integerArray.join(", ");
}

function findLastEven() {
    var lastEven = -1;
    for (var i = integerArray.length - 1; i >= 0; i--) {
        if (integerArray[i] % 2 === 0) {
            lastEven = integerArray[i];
            break;
        }
    }
    var lastEvenInput = document.getElementById("lastEvenInput");
    lastEvenInput.value = lastEven;
}
// sắp xếp mảng tăng dần
function updateArrayDisplay() {
    var arrayDisplayElement = document.getElementById("arrayDisplay");
    arrayDisplayElement.innerHTML = "Mảng số nguyên: " + integerArray.join(", ");
}

function sortArray() {
    integerArray.sort(function(a, b) {
        return a - b;
    });
    var sortInput = document.getElementById("sortInput");
    sortInput.value = integerArray.join(", ");
}
// dổi chỗ
function swapValues() {
    var swapInput1 = document.getElementById("swapInput1");
    var swapInput2 = document.getElementById("swapInput2");
    var position1 = parseInt(swapInput1.value);
    var position2 = parseInt(swapInput2.value);

    if (!isNaN(position1) && !isNaN(position2) && position1 >= 0 && position2 >= 0 && position1 < integerArray.length && position2 < integerArray.length) {
        var temp = integerArray[position1];
        integerArray[position1] = integerArray[position2];
        integerArray[position2] = temp;
        updateArrayDisplay();
    }
}
// tìm số nguyên tố
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function findFirstPrime() {
    var firstPrime = null;
    for (var i = 0; i < integerArray.length; i++) {
        if (isPrime(integerArray[i])) {
            firstPrime = integerArray[i];
            break;
        }
    }
    var primeInput = document.getElementById("primeInput");
    primeInput.value = firstPrime !== null ? firstPrime : "Không có số nguyên tố";
}

function processFloatArray() {
    var floatInput = document.getElementById("floatInput").value;
    var floatArray = floatInput.split(",").map(Number);

    var integerCount = 0;
    var positiveCount = 0;
    var negativeCount = 0;

    for (var i = 0; i < floatArray.length; i++) {
        if (Number.isInteger(floatArray[i])) {
            integerCount++;
        }
        if (floatArray[i] > 0) {
            positiveCount++;
        } else if (floatArray[i] < 0) {
            negativeCount++;
        }
    }

    var resultCountIntegers = document.getElementById("resultCountIntegers");
    resultCountIntegers.textContent = "Số lượng số nguyên trong mảng: " + integerCount;

    var resultPositive = document.getElementById("resultPositive");
    resultPositive.textContent = "Số lượng số dương: " + positiveCount;

    var resultNegative = document.getElementById("resultNegative");
    resultNegative.textContent = "Số lượng số âm: " + negativeCount;
}