// variables

let radiusInput = document.querySelector('#radius');
let volume = document.querySelector('#volume');
let drawBtn = document.querySelector('#calculate')
let clearBtn = document.querySelector('#clear')

// Circle Voulume Calc 

function calcVolume(e) {
    e.preventDefault()
    let radius = radiusInput.value
    if (Number.isNaN(+radius) || radius === '') {
        alert('Please Insert A Valid Number');
        radiusInput.value = ''
    }
    else {
        volume.textContent = (4 / 3) * Math.PI * Math.pow(radius, 3);
        draw(radius)
    }
}

// Canvas 
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = canvas.width / 2
let y = canvas.height / 2


function draw(r) {
    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.lineWidth = 1
    ctx.strokeStyle = 'red';
    ctx.stroke();
    // if circle is bigger then canvas measures
    if ((r * 2 > canvas.height)) {
        alert('Circle Is Out Of Border')
    }
}

// Events
drawBtn.addEventListener('click', calcVolume);

clearBtn.onclick = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear Canvas
    radiusInput.value = ''
    volume.textContent = ''
}


// Bonus 
let bonusR = 0
function bonusDraw() {

    ctx.beginPath()
    ctx.arc(x, y, bonusR, 0, 2 * Math.PI);
    ctx.lineWidth = 1
    ctx.strokeStyle = 'red';
    ctx.stroke()
    if (bonusR * 2 > canvas.height) {

    }
    else {
        bonusR += 1.5
        setTimeout(bonusDraw, 100)
    }
}

window.onload = bonusDraw()