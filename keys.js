
console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

var concert = function() {

  this.findArtist = function(artist) {
    var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"


request(URL, function(err, response, body) {
  // Parse the response body (string) to a JSON object
  var jsonData = JSON.parse(body);

  // showData ends up being the string containing the show data we will print to the console
  var showData = [
    "Name of Venue: " + jsonData.name,
    "Venue Location: " + jsonData.location.join(", "),
    "Date of the Event: " + jsonData.date,
  ].join("\n\n");

spotify.search({ type: "track", query: "The Sign" }, function(err, data) {
if (err) {
  return console.log('Error occurred: ' + err);
}

console.log(data); 


});

