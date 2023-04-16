let planets = [
  
]
let planetsData = [
  {
    name: "Mercury",
    color: "orange",
    mass: 5,
    radius: 40,
  },
  {
    name: "Venus",
    color: '#937D64',
    mass: 7,
    radius: 67,
  },
  {
    name: "Earth",
    color: 'dodgerblue',
    mass: 7,
    radius: 130,
    moon: {
      color: 'grey',
      mass: 2,
      radius: 20,
    }
  },
  {
    name: "Mars",
    color: 'red',
    mass: 6,
    radius: 157,
  },
  {
    name: "Jupiter",
    color: 'pink',
    mass: 10,
    radius: 199,
  },
  {
    name: "Saturn",
    color: 'darkorange',
    mass: 9,
    radius: 230,
  },
  {
    name: "Uranus",
    color: 'lightgreen',
    mass: 9,
    radius: 250,
  },
  {
    name: "Neptune",
    color: 'cyan',
    mass: 7,
    radius: 310,
  },
]
let sun
let G = 120
// let planetMass = 

function setup() {
  createCanvas(windowWidth,windowHeight)
  sun = new Planet("Sun", 20,createVector(0,0),createVector(0,0), "rgb(255,100,50)")

  // let randomColor = "";
  console.log(min(windowWidth/2,windowHeight/2), sun.d, TWO_PI);

  // Initialise the planets
  // for (let i = 0; i < numPlanets; i++) {
  //   let mass = random(5, 15)
  //   let radius = random(sun.d, min(windowWidth/2,windowHeight/2))
  //   let angle = random(0, TWO_PI)
  //   let planetPos = createVector(radius * cos(angle), radius * sin(angle))

  //   // Find direction of orbit and set velocity
  //   let planetVel = planetPos.copy()
  //   planetVel.rotate(HALF_PI)  // Direction of orbit
  //   planetVel.normalize()
  //   planetVel.mult( sqrt((G * sun.mass)/(radius)) ) // Circular orbit velocity

  //   randomColor = Math.floor(Math.random()*16777215).toString(16);

  //   planets.push( new Planet(mass, planetPos, planetVel, '#' + randomColor) )
  // }
  planetsData.forEach((obj) => {
    
    let mass = obj.mass
    let radius = obj.radius
    let angle = random(0, TWO_PI)
    let planetPos = createVector(radius * cos(angle), radius * sin(angle))
    let cpyPlanetPos = planetPos;

    // Find direction of orbit and set velocity
    let planetVel = planetPos.copy()
    planetVel.rotate(HALF_PI)  // Direction of orbit
    planetVel.normalize()
    planetVel.mult( sqrt((G * sun.mass)/(radius)) ) // Circular orbit velocity

    planets.push( new Planet(obj.name, mass, planetPos, planetVel, obj.color) )
    console.log(planetPos.x);

    if (obj.name == "Earth") {
      let mass = obj.moon.mass
      let radius = obj.moon.radius
      let planetPos = createVector(cpyPlanetPos.x, cpyPlanetPos.y)

      // Find direction of orbit and set velocity
      let planetVel = planetPos.copy()
      planetVel.rotate(HALF_PI)  // Direction of orbit
      planetVel.normalize()
      planetVel.mult( sqrt((G * obj.mass)/(radius)) ) // Circular orbit velocity
      
      planets.push( new Planet("Moon", mass, planetPos, planetVel, obj.moon.color) )
    }
  });
}

function draw() {
  background("#000000")
  translate(width/2, height/2)
  planets.forEach((item, index) => {
    sun.attract(item)
    item.move()
    item.show()
    if (item.name == "Earth") {
      let moon = planets.find(obj => {
        return obj.name == "Moon"
      })
      item.attract(moon)
      moon.move()
      moon.show()
    }
  });
  sun.show()
}


function Planet(name, _mass, _pos, _vel, color){
  this.name = name
  this.mass = _mass
  this.pos = _pos
  this.vel = _vel
  this.d = this.mass*2
  this.thetaInit = 0
  this.path = []
  this.pathLen = Infinity

  this.show = function() {
    stroke('grey')
    
    for (let i = 0; i < this.path.length-2; i++) {
      line(this.path[i].x, this.path[i].y, this.path[i+1].x, this.path[i+1].y,)
    }
    fill(color); 
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.d, this.d)
  }


  this.move = function() {
    this.pos.x += this.vel.x
    this.pos.y += this.vel.y
    this.path.push(createVector(this.pos.x,this.pos.y))
    if (this.path.length > 200) this.path.splice(0,1)
  }

  this.applyForce = function(f) {
    this.vel.x += f.x / this.mass
    this.vel.y += f.y / this.mass
  }

  this.attract = function(child) {
    let r = dist(this.pos.x, this.pos.y, child.pos.x, child.pos.y)
    let f = (this.pos.copy()).sub(child.pos)
    f.setMag( (G * this.mass * child.mass)/(r * r) )
    child.applyForce(f)
  }

}