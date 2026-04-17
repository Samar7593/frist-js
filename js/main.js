function convertdata() {
var dollar = document.getElementById("dollar").value;
var result =document .getElementById("result");

 if (dollar == "") {
    result.innerHTML = "Please enter a value";
}else if (isNaN(dollar)) {
    result.innerHTML = "Please enter number not text";
}else if (dollar<0) {
    result.innerHTML = "Please enter a positive number";
}else if (dollar== 0) {
    result.innerHTML = "enter number rether than zero";
} else {
    result.innerHTML = dollar*50 + "EGP";
}
return false;
}