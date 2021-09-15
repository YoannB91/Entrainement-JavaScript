//& Ma méthode.

var titre = document.getElementsByTagName('h1');
console.log(titre);

var div = document.getElementsByTagName('div');
console.log(div);

var p = document.getElementsByTagName('p');
console.log(p);

div[0].addEventListener('click', function style() {
    for (var i = 0; i < p.length; i++) {
        div[0].style.backgroundColor = 'grey'
        p[i].style.backgroundColor = 'aqua';
        p[i].style.fontSize = '50px';
        p[i].style.border = '3px solid red';
        p[i].style.color = 'yellow';
        titre[0].style.display = 'none'
    };
});


//* Correction.

// Lorsque je clic sur la DIV le style des trois balises <p> doit changer :
// Il doit y avoir un background-color
// On doit également changer leur font-size pour 50px
// Ils doivent avoir une border 3px solid red
// La color du texte doit changer
// Le h1 doit disparaître


var div = document.getElementsByTagName('div');
var nombreDePPresentSurMaPage = document.getElementsByTagName("p");

div[0].addEventListener('click', function modifCSS() {
    for (var i = 0; i < document.getElementsByTagName("p").length; i++) {
        document.getElementsByTagName("p")[i].style.border = "solid red 5px";
        document.getElementsByTagName("p")[i].style.backgroundColor = "#fda500";
        document.getElementsByTagName("p")[i].style.padding = "15px";
        document.getElementsByTagName("p")[i].style.color = "#fff";
        document.getElementsByTagName("p")[i].style.fontSize = "25px";

        document.getElementsByTagName("h1")[0].style.display = 'none';//Ici j'indique le numéro d'indice de mon h1 car il n'y en qu'un sur ma page, et qu'il est stocké dans une HTMLCollection.
    }

})

// Les lignes 54 à 56 ne sont pas indispensables 
var longueur = document.getElementsByTagName("p").length;
console.log('la longueur de ma variable est de : ' + longueur);
console.log(longueur);

    // for (Initialisation; tant que i est inférieur au nombre de balises <p> présentent sur ma page; tu augmentes i de 1 à chaque tour de boucle)

    // Si jamais je n'utilise pas de BOUCLE, alors je suis obligé d'écrire manuellement tous mes indice i
      // document.getElementsByTagName("p")[0].style.border = "solid red 5px";
      // document.getElementsByTagName("p")[0].style.backgroundColor = "#fda500";
      // document.getElementsByTagName("p")[0].style.padding = "15px";
      // document.getElementsByTagName("p")[0].style.color = "#fff";
      // document.getElementsByTagName("p")[0].style.fontSize = "25px";

      // document.getElementsByTagName("h1")[0].style.display = 'none';

      // document.getElementsByTagName("p")[1].style.border = "solid red 5px";
      // document.getElementsByTagName("p")[1].style.backgroundColor = "#fda500";
      // document.getElementsByTagName("p")[1].style.padding = "15px";
      // document.getElementsByTagName("p")[1].style.color = "#fff";
      // document.getElementsByTagName("p")[1].style.fontSize = "25px";

      // document.getElementsByTagName("h1")[0].style.display = 'none';

      // document.getElementsByTagName("p")[2].style.border = "solid red 5px";
      // document.getElementsByTagName("p")[2].style.backgroundColor = "#fda500";
      // document.getElementsByTagName("p")[2].style.padding = "15px";
      // document.getElementsByTagName("p")[2].style.color = "#fff";
      // document.getElementsByTagName("p")[2].style.fontSize = "25px";

      // document.getElementsByTagName("h1")[0].style.display = 'none';








    //METHODE ALTERNATIVE D'ECRITURE
    // function modifCSS() { // Ici on déclare une fonction qui déclenche une boucle qui va permettre de "tourner" sur mes balises p
    //  for(var i = 0; i < document.getElementsByTagName("p").length; i++) {
    //    document.getElementsByTagName("p")[i].style.border = "solid red 5px";
    //    document.getElementsByTagName("p")[i].style.backgroundColor = "#fda500";
    //    document.getElementsByTagName("p")[i].style.padding = "15px";
    //    document.getElementsByTagName("p")[i].style.color = "#fff";
    //    document.getElementsByTagName("p")[i].style.fontSize = "25px";
    //  }
    //  document.getElementsByTagName("h1")[0].style.display = 'none';
    // }


    // var action = document.getElementsByTagName("div")[0] // Ici je sélectionne la div
    // action.addEventListener('click', modifCSS); // Lorsqu'on click sur la div, cela déclenche la fonction modifCSS