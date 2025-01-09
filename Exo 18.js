let n,Clim;
const Api_Climat=await fetch("https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&hourly=temperature_2m&start_date=2025-01-09&end_date=2025-01-09");
const Climat_resultat=await Api_Climat.json();
for (n in Climat_resultat.hourly_units.time){
    if (Climat_resultat.hourly_units.time[n]=="2025-01-09"){
        Clim=Climat_resultat.hourly_units.time[n];
    }
}
console.log(Clim);
