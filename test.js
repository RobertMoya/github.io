var content = document.getElementById("container");
var button = document.getElementById("about me");
var button1 = document.getElementById("Linkedin");
var button2 = document.getElementById("Github");

button.onclick= function (){
    location.replace("google.com");  
};

button1.onclick= function (){
    location.replace("https://www.linkedin.com/in/robert-moya/");
};
button2.onclick= function (){
    location.replace("https://github.com/RobertMoya");
};