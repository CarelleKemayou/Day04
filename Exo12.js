let Personne;
Personne={
    Nom:"Alice",
    Age:30,
    Adresse:{
        rue:"du Dino",
        ville:"Pasteque",
        code_postale:"12475",
    },
    Hobby:["Lecture", "Natation", "Voyages"]
}
console.log(Personne);
Personne.Hobby.push("Flemmarder")
console.log(Personne);
console.log(Personne);
console.log(Personne.Age=22);
console.log(Personne);
delete Personne.Adresse.code_postale;
console.log(Personne);
