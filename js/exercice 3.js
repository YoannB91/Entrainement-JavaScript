//& Ma solution.
var carré = document.getElementsByClassName ('jaune');
console.log (carré);


/* maintenir appuyé c'est mousedown
relâcher le clic c'est mouseup */

btn.addEventListener('mousedown', function changeTaille(){
    carré[0].style.width = '100px';
    carré[0].style.backgroundColor = 'green';
});

btn.addEventListener('mouseup', function (){
    carré[0].style.width = '300px';
    carré[0].style.backgroundColor = 'yellow';
});



carré[1].addEventListener('dblclick', function clicDouble(){
    carré[1].style.backgroundColor = 'red';
});


//* Correction.

var btn = document.getElementById('btn'); // Je sélectionne le bouton sur lequel je place l'évenement

btn.addEventListener('mousedown', function retreciJaune(){ // Je place un évenement sur mon bouton
	document.getElementsByClassName("jaune")[0].style.width = "100px"; // Ici je défini l'évenement : je viens mettre la width du rectangle jaune à 100px ce qui provoque un rétrécissement car sa width est initallement fixée à 300px dans le CSS
})

btn.addEventListener('mouseup', function aggrandiJaune(){
	document.getElementsByClassName("jaune")[0].style.width = "300px";
	//document.getElementsByClassName("jaune")[0].style.borderRadius = "20px";
})


// Mettre le rectangle jaune en violet lorsque je dblclick
var div = document.getElementsByTagName('div'); // Je sélectionne la div car c'est sur elle que je dois double-cliquer
console.log(div);
div[1].addEventListener('dblclick', function color(){ // Je place l'évenement sur ma div
    div[1].style.backgroundColor = 'purple'; // Je change son background-color (attention à la syntaxe de la propriété CSS en JS qui s'écrit sans le tiret et avec le C de color en majuscule)
})