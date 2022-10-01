class Ripple {
    constructor(x, y) {
        this.x = x + 25;
        this.y = y + 25;
        this.radius = Math.random() * 20 + 1;
        this.opacity = 1;
        this.directionX = Math.random() * 1 - 0.5;
        this.directionY = Math.random() * 1 - 0.5;
    }

    drawRipple() {
        ctx3.strokeStyle = 'rgba(255, 255, 255,' + this.opacity + ')';
        ctx3.beginPath();   
        ctx3.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx3.stroke();
        ctx3.closePath();
    }
    
    ripple() {
        if (this.radius < 50) {
            this.radius += 0.7;
            this.x -= 0.03;
            this.y -= 0.03;
        }
    
        if (this.opacity > 0) {
            this.opacity -= 0.02;
        }
    }
}

function handleRipples() {
    //ripple
    for (let i = 0; i < ripplesArray.length; i++) {
        ripplesArray[i].ripple();
        ripplesArray[i].drawRipple();
    }

    if (ripplesArray.length > 20) {
        for (let i = 0; i < 5; i++) {
            ripplesArray.pop();
        }
    }

    if (((keys[37] || keys[38] || keys[39] || keys[40])) && frogger.y < 250 && frogger.y > 100) {
        for (let i = 0; i < 20; i++) {
            ripplesArray.unshift(new Ripple(frogger.x,frogger.y));
        }
    }
}
