    //* Mon travail.
    //* ------------

//, Je sélectionne mon image dans mon fichier HTML.
var imagePicsum = document.getElementById('monImage');

//) Élément sur lequel je dois cliquer (Évènement à réaliser, la fonction à réaliser (je dois la nommer))
changerImage.addEventListener('click', function monImage() {
    imagePicsum.src="https://picsum.photos/400/400?random=2" 
    /// Je sélectionne l'image à changer grâce à son ID . je lui indique la nouvelle source de l'image à afficher.
});

//; J'aurais dû appeler mon bouton dans ma variable. Ici ma fonction marche grâce à la sélection naturelle qui appele l'id de mon bouton, sans ça je ne pourrais pas le cibler de cette façon. 


    //* La solution SRC (source)
    //* ------------------------

//: Je sélectionne mon bouton.
var monBouton = document.getElementById('changerImage'); 

//? Je définit un évènement.
monBouton.addEventListener('click', function change(){
    document.getElementById('monImage').src = "https://picsum.photos/400/400?random=2"
    //+ Je réalise l'action qui change la source de mon image.
});


    //* La solution avec Setatttribute.
    //* -------------------------------


//: Je sélectionne mon bouton.
var monBouton = document.getElementById('changerImage'); 

monBouton.addEventListener('click', function change(){
    document.getElementById('monImage').setAttribute('src','https://picsum.photos/400/400?random=2');
});



	//* Comment recharger une page avec un bouton.
	//* ------------------------------------------

var btn = document.getElementById('btn');
//£ Je sélectionne le bouton

btn.addEventListener('click', function refresh(){ 
//$ Je définit mon évenement au clic
		window.location.reload(); 
        //µ Permet de demander le rechargement de la page.
		})