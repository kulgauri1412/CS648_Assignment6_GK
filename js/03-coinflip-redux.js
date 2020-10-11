var coinflip;
for(var i=1; i<=10; i++){
    coinflip = (Math.random()>0.5)? 1 : 0;
    if(coinflip == 0) {
        console.log("Heads");
    }
    else
    {
        console.log("Tails");
    } 
}