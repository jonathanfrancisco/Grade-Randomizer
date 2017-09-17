

///// VARIABLES //////


const sounds = [new Audio('sounds/1.mp3'), new Audio('sounds/2.mp3')];
const beep = new Audio('sounds/beep.mp3');
	beep.currentTime = 0.2;
const dundundun = new Audio('sounds/dundundun.mp3');
const victory = new Audio('sounds/victory.mp3')
let divs = document.querySelectorAll('.container div');
let randomInterval,
    rainbowInterval,
    randomNumber,
    yourGrade,
    count = 0;


// randomizeGrade and return
function randomGrade() {

	reset();

	beep.play();

	randomInterval = setInterval( ()=> {
		randomNumber = Math.floor(Math.random()*divs.length);
		divs[randomNumber].style.backgroundColor = "#2980b9";

		// wait 0.1 seconds before changing the color to white
		setTimeout( ()=> {
			divs[randomNumber].style.backgroundColor = "white";
		},100);

		// after reaching the count
		// clear the interval and re-assign count to 0
		// and play rainbow colors on the randomed grade and sound
		if(count == 44) {
			clearInterval(randomInterval);
			count = 0;
			rainbowAndSound(divs[randomNumber]);
		}
		// just before the randomedGrade is selected
		// play some suspense sound
		else if(count == 25) {
			dundundun.play();
		}

		count++;

	},200);


}

// play rainbow colors on the grade and play some awesome sound :)
function rainbowAndSound(gradeDiv) {

	rainbowInterval = setInterval( () => {
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

	if(randomNumber != null)
		divs[randomNumber].style.backgroundColor = "white";

	beep.pause();
	dundundun.pause();
	victory.pause();
	sounds[0].pause();
	sounds[1].pause();

	beep.currentTime = 0;
	dundundun.currentTime = 0;
	victory.currentTime = 0;
	sounds[0].currentTime = 0;
	sounds[1].currentTime = 0;

	clearInterval(randomInterval);
	clearInterval(rainbowInterval);

}



document.addEventListener('keydown',(event) => {
	if(event.keyCode == 32) {
		randomGrade();
	}
});


