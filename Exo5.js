let Phrase,x,Y,compteur,Tour;
Phrase="Bonjour tout le monde!"
x="ou";
Y="er";
compteur=0;
Tour=0;
console.log(Phrase);
let Nouvelle_phrase;
for (n in Phrase){
    compteur+=1
}
while(Tour<compteur){
Nouvelle_phrase=Phrase.replace(x,Y);
Phrase=Nouvelle_phrase;
Tour+=1;
}
console.log(Phrase);