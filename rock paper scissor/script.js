choice = ["Rock","Paper","Sci"];
let resultValue = document.getElementById("result");
const player = document.getElementById("player");
const com = document.getElementById("computer");
let playerscore =0;
let computerscore =0;

const rock = document.getElementById('r');
const paper = document.getElementById('p');
const sis = document.getElementById('s');

function action(playerchoice){
    let Comchoice = choice[Math.floor(Math.random()*3)];
    console.log(Comchoice);
    console.log(playerchoice);
    let result =""
    if(playerchoice === Comchoice){
        result = `It's a Tie`;
    }
    else{
        switch(playerchoice){
            case `Rock`:
                result = Comchoice === `Sci`? `You Win` : `You Lost`;
                break;
            case `Paper`:
                result = Comchoice ===`Rock`? `You Win` : `You Lost`;
                break;
            case `Sci`:
                result = Comchoice ===`Paper`? `You Win` : `You Lost`;
                break;
        }
    }
    document.getElementById("player1").textContent = `Player: ${playerchoice}`; 
    document.getElementById("computer1").textContent = `Computer: ${Comchoice}`; 
    resultValue.textContent = result;
    resultValue.classList.remove("greentext","redtext")
    switch(result){
        case `You Win`:
            resultValue.classList.add("greentext");
            playerscore++;
            console.log("hi");
            break;
        case `You Lost`:
            resultValue.classList.add("redtext");
            computerscore++;
            console.log('bye')
            break;
    }
    document.getElementById("player").textContent = `Player: ${playerscore}`; 
    document.getElementById("computer").textContent = `Computer: ${computerscore}`; 

}