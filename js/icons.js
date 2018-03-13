// Don't know why it works: https://stackoverflow.com/a/28633276

// food
var foodicons = document.getElementsByClassName('foodicon');
for (var i = 0; i < foodicons.length; i++) {
	var icon = foodicons[i];
	var animDataPlate = {
		container: icon,
		renderer: 'svg',
		loop: true,
		autoplay:false,
		path: 'plate.json'

	};
	var animPlate = lottie.loadAnimation(animDataPlate);
	icon.addEventListener("mouseenter", function (plate) {
		return function() {plate.play()};
		//plate.play();
	}(animPlate));
	icon.addEventListener("mouseleave", function (plate) {
		return function() {plate.stop()};
		//plate.stop();
	}(animPlate));
}

//music

var musicicons = document.getElementsByClassName('musicicon');
for (var i = 0; i < musicicons.length; i++) {
	var icon = musicicons[i];
	var animDataMusic = {
		container: icon,
		renderer: 'svg',
		loop: true,
		autoplay:false,
		path: 'music.json'

	};
	var animMusic = lottie.loadAnimation(animDataMusic);
	icon.addEventListener("mouseenter", function (music) {
		return function() {music.play()};
		//music.play();
	}(animMusic));
	icon.addEventListener("mouseleave", function (music) {
		return function() {music.stop()};
		//music.stop();
	}(animMusic));
}

//transit

var transiticons = document.getElementsByClassName('transiticon');
for (var i = 0; i < transiticons.length; i++) {
	var icon = transiticons[i];
	var animDataTransit = {
		container: icon,
		renderer: 'svg',
		loop: true,
		autoplay:false,
		path: 'transit.json'

	};
	var animTransit = lottie.loadAnimation(animDataTransit);
	icon.addEventListener("mouseenter", function (transit) {
		return function() {transit.play()};
		//transit.play();
	}(animTransit));
	icon.addEventListener("mouseleave", function (transit) {
		return function() {transit.stop()};
		//plate.stop();
	}(animTransit));
}

/*//aeropuerto icon
		
var plateContainer = document.getElementById('foodicon');
		
	var animDataPlate = {
		container: plateContainer,
		renderer: 'svg',
		loop: true,
		autoplay:false,
		path: 'plate.json'

	};

	var animPlate = lottie.loadAnimation(animDataPlate);

	plateContainer.addEventListener("mouseenter", function playAni() {
		animPlate.play();
	});
	plateContainer.addEventListener("mouseleave", function stopAni() {
		animPlate.stop();
	});


	var musicContainer = document.getElementById('musicicon');
		
	var animDataMusic = {
		container: musicContainer,
		renderer: 'svg',
		loop: true,
		autoplay:false,
		path: 'music.json'

	};

	var animMusic = lottie.loadAnimation(animDataMusic);

	musicContainer.addEventListener("mouseenter", function playAni() {
		animMusic.play();
	});
	musicContainer.addEventListener("mouseleave", function stopAni() {
		animMusic.stop();
	});	


		var transitContainer = document.getElementById('transiticon');
		
	var animDataTransit = {
		container: transitContainer,
		renderer: 'svg',
		loop: true,
		autoplay:false,
		path: 'transit.json'
	};

	var animTransit = lottie.loadAnimation(animDataTransit);

	transitContainer.addEventListener("mouseenter", function playAni() {
		animTransit.play();
	});
	transitContainer.addEventListener("mouseleave", function stopAni() {
		animTransit.stop();
	});	



*/