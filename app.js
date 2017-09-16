

///// VARIABLES //////

var divs = document.querySelectorAll('.container div');
var randomInterval;
var count = 0;
var yourGrade,randomNumber,rainbowInterval;
// AUDIOS
var sounds = [new Audio('sounds/1.mp3'), new Audio('sounds/2.mp3')];
// var sound = new Audio('sounds/1.mp3');
// var soundTwo = new Audio('sounds/2.mp3');

var beep = new Audio('sounds/beep.mp3');
	beep.currentTime = 0.2;
var dundundun = new Audio('sounds/dundundun.mp3');
var victory = new Audio('sounds/victory.mp3')

// randomizeGrade and return
function randomGrade() {

	reset();

	if(randomNumber != null) {
		divs[randomNumber].style.backgroundColor = "white";
	}
	 
	beep.play();

	randomInterval = setInterval(function() {
		randomNumber = Math.floor(Math.random()*divs.length);
		divs[randomNumber].style.backgroundColor = "#2980b9";
		setTimeout(function() {
			divs[randomNumber].style.backgroundColor = "white";
		},100);

	
		if(count == 44) {
			clearInterval(randomInterval);
			count = 0;
			rainbowAndSound(divs[randomNumber]);
		}

		else if(count == 25) {
			dundundun.play();
		}

		count++;

	},200);


}

// play rainbow colors on the grade and play some awesome sound :)
function rainbowAndSound(gradeDiv) {

	rainbowInterval = setInterval(function() {
		var r = Math.floor(Math.random()*255);
		var g = Math.floor(Math.random()*255);
		var b = Math.floor(Math.random()*255);
		var rgbString = "rgb("+r+","+g+","+b+")";
		gradeDiv.style.backgroundColor = rgbString;
	},100);

	if(parseFloat(gradeDiv.querySelector('h2').innerHTML) <= 1.80) {
		victory.play();
		console.log(parseFloat(gradeDiv.querySelector('h2').innerHTML));
	}

	else {
		var randomSound = Math.floor(Math.random()*2);
		sounds[randomSound].play();
	}

}

function reset() {
	console.log("CALLED");
	beep.pause();
	beep.setCurrentTime = 0;
	dundundun.pause();
	dundundun.setCurrentTime = 0;
	victory.pause();
	victory.setCurrentTime = 0;
	sounds[0].pause();
	sounds[0].setCurrentTime = 0;
	sounds[1].pause();
	sounds[1].setCurrentTime = 0;
	clearInterval(randomInterval);
	clearInterval(rainbowInterval);

}








alert("Press space to generate grade");

document.addEventListener('keydown', function(event) {

	if(event.keyCode == 32) {
		randomGrade();
	}

});


