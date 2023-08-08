function calculateSum() {
    const input = document.getElementById("integerInput").value;
    const numbers = input.split(',').map(Number);
    
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (!isNaN(numbers[i])) {
        sum += numbers[i];
      }
    }

    document.getElementById("result").innerHTML = "Tổng các số nguyên là: " + sum;
  }

  function countPositive() {
    const input = document.getElementById("integerInput").value;
    const numbers = input.split(",").map(Number);
    const positiveCount = numbers.filter(num => num > 0).length;
    document.getElementById("countPositiveInput").value = positiveCount;
  }

  function findMin() {
    const input = document.getElementById("integerInput").value;
    const numbers = input.split(",").map(Number);
    const min = Math.min(...numbers);
    document.getElementById("minInput").value = min;
  }
  function calculateSum() {
    const input = document.getElementById("integerInput").value;
    const numbers = input.split(",").map(Number);
    const sum = numbers.reduce((acc, num) => num > 0 ? acc + num : acc, 0);
    document.getElementById("result").innerHTML = "Tổng các số dương: " + sum;
  }

  function countPositive() {
    const input = document.getElementById("integerInput").value;
    const numbers = input.split(",").map(Number);
    const positiveCount = numbers.filter(num => num > 0).length;
    document.getElementById("countPositiveInput").value = positiveCount;
  }

  function findMin() {
    const input = document.getElementById("integerInput").value;
    const numbers = input.split(",").map(Number);
    const min = Math.min(...numbers);
    document.getElementById("minInput").value = min;
  }

  function findMinPositive() {
    const input = document.getElementById("integerInput").value;
    const numbers = input.split(",").map(Number);
    const positiveNumbers = numbers.filter(num => num > 0);
    const minPositive = Math.min(...positiveNumbers);
    document.getElementById("minPositiveInput").value = minPositive;
  }

  function findLastEven() {
    const input = document.getElementById("integerInput").value;
    const numbers = input.split(",").map(Number);
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    const lastEven = evenNumbers.length > 0 ? evenNumbers[evenNumbers.length - 1] : -1;
    document.getElementById("lastEvenInput").value = lastEven;
  }

  function swapValues() {
    const input = document.getElementById("integerInput").value;
    const numbers = input.split(",").map(Number);
    const pos1 = Number(document.getElementById("swapInput1").value);
    const pos2 = Number(document.getElementById("swapInput2").value);

    if (pos1 >= 0 && pos1 < numbers.length && pos2 >= 0 && pos2 < numbers.length) {
      [numbers[pos1], numbers[pos2]] = [numbers[pos2], numbers[pos1]];
      document.getElementById("result").innerHTML = "Đã đổi chỗ giá trị.";
    } else {
      document.getElementById("result").innerHTML = "Vị trí không hợp lệ.";
    }
  }

  function sortArray() {
    const input = document.getElementById("integerInput").value;
    const numbers = input.split(",").map(Number);
    numbers.sort((a, b) => a - b);
    document.getElementById("sortInput").value = numbers.join(",");
  }
  