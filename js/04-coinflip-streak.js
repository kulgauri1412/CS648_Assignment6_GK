var coinflip;
do{

    coinflip = (Math.random()>0.5)? 1 : 0;
    if(coinflip == 0) {
        console.log("Heads");
    }
    else
    {
        console.log("Tails");
    } 


}
while(coinflip!=1)