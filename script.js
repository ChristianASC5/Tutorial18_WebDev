function initialize() {
    items = document.querySelectorAll("li");
    title = document.querySelector("h1");
    input = document.getElementById("definition");
}


function record(x) {
     userText = input.value;

     input.value = ""

     display(x);
}

function display(x){
    if(x=="T"){
        title.innerHTML =  userText;
    }else{
        items[x].innerHTML = userText;
    }
}






// RETURN TO THIS LATER
// TRYING TO PASS PARAMETERS IN HTML
// function record(itmX) {
//     console.log("I ran")
//     userText = input.value;

//     input.value = ""

//     display(itmX);
// }

// function display(itmX) {
//     console.log(userText);
//     itmX.innerHTML = userText;
//     console.log(itmX);
// }