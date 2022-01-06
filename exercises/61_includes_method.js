var title = "Responsive web design web";

// console.log(title.includes("web"));
// console.log(title.indexOf("web"));

var courses = ["JS", "PHP", "Ruby"];

// console.log(courses.includes("PHP"));

function run(input) {
    if (typeof input == "string" || Array.isArray(input)) {
        return input.includes("F8");
    }
}

console.log(run("Học lập trình tại F8"));
console.log(run(["F8", "Học lập trình"]));
console.log(run(["F8 website", "Học lập trình"]));
console.log(run("Học lập trình tại f8"));
