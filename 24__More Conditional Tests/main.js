//Define veriables
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banna", "orange"];
//test for equality and unequality with Strings
console.log("Is apple is equal to apple? ");
console.log(apple == "apple");
console.log("\nIs apple is not equal to apple? ");
console.log(apple != "apple");
//test Lowercase function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLocaleLowerCase() == "apple");
console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLocaleLowerCase() != "apple");
//Numerical test
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
//Not Equal
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
//Greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);
//Less than
console.log("\nIs twenty is less than 10?");
console.log(twenty < 10);
//Greater or Equal 
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);
//Less than or Equal
console.log("\ntwenty is less than or equal to 10?");
console.log(twenty <= 10);
//Test using "and" & "or" operators
//USing &&
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
//USing || (OR)
console.log("\n 20 is greater tha 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater tha 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 != 20);
//test whether an item is include in arrey
console.log("\nIs orange include in my Fruits arrey");
console.log(fruits.includes("orange"));
