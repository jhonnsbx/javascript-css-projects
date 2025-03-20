function rollDice(){
    const numOfDices = document.getElementById("DicesR").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const images = [];
    const values = [];
    for(let i = 0; i < numOfDices; i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="${value}.png">`);
    }
    diceResult.textContent = `dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join(" ");
    
}