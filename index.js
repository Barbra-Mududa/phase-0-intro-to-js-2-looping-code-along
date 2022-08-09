// Code your solutions in this file
function writeCards(names=["Guadalupe", "Ollie", "Aki"], events = "surprose") {
    let returnSpy = [];
    for(let i = 0; i < names.length; i++) {
        returnSpy.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
    }
    return returnSpy;
}
console.log(writeCards())

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}
countDown(4)
