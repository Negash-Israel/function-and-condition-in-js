//1. Define a simple function named myFirst that prints the word "Hello" on the console.
//define the  function
const myFirst = () => {
  console.log("Hello World");
};
//call the function
myFirst();

// 2.Define a function called mySecond that takes a parameter and prints the parameter on console.
// define the function with parameter
const mySecond = (num) => {
  console.log("The  number is " + num);
};
// call the function with an argument
mySecond(9);

// option 2
// const mySecond = (num) => {
//   return num;
// };
// let second = mySecond(5);
// console.log(second);

// 3.Define a function called myThird that takes a parameter and prints the parameter on theconsole. But, it uses mySecond function to print the parameter on the console
//define the function
const myThird = (num3) => {
  mySecond(num3);
};
//call the third function
myThird(7);
// 4.Write a function named myFourth that takes an array as a parameter and prints only the firstvalue of the array on the console.
//define  a function called myfourth
const myFourth = (fourth) => {
  console.log("The number at index  zero is: ", fourth[0]);
};
var arr = [4, 6, 8];
//calling the function
myFourth(arr);

//5 Write a function named myFifth that takes an array with two numbers in it as a parameter and prints the sum of the two numbers on console
// define the function called myfifth
const myFifth = (numbers) => {
  var sum = numbers[0] + numbers[1];
  return sum;
};
var arr = [9, 10];
//calling the function
let result = myFifth(arr);
console.log("The sum of  two numbers is " + result);
// Question 6
//● Write a function that takes an integer minutes and converts it to seconds.
//// define the function
const convertToSecond = (minutes) => {
  minute = minutes * 60;
  return minute;
};
let minutes = 3;
//calling function
let conveted = convertToSecond(minutes);
console.log(minutes + " minute is " + conveted + " Seconds");

//Question 7
//Create a function that takes a number as a parameter, increments the number by +1 and returns the result.
// define the function
const incrementByOne = (number) => {
  return ++number;
};
//calling function
let increment = incrementByOne(9);
console.log("The number after increment is " + increment);
// Question 8
// ● Write a function that takes the base and height of a triangle and returns its area.
//// define the function

const calculateAreaOfTriangle = (base, height) => {
  if (
    typeof base !== "number" ||
    typeof height !== "number" ||
    base < 0 ||
    height < 0
  ) {
    return "should provide a number or  positive value for both parameters";
  }
  return (base * height) / 2;
};
//call the function
let trianglAera = calculateAreaOfTriangle("5", 6);
console.log("The Area of Triangle is " + trianglAera);

// Question 9
// ● Create a function that returns the total number of legs of all the animals. In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species (chickens = 2 legs, cows =, 4 legs, pigs = 4 legs). Remember: the farmer wants to know the total number of legs and not the total number of animals.
// define the function
const countleg = (chickens, cows, pigs) => {
  let total = chickens * 2 + cows * 4 + pigs * 4;
  return total;
};
//call the function
let legs = countleg(2, 3, 1);
console.log("Total Numbers of Legs of farmer's animal is" + legs);
// Question 10 (not from edabit.com) Create a function that takes an array containing only TWO numbers as a parameter and returns a value that is 3 times the first element of the array.
// define the function
const arrayincrement = (arr) => {
  arr[0] *= 3;
  return arr;
};
var arr = [5, 2];
//call the function
let incArr = arrayincrement(arr);
console.log(" After Increment the first by 3 is: " + incArr);
// Question 11
// Create a function that returns true when num1 is equal to num2; otherwise return false
// define the function
const checkEqualNumbers = (num1, num2) => {
  if (num1 == num2) {
    return true;
  } else {
    return false;
  }
};
//calling function
console.log(checkEqualNumbers(5, 6));
// Question 12
// ● Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.
// define the function
const divisibleBy = (num) => {
  if (num % 100 == 0) {
    return true;
  } else {
    return false;
  }
};
// calling the function
console.log(divisibleBy(3000));
//Question 13
//Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.
// define the function
const checkeven = (x) => {
  if (x % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
};
// call function
console.log(checkeven(6));

// Question 14
// Create a function that returns ○ “Invalid score” if score is above 100 or score is a negative number ○ “Grade A” when score is between 90 and 100 (both 90 and 100 included) ○ “Grade B” when score is between 80 and 89 (both 80 and 89 included) ○ “Grade C” for any score below 79.

function studentGrade(score) {
  if (score > 100 || score < 0) {
    return "Invalid score";
  } else if (score >= 90 && score <= 100) {
    return "Grade A";
  } else if (score >= 80 && score <= 89) {
    return "Grade B";
  } else {
    return "Grade C";
  }
}

console.log(studentGrade(90));
console.log(studentGrade(85));
console.log(studentGrade(75));
console.log(studentGrade(105));
console.log(studentGrade(-5));
var x = 5;
y = x;
console.log(x);
console.log(y);
x = 8;
console.log(x);
console.log(y);
