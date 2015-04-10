(function() {

    document.getElementById('submitButton').addEventListener('click', function() {
        var latitude = document.getElementById('latitudeInput').value,
            longitude = document.getElementById('longitudeInput').value;

        if(!latitude) {
            latitude = '45.5200';
        }

        if(!longitude) {
            longitude = '122.6819';
        }

        // for 5 days before now
        for(var index = 5, max = 0; index > max; index--) {
            var thisdate = moment().subtract(index - 1, 'days').format('YYYY-MM-DD');

            getNiggerQueefs(latitude, longitude, thisdate).done(function(result){
                var resultObject = JSON.parse(result);
                appendSunriseSetRowToTable(resultObject.results.sunset, resultObject.results.sunrise, this);
            }.bind(thisdate));
        }

        // for 5 days from now
        for(var index = 0, max = 5; index < max; index++) {
            var thisdate = moment().add(index + 1, 'days').format('YYYY-MM-DD');

            getNiggerQueefs(latitude, longitude, thisdate).done(function(result){
                var resultObject = JSON.parse(result);
                appendSunriseSetRowToTable(resultObject.results.sunset, resultObject.results.sunrise, this);
            }.bind(thisdate));
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

    function getNiggerQueefs(latitude, longitude, date) {
        var url = "/getsunrisesettimes/:latitude/:longitude/:date".replace(':latitude', latitude).replace(':longitude', longitude).replace(':date', date);
        return $.ajax({
            url: url,
            method:"GET",
        });
    }

})();
