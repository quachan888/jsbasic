// function reverseString(str) {
//     var input = str.split("");
//     console.log(input);
//     var l = input.length;
//     var a = "";
//     for (var i = l - 1; i >= 0; i--) {
//         a += input[i];
//     }
//     return a;
// }

// console.log(reverseString("hello"));

// Factorialize a Number
function factorialize(num) {
    var r = 1;
    for (var i = 2; i <= num; i++) {
        r *= i;
    }
    return r;
}

// console.log(factorialize(5));

// Longest word in string
function findLongestWordLength(str) {
    var r = "";
    var input = str.split(" ");
    var maxLen = 0;

    for (each of input) {
        var currLen = each.length;

        if (maxLen < currLen) {
            r = each;
            maxLen = currLen;
        }
        // console.log(`Checking [${each}]. CurrLen ${currLen}. Maxlen: ${maxLen}`);
    }
    // console.log(`Longest Word: ${r}. Current Len ${currLen}`);
    return maxLen;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Return Largest Numbers in Arrays

function largestOfFour(arr) {
    var r = [];
    for (var i of arr) {
        var max = i[0];
        // console.log(i);
        for (var j of i) {
            // console.log(j);
            if (max < j) max = j;
        }
        // console.log("max : ", max);
        r.push(max);
    }
    // console.log(r);
    return r;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
]);

largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
]);

// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
    var r = false;
    var targetLen = target.length;
    var strLen = str.length;
    // console.log(strLen, targetLen);
    var a = str.substring(strLen - targetLen);
    if (a === target) {
        r = true;
    }
    // console.log(a);
    // console.log(r);
    return r;
}

confirmEnding("Bastian", "an");
confirmEnding("Congratulation", "on");
confirmEnding("He has to give me a new name", "name");
confirmEnding("Connor", "n");

// Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
    var r = "";
    for (var i = 1; i <= num; i++) {
        r += str;
    }
    return r;
}

repeatStringNumTimes("abc", 3);

// Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
function truncateString(str, num) {
    var r = "";
    if (num < str.length) {
        r = str.substring(0, num) + "...";
    } else {
        r = str;
    }

    console.log(r);
    return r;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("Peter Piper picked a peck of pickled peppers", 11);
truncateString("A-", 1);
truncateString("Absolutely Longer", 2);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
