
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3) +1;
    if (randomNumber === 1) {
        console.log("paper");
    } else if (randomNumber === 2) {
        console.log("rock");
    } else {
        console.log("scissors")
    }
}
getComputerChoice();
