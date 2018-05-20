import asyncio
import json
import listen
import random
import websockets


async def serve(websocket, path):
    while True:
        data = listen.listenForPayload()
        jsonData = json.dumps(data)

        await websocket.send(jsonData)

start_server = websockets.serve(serve, '127.0.0.1', 5678)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
