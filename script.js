 const quotes = [ {
    quote: `"Ce qui compte, chez un homme ,ce n'est pas la couleur de peau ou la texture de sa chevelure, mais la texture et la qualité de som âme. "`, 
    auteur: `~Martin Luther KING`
 },
 {
    quote: `"Il faut toujours viser la lune ,car même en cas d'échec on atterrit dans les étoiles. "`, 
    auteur: `-Oscar WILDE` 
 },
 {
    quote: `"Le succés n'est pas la clé du bonheur. Le le bonheur est la clé du succés.Si vous aimez ce que vous faites,Vous réussirez "`, 
    auteur: `~Albert SCHWEITZER` 
 },
 {
    quote: `"La plus grande erreur que vous puissiez faire, c'est de ne pas faire d'erreurs ."`, 
    auteur: `~John Fitzgerald KENNEDY` 
 },
 {
    quote: `"Essai de devenir ce que tu veut plutôt que de devenir ce qu'ils veulent que tu sois. "`, 
    auteur: `~Bob MARLEY` 
 },
 {
    quote: `"Je ne perds jamais. Soit je gagne, soit j'apprends."`, 
    auteur: `~Nelson MANDELA` 
 },
 {
    quote: `"L'éducation est l'arme la plus puissante qu'on puisse utiliser pour changer le monde. "`, 
    auteur: `~Nelson MANDELA` 
 },
 {
    quote: `"Vis comme si tu devais mourir demain.Apprends comme si tu devais vivre toujours. "`, 
    auteur: `~Mahatma GANDHI` 
 },
 {
    quote: `"Commencez par changer en vous ce que vous voulez changer autour de vous. "`, 
    auteur: `~Mahatma GANDHI` 
 },
 {
    quote: `"Le futur dépend de ce que nous faisons au présent. "`, 
    auteur: `~Mahatma GANDHI` 
 },
 {
    quote: `"Au moment ou j'avais réussi à trouver toutes les réponses, toutes les questions ont changé."`, 
    auteur: `~Paule COELHO` 
 },
 {
    quote: `" Cela semble toujours impossible , Jusqu'à ce qu'on le fasse"`, 
    auteur: `~Nelson MANDELA` 
 },

]
 let btn = document.querySelector(".next");
 let quote = document.querySelector(".quote");
 let auteur= document.querySelector(".auteur");

 btn.addEventListener("click", function(){
let random = Math.floor(Math.random() * quotes.length);

quote.innerHTML = quotes[random].quote;
auteur.innerHTML = quotes[random].auteur;
 })


 





