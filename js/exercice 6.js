//* Quelques conseils.

// .getAttribute
// .setAttribute
// utiliser une boucle
// utiliser un if
//toggle = effet de va et vient

//& Mon essai.

var titre = document.getElementsByTagName('h1');
var p = document.getElementsByTagName('p');
var classe = document.getElementsByClassName('hide');
var cacher = document.getElementsByClassName('cacher');


//ù Test en if else.

/*
titre[0].addEventListener('click', function montrer(){
    if(p[0].classList.contains('hide')) {
        p[0].classList.remove('hide');
        p[0].classList.add('show');
    } else {
        p[0].classList.contains('show');
        p[0].classList.remove('show');
        p[0].classList.add('hide');
    };
});
*/


//: Test en boucle.
titre[0].addEventListener('click', function boucle() {
    for (var i = 0; i < cacher.length; i++) {
        if (cacher[i].classList.contains('hide')) {
            cacher[i].classList.remove('hide');
            cacher[i].classList.add('show');
        } else {
            cacher[i].classList.contains('show');
            cacher[i].classList.remove('show');
            cacher[i].classList.add('hide');
        };
    };
});


//; Zone cimetière.

// p[0].classList.toggle('show');

// console.log(p);

//* Correction.

/*
var h1=document.querySelector('h1');
// console.log(h1);

h1.addEventListener('click',function hideAndShow(){
    var p = document.getElementsByTagName('p');// Ici, je sélectionne mes balises <p>
    for (var i=0; i<p.length; i++){

        var pIndex = p[i]; // Je déclare une variable qui repère les index car faire var pIndexClass = p[i].getAttribute('class'); ne fonctionnera pas. Dans cette variable nous aurons donc p[0] au premier tour de boucle puis p[1] au deuxième tour, p[2] au troisième etc etc

        var pClass = pIndex.getAttribute('class'); // Ici, je viens récupérer toutes les éventuelles class que je pourrais voir sur mes balises <p>, autrement dit, pour l'instant, dans cette variable nous avons la class hide et nous avons également la class pastouche 
        // console.log(pIndexClass);

        if(pClass=="hide"){
            pIndex.setAttribute('class','show');
        }
        // ici on rajoute le else if sinon a cause de la boucle on rajoute la class hide a tous les p qui n ont pas de class
        else if(pClass=="show"){
            pIndex.setAttribute('class','hide');
        }
    }
});
*/

