let arr = [5, 3, 8, 2, 6, 1];

let filtered = filterRange(arr, 1, 4);

console.log(arr); // 5,3,8,1 (not modified)
console.log(filtered); // 3,1 (matching values)

function filterRange(arr, start, end) {
    return arr.filter((n) => n >= start && n <= end);
}
