// required files

require("dotenv").config();

// add code to require keys.js and save as a variable
var keys = require("./keys.js");

// var spotify = require('spotify');
var SpotifyWebApi = require('spotify-web-api-node');

// Declare variable from input
var input = (process.argv[2]);

// String this to include spaces
var songMovie = (process.argv[3]);

// update following text to capture argv[3] ignoring spaces for Spotify and Movie

// Store all of the arguments in an array
// var nodeArgs = process.argv;

// Create an empty variable for holding the movie name
// var movieName = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
// for (var i = 2; i < nodeArgs.length; i++) {

//   if (i > 2 && i < nodeArgs.length) {

//     movieName = movieName + "+" + nodeArgs[i];
//   }

//   else {
//     movieName += nodeArgs[i];

//   }
// }


// Twitter
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);

// Sample Twitter code

if (input === "my-tweets") {
  // Move this to function and call function
  var params = {
    screen_name: 'Joyce4Raritan',
    count: 20
  };
  client.get('statuses/user_timeline', params, function (error, tweets, response) {

    if (!error) {
      for (var tweet in tweets) {
        console.log(tweets[tweet].text);
      }
    }
  });
} else if (input === "spotify-this-song") {
  // Query the Spotify database with songMovie, display artist(s), song name, Spotify preview link, album

  // Search tracks whose name, album or artist contains 'Love'
  spotifyApi.searchTracks('songMovie')
    .then(function (data) {
      console.log('Search by: ' + songMovie, data.body);
    }, function (err) {
      console.error(err);
    });

} else if (input === "movie-this") {
  // Query the imdb database with songMovie, display movie title, year, IMDB rating Rotten Tomatoes rating, country, plot, actors

  var request = require("request");

  // Then run a request to the OMDB API with the movie specified
  request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function (error, response, body) {

    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {

      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      console.log(JSON.parse(body));
      console.log("The movie's rating is: " +
        JSON.parse(body).imdbRating);
    }
  });

} else if (input === "do-what-it-says") {
  // use fs node package and run the song listed in random.txt

}