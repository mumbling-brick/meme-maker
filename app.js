const canvas = document.querySelector("canvas");
canvas.width = 800;
canvas.height = 800;

const ctx = canvas.getContext("2d");

ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.lineTo(200, 200);
ctx.lineTo(100, 200);
ctx.lineTo(100, 100);

ctx.fillStyle = "red";
ctx.fill();