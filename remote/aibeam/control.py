import random
import socket
import struct
import sys
import time

# determined by the game
PORT = 4444

# UDP socket to use
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
s.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)


def connect(address, beamId):
    data = ('beamng|aibeam|' + str(beamId)).encode()
    s.sendto(data, address)


def control(address):
    commandId = 0

    while True:
        commandId += 1
        # steering, throttle, brakes, id
        data = struct.pack('>ffff', random.random(), 1, 0, commandId)
        s.sendto(data, address)

        if commandId == 128:
            commandId = 0
        time.sleep(0.05)


def connectAndControl(ip, beamId):
    address = (ip, PORT)

    connect(address, beamId)
    control(address)


def main():
    if(len(sys.argv) < 3):
        print("Usage: python control.py [ip] [game id]")
        sys.exit(1)

    ip = sys.argv[1]
    beamId = sys.argv[2]

    connectAndControl(ip, beamId)


if __name__ == '__main__':
    main()
