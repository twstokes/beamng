### To remotely control:

1. Start BeamNG
2. Allow remotes to control the game (make sure firewall allows incoming connections)
3. Get the ID (generated on startup, this may be appended to the App Store URL after the URL fragment)
4. Run `control.py`

### To view OutGauge data:
1. Enable OutGauge in the game UI
2. Point to the machine running the listener
3. Run `websocket.py` to listen for data and send it over the websocket
4. Run `yarn start` in the `dashboard` directory

#### Notes:

- Data is all UDP. If control data isn't sent in a certain amount of time, the game will timeout and the controller will disconnect. You have to reestablish the connection again to restart.
- IDs are sent with the packets, can be used for lag detection / compensation

#### TODO:

- ~~Add turbo support~~ Done
- G force telemetry

#### Issues:

- ~~If the main window loses focus, it doesn't accept input~~ This is a menu setting!