const minNumber =1;
const maxNumber =100;
const answer = Math.floor(Math.random() * (maxNumber - minNumber)+1)+minNumber;
let attempt = 0;
let guess;
let running = true;
while(running){
    guess = window.prompt(`guess the number between ${minNumber} and ${maxNumber}`);
    if(isNaN(guess)){
        window.alert(`Enter a valid number`);
    }
    else if(guess>maxNumber || guess<minNumber){
        window.alert(`enter the number between the given range`);
    }
    else{
        if(guess>answer){
            attempt++;
            window.alert(`guessed number is too high,Try again`);
        }
        else if(guess<answer){
            attempt++;
            window.alert(`guessed number is too low,Try again`);
        }
        else{
            attempt++;
            window.alert(`you have guessed the correct answer ${answer} and it took ${attempt} attempts for you`);
            running = false;
        }
    }
}