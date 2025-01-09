let Fruits,com_Pomme,com_banane,com_Raisin,com_Orange,Fruits_objets,Nom_Fruit_2,Nom_Fruit;
Fruits=["Pomme", "Banane", "Orange", "Pomme", "Raisin", "Banane", "Banane"]
com_Orange=0
com_Pomme=0
com_Raisin=0
com_banane=0
Fruits_objets=[]
for (n in Fruits){
    if (Fruits[n]=="Orange"){
        com_Orange+=1;
    }
    if (Fruits[n]=="Pomme"){
        com_Pomme+=1;
    }
    if (Fruits[n]=="Raisin"){
        com_Raisin+=1;
    }
    if (Fruits[n]=="Banane"){
        com_banane+=1;
    }

}console.log("il y'a ",com_Orange,"Orange",com_Pomme,"pommes",com_Raisin,"Raisin",com_banane,"Bananes");
Orange= {Nom:"Orange",Votes:com_Orange}
Pomme= {Nom:"Pomme",Votes:com_Pomme}
Raisin= {Nom:"Orange",Votes:com_Raisin}
Banane={Nom:"Banane",Votes:com_banane}
Fruits_objets.push(Orange,Pomme,Raisin,Banane);
Max=Fruits_objets[0].Votes
Min=Fruits_objets[0].Votes;
Nom_Fruit=Fruits_objets[0].Nom;
Nom_Fruit_2=Fruits_objets[0].Nom;
console.log("Liste fruit et votes",Fruits_objets);
for (n in Fruits_objets){
    if (Fruits_objets[n].Votes<Min){
        Min=Fruits_objets[n].Votes;
        Nom_Fruit=Fruits_objets[n].Nom;
        
    }
    if (Fruits_objets[n].Votes>Max){
        Max=Fruits_objets[n].Votes;
        Nom_Fruit_2=Fruits_objets[n].Nom;
}
}
console.log("La Vote minimimale est de",Min,"et appartient a ",Nom_Fruit,"Et la vote max est de",Max,"et appartient a",Nom_Fruit_2);