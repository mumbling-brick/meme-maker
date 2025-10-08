const canvas = document.querySelector("canvas");
canvas.width = 800;
canvas.height = 800;

const colors = [
    "#ffb8b8",
    "#ff3838",
    "#ff9f1a",
    "#c56cf0",
    "#32ff7e",
    "#fff200",
    "#18dcff",
    "#7efff5",
    "#7d5fff",
];

const ctx = canvas.getContext("2d");
ctx.lineWidth = 2;

function onClick(event) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    const color = colors[Math.floor(Math.random()*colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("mousemove", onClick);
