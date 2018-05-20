### To run:

1. Start BeamNG
2. Allow remotes to control the game (make sure firewall allows incoming connections)
3. Enable gauge data to be sent out (optional in the menus)
4. Get the ID (generated on startup) from the QR code, update Python scripts with this ID (this may be appended to the App Store URL after the URL fragment)
5. Run `control.py`
6. Run `listen.py` for gauge data

#### Todo:

1. Handle incoming data
2. Convert to Go?

#### Notes:

- Data is all UDP. If control data isn't sent in a certain amount of time, the game will timeout and the controller will disconnect. You have to reestablish the connection again to restart.
- IDs are sent with the packets, can be used for lag detection / compensation

#### Issues:

- No telemetry data
- ~~If the main window loses focus, it doesn't accept input~~ This is a menu setting!