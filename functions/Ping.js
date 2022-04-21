module.exports = (url) => {
    const config = require('../config.json')
    const axios = require('axios');

        axios.request({
            responseType: "JSON",
            method: 'GET',
            url: url
        })

            .then(() => {
            console.log(`Successfully pinged ${url}`);
            switch (config.PING["REPING-AFTER-SUCCESS"]) {
                case true:
                    return
                case false:
                    process.exit(0)
                    break;
            }
        })
          .catch(() => {
              console.log(`Failed to ping ${url}`);
              switch (config.PING["REPING-AFTER-ERROR"]) {
                  case true:
                      return
                  case false:
                      process.exit(0)
                      break;
              }
          });
};