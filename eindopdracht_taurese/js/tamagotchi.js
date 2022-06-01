// DOM
document.querySelector("veranderen.img");

// variabelen gelinkt aan de DOM elementen
var veranderen = document.querySelector(".veranderen");
var boos = document.querySelector("button.Schelden");
var groeten = document.querySelector("button.Groeten");
var foto = document.querySelector("button.Foto");
var zingen = document.querySelector("button.Zingen");
var slapen = document.querySelector("img");
var prijs = document.querySelector("button.Prijs");
var pElement = document.querySelector("p.random-woord");
var zinnetje = document.querySelector("button.Zinnetje");
var bronnen = document.querySelector("button.Bronnen");

// variabelen met een waarde
var heeftgezongen = false;
var muziekje = new Audio('hurricane.m4a');
var woorden = ["Hi", "Zullen we dansen?", "Ik wil slapen", "Kan je The Weeknd's nieuwe album afspelen?", "Is het al weekend?", "Wassup iedereen", "City Boys Up!"];
var randomNummer;

// Functies regel 22 t/m 117 //


// Functie Groeten
// wanneer er op de button ".veranderen" word geklikt op de website word deze functie uitgevoerd op de website.
// De foto word dan veranderd door de source van de image te veranderen (veranderen.src), dit gebeurt omdat de class name van de image zo heet. 
// ook word de tekst veranderd doordat ik .textContent heb toegepast bij een empty "p" met de class naam random-woord.
// in dit geval veranderd de foto naar iemand die blij is, met de tekst erbij: "Hi, hoe gaat het ermee?".


function groetActie() {
	veranderen.src = "images/standaard.svg";
	document.querySelector("p.random-woord").textContent = 'Hi, hoe gaat het ermee?';
}

// Functie bozeActie
// Wanneer er op deze button word geklikt veranderd de foto naar een man die boos is, met de tekst: "Ben je nou helemaal gek geworden!?". 

function bozeActie() {
	veranderen.src = "images/boos.svg";
	document.querySelector("p.random-woord").textContent = 'Ben je nou helemaal gek geworden!?';
}


// Functie fotoActie
// Wanneer er op deze button word geklikt veranderd de foto naar een man die een foto wilt maken, met de tekst: "Ff lachen naar de camera! Wat een leuke foto!". 

function fotoActie() {
	veranderen.src = "images/foto.svg";
	document.querySelector("p.random-woord").textContent = 'Ff lachen naar de camera! Wat een leuke foto!';
}


// Functie zingActie
// Wanneer er op deze button word geklikt veranderd de foto naar een man die aan het zingen is, met de tekst: "See this in 3d! All lights out for me". 
// Ook hoor je hier audio bij! Dit gebeurt door middel van de variabele "muziekje". 
// Ook word er een true waarde gegeven aan de variabele "heeft gezongen", hier lees je meer over in de volgende variabele.

function zingActie() {
	heeftgezongen = true;
	veranderen.src = "images/zingen.svg";
	document.querySelector("p.random-woord").textContent = 'See this in 3d! All lights out for me.';
	muziekje.play();
}


// Functie prijsActie
// Wanneer er op deze button word geklikt en er gezongen is (waarde true) (vorige function) veranderd de foto naar een man die blij is met zijn gewonnen prijs, met de tekst: "Wooohooooo! Ik heb gewonnen!". 
// Wanneer er op deze button word geklikt en er niet gezongen is (waarde false) (vorige function) veranderd de foto niet, met de tekst: "Ik heb nog niet gezongen! Dus ik kan geen prijs winnen". 
// Dit doe ik met een if else.

function prijsActie() {
	muziekje.pause();
	if (heeftgezongen == true) {
		veranderen.src = "images/prijs.svg";
		document.querySelector("p.random-woord").textContent = 'Wooohooooo! Ik heb gewonnen!';
	} else {
		document.querySelector("p.random-woord").textContent = 'Ik heb nog niet gezongen! Dus ik kan geen prijs winnen.';
	}

}


// Functie slapenActie
// Wanneer er over de foto heen word gehoverd veranderd deze naar de man die aan het slapen is, er komt dan ook te staan: "Gaat er nog iets gebeuren? Z z Z z Z z Z z".
// Dit doe ik met een mouseover

function slapenActie() {
	veranderen.src = "images/slapen.svg";
	document.querySelector("p.random-woord").textContent = 'Gaat er nog iets gebeuren? Z z Z z Z z Z z';
}

// Functie wakkerActie
// Wanneer er over de foto word weg word gehoverd veranderd deze terug naar een man die wakker is, er komt dan ook te staan: "Ooh ik ben weer wakker!".
// Dit doe ik met een mouseout

function wakkerActie() {
	veranderen.src = "images/standaard.svg";
	document.querySelector("p.random-woord").textContent = 'Ooh ik ben weer wakker!';
}

// Functie randomWoordenKiezer
// Wanneer er op deze button word geklikt dan zegt de man iets randoms uit een array (regel 19), dit doe ik met Math.random * de lengte van de array. 

function randomWoordenKiezer() {
	randomNummer = Math.floor(Math.random() * woorden.length);
	pElement.textContent = woorden[randomNummer];
}


// Functie bronnenActie
// Wanneer er op deze button word geklikt veranderd de foto naar een man met een bril die de bron toont in APA style.

function bronnenActie() {
	veranderen.src = "images/bronnen.svg";
	document.querySelector("p.random-woord").textContent = 'De APA bron voor het liedje is: West, K. (2021). Hurricane feat. The Weeknd & Lil Baby (Donda version) [Audio].';
}


// EventListeners, hier word ervoor gezorgt dat wanneer op de juiste button word geklikt (of gehoverd in sommige gevallen) deze functies worden uitgevoerd.

groeten.addEventListener("click", groetActie);
boos.addEventListener("click", bozeActie);
foto.addEventListener("click", fotoActie);
zingen.addEventListener("click", zingActie);
prijs.addEventListener("click", prijsActie);
slapen.addEventListener("mouseover", slapenActie);
slapen.addEventListener("mouseout", wakkerActie);
zinnetje.addEventListener("click", randomWoordenKiezer);
bronnen.addEventListener("click", bronnenActie);