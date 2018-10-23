//function that gives alert of search term
function look() {
	let getValue=document.getElementById('form').elements[0].value;
	alert('Wait a second we will look for ' +"'"+ getValue+"'" + ' in seconds.');
	
}
//added alert to I'm feeling lucky button
function random() {
	alert('Somenthing funny');
}
//added placeholder on google hover 
function test () {
	let google = 'Are you looking for me ?';
	let input = document.getElementById('seek');
	input.placeholder = google;
}
//reset placeholder on mouse out of logo
function out () {
	let input = document.getElementById('seek');
	let place = 'Look for something';
	input.placeholder = place;
}