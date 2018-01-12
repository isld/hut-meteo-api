'use strict';

var https = require('https')

module.exports = function(Current) {
  Current.status = function(cb) {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    console.log('Current hour is %d', currentHour);

    var fileURL = 'https://lrrhut.com/meteo/WD/clientraw.txt';
    https.get(fileURL, function(res) {
      const statusCode = res.statusCode;
      const contentType = res.headers['content-type'];

      var error;
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
          'Status Code: ' + statusCode);
      } else if (!/^text\/plain/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
          'Expected application/json but received ' + contentType);
      }
      if (error) {
        console.error(error.message);
        // consume response data to free up memory
        res.resume();
        return;
      }

      res.setEncoding('utf8');
      var rawData = '';

      res.on('data', function(chunk) { rawData += chunk; });
      res.on('end', function() {
        var crData = rawData.split(' ');

        var output = {
          windAvgSpeed: crData[1],
          windGusts: crData[2],
          windDirection: crData[3],
          outsideTemp: crData[4],
          outsideHumidity: crData[5],
          barometer: crData[6],
          rainDaily: crData[7],
          rainMonthly: crData[8],
          rainYearly: crData[9]
        };

        cb(null, output);
      });
    }).on('error', function(e) {
      console.error('Got error: ' + e.message);
    });
  };
  Current.remoteMethod(
    'status', {
      http: {
        path: '/status',
        verb: 'get'
      },
      returns: {
        arg: 'status',
        type: 'string'
      }
    }
  );
};
