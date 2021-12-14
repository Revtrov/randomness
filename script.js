 let canvas = document.getElementById("canvas"),
     ctx = canvas.getContext("2d");
 canvas.width = window.innerWidth * 2;
 canvas.height = window.innerHeight * 2;
 // var centerX = canvas.width / 2;
 // var centerY = canvas.height / 2;
 var radius = getRandomInt(10, 100);
 var color = "green";
 // let clicked;
 // document.addEventListener("mousemove", (event) => {
 //     centerX = event.clientX * 2; // Gets Mouse X
 //     centerY = event.clientY * 2; // Gets Mouse Y
 // });
 function getRandomInt(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
 }
 setInterval(() => {
     //     color = "red";
     //     clicked = true;
     ctx.beginPath();
     ctx.fillStyle = "blue";
     ctx.fillRect(0, 0, canvas.width, canvas.height);
     ctx.fill();
     ctx.stroke();
     let circlePos = [getRandomInt(0, canvas.width), getRandomInt(0, canvas.height)],
         grd;
     for (let i = 0; i <= 1000; i++) {
         radius = getRandomInt(10, 100)
         ctx.beginPath();
         circlePos = [getRandomInt(0, canvas.width), getRandomInt(0, canvas.height)]
         ctx.arc(circlePos[0], circlePos[1], radius, 0, 2 * Math.PI, false);
         grd = ctx.createRadialGradient(circlePos[0], circlePos[1], radius, circlePos[0], circlePos[1], radius / 10);
         grd.addColorStop(1, "red");
         grd.addColorStop(0.9, "rgba(255, 0, 0, 0.9)");
         grd.addColorStop(0.8, "rgba(255, 0, 0, 0.8)");
         grd.addColorStop(0.7, "rgba(255, 0, 0, 0.7)");
         grd.addColorStop(0.6, "rgba(255, 0, 0, 0.6)");
         grd.addColorStop(0.5, "rgba(255, 0, 0, 0.5)");
         grd.addColorStop(0.1, "rgba(255, 0, 0, 0.1)");
         grd.addColorStop(0, "rgba(255, 0, 0, 0.0)");
         ctx.fillStyle = grd;
         ctx.fill();
     }


 }, 50);
 // document.addEventListener("mouseup", (event) => {
 //     color = "green";
 //     clicked = false;
 // });
 // document.onmousemove = () => {
 //     if (clicked == true) {
 //         ctx.beginPath();
 //         /*ctx.fillStyle = "white";
 //         ctx.fillRect(0, 0, canvas.width, canvas.height);*/
 //         ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
 //         ctx.fillStyle = color;
 //         ctx.fill();
 //         ctx.lineWidth = 5;
 //         ctx.strokeStyle = color;
 //         ctx.stroke();
 //     }
 // }