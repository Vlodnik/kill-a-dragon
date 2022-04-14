"use strict";

let entries = {};

let inventory = {
	gold: 0,
	items: {},
	armor: {},
	weapon: {},
	curses: {},
};

let stats = {
	health: 10,
	body: 0,
	mind: 0,
};

let bookmark = {};

$(document).ready(function() {

	// Moving between rooms

	let heading = $('h1');
	let copy = $('#copy-container');
	let options = $('#options-container');
	
	function moveRooms(newRoom) {
		heading.removeClass('caps');

		heading.text(newRoom.heading);
		copy.html('');
		options.html('');

		newRoom.copy.forEach(function(para) {
			copy.append(`<p>${para}</p>`);
		});

		let buttonClasses = newRoom

		newRoom.options.forEach(function(opt) {
			if(!opt.requirements) {
				options.append(`<button class="opt-btn js-opt-btn" data-destination="${opt.destination}">${opt.buttonText}</button>`);
			}
		});
	}

	function addHeader() {
		const headerHtml = `
			<h2 class="caps">Health: <span id="js-current-health">10</span>/<span id="js-max-health">10</span></h2>
			<button class="opt-btn js-restart">Restart</button>
		`;

		$('header').html(headerHtml);
	}

	function resetGame() {
		heading.addClass('caps');
		heading.text(rooms.startScreen.heading);
		copy.html('');
		options.html('');

		options.append(`<button class="opt-btn js-start cap">${rooms.startScreen.options[0].buttonText}</button>`);

		removeHeader();
	}

	function removeHeader() {
		$('header').html('');
	}

	$(document).on('click', '.js-start', function() {
		moveRooms(rooms['firstRoom']);
		addHeader();
	});

	$(document).on('click', '.js-opt-btn', function() {
		moveRooms(rooms[$(this).data('destination')]);
	});

	$(document).on('click', '.js-restart', function() {
		resetGame();
	});

	// Adding and removing inventory items


	// Change stats


	// Check for saved values in local storage

});
