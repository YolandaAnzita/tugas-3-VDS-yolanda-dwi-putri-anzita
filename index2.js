class Orbiter {
    constructor(sizeRadius, orbitRadius, orbitAngle=0) {
        this.sizeRadius = sizeRadius;
        this.orbitRadius = orbitRadius;
        this.orbitAngle = 0; // degrees relative to x axis

        // 2000 is an arbitrary animation speed (which also depends on the frame rate)
        // The -1.5 exponent is due to Kepler's 3rd Law
        this.orbitAngleDelta = 2000 * Math.pow(orbitRadius, -1.5);
        this.x = this.y = 0;
        this.color = 'white';
    }

    orbit(primary) {
        this.x = primary.x + this.orbitRadius * cos(radians(this.orbitAngle));
        this.y = primary.y + this.orbitRadius * sin(radians(this.orbitAngle));
        this.orbitAngle = (this.orbitAngle + this.orbitAngleDelta) % 360;
    }

    display() {
        noStroke();
        fill(this.color);
        return ellipse(this.x, this.y, this.sizeRadius, this.sizeRadius);
    }
}

let planets = [];
let sun = new Orbiter(100, 0);

function setup() {
    createCanvas(windowWidth - 3, windowHeight - 3);
    frameRate(144);

    sun.x = windowWidth / 2;
    sun.y = windowHeight / 2;
    sun.color = color(255, 200, 0);

    // Instantiate 5 planets
    for (i = 0; i < 5; i++) {
        planets[i] = new Orbiter(5 + 15 * i, 110 + 70 * i);
        let red = i * 50 + 5;
        planets[i].color = color(red, 255 - red, 255 - red);
    }
}

function windowResized() {
    resizeCanvas(windowWidth - 3, windowHeight - 3);
    sun.x = windowWidth / 2;
    sun.y = windowHeight / 2;
}

function draw() {
    background(0, 10, 40);
    sun.display()
    for (planet of planets) {
        planet.orbit(sun);
        planet.display();
    }
}