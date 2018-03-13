
//aeropuerto

var theWindow = $(window);
var winHeight = theWindow.height();
var animDurationA = winHeight * 2;
var animDataA = {
        container: document.getElementById('aeropuertomap'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'aeropuerto.json'
    };
var animA = lottie.loadAnimation(animDataA);

$( window ).scroll(function() {
	animatebodymovin(animDurationA, animA, 1);
});

//condesa

	var theWindow = $(window);
var winHeight = theWindow.height();
var animDuration = winHeight * 2.5;
var animDataC = {
        container: document.getElementById('condesamap'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'condesa.json'
    };
var animC = lottie.loadAnimation(animDataC);

$( window ).scroll(function() {
	animatebodymovin(animDuration, animC, 3.2);
});



//roma

	var theWindow = $(window);
var winHeight = theWindow.height();
var animDuration = winHeight * 2;
var animDataR = {
        container: document.getElementById('romamap'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'roma.json'
    };
var animR = lottie.loadAnimation(animDataR);

$( window ).scroll(function() {
	animatebodymovin(animDuration, animR, 5.2);
});

//doctores
	
		var theWindow = $(window);
var winHeight = theWindow.height();
var animDurationDs = winHeight * 2;
var animDataDs = {
        container: document.getElementById('doctoresmap'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'doctores.json'
    };
var animDs = lottie.loadAnimation(animDataDs);

$( window ).scroll(function() {
	animatebodymovin(animDurationDs, animDs, 8);
});

//el centro

	var theWindow = $(window);
var winHeight = theWindow.height();
var animDurationE = winHeight * 2.5;
var animDataE = {
        container: document.getElementById('elcentromap'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'elcentro.json'
    };
var animE = lottie.loadAnimation(animDataE);

$( window ).scroll(function() {
	animatebodymovin(animDurationE, animE, 11);
});

//polanco

	var theWindow = $(window);
var winHeight = theWindow.height();
var animDurationP = winHeight * 2.5;
var animDataP = {
        container: document.getElementById('polancomap'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'polanco.json'
    };
var animP = lottie.loadAnimation(animDataP);

$( window ).scroll(function() {
	animatebodymovin(animDurationP, animP, 13);
});


//coyoacan

	var theWindow = $(window);
var winHeight = theWindow.height();
var animDurationCn = winHeight * 2.5;
var animDataCn = {
        container: document.getElementById('coyoacanmap'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'coyoacan.json'
    };
var animCn = lottie.loadAnimation(animDataCn);

$( window ).scroll(function() {
	animatebodymovin(animDurationCn, animCn, 15.5);
});

//chapultepec

	var theWindow = $(window);
var winHeight = theWindow.height();
var animDurationCh = winHeight * 2.5;
var animDataCh = {
        container: document.getElementById('chapultepecmap'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'chapultepec.json'
    };
var animCh = lottie.loadAnimation(animDataCh);

$( window ).scroll(function() {
	animatebodymovin(animDurationCh, animCh, 18);
});
		

//narvarte

	var theWindow = $(window);
var winHeight = theWindow.height();
var animDurationN = winHeight * 2;
var animDataN = {
        container: document.getElementById('narvartemap'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'narvarte.json'
    };
var animN = lottie.loadAnimation(animDataN);

$( window ).scroll(function() {
	animatebodymovin(animDurationN, animN, 20.5);
});

//juarez

	var theWindow = $(window);
var winHeight = theWindow.height();
var animDurationJ = winHeight * 2;
var animDataJ = {
        container: document.getElementById('juarezmap'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'juarez.json'
    };
var animJ = lottie.loadAnimation(animDataJ);

$( window ).scroll(function() {
	animatebodymovin(animDurationJ, animJ, 23);
});


//tepito

	var theWindow = $(window);
var winHeight = theWindow.height();
var animDurationT = winHeight * 2;
var animDataT = {
        container: document.getElementById('tepitomap'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'tepito.json'
    };
var animT = lottie.loadAnimation(animDataT);

$( window ).scroll(function() {
	animatebodymovin(animDurationT, animT, 25.5);
});

//santa fe


		var theWindow = $(window);
var winHeight = theWindow.height();
var animDurationSf = winHeight * 2.5;

var animDataSf = {
        container: document.getElementById('santafemap'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'santafe.json'
    };
var animSf = lottie.loadAnimation(animDataSf);

$( window ).scroll(function() {
	animatebodymovin(animDurationSf, animSf, 28);
});

//san angel

	var theWindow = $(window);
var winHeight = theWindow.height();
var animDurationSA = winHeight * 2;
var animDataSA = {
        container: document.getElementById('sanangelmap'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'sanangel.json'
    };
var animSA = lottie.loadAnimation(animDataSA);

$( window ).scroll(function() {
	animatebodymovin(animDurationSA, animSA, 30.3);
});
		
	//tlalpan
	
		var theWindow = $(window);
var winHeight = theWindow.height();
var animDurationTl = winHeight * 2;
var animDataTl = {
        container: document.getElementById('tlalpanmap'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'tlalpan.json'
    };
var animTl = lottie.loadAnimation(animDataTl);

$( window ).scroll(function() {
	animatebodymovin(animDurationTl, animTl, 35.2);
});

//satelite
	
		var theWindow = $(window);
var winHeight = theWindow.height();
var animDurationSt = winHeight * 2;
var animDataSt = {
        container: document.getElementById('satelitemap'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'satelite.json'
    };
var animSt = lottie.loadAnimation(animDataSt);

$( window ).scroll(function() {
	animatebodymovin(animDurationSt, animSt, 40);
});


		
				

	
		





//function


function animatebodymovin(duration, animObject, animPosition) {
	
	var scrollPosition = theWindow.scrollTop() - winHeight*animPosition;
	var maxFrames = animObject.totalFrames;
	var frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
	
	animObject.goToAndStop(frame, true);
	
};
