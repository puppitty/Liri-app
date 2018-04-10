// required files
require("dotenv").config();

// add code to require keys.js and save as a variable
var keys = require("./keys.js");

// Require request
var request = require("request");

// var spotify = require('spotify');
var Spotify = require('spotify-web-api-node');
var spotify = new Spotify(keys.spotify)

// Require Twitter
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);

// Require fs
var fs = require("fs");

// Declare variable from input
var nodeArgs = (process.argv);
var nodeCmd = (process.argv[2]);

// String this to include song or movie name
var songMovie = "";
for (var i = 3; i < nodeArgs.length; i++) {
  if (i < 3 && i < nodeArgs.length) {
    songMovie = songMovie + "+" + nodeArgs[i];
  } else {
    songMovie = songMovie + nodeArgs[i];
  }
}

// Switch case for options
switch (nodeCmd) {
  case "my-tweets":
    myTweets();
    break;

  case "spotify-this-song":
    if (songMovie) {
      spotifySong(songMovie);
    } else {
      spotifySong("The Sign");
    }
    break;

  case "movie-this":
    if (songMovie) {
      movieOmdb(songMovie);
    } else {
      movieOmdb("Mr. Nobody");
    }
    break;

  case "do-what-it-says":
    whatSays();
    break;

  default:
    console.log("Please enter a valid command: my-tweets, spotify-this-song, movie-this, do-what-it-says");
    break;
}

// Functions
// Twitter
function myTweets() {
  var params = {
    screen_name: 'Joyce4Raritan',
    count: 20
  };
  client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
      for (var i = 0; i < tweets.length; i++) {
        var date = tweets[i].created_at;
        console.log("Joyce4Raritan: " + tweets[i].text + "\nCreated At: " + date.substring(0, 19));
        console.log("-----------------------");
      }
    } else {
      console.log("Error occurred");
    }

  });
}

// Spotify Function
// Query the Spotify database with songMovie, display artist(s), song name, Spotify preview link, album
function spotifySong(songMovie) {
  spotify.searchTracks({
    type: "tracks",
    query: songMovie
  }, function (error, data) {
    if (!error) {
      console.log(songMovie);
      for (var i = 0; i < data.tracks.items.length; i++) {
        var songData = data.tracks.items[i];
        //artist
        console.log("Artist: " + songData.artists[0].name);
        //song name
        console.log("Song: " + songData.name);
        //spotify preview link
        console.log("Preview URL: " + songData.preview_url);
        //album name
        console.log("Album: " + songData.album.name);
        console.log("-----------------------");
      }
    } else {
      console.log("Error occurred.");
    }
  })
}


// Query the imdb database with songMovie, display movie title, year, IMDB rating Rotten Tomatoes rating, country, plot, actors
function movieOmdb(songMovie) {
  var omdbURL = 'http://www.omdbapi.com/?t=' + songMovie + '&plot=short&tomatoes=true&apikey=trilogy';

  request(omdbURL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var body = JSON.parse(body);

      console.log("Title: " + body.Title);
      console.log("Release Year: " + body.Year);
      console.log("IMdB Rating: " + body.imdbRating);
      console.log("Country: " + body.Country);
      console.log("Language: " + body.Language);
      console.log("Plot: " + body.Plot);
      console.log("Actors: " + body.Actors);
      console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
      console.log("Rotten Tomatoes URL: " + body.tomatoURL);

      // //adds text to log.txt
      // fs.appendFile('log.txt', "Title: " + body.Title);
      // fs.appendFile('log.txt', "Release Year: " + body.Year);
      // fs.appendFile('log.txt', "IMdB Rating: " + body.imdbRating);
      // fs.appendFile('log.txt', "Country: " + body.Country);
      // fs.appendFile('log.txt', "Language: " + body.Language);
      // fs.appendFile('log.txt', "Plot: " + body.Plot);
      // fs.appendFile('log.txt', "Actors: " + body.Actors);
      // fs.appendFile('log.txt', "Rotten Tomatoes Rating: " + body.tomatoRating);
      // fs.appendFile('log.txt', "Rotten Tomatoes URL: " + body.tomatoURL);

    } else {
      console.log('Error occurred.')
    }
    if (songMovie === "Mr. Nobody") {
      console.log("-----------------------");
      console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
      console.log("It's on Netflix!");

      // Then run a request to the OMDB API with the movie specified
    }
    // use fs node package and run the song listed in random.txt

  })
}
