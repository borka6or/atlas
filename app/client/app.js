(function() {

    document.getElementById('submitButton').addEventListener('click', function() {
        var latitude = document.getElementById('latitudeInput').value,
            longitude = document.getElementById('longitudeInput').value;

        // for 5 days from now
        for(var index = 0, max = 5; index < max; index++) {
            getSunriseSunsetTimes(latitude, longitude, moment().add(index, 'days'));
        }

        // for 5 days before now
        for(var index = 0, max = 5; index < max; index++) {
            getSunriseSunsetTimes(latitude, longitude, moment().subtract(index, 'days'));
        }
    });

    function getSunriseSunsetTimes(lat, long, day) {
        console.log('getting sunrise and sunset times');
        console.log(lat);
        console.log(long);
        console.log(day);
    }

})();
