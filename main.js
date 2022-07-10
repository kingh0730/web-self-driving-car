const carCanvas = document.getElementById("carCanvas");
carCanvas.width = 200;
const networkCanvas = document.getElementById("networkCanvas");
networkCanvas.width = 400;

const carCtx = carCanvas.getContext("2d");
const networkCtx = networkCanvas.getContext("2d");

const road = new Road(carCanvas.width / 2, carCanvas.width * 0.9);

const myCar = new Car(road.getLaneCenter(1), 100, 30, 50, "KEYS", 10);
const cars = generateCars(100);
const traffic = [new Car(road.getLaneCenter(1), -100, 30, 50, "DUMMY", 8)];

animate();

function generateCars(N) {
  const cars = [];
  for (let i = 0; i < N; i++) {
    cars.push(new Car(road.getLaneCenter(1), 100, 30, 50, "AI", 10));
  }
  return cars;
}

function animate(time) {
  traffic.forEach((c) => c.update(road.borders, []));
  cars.forEach((c) => c.update(road.borders, traffic));
  myCar.update(road.borders, traffic);

  const bestCar = cars.find((c) => c.y === Math.min(...cars.map((c) => c.y)));
  const targetCar = bestCar;

  carCanvas.height = window.innerHeight;
  networkCanvas.height = window.innerHeight;

  carCtx.save();
  carCtx.translate(0, -targetCar.y + carCanvas.height * 0.8);
  road.draw(carCtx);
  traffic.forEach((c) => c.draw(carCtx, "red"));

  carCtx.globalAlpha = 0.2;
  cars.forEach((c) => c.draw(carCtx, "blue"));
  carCtx.globalAlpha = 1;
  bestCar.draw(carCtx, "blue", true);

  myCar.draw(carCtx, "green", true);

  carCtx.restore();

  networkCtx.lineDashOffset = -time / 50;
  Visualizer.drawNetwork(networkCtx, targetCar.brain);
  requestAnimationFrame(animate);
}
