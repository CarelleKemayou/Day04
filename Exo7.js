Chiffres=[10,15,32,94,51,27,9,65,34,85];
Taille=Chiffres.length;
somme=0;
console.log("Le nombre d'elements est de",Taille);
if (Chiffres){
for (y in Chiffres) {    
    somme=somme+Chiffres[y];
    moyenne=somme/Taille;
}
console.log("la moyenne du tableau",moyenne);
}else{
    console.log("Le tableau est vide");
}




