require("dotenv").config();

//variables for required packages(spotify, axios, read/write, moment)
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var fs = require("fs");
var moment = require("moment");

//variable for the arguments to be entered by user
var command= process.argv[2];
var userSearch = process.argv.slice(3).join(" ");

//switch statement for each command
 function liriRun(command, userSearch){
     switch (command){
         case "concert-this":
         getBandsInTown(userSearch);
         break;

         case "spotify-this-song":
         getSpotify(userSearch)
         break;

         case "movie-this":
         getOMDB(userSearch);
         break;

         case "do-what-it-says":
         getRandom();
         break;
     }
 };
 //BandsInTown Function

 function getBandsInTown(artist){
     var artist = userSearch;
     var bandURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

     axios.get(bandURL).then(
         function (response) {
             console.log("================================");
             console.log("Name of Venue: " + response.data[0].venue.name + "\r\n");
             console.log("Venue location: " + response.data[0].venue.city + "\r\n");
             console.log("Date of Event: " + moment(response.data[0].datetime).format("MM/DD/YYYY") + "\r\n")
         });
    };  

//Spotify Function

function getSpotify(songName){
    var spotify = new Spotify(keys.spotify);

    if(!songName){
        songName = "The Sign Ace of Base";
    };

    spotify.search({type: 'track', query: songName}, function (err, data){
        if (err) {
            return console.log("Error occured: " + err);
        }
        console.log("================================");
        console.log("Artist(s) Name: " + data.tracks.items[0].album.artists[0].name + "\r\n");
        console.log("Song Name: " + data.tracks.items[0].name + "\r\n");
        console.log("Preview: " + data.tracks.items[0].preview_url+ "\r\n");
        console.log("Album: "+ data.tracks.items[0].album.name + "\r\n");
    });
};

//OMDB Function

function getOMDB(movie){
    if (!movie) {
        movie = "Mr. Nobody";
    }
    var movieURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    axios.request(movieURL).then(
        function (response){
            console.log("================================");
            console.log("Title: " + response.data.Title + "\r\n");
            console.log("Year Released: " + response.data.Year + "\r\n");
            console.log("IMDB Rating: " + response.data.imdbRating + "\r\n");
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\r\n");
            console.log("Country Where Produced: " + response.data.Country + "\r\n");
            console.log("Plot: " + response.data.Plot + "\r\n");
            console.log("Actors: " + response.data.Actors + "\r\n");

    });
};

//Function for random.txt file
function getRandom(){
    fs.readFile("random.txt", "utf8", (error, data) => {
        if (error) throw error;
        console.log(data);

        var randomData = data.split(",");
        liriRun(randomData[0], randomData[1]);
    });
};

//call command function
liriRun(command, userSearch);
