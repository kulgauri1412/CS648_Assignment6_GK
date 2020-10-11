for(var i = 1; i <= 100; i++) {
    var output = "" + i ;

    if(i % 3 == 0){
        output += ": Marco!";
    }
    else if(i % 5 == 0){
        output += ": Polo!";
    }
    document.write(output + "<br>");
}
