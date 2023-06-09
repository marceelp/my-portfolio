const colors = ["#FF4858", "#1B7F79", "#00CCC0", "#72F2EB"];
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export class Circle {
  constructor(colors, randomInt) {
    this.colors = colors;
    this.randomInt = randomInt;
    this.x = mouse.x;
    this.y = mouse.y;
    this.radius = randomInt(5, 10);
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.speedX = randomInt(-2, 2);
    this.speedY = randomInt(-2, 2);
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = this.color;
    c.stroke();
    c.closePath();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.radius > 0.2) this.radius -= 0.07;

    this.draw();
  }
}
