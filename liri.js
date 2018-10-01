require("dotenv").config();

var search = process.argv[2];

var term = process.argv.slice(3).join(" ");

var keys = require("keys.js")

var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);
 
// var spotify = new Spotify({
//   id: <your spotify client id>,
//   secret: <your spotify client secret>
// });
 

