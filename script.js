const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


const circle = {
    x: 500,
    y: 500,
    size: 10,
    dx: 10,
    dy: 7.5,
}

const player1Score = {
    x: 600,
    y: 200,
    value: 0
}

const player2Score = {
    x: 1200,
    y: 200,
    value: 0
}




function startGame() {
    drawAll();
    update();
}

function drawAll() {
    ctx.beginPath()

    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2, true);
    ctx.fillstyle = "#FF0000";
    ctx.fill();

    ctx.fillStyle = "#ffffff"
    ctx.fillRect(player1.x, player1.y, player1.width, player1.height)
    ctx.fill;

    ctx.fillStyle = "#ffffff"
    ctx.fillRect(player2.x, player2.y, player2.width, player2.height)
    ctx.fill;


    ctx.beginPath();
    ctx.fillStyle = "#ffffff";
    ctx.font = '50px serif';
    ctx.fillText(player1Score.value, player1Score.x, player1Score.y);

    ctx.beginPath();
    ctx.fillStyle = "#ffffff";
    ctx.font = '50px serif';
    ctx.fillText(player2Score.value, player2Score.x, player2Score.y);

}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawAll();

    circle.x += circle.dx;
    circle.y += circle.dy;

    if (player1.y + player1.height < 0 || player1.y - player1.height > canvas.height) {
        player1.dy *= -1;
    }


    if (circle.x + circle.size > canvas.width) {

        if (circle.y > player2.y && circle.y < player2.y + player2.height && circle.x > player1.x) {
            circle.dx *= -1;

        }
        else {
            circle.x = 700;
            circle.y = 400;
            scorePoint();
        }
    }
    else if (circle.x - circle.size < 0) {
        if (circle.y > player1.y && circle.y < player1.y + player1.height && circle.x > player1.x) {
            circle.dx *= -1;

        } else {

            circle.x = 700;
            circle.y = 400;
            scorePoint();
        }
    }

    else if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
        circle.dy *= -1;
    }

    movePlayer2Up();
    movePlayer2Down();
}


function movePlayer2Up() {
    do {
        moveUpPlayer2();
        player2.y += player2.dy;
    }
    while (circle.y < player2.y + (player2.height / 2))
}
function movePlayer2Down() {
    do {
        moveDownPlayer2();
        player2.y += player2.dy;
    }
    while (circle.y > player2.y + (player2.height / 2))
}




let player1 = {
    x: 1,
    y: 450,
    dx: 0,
    dy: 0,
    speed: 5,
    width: 10,
    height: 170
}

let player2 = {
    x: 1902,
    y: 450,
    dx: 0,
    dy: 0,
    speed: 0,
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
    player2.x += player2.dx;
    player2.y += player2.dy;
}

function updatePlayer1() {
    ctx.clearRect(player1.x, player1.y, player1.width, player1.height);
    drawAll();
    requestAnimationFrame(updatePlayer1);

}

function updatePlayer2() {
    ctx.clearRect(player2.x, player2.y, player2.width, player2.height);
    drawAll();
    requestAnimationFrame(updatePlayer2);
}



function scorePoint() {
    if (Math.sign(circle.dx) === -1) {
        player1Score.value++;
        circle.dx *= -1;
    }
    else if (Math.sign(circle.dx) === 1) {
        player2Score.value++;
        circle.dx *= -1;
    }
}

update();
updatePlayer1();
updatePlayer2();

function moveDownPlayer1() {
    player1.dy = player1.speed;
    newPos1();
}

function moveUpPlayer1() {
    player1.dy = -player1.speed;
    newPos1();
}

function moveDownPlayer2() {
    player2.dy = 1

}

function moveUpPlayer2() {
    player2.dy = -3

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

