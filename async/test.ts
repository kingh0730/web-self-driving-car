const setTimeoutAsync = (cb, delay) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(cb());
    }, delay);
});
function printSync() {
    console.log("sync");
}
async function printAsync(time) {
    await setTimeoutAsync(() => {
        time > 0 ? console.log("async") : null;
    }, time)
}

const arr: Array<any> = []
async function produce() {
    for (let i = 0; i < 10; i++) {
        console.log(`produing ${i}`);
        await printAsync(1000);
        arr.push(i);
    }
    arr.push(null)
}
async function consume() {
    while (true) {
        const item = arr.length ? arr.shift() : undefined;
        if (item === null) {
            break;
        } else if (item === undefined) {
            await new Promise((resolve) => { setTimeout(() => resolve(null)) });
            continue;
        }
        await printAsync(10);
        console.log(`consumed ${item}`);
    }
}

async function main() {
    console.log("start")
    await Promise.all([produce(), consume()])
    console.log("done")
}
main()