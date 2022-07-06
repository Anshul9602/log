let elem = document.getElementByIdClassName('pass');
let a = document.getElementById('newpass');
let b = document.getElementById('repass');
if(a==b){
    alert("password is right");
}
else{
    if(a!=b){
        alert("please enetr right password");
    }
}