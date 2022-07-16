// Preparation

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function retrieve() {
  await timeout(Math.random() * 500 + 1000);
  console.log("I'm here");
  return "I'm here";
}

const tasks_100 = Array.from(Array(100)).map((i) => retrieve);

// Code

async function wrapper(task) {
  await task();
  if (tasks_100.length) {
    return wrapper(tasks_100.pop());
  } else {
    return "All done";
  }
}

async function main() {
  console.time("test");

  const five_pipelines = Array.from(Array(5)).map((_) =>
    wrapper(tasks_100.pop())
  );
  const results = await Promise.all(five_pipelines);
  console.log(results);

  console.timeEnd("test");
}
main();
