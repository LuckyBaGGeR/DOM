// let input = document.getElementById('#input');
// let paragraph = document.getElementById('#inp');
// input.addEventListener('blur', function() {
//   paragraph.textContent += input.value;
// });



// let input1 = document.querySelector('#input1')
// let input2 = document.querySelector('#input2')
// let input3 = document.querySelector('#input3')
// let button = document.querySelector('button')
// let p = document.querySelector('p')

// button.addEventListener('click', function() {
//   let sum = parseInt(input1.value) + parseInt(input2.value) + parseInt(input3.value);
//   p.textContent = 'Сумма: ' + sum;
// });



// let input = document.getElementById('input');
// let resultParagraph = document.getElementById('inpp');

// input.addEventListener('blur', function() {
//   let number = input.value;
//   let sum = Array.from(number.toString()).reduce((accumulator, currentValue) => {
//     return accumulator + parseInt(currentValue);
//   }, 0);
  
//   resultParagraph.textContent = 'Сумма цифр: ' + sum;
// });



// let input = document.getElementById('input');
// let resultParagraph = document.getElementById('inpp');

// input.addEventListener('blur', function() {
//   let numbers = input.value.split(',').map(Number);
//   let sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }, 0);
  
//   let average = sum / numbers.length;
//   resultParagraph.textContent = 'Среднее арифметическое: ' + average.toFixed(2);
// });




// let fullNameInput = document.getElementById('ima');
// let lastNameInput = document.getElementById('familia');
// let firstNameInput = document.getElementById('ima2');
// let middleNameInput = document.getElementById('familia2');

// fullNameInput.addEventListener('blur', function() {
//   let fullName = fullNameInput.value.split(' ');

//   lastNameInput.value = fullName[0] || '';
//   firstNameInput.value = fullName[1] || '';
//   middleNameInput.value = fullName[2] || '';
// });



// let input = document.getElementById('fio');

// input.addEventListener('blur', function() {
//   let fio = input.value.toLowerCase();
//   let array = fio.split(' ');

//   let formattedFio = '';
//   array.forEach(function(name) {
//     formattedFio += name.charAt(0).toUpperCase() + name.slice(1) + ' ';
//   });

//   input.value = formattedFio.trim();
// });



// let input = document.getElementById('textt');

// input.addEventListener('blur', function() {
//   let text = input.value;
//   let wordCount = text.split(' ').filter(Boolean).length;
  
//   console.log('Количество слов:', wordCount);
// });



// let input = document.getElementById('data');

// input.addEventListener('blur', function() {
//   let date = input.value;
//   let parts = date.split('.');
//   let formattedDate = parts[2] + '-' + parts[1] + '-' + parts[0];
  
//   input.value = formattedDate;
// });



// function checkPalindrome() {
//  let word = document.getElementById("input").value;
//   let reversedWord = word.split('').reverse().join('');
  
//   if (word === reversedWord) {
//     document.getElementById("res").textContent = "Является";
//   } else {
//     document.getElementById("res").textContent = "Не является";
//   }
// }



// let input = document.getElementById('input');
// let result = document.getElementById('res');

// input.addEventListener('blur', function() {
//   let number = input.value.toString();
  
//   if (number.includes('3')) {
//     result.textContent = 'Число содержит цифру 3';
//   } else {
//     result.textContent = 'Число не содержит цифру 3';
//   }
// });



// function addNumbers() {
//   let paragraphs = document.querySelectorAll("p");

//   paragraphs.forEach((paragraph, index) => {
//     paragraph.textContent += " " + (index + 1);
//   });
// }



// function addHref() {
//   let links = document.querySelectorAll("a");

//   links.forEach((link) => {
//     let href = link.getAttribute("href");
//     link.textContent += " (" + href + ")";
//   });
// }



// function addArrow() {
//   let links = document.querySelectorAll("a");

//   links.forEach((link) => {
//     let href = link.getAttribute("href");
//     if (href.startsWith("http://")) {
//       link.textContent += " <---";
//     }
//   });
// }



// let paragraphs = document.querySelectorAll("p");

// function squareNumber(event) {
//   let paragraph = event.target;
//   let number = parseInt(paragraph.dataset.number);
//   paragraph.textContent = number * number;
// }

