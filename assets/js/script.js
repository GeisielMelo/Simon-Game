function playSound(color) {
    switch (color) {
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
        default:
            break;
    }
}

function start() {
    var grid = document.getElementById("grid");
    grid.classList.add("grid-background-green");
    setTimeout(() => {
        grid.classList.remove("grid-background-green");
    }, 400);
}

function reset(){
    var grid = document.getElementById("grid");
    grid.classList.add("grid-background-red");
    setTimeout(() => {
        grid.classList.remove("grid-background-red");
    }, 600);
}