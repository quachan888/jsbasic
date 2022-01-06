var courses = [
    { id: 1, name: "Javascript", coin: 100 },
    { id: 2, name: "PHP", coin: 200 },
    { id: 3, name: "React", coin: 500 },
    { id: 4, name: "Angular", coin: 500 },
];
// var i = 0;
var totalCoin = courses.reduce(function (total, course) {
    // i++;
    // console.log(i, total, course);
    return total + course.coin;
}, 0);

// console.log(totalCoin);

//Nếu dữ liệu trả về cùng kiểu với initial value thì ko cần initial value.
var numbers = [10, 200, 400, 500, 300];

var totalNum = numbers.reduce(function (total, number) {
    return (total = total + number);
});
// console.log(totalNum);

// Flat array
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = [];
for (each of depthArray) {
    if (Array.isArray(each)) {
        for (i of each) {
            // console.log("AAAAA", i);
            // console.log(i);
            flatArray.push(i);
        }
    } else {
        // console.log("BBBBB", each);
        flatArray.push(each);
    }
}

// console.log("Using 2 for loop: ", flatArray);

var flatArrayreduce = depthArray.reduce(function (flatOutput, depthItem) {
    return flatOutput.concat(depthItem);
}, []);

// console.log("Using reduce with concat: ", flatArrayreduce);

// Lay ra cac khoa hoc va dua vao 1 mang moi
var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS",
            },
            {
                id: 2,
                title: "Javascript",
            },
        ],
    },
    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "PHP",
            },
            {
                id: 2,
                title: "NodeJS",
            },
        ],
    },
];

// console.log(topics);
// for (each of topics) {
//     console.log("Nhanh: ", each.topic);
//     if (Array.isArray(each.courses)) {
//         for (i of each.courses) {
//             console.log("-- Khoa hoc: ", i.title);
//         }
//     }
// }

console.log("=====================");

// var newCourses = topics.reduce(fucntion (a, topic) {
//     return a.concat(topic.courses);
// }, []);

var newCourses = topics.reduce(function (courses, topic) {
    return courses.concat(topic.courses);
}, []);

// console.log(newCourses);

var htmls = newCourses.map(function (course) {
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `;
});

console.log(htmls.join(""));

document.getElementById("result").innerHTML = htmls.join("");
