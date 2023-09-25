const panier = {
    pommes : 0,
    poires : 0,
    prunes : 0
}

/* Pour afficher le nombre de pommes dans la facture détaillée
document.querySelector("#qtePommes").textContent = panier.pommes;

*/

//Bouton ajouter une pomme
function addpomme(){
    panier.pommes = panier.pommes + 1;

    document.getElementById("qtePommes").innerHTML = panier.pommes;
    document.getElementById("poidsPommes").innerHTML = panier.pommes * 10;
    document.getElementById("prixPommes").innerHTML = panier.pommes * 13.50;

}

//Bouton ajouter une poire
function addpoire(){
    panier.poires = panier.poires + 1;

    document.getElementById("qtePoires").innerHTML = panier.poires;
    document.getElementById("poidsPoires").innerHTML = panier.poires * 12;
    document.getElementById("prixPoires").innerHTML = panier.poires * 20.0;

}

//Bouton ajouter une prune
function addprune(){
    panier.prunes = panier.prunes + 1;

    document.getElementById("qtePrunes").innerHTML = panier.prunes;
    document.getElementById("poidsPrunes").innerHTML = panier.prunes * 15;
    document.getElementById("prixPrunes").innerHTML = panier.prunes * 22.0;

}