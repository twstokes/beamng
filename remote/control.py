from socket import *
from struct import *
from random import *
import time

HOST = '192.168.1.254'
PORT = 4444

s = socket(AF_INET, SOCK_DGRAM)

id = 0

while True:
    id += 1
    # steering, throttle, brakes, id
    data = pack('>ffff', random(), 1, 0, id)
    s.sendto(data, (HOST, PORT))

    if id == 128:
        id = 0
    time.sleep(0.05)