const canvas = document.querySelector("canvas");
canvas.width = 800;
canvas.height = 800;

const ctx = canvas.getContext("2d");
ctx.lineWidth = 5;
let isPainting = false;
let isFilling = false;


const lineWidth = document.getElementById("line-width");
function LineWidthSelection(event) {
    ctx.lineWidth = event.target.value;
}

const Color = document.getElementById("color");
function ColorSelection(event) {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}
const ColorOptions = Array.from(document.getElementsByClassName("color-option"));
function onColorCLick(event) {
    const colorValue = event.target.dataset.color; 
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    Color.value = colorValue;
}


function drawLining(event) {
    if(isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    } else {
        ctx.beginPath();
        ctx.moveTo(event.offsetX, event.offsetY);
    }
}
function startLining() {
    isPainting = true;
}
function endLining() {
    isPainting = false;
}

const modeBtn = document.getElementById("mode-btn");
function onModeClick() {
    if(isFilling) {
        isFilling = false;
        modeBtn.innerText = "Fill";
    } else {
        isFilling = true;
        modeBtn.innerText = "Draw";
    }
}
function onCanvasClick() {
    if(isFilling) {
        ctx.fillRect(0, 0, 800, 800);
    }
}


canvas.addEventListener("mousemove", drawLining);
canvas.addEventListener("mousedown", startLining);
canvas.addEventListener("mouseup", endLining);
canvas.addEventListener("mouseleave", endLining);
canvas.addEventListener("click", onCanvasClick);

lineWidth.addEventListener("change", LineWidthSelection);

Color.addEventListener("change", ColorSelection);
ColorOptions.forEach(color => color.addEventListener("click", onColorCLick));
modeBtn.addEventListener("click", onModeClick);