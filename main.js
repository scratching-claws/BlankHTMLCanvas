try {
//Adjust these as you need

const refreshTime = 50
 
const images = [
    "scratchBlock.png"
]

//The code below can be ignored

canvasElement = document.getElementById("mainCanvas")

let width
let height

window.addEventListener("resize",resizeCanvas)

function resizeCanvas(){
    //If the canvas is not resized, it could appear stretched or cropped
    width = window.innerWidth
    height = window.innerHeight
    canvasElement.height = height
    canvasElement.width = width
}

resizeCanvas()

canvas = canvasElement.getContext("2d")
const gameInterval = setInterval(gameLoop,refreshTime)
importImages()

console.error = (e) =>{
    stopAll()
    canvasElement.remove()
    document.writeln(e)
}

function stopAll(){
    clearInterval(gameInterval)
}

function clearCanvas(){
    canvas.fillStyle = "#FFFFFF"
    canvas.fillRect(0,0,width,height)
}

e=""
keyPresses = []

window.addEventListener("onkeydown",handleKey(e))

function handleKey(e){
    if(e.repeat){
        if (!keyPresses[keyPresses.length-1] == e.key){
            keyPresses.push(e.key)
        }
    } else {
        keyPresses.push(e.key)
    }
}

function importImages(){
    for (i in images){
        image = document.createElement("img")
        image.src = images[i]
        image.id = images[i].split(".")[0]
        document.body.appendChild(image)
    }
}

function gameLoop(){
    //Add your code here
    //This code will be run each frame of your game

    clearCanvas()

    canvas.beginPath();
    canvas.moveTo(20, 20);
    canvas.lineTo(20, 100);
    canvas.lineTo(70, 100);
    canvas.stroke();


    //animations can be created by redrawing each frame and moving or changing part of it
    //here, the rectangle is animated, by sizing it based on the current time
    canvas.fillStyle = "red"
    canvas.fillRect(width/2-30,height/2+60,60,Math.sin(Date.now()/100)*50)

    canvas.drawImage(document.getElementById("scratchBlock"),10,10)

    //text
    canvas.font = "20px Poppins";
    canvas.textAlign="center"
    canvas.fillText("Welcome to HTML canvas!", width/2, height/2-60);

    keyPresses = []
}
} catch (e){
    console.error(e)
}