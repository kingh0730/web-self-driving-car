import asyncio
import random


async def produce(queue, n):
    for item in range(n):
        # 生产一个项目，使用sleep模拟I/O操作
        print('producing item {} ->'.format(item))
        await asyncio.sleep(1)
        # 将项目放入队列
        queue.insert(0, item)
    # 指示生产完毕
    queue.insert(0, None)


async def consume(queue):
    while True:
        # 等待来自生产者的项目
        if not queue:
            await asyncio.sleep(0)
            continue
        item = queue.pop()
        if item is None:
            break
        # 消费这个项目，使用sleep模拟I/O操作
        print('consuming item {} <-'.format(item))
        await asyncio.sleep(1)


async def main():
    queue = []
    task1 = asyncio.create_task(produce(queue, 10))
    task2 = asyncio.create_task(consume(queue))
    await task1
    await task2

asyncio.run(main())
