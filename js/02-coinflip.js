
var output;
var choice;
var coinFlip = parseInt(Math.random() * 10);

coinFlip <= 5 ? output = "heads" : output = "tails";
choice = window.prompt("Heads or Tails?");
choice = choice.toLowerCase();

if(output === "heads" && choice === "heads"){
    window.alert("The flip was heads and you chose heads...you win!");
}
else if(output === "heads" && choice === "tails"){
    window.alert("The flip was heads but you chose tails...you lose!");
}
else if(output === "tails" && choice === "heads"){
    window.alert("The flip was tails but you chose heads...you lose!");
}
else if(output === "tails" && choice === "tails"){
    window.alert("The flip was tails and you chose tails...you win!");
}
else{
    window.alert("Invalid choice. Please enter Heads or Tails");
}