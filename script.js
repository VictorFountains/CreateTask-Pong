const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const circle = {
    x: 200,
    y: 200,
    size: 30,
    dx: 5,
    dy: 4,
}

function drawCircle(){
    ctx.beginPath()
    
    ctx.arc(200, 200, 0, Math.PI * 2, true);
    ctx.fillstyle = 'red';
    ctx.fill();
}

drawCircle();