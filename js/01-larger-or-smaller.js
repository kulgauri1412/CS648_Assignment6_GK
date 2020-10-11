var first_num;
var second_num;

first_num = parseInt(window.prompt("Please enter first number"));
second_num = parseInt(window.prompt("Please enter second number"));


    if(first_num > second_num) {
        window.document.write(first_num + " is Larger");
    }
    else if(first_num < second_num) {
        window.document.write(second_num + " is Larger");
    }
    else if(first_num == second_num){
        window.document.write("Both numbers are Equal!");
    }
    else{
    window.alert("Please enter valid number");
    }