var loginForm=document.getElementById("loginForm");
var RegForm=document.getElementById("regForm");
var indicator=document.getElementById("Indicator");
function register(){
    regForm.style.transform="translateX(0px)";
    loginForm.style.transform="translateX(0px)";
    Indicator.style.transform="translateX(100px)";

}
function login(){
    regForm.style.transform="translateX(300px)";
    loginForm.style.transform="translateX(300px)";
    Indicator.style.transform="translateX(0px)";

}