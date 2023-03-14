var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random");

//creates function to change background color value
function setGradient() {
    body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

//when page is loaded, gives gradient values
window.onload = setGradient();

//random value function
function getRandomGradient(){
    var randomColor1= "#" + Math.floor((Math.random()*)(1<<24|0)).toString(16);
    var randomColor2= "#" + Math.floor((Math.random()*)(1<<24|0)).toString(16);

    color1.value = randomColor1;
    color2.value = randomColor2;

    setGradient();
	css.textContent = `linear-gradient(to right, 
        ${color1.value}, ${color2.value});`.toUpperCase();
}

//copy button function
function copyText(){
    var copyText = css;
    copyText.select();
    document.execCommand("copy");
}
document.querySelector("#copyBtn").addEventListener("click", copyText);

//adds any changes to color selectors and runs function through them
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", getRandomGradient);
