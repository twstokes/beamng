### To run:

1. Start BeamNG
2. Allow remotes to control the game (make sure firewall allows incoming connections)
3. Enable gauge data to be sent out (optional in the menus)
4. Run `listen.py` -> `establish.py` -> `control.py`

#### Todo:

1. Convert the struct from the Swift code to handling incoming data
2. Convert to Go?

#### Notes:

- Data is all UDP. If control data isn't sent in a certain amount of time, the game will timeout and the controller will disconnect. You have to reestablish the connection again to restart.
- IDs are sent with the packets, can be used for lag detection / compensation