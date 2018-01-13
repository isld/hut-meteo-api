'use strict';

module.exports = function(rawData) {
  var crData = rawData.split(' ');

  return {
    stationName: crData[32],
    temp: {
      outdoor: {
        current: parseFloat(crData[4]),
        max: parseFloat(crData[46]),
        min: parseFloat(crData[47]),
        trend: parseInt(crData[143]),
        windChill: {
          current: parseFloat(crData[44]),
          max: parseFloat(crData[77]),
          min: parseFloat(crData[78])
        },
        dewPoint: {
          current: parseFloat(crData[72]),
          max: parseFloat(crData[138]),
          min: parseFloat(crData[139])
        },
        heatIndex: {
          current: parseFloat(crData[112]),
          max: parseFloat(crData[110]),
          min: parseFloat(crData[111])
        },
        humidex: {
          current: parseFloat(crData[45]),
          max: parseFloat(crData[75]),
          min: parseFloat(crData[76]),
          trend: parseInt(crData[145])
        },
        apparent: {
          current: parseFloat(crData[130]),
          max: parseFloat(crData[136]),
          min: parseFloat(crData[137])
        },
        // Temperatures recorded during the last hour in 6min intervals, first value is 60min ago, last value 6min ago
        lastHour: [
          parseFloat(crData[91]),
          parseFloat(crData[92]),
          parseFloat(crData[93]),
          parseFloat(crData[94]),
          parseFloat(crData[95]),
          parseFloat(crData[96]),
          parseFloat(crData[97]),
          parseFloat(crData[98]),
          parseFloat(crData[99])
        ]
      },
      indoor: {
        current: parseFloat(crData[12]),
        max: parseFloat(crData[128]),
        min: parseFloat(crData[129])
      }
    },
    wind: {
      speed: {
        average: {
          current: parseFloat(crData[1]),
          max: parseFloat(crData[113]),
          last10min: parseFloat(crData[158])
        },
        gust: {
          current: parseFloat(crData[2]),
          max: parseFloat(crData[71]),
          maxLastTIme: crData[134],
          maxTodayTime: crData[135],
          maxInLastMinute: parseFloat(crData[140])
        }
      },
      direction: {
        current: parseInt(crData[3]),
        average: parseInt(crData[117]),
        lastHour: [
          parseFloat(crData[146]),
          parseFloat(crData[147]),
          parseFloat(crData[148]),
          parseFloat(crData[149]),
          parseFloat(crData[150]),
          parseFloat(crData[151]),
          parseFloat(crData[152]),
          parseFloat(crData[153]),
          parseFloat(crData[154]),
          parseFloat(crData[155])
        ]
      },
      history: {
        dailyLowChillTime: crData[166],
        last20hours: [
          parseFloat(crData[51]),
          parseFloat(crData[52]),
          parseFloat(crData[53]),
          parseFloat(crData[54]),
          parseFloat(crData[55]),
          parseFloat(crData[56]),
          parseFloat(crData[57]),
          parseFloat(crData[58]),
          parseFloat(crData[59]),
          parseFloat(crData[60]),
          parseFloat(crData[61]),
          parseFloat(crData[62]),
          parseFloat(crData[63]),
          parseFloat(crData[64]),
          parseFloat(crData[65]),
          parseFloat(crData[66]),
          parseFloat(crData[67]),
          parseFloat(crData[68]),
          parseFloat(crData[69]),
          parseFloat(crData[70])
        ],
        lastHour: [
          parseFloat(crData[80]),
          parseFloat(crData[81]),
          parseFloat(crData[82]),
          parseFloat(crData[83]),
          parseFloat(crData[84]),
          parseFloat(crData[85]),
          parseFloat(crData[86]),
          parseFloat(crData[87]),
          parseFloat(crData[88]),
          parseFloat(crData[89])
        ]
      }
    },
    rain: {
      current: parseFloat(crData[10]),
      yesterday: parseFloat(crData[19]),
      daily: parseFloat(crData[7]),
      monthly: parseFloat(crData[8]),
      yearly: parseFloat(crData[9]),
      max: parseFloat(crData[11]),
      lastHour: [
        parseFloat(crData[100]),
        parseFloat(crData[101]),
        parseFloat(crData[102]),
        parseFloat(crData[103]),
        parseFloat(crData[104]),
        parseFloat(crData[105]),
        parseFloat(crData[106]),
        parseFloat(crData[107]),
        parseFloat(crData[108]),
        parseFloat(crData[109])
      ],
      sinceMorning: parseFloat(crData[162]),
      sinceMidnight: parseFloat(crData[165])
    },
    humidity: {
      outdoor: {
        current: parseInt(crData[5]),
        trend: parseInt(crData[144]),
        max: parseInt(crData[163]),
        min: parseInt(crData[164])
      },
      indoor: parseInt(crData[13])
    },
    dateTime: {
      year: crData[141],
      date: crData[74],
      hour: crData[29],
      minute: crData[30],
      second: crData[31],
      day: crData[35],
      month: crData[36]
    },
    pressure: {
      current: parseFloat(crData[6]),
      max: parseFloat(crData[131]),
      min: parseFloat(crData[132]),
      trend: parseInt(crData[50])
    },
    solar: {
      radiation: parseInt(crData[34]),
      davisUV: parseFloat(crData[79]),
      solarwmVP: parseInt(crData[127])
    },
    geo: {
      lat: parseFloat(crData[160]),
      long: parseFloat(crData[161])
    },
    iconType: crData[48],
    weatherDescription: crData[49],
    cloudHeight: crData[73],
    THSWS: crData[142],
  };
};
