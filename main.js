console.log("The user provides a number. The program should display two distinct output messages: if the given number is divisible by 3 (first output) and if the number is divisible by 5 (second output");



let userNr = prompt("Please provide a number and i will tell if is divisible by 3 or by 5 !");
userNr = Number(userNr);

debugger;

if (userNr % 3 === 0) {
    alert(`${userNr} is divisible by 3`);
} else {
   alert(`${userNr} is not divisible by 3`);
}

if (userNr % 5 === 0) {
    alert(`${userNr} is divisible by 5`);
} else {
    alert(`${userNr} is not divisible by 5`);
}



