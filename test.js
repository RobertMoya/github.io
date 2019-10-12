var content = document.getElementById("container");
var button = document.getElementById("about me");
var button1 = document.getElementById("Linkedin");
var button2 = document.getElementById("Github");

button.onclick= function (){
    document.getElementById("about me").innerHTML = location.replace("google.com");  
};

button1.onclick= function (){
    document.getElementById("Linkedin").innerHTML=
    window.location.href=("https://www.linkedin.com/in/robert-moya/");
};
button2.onclick= function (){
    document.getElementById("Github").innerHTML=
    window.location.href=("https://github.com/RobertMoya");
};