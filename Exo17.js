const Api=await fetch("https://official-joke-api.appspot.com/random_joke");
const Blague=await Api.json();
console.log(Blague);