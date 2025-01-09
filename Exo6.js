let Chiffres,Min,Max;
Chiffres=[10,15,32,94,51,27,9,65,34,85];
Min=Chiffres[0]
Max=Chiffres[0]
for (n in Chiffres){
    if (Chiffres[n]<Min){
        Min=Chiffres[n];
    }
  if (Chiffres[n]>Max){
        Max=Chiffres[n];
    }
}
console.log("Min=",Min)
console.log("Max=",Max)