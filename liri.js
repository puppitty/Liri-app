require("dotenv").config();

// add code to require keys.js and save as a variable
var Keys = require("./keys.js");


// Sample Twitter code

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});
 
var params = {Joyce4Raritan: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

client.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {
  if(error) throw error;
  console.log(tweet);  // Tweet body. 
  console.log(response);  // Raw response object.

  client.get('favorites/list', function(error, tweets, response) {
    if(error) throw error;
    console.log(tweets);  // The favorites. 
    console.log(response);  // Raw response object. 
  });


  
// access your keys like this with "new" equal to variable name above
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
});

// Directions:
// my-tweets

// spotify-this-song

// movie-this

// do-what-it-says

// Spotify
var spotify = require('spotify');
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // Do something with 'data' 
});

// lookup: 
// function({ type: 'artist OR album OR track', id: 'Spotify ID Hash' }, hollaback);

// search: 
// function({ type: 'artist OR album OR track', query: 'My search query' }, hollaback);

// get: 
// function(query, hollaback) 
// See http://developer.spotify.com/en/metadata-api/overview/; 