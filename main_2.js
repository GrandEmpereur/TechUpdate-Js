var Afficheur = function(element) {
    var display = element; // cette variable est chargée de prendre l'élement passer au niveau du constructeur

    function setText(message) { // chargée de modifier le contenu de l'element passé dans le constructeur par un message qui lui sera passé
        display.innerHTML = message; // methode qui change le texte htlm de l'élement par le message
    }
    return {sendMessage : setText};
}

var scortO = 0;
var scortU = 0;

//creation function choix utilisateur (pierre, feuille ou ciseaux)
function FchoixUtilisateur(_choixUtilisateur) {

        if(_choixUtilisateur == "pierre") {
            _choixUtilisateur = "pierre";
        }
        else if(_choixUtilisateur == "feuille") {
            _choixUtilisateur = "feuille";
        }
        else if(_choixUtilisateur == "ciseaux") {
            _choixUtilisateur = "ciseaux";
        }
        return _choixUtilisateur;
}
//creation function choix ordi aléatoire (pierre, feuille ou ciseaux)
function FchoixOrdi() {
	//retourne un nombre aléatoire entre de 0 a 8
    var choixOrdi = Math.floor(Math.random() * 9);
// si le choix est strictement inférieur a 4 (0,1,2)
        if (choixOrdi < 3) {
            choixOrdi = "pierre";
        }
// si le choix est strictement supérieur a 3 et inférieur a 7 (3,4,5)
        else if(choixOrdi > 2 && choixOrdi < 6) {
            choixOrdi = "feuille";
        }
// si le choix est strictement supérieur a 6 (6,7,8)
        else if(choixOrdi > 5) {
            choixOrdi = "ciseaux";
        }
        return choixOrdi;
}


// Comparaison du choix entre utilisateur et celui de l'ordi
function comparer(_choixOrdi, _choixUtilisateur) {
// si les deux choix sont les mêmes alors égalités
    if(_choixUtilisateur == _choixOrdi) {
        afficheur.sendMessage("Il y a égalité.</br>L'ordinateur a choisi " + _choixOrdi);
    }
//si l'utilisateur choisi pierre et que l'ordi prend feuille ou que l'uti choisi pierre et ordi feuille alors joueur gagne.
    else if((_choixUtilisateur == "pierre" && _choixOrdi == "ciseaux") || (_choixUtilisateur == "feuille" && _choixOrdi == "pierre") || (_choixUtilisateur == "ciseaux" && _choixOrdi == "feuille")) {
        afficheur.sendMessage("Vous avez gagné.</br>L'ordinateur a choisi " + _choixOrdi);
        scortU++;
    }
//si l'ordi choisi pierre et que joueur prend feuille ou que l'ordi choisi pierre et joueur feuille alors ordi gagne.
    else if((_choixUtilisateur == "feuille" && _choixOrdi == "ciseaux") || (_choixUtilisateur == "piere" && _choixOrdi == "feuille") || (_choixUtilisateur == "ciseaux" && _choixOrdi == "pierre")) {
        afficheur.sendMessage("Vous avez perdu.</br>L'ordinateur a choisi " + _choixOrdi);
        scortO++;
    }

}

var afficheur = new Afficheur(document.querySelector("#statut-jeu")); // création de l'objet qui va modifier le texte du résultat du jeu

//function nouvellePartie(){
//    scortO = 0;
//    scortU = 0;
//    $('#block-jeu button').css('display', 'block'); // affiche #block-jeu button
//    afficheur.sendMessage("Le jeu peut commencer. choisissez un objet");
//}

function main() {

    // déclaration de notre tableau pions qui va contenir l'ensemble des boutons
    var tabchoixUtilisateur = document.querySelectorAll("#block-jeu button"); // la méthode va selectionner tous les boutons présent dans la div block-jeu et les retourner dans notre tableau pions
	//boucle dans laquelle on dit si la longeur du string tabchoixUtilisateur est supérieur à 0 alors
    for(var i = 0, taille = tabchoixUtilisateur.length; i < taille; i++){

        var finJeu = 0;

        afficheur.sendMessage("Le jeu peut commencer, choisissez un objet"); // modification du message + choix du joueur
//ajout d'une fonction a tabchoixUtilisateur[i] lorsque qu'on click
        tabchoixUtilisateur[i].addEventListener("click", function(){
// on récupère l'id du choix de l'utilisateur (ciseaux, feuille ou pi)
            choixUtilisateur = this.id;
			
            var choixU = FchoixUtilisateur(choixUtilisateur);
            var choixO = FchoixOrdi();
            comparer(choixO, choixU);

            finJeu++;
        });
    }
}

main();