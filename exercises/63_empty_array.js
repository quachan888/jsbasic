var courses = ["Javascript", "PHP"];

courses.length = 5;
console.log(courses.length);

console.log(courses);

// for (var i = 0; i < courses.length; i++) {
//     console.log(i, courses[i]);
// }

for (i in courses) {
    console.log(courses[i]);
}
