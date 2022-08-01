
var time_played = localStorage.getItem("TimePlayed");
var ascends = localStorage.getItem("ArrowsClimbed");
var descends = localStorage.getItem("SnakesEaten");
arrayarrow = localStorage.getItem("ArrowArray");
arraysnake = localStorage.getItem("SnakeArray");
arraytile = localStorage.getItem("TileArray");

const duration = timeplayed;
const total_asend = ascends;
const total_snakes = descends;

arrowArray = ["arrow 1", "arrow 2"]
snakeArray = ["snake 1", "snake 2"]
tiles = [{ name: "first tile" }, { name: "second tile" }]


function getTimePlayed() {
    return duration.toFixed(0)
}
function getNumberofArrows() {
    return total_asend
}
function getTypesOfArrowsHTML() {
    var text = "<ul>"
    for (const arrow of arrayarrow) {
        text += `<li>${arrow}</li>`
    }
    text += "</ul>"
    return text
}
function getNumberofSnakes() {
    return total_snakes
}
function getTypesOfSnakesHTML() {
    var text = "<ul>"

    for (const snake of arraysnake) {
        text += `<li>${snake}</li>`
    }
    text += "</ul>"
    return text
}

function getTiles() {
    var text = "<ul>"
    var i = 0
    for (const tile of arraytile) {
        i += 1
        text += `<li>${i}. ${tile.name}</li>`
    }
    text += "</ul>"
    return text
}
// 

function onload() {
    var timeplayedDiv = document.getElementById("play-time")
    var arrowsDiv = document.getElementById("arrow-ascended")
    var typesOfArrowsDiv = document.getElementById("types-of-arrows-ascended")
    var snakesDiv = document.getElementById("snakes-swallowed")
    var typesOfSnakesDiv = document.getElementById("types-of-snakes-swallowed")
    var tilesDiv = document.getElementById("tiles")

    timeplayedDiv.innerText = time_played;
    arrowsDiv.innerText = ascends;
    typesOfArrowsDiv.innerHTML = getTypesOfArrowsHTML()
    snakesDiv.innerText = descends;
    typesOfSnakesDiv.innerHTML = getTypesOfSnakesHTML()
    tilesDiv.innerHTML = getTiles()
	
    //var timeoutvar = setTimeout(function(){location.href ="Feedback.html"}, 30000)
}

window.addEventListener("load", onload)

