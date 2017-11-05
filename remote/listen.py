import socket
import sys

HOST = ''
PORT = 4445
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.bind((HOST, PORT))

data, addr = s.recvfrom(1024)

if data[:6] == "beamng":
    print "Connected!"
else:
    sys.exit(1)

while True:
    data, _ = s.recvfrom(1024)
    # print "Got data: ", data
