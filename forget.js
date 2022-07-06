alert("hello");
let elem = document.getElementsByClassName("container");
elem[0].style.background = "yellow";
// let elem = document.getElementByIdClassName('container');
let elemf = document.getElementByIdClassName("fpass");
let b = document.getElementByIdClassName("rpass");
elemf[0].style.background="blue";
if (a == b) {
    alert("password is right");
}
else {
    if (a != b) {
        alert("please enetr right password");
    }
}