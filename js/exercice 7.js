// setInterval

var img = 0;

function f(){
    img += 1;
    var monImage = document.getElementById('monimage');
    monImage.setAttribute('src', 'img/' + img + '.jpg');
    // console.log(img);
    if(img == 6){
        img = 1;
        monImage.setAttribute('src', 'img/' + img + '.jpg');
    };
}

var timer = window.setInterval("f()", 1000); 


//* Correction

var img = 0; 

function f(){
	img +=1; // Ici, je reprend la variable img sans le mot clef var pour que sa portée soi globale. J'utilise le symbole += pour RAJOUTER 1 à la valeur de la var img déclarée à la ligne 10
	
	var monImage = document.getElementById('monimage'); // Ici je sélectionne mon image

	monImage.setAttribute("src","img/"+ img + ".jpg"); // Maintenant que mon image est sélectionnée, je viens utiliser la méthode setAttribute afin de modifier sa src. Je rajoute en deuxième argument la définition de la src sauf que je réalise une concaténation de son nom en insérant la variable img qui est égal à 0 au début, puis à 1, puis à 2 etc etc 
	console.log(img); // Ici je met un petit contrôle pour vérifier la valeur de 

	if(img == 7){ // Ici je met une condition qui dit ceci : lorsque la variable img vaut 7, autrement dit lorsque j'arrive sur ma dernière image, tu reprends la valeur de img et tu la fixe directement à 1, donc au niveau visuel, tu restaures l'image ayant comme source 1.jpg.
		img = 1;
		monImage.setAttribute("src","img/"+ img + ".jpg"); // Maintenant que img vaut 1, je viens modifier la src de mon image pour qu'elle corresponde à mon image 1.jpg, ce qui crée un caroussel qui revient automatiquement à la première image.
	}; 
}




var timer = window.setInterval("f()",1000); // setInterval - permet de rappeler une fonction plusieurs fois. Toutes les 1 seconde.






//= Cimetière.

/*

var myIndex = 0;
carousel();

function carousel(){
    var i;
    var x = document.getElementsByClassName('mySlides');
    for (var i = 0; i < x.length; i++){
        x[i].style.display = 'none';
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = 'block';
    setTimeout(() => {
        
    }, (carousel, 2000));
};
*/