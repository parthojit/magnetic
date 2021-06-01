import asyncio
import websockets
import time
import random
import json

async def depth(websocket, path):
    start = time.time()
    while True:
        data = {
            "time": time.time()-start,
            "depth": random.randrange(0,20),
        }
        snd = json.dumps(data)
        await websocket.send(snd)
        await asyncio.sleep(1)

start_server = websockets.serve(depth, "127.0.0.1", 5678)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()