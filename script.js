var wins = 0;
var losses = 0;
var ties = 0;
document.getElementById("rock").addEventListener("click", function () {
    check("r");
});
document.getElementById("paper").addEventListener("click", function () {
    check("p");
});
document.getElementById("scissors").addEventListener("click", function () {
    check("s");
});

function throwPaper() {
    thrown = "p";
    check();
}

function throwScissors() {
    thrown = "s";
    check();
}
var options = ["rock", "paper", "scissors"]

function check(thrown) {
    var rand = Math.floor(Math.random() * 3);
    var mythrow = "rps".indexOf(thrown) - rand + 1;
    if (mythrow == -1) mythrow = 2;
    if (mythrow == 3) mythrow = 0;
    document.getElementById("message").innerHTML = "You threw " + options["rps".indexOf(thrown)] + ", I threw " + options[mythrow] + ". You ";
    if (rand == 0) {
        losses++;
        document.getElementById("message").innerHTML += "lost.";
    }
    if (rand == 1) {
        ties++;
        document.getElementById("message").innerHTML += "tied.";
    }
    if (rand == 2) {
        wins++;
        document.getElementById("message").innerHTML += "won.";
    }
    document.getElementById("WTL").innerHTML = "Wins: " + wins + ", Ties: " + ties + ", Losses: " + losses;
}