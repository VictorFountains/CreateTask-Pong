const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


const circle = {
    x: 500,
    y: 500,
    size: 15,
    dx: 5,
    dy: 4,
}

function startGame() {
    drawCircle();
    update();
}

function drawCircle() {
    ctx.beginPath()

    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2, true);
    ctx.fillstyle = "#FF0000";
    ctx.fill();
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();

    circle.x += circle.dx;
    circle.y += circle.dy;

    if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {

        if (circle.y > player1.y && circle.y < player1.y + player1.height) {
            circle.dx *= -1;
            console.log('hit')
        } else if (circle.y > player2.y && circle.y < player2.y + player2.height) {
            circle.dx *= -1;
        } else {
            circle.x = 700
            circle.y = 400
            scorePoint();
        }
    } else if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
        circle.dy *= -1;
    }
    requestAnimationFrame(update);
}








const player1 = {
    x: 1,
    y: 450,
    dx: 0,
    dy: 0,
    speed: 8,
    width: 10,
    height: 170
}

const player2 = {
    x: 1904,
    y: 450,
    dx: 0,
    dy: 0,
    speed: 8,
    width: 10,
    height: 170
}

function drawPlayer1() {
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(player1.x, player1.y, player1.width, player1.height)
    ctx.fill;

}



function drawPlayer2() {
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(player2.x, player2.y, player2.width, player2.height)
    ctx.fill;
}

function newPos1() {
    player1.x += player1.dx;
    player1.y += player1.dy;
}

function newPos2() {
    player2.x += player1.dx;
    player2.y += player1.dy;
}

function updatePlayer1() {
    ctx.clearRect(0, 0, player1.width, player1.height);
    drawPlayer1();
    requestAnimationFrame(updatePlayer1);

}

function updatePlayer2() {
    ctx.clearRect(0, 0, player2.width, player2.height);
    drawPlayer2();
    requestAnimationFrame(updatePlayer2);
}

function drawScores(){
   ctx.beginPath();
   ctx.fillStyle = "#ffffff";
    ctx.font = 'px serif';
  ctx.fillText("Hello world", 600, 200);
}
drawScores();


function scorePoint(){
    if (Math.sign(circle.dx) === -1){

        circle.dx *= -1;
    }
    else if (Math.sign(circle.dx) === 1){
        circle.dx *= -1;
    }
}

update();
updatePlayer1();
updatePlayer2();

function moveDownPlayer1() {
    player1.y += player1.speed;
}

function moveUpPlayer1() {
    player1.y -= player1.speed;
}

function moveDownPlayer2() {
    player2.y += player2.speed;
}

function moveUpPlayer2() {
    player2.y -= player2.speed;
}


document.addEventListener('keydown', keyDown)
document.addEventListener('keyup', keyUp)

function keyDown(e) {
    console.log(e.key);
    if (e.key === "ArrowUp")
        moveUpPlayer1();
    else if (e.key === "ArrowDown")
        moveDownPlayer1();
    else if (e.key === "w")
        moveUpPlayer2();
    else if (e.key === "s")
        moveDownPlayer2();
}

function keyUp(e) {
    if (
        e.key == "ArrowUp" ||
        e.key == "ArrowDown"
    ) {
        player1.dy = 0;
    } else if (
        e.key == "w" ||
        e.key == "s"
    ) {
        player2.dy = 0;
    }
}

keyDown();

