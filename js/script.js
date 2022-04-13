"use strict";

let entries = {};

let inventory = {
	gold: 0,
	items: {},
	armor: {},
	weapon: {},
	curses: {},
}

let stats = {
	health: 10,
	body: 1,
	mind: 1,
}

let bookmark = {

}

$(document).ready(function() {

	let heading = $('h1');
	let copy = $('#copy-container');
	let options = $('#options-container');
	
	function moveRooms(newRoom) {
		// if(newRoom !== startScreen) {
		// 	heading.removeClass('caps');
		// }

		heading.text(newRoom.heading);
		copy.html('');
		options.html('');

		newRoom.copy.forEach(function(para) {
			copy.append(`<p>${para}</p>`);
		});

		newRoom.options.forEach(function(opt) {
			if(!opt.requirements) {
				options.append(`<button class="opt-btn opt-btn-js" data-destination="${opt.destination}">${opt.buttonText}</button>`);
			}
		});
	}

	$(document).on('click', '.js-start', function() {
		moveRooms(firstRoom);
	});

});
