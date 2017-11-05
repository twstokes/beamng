from socket import *

HOST = '255.255.255.255'
PORT = 4444

ID = 20498

s = socket(AF_INET, SOCK_DGRAM)
s.setsockopt(SOL_SOCKET, SO_REUSEADDR, 1)
s.setsockopt(SOL_SOCKET, SO_BROADCAST, 1)

s.sendto('beamng|testdev|' + str(ID), (HOST, PORT))