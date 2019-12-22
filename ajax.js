jQuery(function () {
    $('#butn').click(function () {
        var zip = $("#zipcode").val();
        var country = $("#countrycode").val();
        if (zip !== '') {
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "," + country + "&appid=8995147723c320e8cf4310883301542f", success: function (weathr) {
                    var city = weathr.name;
                    $("#cityvar").text("City : " + city);

                    var temp = Math.round((weathr.main.temp * 9/5 - 459.67));
                    $("#tempvar").text("Temperature (F) : " + temp);

                    var feel = Math.round((weathr.main.feels_like * 9 / 5 - 459.67));
                    $("#feelvar").text("Feels Like (F) : " + feel);

                    var wind = weathr.wind.speed;
                    $("#windvar").text("Wind Sped : " + wind);
                }
            });
        }
    });
});