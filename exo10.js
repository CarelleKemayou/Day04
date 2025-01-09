let Tour,x,Min,Max;
Tour=0;
Chiffres=[];
Min=Chiffres[0];
Max=Chiffres[0];
compteur=0;
while (Tour<=100){
    x=Math.random()*101;
    Chiffres.push(x);
    Tour+=1;
}
console.log(Chiffres);
Taille=100;
somme=0;
compteur=0;
console.log("Le nombre d'elements est de",Taille);
for (y in Chiffres){    
    somme=somme+Chiffres[y];
}
console.log("la somme des elements est",somme);
moyenne=somme/Taille;
console.log("La moyenne des elements est",moyenne);
for (n in Chiffres){
    if (Chiffres[n]<Min){
        console.log("yo")
        Min=Chiffres[n];
    }
  if (Chiffres[n]>Max){
        Max=Chiffres[n];
    }
}
console.log("Min=",Min);
console.log("Max=",Max);
console.log("le nombre min du trage est",Min);
console.log("le nombre max du trage est",Max);
for (y in Chiffres){
    if (Chiffres[y]%2==0){
        compteur+=1;
    }
}
console.log("les nombres pair apparaisent",compteur,"fois");


