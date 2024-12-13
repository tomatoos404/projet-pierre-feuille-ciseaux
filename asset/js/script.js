let header = document.querySelector("header")
let psodo = document.querySelector(".psodo")
let playerChoice = document.querySelector(".player-choice")
let mapChoice = document.querySelector(".map-choice")
let fight = document.querySelector(".fight")
let play = document.querySelector(".play a")

let startInput = document.querySelector("#start")
let selectPlayer = document.querySelector("#select_button_player")
let selectMap = document.querySelector("#select_button_map")

let imgSelected = document.querySelector(".img-selected img")

psodo.style.display="none"
playerChoice.style.display ="none"
mapChoice.style.display ="none"
fight.style.display ="none"

play.addEventListener('click',()=>{
    header.style.display ="none"
    playerChoice.style.display ="none"
    mapChoice.style.display ="none"
    fight.style.display ="none"
    psodo.style.display="flex"
})

startInput.addEventListener('click',()=>{
    header.style.display ="none"
    psodo.style.display ="none"
    mapChoice.style.display ="none"
    fight.style.display ="none"
    playerChoice.style.display="block"
})

selectPlayer.addEventListener('click',()=>{
    header.style.display ="none"
    psodo.style.display ="none"
    playerChoice.style.display ="none"
    fight.style.display ="none"
    mapChoice.style.display="block"
})

selectMap.addEventListener('click',()=>{
    header.style.display ="none"
    psodo.style.display ="none"
    playerChoice.style.display ="none"
    mapChoice.style.display ="none"
    fight.style.display="block"
})

let nameInput = document.querySelector("#name")
let nameInPlayerChoice = document.querySelector(".name-of-player")

let imgPlayer = document.querySelector(".perso-select img")

imgPlayer.addEventListener('click',(e)=>{
    console.log();
    
    if(e.target.dataset.id=="1"){
        imgSelected.src="/asset/img/Zangief-personnage-street-fighter.gif"
    }
})









// // Fonction pour obtenir le choix de l'ordinateur
// function getComputerChoice() {
//     const choices = ['Pierre', 'Papier', 'Ciseaux'];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
//   }
  
//   // Fonction pour déterminer le gagnant
//   function determineWinner(playerChoice, computerChoice) {
//     if (playerChoice === computerChoice) {
//         return "Égalité!";
//     }
//     if (
//         (playerChoice === 'Pierre' && computerChoice === 'Ciseaux') 
//         (playerChoice === 'Papier' && computerChoice === 'Pierre') 
//         (playerChoice === 'Ciseaux' && computerChoice === 'Papier')
//     ) {
//         return "Vous avez gagné!";
//     } else {
//         return "L'ordinateur a gagné !";
//     }
//   }
  
//   // Fonction principale du jeu
//   function playGame(playerChoice) {
//     const computerChoice = getComputerChoice();
//     document.getElementById('gameScore').innerText = Vous avez choisi: ${playerChoice}\nL'ordinateur a choisi: ${computerChoice};
//     const result = determineWinner(playerChoice, computerChoice);
//     document.getElementById('gameScore').innerText += \n${result};
//   }
  
//   // Ajout des écouteurs d'événements aux images
//   document.getElementById('pierre').addEventListener('click', () => playGame('Pierre'));
//   document.getElementById('papier').addEventListener('click', () => playGame('Papier'));
//   document.getElementById('ciseaux').addEventListener('click', () => playGame('Ciseaux'));
