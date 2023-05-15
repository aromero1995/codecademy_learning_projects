const myAge = 27;
//This variable represents your age
let earlyYears = 2;
//This variable will change;
earlyYears = earlyYears * 10.5;
//using the multiplication assignment operator we multiply 10.5 to the value of earlyYears to reassign the new value. Can also be written *=10.5
let laterYears = myAge - 2;
//taking the variable laterYears and subtracting 2 from it.
laterYears *= 4;
//multiplying laterYears by 4 to account for the later years
console.log(earlyYears);
//Printing earlyYears value to the console
console.log(laterYears);
//Printing laterYears value to the console

let myAgeInDogYears = earlyYears + laterYears
//Your age in dog years will be represented by adding the earlyYears variable to the laterYears variable
console.log(myAgeInDogYears);
//Printing myAgeInDogYears value to the console

let myName = 'Alexis'.toLowerCase()
//Using the string method we are writing the your name as a string and printing it lowercase using the built-in method
console.log(myName);

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);
//Writing a console.log statement that displays your name and age in dog years to the console using string interpolation

//You can now convert any human age to dog years 
