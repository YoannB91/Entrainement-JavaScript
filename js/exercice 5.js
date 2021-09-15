//* Correction

// exercice2.js
"use strict";
onload = init;


/***********************************/
// function init()
/***********************************/
function init(){
document.getElementById("bt-submit").onclick = checkItAll;
document.getElementById("bt-add-option").onclick = addOption;
}
let btsubmit=document.getElementById("bt-submit");
btsubmit.addEventListener('click',checkItAll);
let btAddOption=document.getElementById("bt-add-option");
btAddOption.addEventListener('click',addOption);
/***********************************/
// function checkItAll()
/***********************************/
function checkItAll(){
document.getElementById("err-utilisateur").innerHTML = "";
document.getElementById("err-pass").innerHTML = "";
document.getElementById("err-profil").innerHTML = "";
document.getElementById("err-activites").innerHTML = "";
document.getElementById("err-vote").innerHTML = "";
	
// Tout va bien. A la moindre erreur, cette valeur passera à false
var okSubmit = true;

// Check user
var user = document.getElementById("user").value;
if(user.length < 6 || user.length > 12){
	document.getElementById("err-utilisateur").innerHTML = "Nombre de caractères entre 6 et 12 !";
	okSubmit = false; // Le formulaire ne sera pas envoyé
}

// Check pass
var pass = document.getElementById("pass").value;
if(pass.length != 8){
	document.getElementById("err-pass").innerHTML = "8 caractères exactement !";
	okSubmit = false;
}


// Check profil
var profil = document.getElementById("liste-profils").options[document.getElementById("liste-profils").selectedIndex].value;
if(profil == -1){
	document.getElementById("err-profil").innerHTML = "Sélectionnez un profil !";
	okSubmit = false;
}
console.log(profil);
// Check activités
var listeActivites = document.getElementsByName("activites");
var nbActivites = 0;
for(let i = 0; i < listeActivites.length; i++)
if(listeActivites[i].checked == true) {
console.log("Activité choisie ==> "+listeActivites[i].value);
++nbActivites;	
}

if(nbActivites < 3){
	document.getElementById("err-activites").innerHTML = "Sélectionnez au moins trois activités !";
	okSubmit = false;
}

// Check vote
var listeChoix = document.getElementsByName("vote");
var pasVote = true;
for(let i = 0; i < listeChoix.length; i++)
if(listeChoix[i].checked == true) {
console.log("Valeur du vote ==> "+listeChoix[i].value);
pasVote = false;	
}

if(pasVote){
	document.getElementById("err-vote").innerHTML = "Il faut voter !";
	okSubmit = false;
}

// Tout va toujours bien ?
if(okSubmit){
document.getElementById("le-formulaire").submit();	
}


}

var x=0;
function addOption(){
	var opt =document.createElement("option");
	//on cree une option
	var optValue=document.createAttribute("value");
	//on cree une valeur 
	optValue.value=++x;
	//on donne une valeur a value avec la variable x
	opt.setAttributeNode(optValue);
	//on affecte l attribut a l option
	var optText=document.createTextNode("option"+(++x));
	//il faut dorenavant cree le texte qui va venir s afficher dans les options creer comme ci dessus
	opt.appendChild(optText);
	//il faut rattache maintenant le noeud texte a l option comme ci dessus 
	document.getElementById("combo").appendChild(opt);
	//puis on l integre a notre liste deroulante 
}



















// //& Mon essai.

// // //, Lié aux champs.
// // var send = document.getElementById('bt-submit');
// // var utilisateur = document.getElementById('user');
// // var multiPass = document.getElementById('pass');
// // var profil = document.getElementById('liste-profils');
// // var profils = document.getElementsByTagName('option');
// // var activité = document.getElementsByTagName('input');

// // //? Lié aux erreurs.
// // var errUser = document.getElementById('err-utilisateur');
// // var errMdp = document.getElementById('err-pass');
// // var errProf = document.getElementById('err-profil');
// // var errActiv = document.getElementById('err-activites');
// // var errVote = document.getElementById('err-vote');

// // //; Zone de test.
// // var formOk = true;

