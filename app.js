const canvas = document.querySelector("canvas");
canvas.width = 800;
canvas.height = 800;

const ctx = canvas.getContext("2d");
ctx.lineWidth = 5;
let isPainting = false;

const lineWidth = document.getElementById("line-width");
function LineWidthSelection(event) {
    ctx.lineWidth = event.target.value;
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

canvas.addEventListener("mousemove", drawLining);
canvas.addEventListener("mousedown", startLining);
canvas.addEventListener("mouseup", endLining);
canvas.addEventListener("mouseleave", endLining);


lineWidth.addEventListener("change", LineWidthSelection);