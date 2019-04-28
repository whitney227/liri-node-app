# LIRI:  a node application
### LIRI is a Language Interpretation and Recognition Interface that takes in parameters and gives back data using commands in Node.js

## Directions
In your terminal, cd into the liri-node-app folder then run 
```
npm install
```
This will install the npm packages needed for all the node commands.

NOTE:  If you want to clone this app, you will have to include your own .env file with an unique Spotify ID and Secret.  You can obtain both my creating a free account with Spotify for Developers
https://developer.spotify.com/dashboard/login

## Uses
Users can retrieve data by running the following commands in the terminal:
```
node liri.js concert-this <artist/band name here>
node liri.js spotify-this-song '<song name here>'
node liri.js movie-this '<movie name here>'
node liri.js do-what-it-says
```
### A video demonstration of the returned data for each command can be found here:

https://drive.google.com/file/d/1b17cJmmjorYyLe-uJ3SZGFroBGsr7NyJ/view
## API Credits
* Spotify
* Bands in Town
* OMDB
