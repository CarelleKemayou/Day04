let a,b,c,d;
a=10;
b=20;
c=30;
d=40;
const Liste_chiffre=[a,b,c,d];
Taille=Liste_chiffre.length;
somme=0;
console.log("Le nombre d'elements est de",Taille);
for (y in Liste_chiffre) {    
    somme=somme+Liste_chiffre[y];
}
console.log("la somme des elements est",somme);

moyenne=somme/Taille;
console.log("la moyenne des elements est",moyenne);
for (p in Liste_chiffre){
    if(Liste_chiffre[p]>moyenne){
        console.log("l'element",p,"est superieur a la moyenne");
    }
}