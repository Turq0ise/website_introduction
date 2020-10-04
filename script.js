new fullpage('#fullPage', {
    autoScrolling: true,
    navigation: true,
}); 

/*var dotOne = document.querySelector("#fp-nav ul li a span:nth-child(2), .fp-right ul li a span:nth-child(2)").style.cssText = "background: cyan;";

var dotTwo = document.querySelector("#fp-nav ul li:nth-child(2) a span:nth-child(2), .fp-right ul li:nth-child(2) a span:nth-child(2)").style.cssText = "background: cyan;";

if (dotOne == "background: cyan;"){
    var dotTwo = document.querySelector("#fp-nav ul li:nth-child(2) a span:nth-child(2), .fp-right ul li:nth-child(2) a span:nth-child(2)").style.cssText = "background: red;";
};

var dotTwoBorderRadius = document.querySelector("#fp-nav ul li:nth-child(2) a.active span")

var aOne = document.querySelector("#fp-nav ul li a span:nth-child(2), .fp-right ul li a");
var dotOne = document.querySelector("#fp-nav ul li a span:nth-child(2), .fp-right ul li a span:nth-child(2)");
var aTwo = document.querySelector("#fp-nav ul li:nth-child(2) a span:nth-child(2), .fp-right ul li:nth-child(2) a");
var dotTwo = document.querySelector("#fp-nav ul li:nth-child(2) a span:nth-child(2), .fp-right ul li:nth-child(2) a span:nth-child(2)")

function oneWhileLoop() {
    while (aTwo.classList.contains("active") == false) {
        if (aOne.classList.contains("active")){
            dotOne.style.cssText = "background: black;";
            dotTwo.style.cssText = "background: black;";
            setTimeout(oneWhileLoop, 150)
        }
        else if (aTwo.classList.contains("active")){
            dotOne.style.cssText = "background: white;";
            dotTwo.style.cssText = "background: white;";
            twoWhileLoop()
        }
        else {
            onALoop()
        }
    }
}

function twoWhileLoop() {
    while (aOne.classList.contains("active") == false) {
        if (aOne.classList.contains("active")){
            console.log("yes");
            dotOne.style.cssText = "background: red;";
            dotTwo.style.cssText = "background: red;";
        }
        else if (aTwo.classList.contains("active")){
            console.log("also yes");
            dotOne.style.cssText = "background: white;";
            dotTwo.style.cssText = "background: white;";
            twoWhileLoop()
        }
        else {
            onALoop()
        }
    }
}

document.getElementById("fullPage").onscroll = function() {changeColor()}

function changeColor() {
    if (aTwo.classList.contains("active")){
        console.log("also yes");
        dotOne.style.cssText = "background: white;";
        dotTwo.style.cssText = "background: white;";
    }
    else if (aOne.classList.contains("active")){
        console.log("yes");
    }
    dotOne.style.cssText = "background: white;";
    dotTwo.style.cssText = "background: white;";
}*/
