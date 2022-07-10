const carCanvas = document.getElementById("carCanvas");
carCanvas.width = 200;

const ctx = carCanvas.getContext("2d");
const road = new Road(carCanvas.width / 2, carCanvas.width * 0.9);
const car = new Car(road.getLaneCenter(1), 100, 30, 50, "AI", 10);
const traffic = [new Car(road.getLaneCenter(1), -100, 30, 50, "DUMMY", 8)];

animate();

function animate() {
  traffic.forEach((c) => c.update(road.borders, []));
  car.update(road.borders, traffic);

  carCanvas.height = window.innerHeight;

  ctx.save();
  ctx.translate(0, -car.y + carCanvas.height * 0.8);
  road.draw(ctx);
  traffic.forEach((c) => c.draw(ctx, "red"));
  car.draw(ctx, "blue");

  ctx.restore();
  requestAnimationFrame(animate);
}