// // //ù Je cache mes messages d'erreurs.
// // errUser.style.display = 'none';
// // errMdp.style.display = 'none';
// // errProf.style.display = 'none';
// // errActiv.style.display = 'none';
// // errVote.style.display = 'none';

// // //$ Ce code fonctionne.

// // /// La section Utilisateur.
// // send.addEventListener('click', function verif1(){
// //     if(utilisateur.value.length <6 && utilisateur.value.length <12) {
// //         errUser.style.display = 'block';
// //         return false;
// // }  else {
// //         errUser.style.display = 'none';
// //         return true;
// //     };
// // });

// // //& La section mot de passe.
// // send.addEventListener('click', function verif2(){
// //     if(multiPass.value.length !=8){
// //         errMdp.style.display = 'block';
// //         return false;
// //     } else {
// //         errMdp.style.display = 'none';
// //         return true;
// //     };
// // });

// // //% La section profil.
// // send.addEventListener('click', function verif3(){
// //     if(profil.value == -1){
// //         errProf.style.display = 'block';
// //         return false;
// //     } else {
// //         errProf.style.display = 'none';
// //         return true;
// //     };
// // });



// // //µ La section vote.
// // send.addEventListener('click', function verif5(){
// //     if(activité[7].checked){
// //         errVote.style.display = 'none';
// //         return true; 
// //     } else if(activité[8].checked){
// //         errVote.style.display = 'none';
// //         return true;
// // } else {
// //         errVote.style.display = 'block';
// //         return false;
// //     };
// // });




// // //; Zone de test.

// // console.log(activité);

// // send.addEventListener('click', function verif4(){
// //     var checked = 0;
// //     var mybox = document.forms[0].elements['activites'];
// //     for (var i=0; i < mybox.length; i++){
// //         if (mybox[i].checked) {
// //             checked = 1;
// //         }
// //     } if (checked >= 3) {
// //         errActiv.style.display = 'none'
// //         return true;
// //     } else {
// //         errActiv.style.display = 'block';
// //         return false;
// //     };
// // });



// // send.addEventListener('click', function envoyer(){
// //     if(verif1 == true && verif2 == true && verif3 == true && verif4 == true && verif5 == true){
// //         return true;
// //     } else {
// //         return false;
// //     }
// // });



// //$ Zone cimetière.

// /*
// function ctrlForm() {
// 	var checked = 0;
// 	var mybox = document.forms[0].elements['chk[]'];
// 	for (i=0; i<mybox.length; i++) {
// 		if (mybox[i].checked==true) {
// 			checked=1;
// 		}
// 	}
// 	if (checked>0) {
// 		//C'est OK, traitement de tes actions par bouton
// 	} else {
// 		alert('Merci de cocher au moins une case');
// 		return false;
// 	}
// }
// </script>
// */

// /*
// //+ L'utilisateur.
// utilisateur.addEventListener('click', function checkForm1() {
//     if(utilisateur.value.length <6 && utilisateur.value.length >12){
//         formOk = false;
//         errUser.style.display = 'block';
//     };
// });


// //: Mon mot de passe.
// multiPass.addEventListener('click', function checkForm2(){
//     if(multiPass.value.lenght !=8) {
//         formOk = false;
//         errMdp.style.display = 'block'
// } else if(multiPass.value.lenght = 8) {
//     formOk = true;
//     errMdp.style.display = 'none';
// }
// });

// if(!formOk){
//     event.preventDefault();
// };
// */

// /*

// utilisateur.addEventListener('change', function verif1(){
//     if(utilisateur.value.length <6 && utilisateur.value.length <12) {
//         errUser.style.display = 'block';
// }  else {
//         errUser.style.display = 'none';
//     };
// });

// multiPass.addEventListener('change', function verif2(){
//     if(multiPass.value.length !=8){
//         errMdp.style.display = 'block';
//     } else {
//         errMdp.style.display = 'none';
//     };
// });

// profil.addEventListener('change', function verif3(){
//     if(profil.value == -1){
//         errProf.style.display = 'block';
//     } else {
//         errProf.style.display = 'none';
//     };
// }); 

// */