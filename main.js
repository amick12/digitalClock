const getDiv = document.getElementById('clock');

// Set time interval for updating clock
window.onload = setInterval(function() {
	tickTock();
}, 1000);

const tickTock = function() {
	let time = new Date();
	// get hours minutes and seconds from new Date();	
	let hours=time.getHours(), minutes=time.getMinutes(), seconds=time.getSeconds(), month=time.getMonth, year=time.getFullYear, day=time.getDay;
    // add zeroes to hours less than 10 for digital clock effect
    if (hours < 10) {
		hours = `0${hours}`;
	};
    if (minutes < 10) {
		 minutes = `0${minutes}`;
	 };
    if (seconds < 10) {
		seconds = `0${seconds};`
	};
	// apply PM AM if else -- Ternary Operator credit for teaching me something new: Tim "Ternary" Rogers
    let amPm = hours >= 12 ? 'PM' : 'AM';
    let gameTime = `${hours}:${minutes}:${seconds}${amPm}`;

    getDiv.innerHTML = gameTime;
};


