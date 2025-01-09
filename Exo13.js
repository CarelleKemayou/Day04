function calculer(Valeur_1,Valeur_2,Operation){
    if (Operation=="+"){
        console.log("Somme",Valeur_1 + Valeur_2);
    }
    if (Operation=="-"){
        console.log("Difference",Valeur_1 - Valeur_2);
    }
    if (Operation=="/"){
        console.log("Quotient",Valeur_1 /Valeur_2);
    }
    if (Operation=="*"){
        console.log("Produit",Valeur_1 *Valeur_2);
    }
    if (Valeur_2==0){
        console.log("Division par zéro ,impossible");
    }

}
calculer(12,22,"*")