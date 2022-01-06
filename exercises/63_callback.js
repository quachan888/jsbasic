// callback???
// Là hàm
// Được truyền qua đối số

function myfunction(param) {
    if (typeof param === "function") param("Hello");
}
// myfunction("Hoc lap trinh");
// myfunction(123);

function myCallback(value) {
    console.log("Value: ", value);
}

myfunction(myCallback);
