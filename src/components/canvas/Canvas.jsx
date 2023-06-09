import React, { Component } from "react";

class CanvasBackground extends Component {
  componentDidMount() {
    const canvas = this.canvas;
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    const c = canvas.getContext("2d");

    let circles = [];
    const colors = ["#FF4858", "#1B7F79", "#00CCC0", "#72F2EB"];
    const mouse = { x: undefined, y: undefined };

    const randomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    class Circle {
      constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.radius = randomInt(5, 10);
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speed = {
          x: randomInt(-2, 2),
          y: randomInt(-2, 2),
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
        this.x += this.speed.x;
        this.y += this.speed.y;

        if (this.radius > 0.2) this.radius -= 0.07;

        this.draw();
      }
    }

    addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      for (let i = 0; i < 1; i++) {
        circles.push(new Circle());
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      c.fillStyle = "#131313";
      c.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < circles.length; i++) {
        circles[i].update();

        for (let j = 0; j < circles.length; j++) {
          const dx = circles[i].x - circles[j].x;
          const dy = circles[i].y - circles[j].y;
          const distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

          if (distance < 100) {
            c.beginPath();
            c.moveTo(circles[i].x, circles[i].y);
            c.lineTo(circles[j].x, circles[j].y);
            c.lineWidth = 0.1;
            c.strokeStyle = circles[i].color;
            c.stroke();
            c.closePath();
          }
        }

        if (circles[i].radius < 2) {
          circles.splice(i, 1);
        }
      }
    };
    animate();
  }

  render() {
    return (
      <div>
        <canvas
          ref={(canvas) => (this.canvas = canvas)}
          style={{ margin: "auto 0" }}
        ></canvas>
      </div>
    );
  }
}

export default CanvasBackground;
