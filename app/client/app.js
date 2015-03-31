(function() {

    document.getElementById('submitButton').addEventListener('click', function() {
        var latitude = document.getElementById('latitudeInput').value,
            longitude = document.getElementById('longitudeInput').value;

        // for 5 days before now
        for(var index = 5, max = 0; index > max; index--) {
            var date = moment().subtract(index, 'days'),
                sunDickPussyFuck = getSunriseSunsetTimes(latitude, longitude, date);

            appendSunriseSetRowToTable(sunDickPussyFuck.sunriseTime, sunDickPussyFuck.sunsetTime, date);

        }

        // for 5 days from now
        for(var index = 0, max = 5; index < max; index++) {
            var date = moment().add(index + 1, 'days'),
                sunRiseSetTimes = getSunriseSunsetTimes(latitude, longitude, date);

            appendSunriseSetRowToTable(sunRiseSetTimes.sunriseTime, sunRiseSetTimes.sunsetTime, date);
        }


    });

    function getSunriseSunsetTimes(lat, long, day) {
        return {
            sunriseTime : Math.floor(Math.random() * 24) + 0,
            sunsetTime : Math.floor(Math.random() * 24) + 0
        };
    }

    function appendSunriseSetRowToTable(sunriseTime, sunsetTime, date) {
        var newRow = document.createElement('tr'),
            cell1 = document.createElement('td'),
            cell2 = document.createElement('td'),
            cell3 = document.createElement('td');

        cell1.innerText = date;
        cell2.innerText = sunriseTime;
        cell3.innerText = sunsetTime;

        newRow.appendChild(cell1);
        newRow.appendChild(cell2);
        newRow.appendChild(cell3);

        document.getElementById('sunriseSetTimes').querySelector('tbody').appendChild(newRow);
    }

})();
