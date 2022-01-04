// function convertToString(numbers) {
//     return numbers.map(function toString(each) {
//         return String(each);
//     });
// }

// console.log(convertToString([1, 2, 3]));

function getHTMLfromArray(input) {
    return input.map(function convertHTML(each) {
        return `<li>${each}</li>`;
    });
}

console.log(getHTMLfromArray(["BMW", "Mercedes", "Vinfast"]));
