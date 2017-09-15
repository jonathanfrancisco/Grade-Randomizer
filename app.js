

///// VARIABLES //////

var divs = document.querySelectorAll('.container div');
var start;
var count = 0;
var yourGrade,randomNumber,startRainbow;

// randomizeGrade and return
function randomGrade() {

	clearInterval(startRainbow);
	
	console.log(randomNumber);
	if(randomNumber != null) 
		divs[randomNumber].style.backgroundColor = "white";

	start = setInterval(function() {
		randomNumber = Math.floor(Math.random()*divs.length);
		divs[randomNumber].style.backgroundColor = "red";
		setTimeout(function() {
			divs[randomNumber].style.backgroundColor = "white";
		},100);

		if(count == 36) {
			clearInterval(start);
			count = 0;
			rainbowAndSound(divs[randomNumber]);
		}

		count++;

	},200);


}

// play rainbow colors on the grade and play some awesome sound :)
function rainbowAndSound(gradeDiv) {

	startRainbow = setInterval(function() {
		var r = Math.floor(Math.random()*255);
		var g = Math.floor(Math.random()*255);
		var b = Math.floor(Math.random()*255);
		var rgbString = "rgb("+r+","+g+","+b+")";
		gradeDiv.style.backgroundColor = rgbString;
	},100);


}

alert("Press space to generate grade");

document.addEventListener('keydown', function(event) {

	if(event.keyCode == 32) {
		randomGrade();
	}

});


