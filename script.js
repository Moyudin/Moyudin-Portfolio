var professions = ["Web Developer.", "Programmer."];
var currentProfessionIndex = 0;

function changeProfession() {
    var professionElement = document.getElementById("profession");
    currentProfessionIndex = (currentProfessionIndex + 1) % professions.length;
    professionElement.textContent = professions[currentProfessionIndex];
}

setInterval(changeProfession, 3000);