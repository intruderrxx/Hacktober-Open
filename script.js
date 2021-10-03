let dig = "";

function num(digit) {
    dig += digit;
    // console.log(dig);

    document.getElementById("display").innerHTML = dig;

}

function clearcontent() {
    document.getElementById("display").innerHTML = "0";
    dig = 0;
}
console.log(dig)

function equalsto() {
    document.getElementById("display").innerHTML = eval(dig)
}


// function operation(operand) {
//     dig += operand
//     document.getElementById("display").innerHTML = dig;


// }