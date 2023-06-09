import React, { Component } from "react";

class CanvasBackground extends Component {
  componentDidMount() {
    const canvas = this.canvas;
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    const c = canvas.getContext("2d");

    const mouse = { x: undefined, y: undefined };
    const colors = ["#FF4858", "#1B7F79", "#00CCC0", "#72F2EB"];
    const circles = [];

    const randomIntFromRange = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    class Circle {
      constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.radius = randomIntFromRange(5, 10);
        this.color = colors[Math.floor(Math.random() * 4)];
        this.speed = {
          x: randomIntFromRange(-2, 2),
          y: randomIntFromRange(-2, 2),
        };
      }

      draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = this.color;
        c.stroke();
        c.closePath();
      }

      update() {
        this.draw();

        this.x += this.speed.x;
        this.y += this.speed.y;

        if (this.radius > 0.2) this.radius -= 0.07;
      }
    }

    addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      circles.push(new Circle());
    });

    const animate = () => {
      requestAnimationFrame(animate);
      c.fillStyle = "#131313";
      c.fillRect(0, 0, canvas.width, canvas.height);

      circles.forEach((circle, i) => {
        circle.update();

        circles.forEach((otherCircle, j) => {
          const dx = circle.x - otherCircle.x;
          const dy = circle.y - otherCircle.y;
          const distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

          if (distance < 100) {
            c.beginPath();
            c.moveTo(circle.x, circle.y);
            c.lineTo(otherCircle.x, otherCircle.y);
            c.lineWidth = 0.1;
            c.strokeStyle = circle.color;
            c.stroke();
            c.closePath();
          }
        });

        if (circle.radius < 2) circles.splice(i, 1);
      });
    };

    animate();
  }

  render() {
    return <canvas ref={(canvas) => (this.canvas = canvas)}></canvas>;
  }
}

export default CanvasBackground;
