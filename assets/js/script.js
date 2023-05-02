let sequence = [];
let sequencePressed = [];
let points = 0;
let maxPoints = 0;

// Get button pressed.
var numberOfDrumButtons = document.querySelectorAll(".div-pressed").length;
for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".div-pressed")[i].addEventListener("click",
        function(event) {
        btnName = this.innerHTML;
        playerPress(btnName);
    }); 
}

// Compare the pressed button with the randomly generated color.
function playerPress(button) {
    const btnPressed = button;
    addColorInSequencePressed(btnPressed);

    if (!isListLengthEqual(sequence.length, sequencePressed.length)) {
        return;
    }

    if (isColorSequenceEqual(sequence.length, sequencePressed.length)) {
        resetSequencePressed();
        addPoint();
        addMaxPoints();
        setTimeout(() => {
            guess();
        }, 600);
    } else {
        resetPoints();
        loseGame(); 
    }
}

// Compare the lists size.
function isListLengthEqual(listLengthA, listLengthB) {
    if (listLengthA !== listLengthB) {
        return false;
    } else {
        return true;
    }
}

// Compare the sequence of color pressed with the randomly generated colors.
function isColorSequenceEqual(valueA, valueB) {
    for (let i = 0; i < valueA; i++) {
        if (sequencePressed[i] !== sequence[i]) {
            return false;
        }
    }
    return true;
}

// Play the sound that match with the color.
function playSound(value) {
    switch (value) {
        case 'red':
            var audio = new Audio('./sounds/red.mp3');
            audio.play();
            break;
        case 'green':
            var audio = new Audio('./sounds/green.mp3');
            audio.play();
            break;
        case 'yellow':
            var audio = new Audio('./sounds/yellow.mp3');
            audio.play();
            break;
        case 'blue':
            var audio = new Audio('./sounds/blue.mp3');
            audio.play();
            break;
        case 'wrong':
            var audio = new Audio('./sounds/wrong.mp3');
            audio.play();
            break;
        default:
            break;
    }
}

//Send a color to btnFlash function.
function flashColor(color) {
    const green = "grid-background-green";
    const red = "grid-background-red";
    const yellow = "grid-background-yellow";
    const blue = "grid-background-blue";

    switch (color) {
        case 'green':
            btnFlash(green, color);
            break;
        case 'red':
            btnFlash(red, color);
            break;
        case 'yellow':
            btnFlash(yellow, color);
            break;
        case 'blue':
            btnFlash(blue, color);
            break;
        default:
            alert("Some error has detect. Resetting game...")
            reset()
            break;
    }

}

// Flash the color sended by flashColor function.
function btnFlash(background, id) {
    var grid = document.getElementById(id);
    grid.classList.add(background);
    setTimeout(() => {
        grid.classList.remove(background);
    }, 400);
}

// Create a random color and return it.
function randomColors() {
    const colors = ["green", "red", "blue", "yellow"]
    var color = colors[Math.floor((Math.random() * colors.length))];
    return color;
}

// Write a color string on a temporary sequence list "sequence = [];".
function addColorInSequenceList(color) {
    return sequence.push(color);
}

// Write a color string on a temporary sequence list "sequence = [];".
function addColorInSequencePressed(color) {
    return sequencePressed.push(color);
}

// Flash the green light.
function greenLight() {
    var grid = document.getElementById("grid");
    grid.classList.add("background-green-light");
    setTimeout(() => {
        grid.classList.remove("background-green-light");
    }, 400);
}

// Flash the red light.
function redLight() {
    var grid = document.getElementById("grid");
    grid.classList.add("background-red-light");
    setTimeout(() => {
        grid.classList.remove("background-red-light");
    }, 600);
}

// Reset functions.
function resetSequence() {
    return sequence = [];
}

function resetSequencePressed() {
    return sequencePressed = [];
}

function resetPoints() {
    points = 0;
    return writePoints()
}

function clear() {
    resetSequence();
    resetSequencePressed();
}

// Create a new random choice.
function guess() {
    const color = randomColors();
    flashColor(color);
    playSound(color);
    addColorInSequenceList(color);
}

// Flash red light and play wrong sound effect after delay.
function loseGame() {
    redLight();
    setTimeout(() => {
        playSound('wrong');
    }, 200)
    clear();
}

// add 1 point.
function addPoint() {
    points += 1
    writePoints()
}

// set max record.
function addMaxPoints() {
    if (points > maxPoints) {
        maxPoints = points;
    }
    writeScore()
}

// Write the score on the screen.
function writePoints() {
    document.getElementById("score").innerHTML = points
}

// Write the max score on the screen.
function writeScore() {
    document.getElementById("max-score").innerHTML = maxPoints
}

// Start a new game.
function start() {
    clear();
    greenLight();
    setTimeout(() => {
        guess();
    }, 500)
}

// Reset the game.
function reset() {
    redLight();
    clear();
}
