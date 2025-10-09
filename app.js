const canvas = document.querySelector("canvas");
canvas.width = 800;
canvas.height = 800;

const ctx = canvas.getContext("2d");
ctx.lineWidth = 2;
let isPainting = false;

function onMove(event) {
    if(isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    } else {
        ctx.moveTo(event.offsetX, event.offsetY);
    }
    
}

function startLining() {
    isPainting = true;
}

function endLining() {
    isPainting = false;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startLining);
canvas.addEventListener("mouseup", endLining);
canvas.addEventListener("mouseleave", endLining);