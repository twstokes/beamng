import asyncio
import json
import random
import sys
import websockets

from aibeam import listen


async def listener(websocket, path):
    print("Serving websocket client.")
    while True:
        # try:
        data = listen.listenForPayload()
        jsonData = json.dumps(data)

        await websocket.send(jsonData)
        # except websockets.exceptions.ConnectionClosed:
        #     print("Connection closed.")


def main():
    try:
        start_server = websockets.serve(listener, '127.0.0.1', 5678)
        asyncio.get_event_loop().run_until_complete(start_server)
        print("Websocket server started.")

        asyncio.get_event_loop().run_forever()
    except KeyboardInterrupt:
        print("Shutting down server.")

    except:
        print("Unexpected error:"), sys.exc_info()[0]


if __name__ == '__main__':
    main()
