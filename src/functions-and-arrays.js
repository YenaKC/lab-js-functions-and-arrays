// Iteration 1 | Find the Maximum
// Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns the bigger number.


function maxOfTwoNumbers(num01, num02) {
   if (num01 > num02) {
    return num01;
   } else if (num01 < num02) {
    return num02;
   } else {
    return num01 = num02;
   }
}

// Iteration 2 | Find the Longest Word
/* Implement the function findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.

The function should return null if an empty array is passed as an argument.

You can use the following array to test your solution */


const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
        return null;
    }
    let wordCount = "";
    for (let i = 0; i < words.length; i++) {
        if (wordCount.length < words[i].length) {
            wordCount = words[i];
        }
    }
    return wordCount;
}




// Iteration 3 | Sum Numbers
/*
Calculating a sum can be as simple as iterating over an array and adding each of the elements together.

Implement the function named sumNumbers that takes an array of numbers as an argument and returns the sum of all the numbers in the array. Later in the course, we will learn how to do this using the reduce array method, making your work significantly easier. For now, let's practice the "declarative" way of adding values using loops.

You can use the following array to test your solution:
*/
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(someN) {
    let sumNum = 0;
    for (let i = 0; i < someN.length; i++) {
        sumNum += someN[i];
    }
    return sumNum;
}




// Iteration 4 | Numbers Average
/*Calculating a sum can be as simple as iterating over an array and adding each of the elements together.

Implement the function named sumNumbers that takes an array of numbers as an argument and returns the sum of all the numbers in the array. Later in the course, we will learn how to do this using the reduce array method, making your work significantly easier. For now, let's practice the "declarative" way of adding values using loops.

You can use the following array to test your solution: */
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(someNs) {
    let result = 0;
    for (let i = 0; i < someNs.length; i++) {
        if (someNs.length === 0) {
            return null;
        } else {
            result += someNs[i];
        }
    }
    return result / someNs.length;
}

// console.log(averageNumbers(numbers2));


// Iteration 5 | Find Elements
/*
Let's create a simple array search.

Declare a function named doesWordExist that will take in an array of words as one argument and a word to search for as the other. Return true if the word exists in the array; otherwise, return false.

The function should return null if an empty array is passed as an argument.

You can use the following array to test your solution:
*/
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, wordToSearch) {
    if (words.length === 0) {
        return null;
    }
    return words.includes(wordToSearch);
}
