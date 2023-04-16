class Planet {
    constructor(name,color,dimension,distance,angle,speed){
    this.name = name;
      this.color = color;
      this.dimension = dimension;
      this.distance = distance;
      this.angle = angle;
      this.speed = speed;
    }
  }
  
    const sun = new Planet('Sun','rgb(255,100,50)',35,0,0,0);
    const mercury = new Planet('Mercury','orange',13,30,1,1);
    const venus = new Planet('Venus','#937D64',15,50,1,0.5);
    const earth = new Planet('Earth','dodgerblue',15,75,1,0.75);
    const mars = new Planet('Mars','red',14,90,1,0.60);
    const asteroidsOrbit = new Planet('Asteroids Orbit','grey',15,140,0,0);
    const jupiter = new Planet('Jupiter','pink',18,125,1,0.30);
    const saturn = new Planet('Saturn','darkorange',17,160,1,0.25);
    const uranus = new Planet('Uranus','lightgreen',17,180,1,0.15);
    const neptune = new Planet('Neptune','cyan',15,200,1,0.1);
    const pluto = new Planet('Pluto','gold',13,220,1,0.05);
    let rotationMoon = 0;
  
  function setup(){
    createCanvas(windowWidth,windowHeight);
    angleMode(DEGREES);
  }
  
  function draw(){
    background('#000000');
    translate(windowWidth/2,windowHeight/2);
  
    sunShow();
    mercuryShow();
    venusShow();
    earthShow();
    marsShow();
    // asteroidsShow();
    jupiterShow();
    saturnShow();
    uranusShow();
    neptuneShow();
    plutoShow();
    
  }
  function sunShow(){
    noStroke();
    fill(sun.color);
    circle(sun.distance,sun.distance,sun.dimension);  
  }
  function mercuryShow(){
    push();
    //Draw this.Planet orbit
    strokeWeight(1);
    stroke('grey');
    noFill();
    circle(0,0,mercury.distance + (mercury.dimension * 2) + 30);
    //Draw this.Planet
    rotate(mercury.angle);
    noStroke();
    fill(mercury.color);
    circle(mercury.distance,mercury.distance,mercury.dimension);
    pop(); 
    mercury.angle += mercury.speed;
  }
  function venusShow(){
    push();
      //Draw this.Planet orbit
    strokeWeight(1);
    stroke('grey');
    noFill();
    circle(0,0,venus.distance + (venus.dimension * 2) + 63);
      //Draw this.Planet
    rotate(venus.angle);
    noStroke();
    fill(venus.color);
    circle(venus.distance,venus.distance,venus.dimension);
    pop(); 
    venus.angle += venus.speed;
  }
  function earthShow(){
    push();
    //Draw this.Planet orbit
    strokeWeight(1);
    stroke('grey');
    noFill();
    circle(0,0,earth.distance + (earth.dimension * 2) + 108);
    //Draw this.Planet
    rotate(earth.angle);
    noStroke();
    fill(earth.color);
    circle(earth.distance,earth.distance,earth.dimension);
    //Moon
    fill('grey');
    translate(earth.distance,earth.distance)
    rotate(-rotationMoon);
    circle(9,9,5);
    pop();   
    earth.angle += earth.speed; 
    rotationMoon += 10;
  }
  function marsShow(){
    push();
    //Draw this.Planet orbit
    strokeWeight(1);
    stroke('grey');
    noFill();
    circle(0,0,mars.distance + (mars.dimension * 2) + 136);
    //Draw this.Planet
    rotate(mars.angle);
    noStroke();
    fill(mars.color);
    circle(mars.distance,mars.distance,mars.dimension);
    pop();   
    mars.angle += mars.speed;  
  }
  function asteroidsShow(){
    push();
    //Draw this.Planet orbit
    strokeWeight(6);
    stroke(asteroidsOrbit.color);
    noFill();
    rotate(20);
    ellipse(0,0,asteroidsOrbit.distance * 2.3,asteroidsOrbit.distance * 2)
    //Draw this.Planet
    pop();    
  }
  function jupiterShow(){
    push();
    //Draw this.Planet orbit
    strokeWeight(1);
    stroke('grey');
    noFill();
    circle(0,0,jupiter.distance + (jupiter.dimension * 2) + 192);
    //Draw this.Planet
    rotate(jupiter.angle);
    noStroke();
    fill(jupiter.color);
    circle(jupiter.distance,jupiter.distance,jupiter.dimension);
    pop();   
    jupiter.angle += jupiter.speed;  
  }
  function saturnShow(){
    push();
    //Draw this.Planet orbit
    strokeWeight(1);
    stroke('grey');
    noFill();
    circle(0,0,saturn.distance + (saturn.dimension * 2) + 260);
    //Draw this.Planet
    rotate(saturn.angle);
    noStroke();
    fill(saturn.color);
    circle(saturn.distance,saturn.distance,saturn.dimension);
    //Draw Saturn Ring
    noFill();
    stroke('grey');
    ellipse(saturn.distance,saturn.distance,45,20);
    pop();   
    saturn.angle += saturn.speed;  
  }
  function uranusShow(){
    push();
    //Draw this.Planet orbit
    strokeWeight(1);
    stroke('grey');
    noFill();
    circle(0,0,uranus.distance + (uranus.dimension * 2) + 297);
    //Draw this.Planet
    rotate(uranus.angle);
    noStroke();
    fill(uranus.color);
    circle(uranus.distance,uranus.distance,uranus.dimension);
    pop(); 
    uranus.angle += uranus.speed;
  }
  function neptuneShow(){
    push();
    //Draw this.Planet orbit
    strokeWeight(1);
    stroke('grey');
    noFill();
    circle(0,0,neptune.distance + (neptune.dimension * 2) + 336);
    //Draw this.Planet
    rotate(neptune.angle);
    noStroke();
    fill(neptune.color);
    circle(neptune.distance,neptune.distance,neptune.dimension);
    pop(); 
    neptune.angle += neptune.speed;
  }
  function plutoShow(){
    push();
    //Draw this.Planet orbit
    strokeWeight(1);
    stroke('grey');
    noFill();
    circle(0,0,pluto.distance + (pluto.dimension * 2) + 376);
    //Draw this.Planet
    rotate(pluto.angle);
    noStroke();
    fill(pluto.color);
    circle(pluto.distance,pluto.distance,pluto.dimension);
    pop(); 
    pluto.angle += pluto.speed;
  }
  
  function hello(){
    let p = createP('Hello World');
  }