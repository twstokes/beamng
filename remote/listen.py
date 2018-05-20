import socket
import struct
import sys

import time

# determined by the game
PORT = 4445

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.bind(('', PORT))


def dataToDict(data):
    t = struct.unpack('I4sHcc7fII3f16s16si', data)

    keys = [
        'time',
        'car',
        'flags',
        'gear',
        'plid',
        'speed',
        'rpm',
        'turbo',
        'engTempC',
        'fuel',
        'oilPressure',
        'oilTemp',
        'dashLights',
        'showLights',
        'throttle',
        'brake',
        'clutch',
        'display1',
        'display2',
        'id',
    ]

    d = {k: v for (k, v) in zip(keys, t)}

    # convert strings
    for k in ['car', 'gear', 'plid', 'display1', 'display2']:
        d[k] = d[k].decode('utf-8')

    return d


def listenForPayload():
    # currently getting a payload of 96 bytes
    data, _ = s.recvfrom(100)

    return dataToDict(data)


def main():
    while True:
        d = listenForPayload()
        print(d),
        time.sleep(1)


if __name__ == '__main__':
    main()
