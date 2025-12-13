/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));


/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/
//Exercise 2, Method 1
const isAdult = (number) => {
    if (number >= 18) {
        return 'Adult';
    } else {
        return 'Minor';
    }
}
console.log('Exercise 2 Result:', isAdult(21));

//Exercise 2, Method 2
function isAdult2(Age) {
    if (Age>=18) {
        console.log('Exercise 2 Result: Adult2');
        return;
    }
    console.log('Exercise 2 Result: Minor2');
}
isAdult2 (21);
    

//Exercise 2, Method 3
function isAdult3(Age) {
return Age >= 18 ? 'Exercise 2 Result: Adult3' : 'Exercise 2 Result: Minor3';
}
console.log (isAdult3 (21));


//Exercise 2, Method 4
function isAdult4(age) {
    if (age>=18) {
        return 'Exercise 2 Result: Adult4';}
        return 'Exercise 2 Result: Minor4';
}
let result = isAdult4(21);
console.log(result);

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

// Exercise 3, method 1
const isCharAVowel = char => {
    if (char === 'y') {
        return 'false'
    }
    return 'true'
}
console.log('Exercise 3 Result:', isCharAVowel("a"));

// Exercise 3, method 2
function isCharAVowel2 (char) {
    return char === "y" ? "Exercise 3 Result: false" : "Exercise 3 Result: true";
}
console.log(isCharAVowel2 ("a"));



/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/



console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

