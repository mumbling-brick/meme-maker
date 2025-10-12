const canvas = document.querySelector("canvas");
canvas.width = 800;
canvas.height = 800;
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

const ctx = canvas.getContext("2d");
ctx.lineWidth = 5;
ctx.lineCap = "round";
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
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

const resetBtn = document.getElementById("reset-btn");
function onResetBtnClick() {
    ctx.fillStyle = "#808080";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

const eraseBtn = document.getElementById("erase-btn");
function onEraseBtnClick() {
    ctx.strokeStyle = "#808080";
    isFilling = false;
    modeBtn.innerText = "Fill";
}

const saveBtn = document.getElementById("save");
function onSaveBtnClick() {
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download = "myDrawing.png";
    a.click();
}


const fileInput = document.getElementById("file");
function onFileChange(event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.onload = function() {
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        fileInput.value = null;
    };
}

const textInput = document.getElementById("text");
function onDoubleClick(event) {
    const text = textInput.value;
    if(text !== "") {
        ctx.save();
        ctx.lineWidth = 1;
        ctx.font = "68px serif";
        ctx.fillText(text, event.offsetX, event.offsetY);
        ctx.restore();
    } else {
        return
    }
}


canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", drawLining);
canvas.addEventListener("mousedown", startLining);
canvas.addEventListener("mouseup", endLining);
canvas.addEventListener("mouseleave", endLining);
canvas.addEventListener("click", onCanvasClick);

lineWidth.addEventListener("change", LineWidthSelection);

Color.addEventListener("change", ColorSelection);
ColorOptions.forEach(color => color.addEventListener("click", onColorCLick));
modeBtn.addEventListener("click", onModeClick);
resetBtn.addEventListener("click", onResetBtnClick);
eraseBtn.addEventListener("click", onEraseBtnClick);
saveBtn.addEventListener("click", onSaveBtnClick);

fileInput.addEventListener("change", onFileChange);