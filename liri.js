require("dotenv").config();

// add code to require keys.js and save as a variable
var keys = require("./keys.js");

// var spotify = require('spotify');
// Declare variable from input
var input = (process.argv[2]);

// String this to include spaces
var songMovie = (process.argv[3]);

// need to capture argv[3] ignoring spaces for Spotify and Movie

// Twitter
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);

// Sample Twitter code

if (input === "my-tweets") {
// Move this to function and call function
var params = {screen_name: 'Joyce4Raritan', count: 10};
 client.get('statuses/user_timeline', params, function(error, tweets, response) {
 
   if (!error) {
     for (var tweet in tweets)
     {
       console.log(tweets[tweet].text);
     }
 }});
} else if (input === "spotify-this-song") {
// Query the Spotify database with songMovie, display artist(s), song name, Spotify preview link, album

}
else if (input === "movie-this") {
  // Query the imdb database with songMovie, display movie title, year, IMDB rating Rotten Tomatoes rating, country, plot, actors
  
  }
   
else if (input === "do-what-it-says") {
  // use fs node package and run the song listed in random.txt
  
  }