// paragraphs.forEach((paragraph) => {
//   paragraph.addEventListener("click", squareNumber);
// });



// let dateInput = document.getElementById("data");
// let result = document.getElementById("res");

// dateInput.addEventListener("blur", function() {
//   let inputDate = dateInput.value;
//   let dateParts = inputDate.split(".");
//   let day = parseInt(dateParts[0]);
//   let month = parseInt(dateParts[1]) - 1;
//   let year = parseInt(dateParts[2]);

//   let weekdays = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
  
//   let date = new Date(year, month, day);
//   let weekday = weekdays[date.getDay()];

//   result.textContent = weekday;
// });



// let inputValue = document.getElementById('input');
// let increaseBtn = document.getElementById('pluse');
// let decreaseBtn = document.getElementById('minus');

// increaseBtn.addEventListener('click', function() {
//   let value = parseInt(inputValue.value) || 0; 
//   value++; 
//   inputValue.value = value >= 0 ? value : 0; 
// });

// decreaseBtn.addEventListener('click', function() {
//   let value = parseInt(inputValue.value) || 0;
//   value--; // уменьшаем значение
//   inputValue.value = value >= 0 ? value : 0;
// });



// let countInput = document.getElementById('countInput');
// let paragraphs = document.getElementsByTagName('p');
// let count = 0;

// for (let i = 0; i < paragraphs.length; i++) {
//   paragraphs[i].addEventListener('click', function() {
//     count++;
//     countInput.value = count;
//   });
// }



// let textDivs = document.querySelectorAll('.text');

// textDivs.forEach(function(div) {
//   let text = div.textContent;
//   if (text.length > 10) {
//     div.textContent = text.slice(0, 10) + '...';
//   }
// });



// let randomStringInput = document.getElementById('random');
// let generateBtn = document.getElementById('gen');

// generateBtn.addEventListener('click', function() {
//   let randomString = generateRandomString();
//   randomStringInput.value = randomString;
// });

// function generateRandomString() {
//   let characters = 'DHAHSDHDBhjv12hjvhgsabhg3v4hghb231vh';
//   let length = 8;
//   let result = '';

//   while (length--) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   }

//   return result;
// }



// let inputString = document.getElementById('input');
// let shuffleBtn = document.getElementById('werni');

// shuffleBtn.addEventListener('click', function() {
//   let string = inputString.value;
//   let shuffledString = shuffleString(string);
//   inputString.value = shuffledString;
// });

// function shuffleString(string) {
//   let array = string.split('');
//   let length = array.length;

//   while (length > 0) {
//     let randomIndex = Math.floor(Math.random() * length);
//     length--;
    
//     let temp = array[length];
//     array[length] = array[randomIndex];
//     array[randomIndex] = temp;
//   }

//   return array.join('');
// }



// document.getElementById('conv').addEventListener('click', function() {
//   let fahrenheit = document.getElementById('input').value;
//   let celsius = (fahrenheit - 32) * 5 / 9;
//   document.getElementById('res').innerText = celsius + "°C";
// });



// document.getElementById('calc').addEventListener('click', function() {
//   let number = document.getElementById('input').value;
//   let factorial = 1;

//   while (number > 0) {
//     factorial *= number;
//     number--;
//   }
  
//   document.getElementById('res').innerText = "Факториал: " + factorial;
// });



// function solveEquation() {
//   let a = parseFloat(document.getElementById("input1").value);
//   let b = parseFloat(document.getElementById("input2").value);
//   let c = parseFloat(document.getElementById("input3").value);

//   let discriminant = b*b - 4*a*c;

//   if (discriminant > 0) {
//     let x1 = (-b + Math.sqrt(discriminant)) / (2*a);
//     let x2 = (-b - Math.sqrt(discriminant)) / (2*a);
//     document.getElementById("result").innerHTML = "Корни уравнения: x1 = " + x1 + ", x2 = " + x2;
//   } else if (discriminant === 0) {
//     let x = -b / (2*a);
//     document.getElementById("result").innerHTML = "Уравнение имеет единственный корень: x = " + x;
//   } else {
//     document.getElementById("result").innerHTML = "Уравнение не имеет действительных корней.";
//   }
// }










