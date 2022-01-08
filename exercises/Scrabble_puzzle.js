/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

// https://www.codingame.com/ide/puzzle/scrabble

const N = parseInt(readline());
let dic = [];

for (let i = 0; i < N; i++) {
    const W = readline();
    // count  point of list words in dictionary
    dic.push({ index: i, score: countPoint(W), word: W });
}

// console.error(dic);

// Sort array by point
dic.sort(function (a, b) {
    return b.score - a.score;
});

// console.error(dic);

function countPoint(input) {
    let result = 0;
    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case "e":
            case "a":
            case "i":
            case "o":
            case "n":
            case "r":
            case "t":
            case "l":
            case "s":
            case "u":
                result += 1;
                break;
            case "d":
            case "g":
                result += 2;
                break;
            case "b":
            case "c":
            case "m":
            case "p":
                result += 3;
                break;
            case "f":
            case "h":
            case "v":
            case "w":
            case "y":
                result += 4;
                break;
            case "k":
                result += 5;
                break;
            case "j":
            case "x":
                result += 8;
                break;
            case "q":
            case "z":
                result += 8;
                break;
        }
        // console.error(`Checking ${input[i]}. Current point: ${result}`)
    }
    return result;
}

const LETTERS = readline();

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
// console.error(N, typeof N);
// console.error(W);

console.error("INPUT LETTER: ", LETTERS, typeof LETTERS);

// console.log('invalid word');

// Check from top to bottom, if word is in dictionary?

for (let i = 0; i < dic.length; i++) {
    // Check if LETTERS is match word in dic
    var curDic = dic[i].word;
    var match = true;

    console.error(`Checking ${curDic}`);
    for (let j = 0; j < curDic.length; j++) {
        console.error(curDic, curDic[j], LETTERS.includes(curDic[j]));

        if (!LETTERS.includes(curDic[j])) {
            match = false;
        }
        if (curDic.length > LETTERS.length) {
            match = false;
        }
    }

    if (match) {
        // Check double use letter
        // var dup = false;
        // for (let a = 0; a < curDic.length; a++) {
        //     for (let b = a+1; b < curDic.length-1; b++) {
        //         // console.error(`Check Word: ${curDic}. Check letter ${curDic[a]} with ${curDic[b]}`);
        //         if (curDic[a] == curDic[b]) {
        //             dup = true;
        //             match = false;
        //         }
        //     }
        // }

        //check over use letter
        console.error("CHECKING LETTER ", curDic);
        for (let a = 0; a <= curDic.length; a++) {
            var numDic = curDic.split(LETTERS[a]).length - 1;
            var numLet = LETTERS.split(LETTERS[a]).length - 1;
            console.error(`Check Word: ${LETTERS} vs ${curDic}. Check letter ${a}:${LETTERS[a]} and DIC has: ${numDic} and LETTERS has ${numLet}`);
            if (numDic > numLet) {
                console.error("OVER USE============");
                match = false;
            }
        }
    }

    console.error(`Check ${LETTERS} with ${curDic} => ${match}`);

    if (match) {
        console.error(dic);
        console.log(curDic);
        break;
    }
}
