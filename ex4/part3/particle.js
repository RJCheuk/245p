// particle.js
class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    // update the size of the element we render
    update() {
      this.x += random(-5, 5); // Random movement on x-axis
      this.y += random(-5, 5); // Random movement on y-axis
    }
  
    // render the element on the screen
    show() {
      stroke(255);
      strokeWeight(25);
      point(this.x, this.y);  // Draw the particle (circle) at position (x, y)
    }
  }
  
class Box extends Particle {
    constructor(x, y) {
      super(x, y);
      this.bright = random(255);
      this.r = 10;
    }
  
    update() {
      super.update();
      this.r += random(-8, 8);
    }
  
    show() {
      strokeWeight(1);
      stroke(255);
      fill(this.bright);
      square(this.x, this.y, this.r);
    }
  }
  