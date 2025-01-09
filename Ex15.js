let Panier,Somm_Prix=0;
Panier=[
    {
        Nom:"Savon",
        Prix:20,
        Quantite:13
    },{
        Nom:"Patate",
        Prix:19,
        Quantite:17
    },{
        Nom:"Clementine",
        Prix:19,
        Quantite:15
    }
    ]
Somm_Prix=0;
for (n in Panier){
    Somm_Prix+=Panier[n].Prix*Panier[n].Quantite;
}
console.log("Le prix totale du panier est de",Somm_Prix);
Panier.push({Nom:"Pasteque",Prix:13,Quantite:16})
console.log("Le nouveau panier est",Panier)
for(n in Panier){
    if (Panier[n].Nom=="Patate"){
        delete Panier[n]
    }
}
console.log("Le nouveau panier est",Panier)