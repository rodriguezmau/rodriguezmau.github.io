var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


// function to get random numbers for the rgb color
function getRandomRgb() {
	var num = Math.round(0xffffff * Math.random());
	var r = num >> 16;
	var g = num >> 8 & 255;
	var b = num & 255;
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
 

// function to set the randomize rgb color to the css variable
function setRandomizer() {
	body.style.background = "linear-gradient(to right, " + getRandomRgb() + ", " + getRandomRgb() + ")";

	css.textContent = body.style.background + ";";

}


window.onload = setGradient;



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomizer);

