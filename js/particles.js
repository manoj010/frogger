class Particle {
    constructor(x, y) {
        this.x = x + 25;
        this.y = y + 25;
        this.radius = Math.random() * 20 + 1;
        this.opacity = 1;
        this.directionX = Math.random() * 1 - 0.5;
        this.directionY = Math.random() * 1 - 0.5;
    }

    draw() {
        ctx3.fillStyle = 'rgba(155, 155, 155,' + this.opactity + ')';
        ctx3.beginPath();   
        ctx3.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx3.fill();
        ctx3.closePath();
    }
 
    update() {
        this.x += this.directionX;
        this.y += this.directionY;
        if (this.opacity > 0.1) {
            this.opacity -= 0.9;
        }

        if (this.radius > 0.15) {
            this.radius -= 0.14;
        }
    }
}

function handleParticles() {
    //dust
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }

    if (particlesArray.length > maxParticles) {
        for (let i = 0; i < 30; i++) {
            particlesArray.pop();
        }
    }

    if (((keys[37] || keys[38] || keys[39] || keys[40])) && frogger.y > 250 && particlesArray.length < maxParticles + 10) {
        for (let i = 0; i < 10; i++) {
            particlesArray.unshift(new Particle(frogger.x, frogger.y));   
        }
    }
}