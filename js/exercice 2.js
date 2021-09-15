//& Ma version.

var monBouton = document.getElementById('changerImageTitre');

monBouton.addEventListener('click', function change() {
    document.getElementById('monImage2').src = 'img/3.jpg'
    document.getElementById('monImage2').setAttribute('title', 'my new title')
});


var diapo = document.getElementById('caroussel');

/*
let link = document.querySelector('#caroussel');
if (link) {
    let src = link.getAttribute('src');
    console.log(src);
}
*/




diapo.addEventListener('click', function change2() {
    var source = diapo.getAttribute('src');
    console.log(source);

    switch (source) {
        case 'img/2.jpg':
            diapo.src = 'img/4.jpg';
            console.log(source);
            break;
        case 'img/4.jpg':
            diapo.src = 'img/2.jpg'
            break;
    };
});





//* La correction.

var changerImageTitre = document.getElementById("changerImageTitre");
changerImageTitre.addEventListener('click', function change() {
    document.getElementById("monImage2").src = "imgs/e.jpg";
    document.getElementById("monImage2").title = "joli chalet";
})


var imageChange = document.getElementById('caroussel')

imageChange.addEventListener('click', function tourneImage() {
    var monImage = document.getElementById("caroussel").getAttribute("src"); // Là je demande à ce que le contenu du src de l'image soit récupéré avec .getAttribute().
    //, var monImage = imageChange.getAttribute("src");
    console.log(monImage);

    switch (monImage) { // voir chapitre des conditions switch 
        case 'imgs/a.jpg':
            document.getElementById("caroussel").src = 'imgs/b.jpg';
            break;
        case 'imgs/b.jpg':
            document.getElementById("caroussel").src = 'imgs/c.jpg';
            break;
        case 'imgs/c.jpg':
            document.getElementById("caroussel").src = 'imgs/d.jpg';
            break;
        case 'imgs/d.jpg':
            document.getElementById("caroussel").src = 'imgs/e.jpg';
            break;
        case 'imgs/e.jpg':
            document.getElementById("caroussel").src = 'imgs/a.jpg';
            break;
    }
}); //: Ici autre manière d'écrire un addEventListener, j'appelle la fonction après l'évenement