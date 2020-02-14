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
    updatePlayer1();
    updatePlayer2();
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
        //  circle.x = 700
        // circle.y = 400
        circle.dx *= -1

    } else if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
        circle.dy *= -1;
    }
    else if (circle.x + circle.y == player2.x + player2.y) {
        circle.dx *= -1;

    }

    requestAnimationFrame(update);
}

function checkCollision() {

    // temporary variables to set edges for testing
    let testX = circle.x;
    let testY = circle.y;

    // which edge is closest?
    if (circle.x < player1.x) testX = player1.x;      // test left edge
    else if (circle.x > player1.x + player1.width) testX = player1.x + player1.width;   // right edge
    if (circle.y < player1.y) testY = player.y;      // top edge
    else if (circle.y > player1.y + player1.height) testY = ry + rh;   // bottom edge

    // get distance from closest edges
    let distX = circle.x - testX;
    let distY = circle.y - testY;
    let distance = sqrt((distX * distX) + (distY * distY));

    if (distance <= circle.size) {
        console.log('hit');
    }
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


function updatePlayer1() {
    ctx.clearRect(0, 0, player1.width, player2.height);
    drawPlayer1();
    requestAnimationFrame(updatePlayer1);

}

function updatePlayer2() {
    ctx.clearRect(0, 0, player2.width, player2.height);
    drawPlayer2();
    requestAnimationFrame(updatePlayer2);
}




startGame();

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

