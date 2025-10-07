const canvas = document.querySelector("canvas");
canvas.width = 800;
canvas.height = 800;

const ctx = canvas.getContext("2d");

ctx.fillRect(200 - 40, 200 - 20, 15, 100);
ctx.fillRect(350 - 40, 200 - 20, 15, 100);
ctx.fillRect(260 - 40, 200 - 20, 60, 200);

ctx.arc(250, 100, 50, 0, 2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(260 + 10, 80, 8, Math.PI, 2*Math.PI);
ctx.arc(220 + 10, 80, 8, Math.PI, 2*Math.PI);
ctx.fillStyle = "aqua";
ctx.fill();
