let Etudiants,Max,Min,Nom_etu,Nom_etu_2,Taille,Somme,Moyenne;
Etudiants=[
{
    Nom:"Adam",
    Age:20,
    Note:13
},{
    Nom:"Emilie",
    Age:19,
    Note:17
},{
    Nom:"Clement",
    Age:19,
    Note:15
}
]
Max=Etudiants[0].Note;
Min=Etudiants[0].Note;
Nom_etu=Etudiants[0].Nom;
Nom_etu_2=Etudiants[0].Nom;
Taille=Etudiants.length
Somme=0;
for (n in Etudiants){
    if (Etudiants[n].Note<Min){
        Min=Etudiants[n].Note;
        Nom_etu=Etudiants[n].Nom;
        
    }
    if (Etudiants[n].Note>Max){
        Max=Etudiants[n].Note;
        Nom_etu_2=Etudiants[n].Nom;
    }
    if (Etudiants[n].Note>15){
        console.log(Etudiants[n].Nom,"a une note supperieure a 15");
    }
    Somme+=Etudiants[n].Note;
}
Moyenne=Somme/Taille;
console.log("La note minimimale est de",Min,"et appartient a ",Nom_etu,"Et la note max est de",Max,"et appartient a",Nom_etu_2);
console.log("La moyenne est de ",Moyenne);