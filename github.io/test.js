console.log("js is working");
var content = document.getElementById("container");
document.getElementById("about me")=function(){myFunction()};
var button2 = document.getElementById("Linkedin");
var button3 = document.getElementById("Github");

function myFunction (){
     window.location.href("google.com");  
};

button2.onclick= function (){
    document.getElementById("Linkedin").innerHTML= window.location.href=("https://www.linkedin.com/in/robert-moya/");
};
button3.onclick= function (){
    document.getElementById("Github").innerHTML = window.location.href=("https://github.com/RobertMoya");
};