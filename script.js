items = document.querySelectorAll("li");
title = document.querySelector("h1");
buttons =  document.querySelectorAll("button");
input = document.getElementById("definition");

// buttons[0].addEventListener('click',record(title));

function record(itmX){
    userText = input.value;

    input.value = ""

    display(itmX);
}

function display(itmX){
    itmX.innerHTML = userText;
}

