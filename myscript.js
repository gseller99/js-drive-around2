
alert("Welcome to Gary's Animated Racetrack. You are able pick the road speed of a car, how long it waits at intersections, and its speed through intersections. Click ok to continue."); 

let car1 = document.querySelector('.carImage1');

// let car2 = document.querySelector('.carImage2');
   	
// let car3 = document.querySelector('.carImage3');

// let roadSpeed = 10;   	
let roadSpeed = prompt("Pick road speed; note: 1 is fastest and 100 medium. Must be a number with no commas.");
// let intersectionWait = 1000;
let intersectionWait = prompt("Pick intersection wait time; note: 1000 is equal to 1 second. Must be a number with no commas.");
//let intersectionSpeed = 200;
let intersectionSpeed = prompt("Pick intersection speed; note 50 is fast and 200 medium. Must be a number with no commas.");

var IntervalId;

function carSkid(e) {
        var audio = document.querySelector('audio[data-key="carSkid"]');
        audio.currentTime = 0;
        audio.play();
    }

function resetCars() {
	car1.style.top = "80px";
	car1.style.left = "60px";
	car2.style.top = "120px";
	car2.style.left = "100px";
	car3.style.top = "160px";
	car3.style.left = "140px";
	
}

//pivot car

var totalDegreesRotated = 0;
	var rotateCar = function(direction) {
		var degreesToIncrement;
		if (direction == 0) {
			degreesToIncrement = 90;
		} else {
			degreesToIncrement = -90;
		}
		totalDegreesRotated = totalDegreesRotated + degreesToIncrement;
		document.querySelector(".carImage1").style.transform = `rotate(${totalDegreesRotated}deg)`;
	}

resetCars();

//EAST

//Move car East

function moveCar1East() {
	let car1Left = getComputedStyle(car1).left.replace('px', '');
	let car1Top = getComputedStyle(car1).top.replace('px', '');

	if(car1Left >= 640) {
		carSkid();
		stopCars();
	setTimeout(startCar1IntersectionEast, intersectionWait);
	}
	

	console.log(car1.style.left + ' = left');
	console.log(car1Left + ' = left');
	console.log(car1Top + ' = top');

	car1.style.left = `${parseInt(car1.style.left.replace("px", "")) + 10}px`;
	
}

//Move car East through intersection

function car1MoveIntersectionEast() {
	let car1Left = getComputedStyle(car1).left.replace('px', '');
	let car1Top = getComputedStyle(car1).top.replace('px', '');
	car1.style.left = `${parseInt(car1.style.left.replace("px", "")) + 10}px`;

	if(car1Left >= 780) {
		stopCars();
		rotateCar(0)
		setTimeout(startCar1South, 1000);
	}
}


function startCar1South () {
	stopCars();
	intervalId = setInterval(moveCar1South, roadSpeed);
}



//SOUTH

//Move car South

function moveCar1South () {
	let car1Left = getComputedStyle(car1).left.replace('px', '');
	let car1Top = getComputedStyle(car1).top.replace('px', '');

	if(car1Top >= 670) {
		carSkid();
		stopCars();
	setTimeout(startCar1IntersectionSouth, intersectionWait);
	}
	

	console.log(car1.style.left + ' = left');
	console.log(car1Left + ' = left');
	console.log(car1Top + ' = top');

	car1.style.top = `${parseInt(car1.style.top.replace("px", "")) + 10}px`;
}


//Move car south through intersection

function car1MoveIntersectionSouth() {
	let car1Left = getComputedStyle(car1).left.replace('px', '');
	let car1Top = getComputedStyle(car1).top.replace('px', '');
	car1.style.top = `${parseInt(car1.style.top.replace("px", "")) + 10}px`;

	if(car1Top >= 810) {
		stopCars();
		rotateCar(0)
		setTimeout(startCar1West, 1000);
	}
}


function startCar1West () {
	stopCars();
	intervalId = setInterval(moveCar1West, roadSpeed);
}


//WEST

//Move car west

function moveCar1West () {
	let car1Left = getComputedStyle(car1).left.replace('px', '');
	let car1Top = getComputedStyle(car1).top.replace('px', '');

	if(car1Left <= 190) {
		carSkid();
		stopCars();
	setTimeout(startCar1IntersectionWest, intersectionWait);
	}
	

	console.log(car1.style.left + ' = left');
	console.log(car1Left + ' = left');
	console.log(car1Top + ' = top');

	car1.style.left = `${parseInt(car1.style.left.replace("px", "")) - 10}px`;
}

//Move car west through intersection

function car1MoveIntersectionWest() {
	let car1Left = getComputedStyle(car1).left.replace('px', '');
	let car1Top = getComputedStyle(car1).top.replace('px', '');
	car1.style.left = `${parseInt(car1.style.left.replace("px", "")) - 10}px`;

	if(car1Left <= 50) {
		stopCars();
		rotateCar(0)
		setTimeout(startCar1North, 1000);
	}
}


function startCar1West () {
	stopCars();
	intervalId = setInterval(moveCar1West, roadSpeed);
}


//NORTH

//Move car north

function moveCar1North () {
	let car1Left = getComputedStyle(car1).left.replace('px', '');
	let car1Top = getComputedStyle(car1).top.replace('px', '');

	if(car1Top <= 230) {
		carSkid();
		stopCars();
	setTimeout(startCar1IntersectionNorth, intersectionWait);
	}
	

	console.log(car1.style.left + ' = left');
	console.log(car1Left + ' = left');
	console.log(car1Top + ' = top');

	car1.style.top = `${parseInt(car1.style.top.replace("px", "")) - 10}px`;
}

//Move car north through intersection

function car1MoveIntersectionNorth() {
	let car1Left = getComputedStyle(car1).left.replace('px', '');
	let car1Top = getComputedStyle(car1).top.replace('px', '');
	car1.style.top = `${parseInt(car1.style.top.replace("px", "")) - 10}px`;

	if(car1Top <= 90) {
		stopCars();
		rotateCar(0)
		setTimeout(startCar1, 1000);
	}
}


function startCar1North () {
	stopCars();
	intervalId = setInterval(moveCar1North, roadSpeed);
}


// Intersection timeouts and calling next move

function startCar1IntersectionEast () {
	intervalId = setInterval(car1MoveIntersectionEast, intersectionSpeed)
}

function startCar1IntersectionSouth () {
	intervalId = setInterval(car1MoveIntersectionSouth, intersectionSpeed)
}

function startCar1IntersectionWest () {
	intervalId = setInterval(car1MoveIntersectionWest, intersectionSpeed)
}

function startCar1IntersectionNorth () {
	intervalId = setInterval(car1MoveIntersectionNorth, intersectionSpeed)
}


//Initial start of car

function startCar1() {
	intervalId = setInterval(moveCar1East, roadSpeed);
}


//Clearing interval of car

function stopCars() {
	clearInterval(intervalId);

}