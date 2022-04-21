const ping = require('./functions/Ping'); // Import the ping function
const config = require('./config.json'); // Import the config file

const setIntervalAsync = require('./functions/SetInterval'); // Import the setInterval function
const setUrl = require('./functions/SetUrl'); // Import the setUrl function


let url = setUrl(config.PING.URL); // Set the url
let delay = setIntervalAsync(config.PING.DELAY); //Set the default delay between requests to 1 second
//If the delay is set to 0, the request was sent all 1000 ms

setInterval(async () => { await ping(url) }, delay); // Ping the server
