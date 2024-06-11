Link to API documentation
https://www.weatherapi.com/docs/#



Follow the link below to Create an account with [Weather API](https://www.weatherapi.com) to get your api-key. 

Get your latitude and longitude from google maps

Replace [api_key] with the one copied from weather API

Replace [latitude,longitude] with the one copied from google maps

=========================  API call for FORECAST weather =====================================
https://api.weatherapi.com/v1/forecast.json?key=[api_key]&q=[latitude,longitude]

Sample of return data

{
    "location":
        {
            "name":"Jos","region":"Plateau","country":"Nigeria","lat":9.91,"lon":8.89,"tz_id":"Africa/Lagos","localtime_epoch":1716279314,"localtime":"2024-05-21 9:15"
        },
    "current":
        {
            "last_updated_epoch":1716279300,"last_updated":"2024-05-21 09:15","temp_c":29.0,"temp_f":84.1,"is_day":1,"condition":
                {  
                    "text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000
                },
            "wind_mph":6.3,"wind_kph":10.1,"wind_degree":275,"wind_dir":"W","pressure_mb":1013.0,"pressure_in":29.93,"precip_mm":0.0,"precip_in":0.0,"humidity":42,"cloud":0,"feelslike_c":29.1,"feelslike_f":84.4,"vis_km":10.0,"vis_miles":6.0,"uv":7.0,"gust_mph":7.2,"gust_kph":11.6
        },
    "forecast":
        {
            "forecastday":
                [
                    {
  
"maxwind_mph":7.4,"maxwind_kph":11.9,"totalprecip_mm":0.0,"totalprecip_in":0.0,"totalsnow_cm":0.0,"avgvis_km":10.0,"avgvis_miles":6.0,"avghumidity":47,"daily_will_it_rain":0,"daily_chance_of_rain":0,"daily_will_it_snow":0,"daily_chance_of_snow":0,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"uv":11.0
                            },
                        "astro":
                            {
                                "sunrise":"06:03 AM","sunset":"06:39 PM","moonrise":"05:01 PM","moonset":"04:15 AM","moon_phase":"Waxing Gibbous","moon_illumination":93,"is_moon_up":1,"is_sun_up":0
                            },
                        "hour":
                            [
                                {"time_epoch":1716246000,"time":"2024-05-21 00:00","temp_c":24.5,"temp_f":76.0,"is_day":0,"condition":
                                    {  
                                        "text":"Clear ","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000
                                    },
                                    "wind_mph":4.7,"wind_kph":7.6,"wind_degree":221,"wind_dir":"SW","pressure_mb":1013.0,"pressure_in":29.91,"precip_mm":0.0,"precip_in":0.0,"snow_cm":0.0,"humidity":65,"cloud":2,"feelslike_c":25.9,"feelslike_f":78.7,"windchill_c":24.5,"windchill_f":76.0,"heatindex_c":25.9,"heatindex_f":78.7,"dewpoint_c":17.4,"dewpoint_f":63.2,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":9.0,"gust_kph":14.4,"uv":1.0
                                },
                                {
                                    "time_epoch":1716249600,"time":"2024-05-21 01:00","temp_c":24.1,"temp_f":75.4,"is_day":0,"condition":
                                    {
                                        "text":"Clear ","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000
                                    },
                                    "wind_mph":4.7,"wind_kph":7.6,"wind_degree":221,"wind_dir":"SW","pressure_mb":1013.0,"pressure_in":29.9,"precip_mm":0.0,"precip_in":0.0,"snow_cm":0.0,"humidity":66,"cloud":2,"feelslike_c":25.7,"feelslike_f":78.2,"windchill_c":24.1,"windchill_f":75.4,"heatindex_c":25.7,"heatindex_f":78.2,"dewpoint_c":17.4,"dewpoint_f":63.4,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":9.1,"gust_kph":14.7,"uv":1.0
                                },
                                {
                                    "time_epoch":1716253200,"time":"2024-05-21 02:00","temp_c":23.6,"temp_f":74.5,"is_day":0,"condition":
                                    {
                                        "text":"Clear ","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000
                                    },
                                    "wind_mph":4.7,"wind_kph":7.6,"wind_degree":231,"wind_dir":"SW","pressure_mb":1012.0,"pressure_in":29.89,"precip_mm":0.0,"precip_in":0.0,"snow_cm":0.0,"humidity":69,"cloud":2,"feelslike_c":25.4,"feelslike_f":77.6,"windchill_c":23.6,"windchill_f":74.5,"heatindex_c":25.4,"heatindex_f":77.6,"dewpoint_c":17.5,"dewpoint_f":63.5,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":9.1,"gust_kph":14.6,"uv":1.0
                                },
                                {
                                    "time_epoch":1716256800,"time":"2024-05-21 03:00","temp_c":23.1,"temp_f":73.5,"is_day":0,"condition":
                                    {
                                        "text":"Clear ","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000
                                    },
                                    "wind_mph":4.5,"wind_kph":7.2,"wind_degree":238,"wind_dir":"WSW","pressure_mb":1012.0,"pressure_in":29.89,"precip_mm":0.0,"precip_in":0.0,"snow_cm":0.0,"humidity":72,"cloud":2,"feelslike_c":25.0,"feelslike_f":77.1,"windchill_c":23.1,"windchill_f":73.5,"heatindex_c":25.0,"heatindex_f":77.1,"dewpoint_c":17.7,"dewpoint_f":63.8,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":8.6,"gust_kph":13.9,"uv":1.0
                                },
                                {
                                    "time_epoch":1716260400,"time":"2024-05-21 04:00","temp_c":22.8,"temp_f":73.0,"is_day":0,"condition":
                                    {
                                        "text":"Clear ","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000
                                    },
                                    "wind_mph":4.7,"wind_kph":7.6,"wind_degree":235,"wind_dir":"SW","pressure_mb":1012.0,"pressure_in":29.9,"precip_mm":0.0,"precip_in":0.0,"snow_cm":0.0,"humidity":74,"cloud":2,"feelslike_c":24.9,"feelslike_f":76.8,"windchill_c":22.8,"windchill_f":73.0,"heatindex_c":24.9,"heatindex_f":76.8,"dewpoint_c":17.9,"dewpoint_f":64.2,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":9.1,"gust_kph":14.7,"uv":1.0
                                },
                                {
                                    "time_epoch":1716264000,"time":"2024-05-21 05:00","temp_c":22.6,"temp_f":72.7,"is_day":0,"condition":
                                    {
                                        "text":"Clear ","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000
                                    },
                                    "wind_mph":4.9,"wind_kph":7.9,"wind_degree":234,"wind_dir":"SW","pressure_mb":1013.0,"pressure_in":29.91,"precip_mm":0.0,"precip_in":0.0,"snow_cm":0.0,"humidity":75,"cloud":2,"feelslike_c":24.8,"feelslike_f":76.7,"windchill_c":22.6,"windchill_f":72.7,"heatindex_c":24.8,"heatindex_f":76.7,"dewpoint_c":17.9,"dewpoint_f":64.3,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":9.7,"gust_kph":15.6,"uv":1.0
                                },
                                {
                                    "time_epoch":1716267600,"time":"2024-05-21 06:00","temp_c":22.4,"temp_f":72.4,"is_day":0,"condition":
                                    {
                                        "text":"Clear ","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000
                                    },
                                    "wind_mph":4.7,"wind_kph":7.6,"wind_degree":241,"wind_dir":"WSW","pressure_mb":1013.0,"pressure_in":29.92,"precip_mm":0.0,"precip_in":0.0,"snow_cm":0.0,"humidity":75,"cloud":0,"feelslike_c":24.7,"feelslike_f":76.5,"windchill_c":22.4,"windchill_f":72.4,"heatindex_c":24.7,"heatindex_f":76.5,"dewpoint_c":17.9,"dewpoint_f":64.1,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":9.5,"gust_kph":15.2,"uv":1.0
                                },
                                {
                                    "time_epoch":1716271200,"time":"2024-05-21 07:00","temp_c":23.0,"temp_f":73.3,"is_day":1,"condition":
                                    {
                                        "text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000
                                    },
                                    "wind_mph":4.7,"wind_kph":7.6,"wind_degree":250,"wind_dir":"WSW","pressure_mb":1013.0,"pressure_in":29.92,"precip_mm":0.0,"precip_in":0.0,"snow_cm":0.0,"humidity":69,"cloud":0,"feelslike_c":25.0,"feelslike_f":76.9,"windchill_c":23.0,"windchill_f":73.3,"heatindex_c":25.0,"heatindex_f":76.9,"dewpoint_c":17.0,"dewpoint_f":62.6,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":8.6,"gust_kph":13.9,"uv":6.0
                                    },
                                    {
                                        "time_epoch":1716274800,"time":"2024-05-21 08:00","temp_c":26.0,"temp_f":78.9,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":6.7,"wind_kph":10.8,"wind_degree":258,"wind_dir":"WSW","pressure_mb":1014.0,"pressure_in":29.93,"precip_mm":0.0,"precip_in":0.0,"snow_cm":0.0,"humidity":56,"cloud":0,"feelslike_c":27.0,"feelslike_f":80.6,"windchill_c":26.0,"windchill_f":78.9,"heatindex_c":27.0,"heatindex_f":80.6,"dewpoint_c":16.7,"dewpoint_f":62.0,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":8.4,"gust_kph":13.5,"uv":7.0},{"time_epoch":1716278400,"time":"2024-05-21 09:00","temp_c":29.0,"temp_f":84.1,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":6.3,"wind_kph":10.1,"wind_degree":275,"wind_dir":"W","pressure_mb":1013.0,"pressure_in":29.93,"precip_mm":0.0,"precip_in":0.0,"snow_cm":0.0,"humidity":42,"cloud":0,"feelslike_c":29.1,"feelslike_f":84.4,"windchill_c":29.0,"windchill_f":84.1,"heatindex_c":29.1,"heatindex_f":84.4,"dewpoint_c":14.8,"dewpoint_f":58.7,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":7.2,"gust_kph":11.6,"uv":7.0},{"time_epoch":1716282000,"time":"2024-05-21 10:00","temp_c":31.7,"temp_f":89.1,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":4.7,"wind_kph":7.6,"wind_degree":306,"wind_dir":"NW","pressure_mb":1013.0,"pressure_in":29.92,"precip_mm":0.0,"precip_in":0.0,"snow_cm":0.0,"humidity":30,"cloud":2,"feelslike_c":30.8,"feelslike_f":87.4,"windchill_c":31.7,"windchill_f":89.1,"heatindex_c":30.8,"heatindex_f":87.4,"dewpoint_c":11.8,"dewpoint_f":53.3,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":5.4,"gust_kph":8.7,"uv":8.0},{"time_epoch":1716285600,"time":"2024-05-21 11:00","temp_c":33.4,"temp_f":92.2,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":5.1,"wind_kph":8.3,"wind_degree":335,"wind_dir":"NNW","pressure_mb":1013.0,"pressure_in":29.9,"precip_mm":0.0,"precip_in":0.0,"snow_cm":0.0,"humidity":23,"cloud":5,"feelslike_c":31.9,"feelslike_f":89.4,"windchill_c":33.4,"windchill_f":92.2,"heatindex_c":31.9,"heatindex_f":89.4,"dewpoint_c":9.7,"dewpoint_f":49.5,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":5.9,"gust_kph":9.5,"uv":8.0},{"time_epoch":1716289200,"time":"2024-05-21 12:00","temp_c":34.8,"temp_f":94.6,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":5.6,"wind_kph":9.0,"wind_degree":356,"wind_dir":"N","pressure_mb":1011.0,"pressure_in":29.87,"precip_mm":0.0,"precip_in":0.0,"snow_cm":0.0,"humidity":20,"cloud":4,"feelslike_c":32.9,"feelslike_f":91.3,"windchill_c":34.8,"windchill_f":94.6,"heatindex_c":32.9,"heatindex_f":91.3,"dewpoint_c":8.3,"dewpoint_f":47.0,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":6.4,"gust_kph":10.4,"uv":8.0},{"time_epoch":1716292800,"time":"2024-05-21 13:00","temp_c":35.7,"temp_f":96.2,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":5.4,"wind_kph":8.6,"wind_degree":28,"wind_dir":"NNE","pressure_mb":1010.0,"pressure_in":29.83,"precip_mm":0.0,"precip_in":0.0,"snow_cm":0.0,"humidity":17,"cloud":3,"feelslike_c":34.0,"feelslike_f":93.2,"windchill_c":35.7,"windchill_f":96.2,"heatindex_c":34.0,"heatindex_f":93.2,"dewpoint_c":7.2,"dewpoint_f":44.9,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":6.2,"gust_kph":9.9,"uv":9.0},{"time_epoch":1716296400,"time":"2024-05-21 14:00","temp_c":36.0,"temp_f":96.8,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":5.6,"wind_kph":9.0,"wind_degree":62,"wind_dir":"ENE","pressure_mb":1009.0,"pressure_in":29.8,"precip_mm":0.0,"precip_in":0.0,"snow_cm":0.0,"humidity":16,"cloud":2,"feelslike_c":34.4,"feelslike_f":94.0,"windchill_c":36.0,"windchill_f":96.8,"heatindex_c":34.4,"heatindex_f":94.0,"dewpoint_c":6.2,"dewpoint_f":43.2,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":6.4,"gust_kph":10.4,"uv":9.0},{"time_epoch":1716300000,"time":"2024-05-21 15:00","temp_c":35.9,"temp_f":96.6,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":6.0,"wind_kph":9.7,"wind_degree":83,"wind_dir":"E","pressure_mb":1008.0,"pressure_in":29.77,"precip_mm":0.0,"precip_in":0.0,"snow_cm":0.0,"humidity":16,"cloud":2,"feelslike_c":34.3,"feelslike_f":93.7,"windchill_c":35.9,"windchill_f":96.6,"heatindex_c":34.3,"heatindex_f":93.7,"dewpoint_c":6.1,"dewpoint_f":42.9,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":7.0,"gust_kph":11.2,"uv":9.0},{"time_epoch":1716303600,"time":"2024-05-21 16:00","temp_c":34.9,"temp_f":94.8,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":4.9,"wind_kph":7.9,"wind_degree":106,"wind_dir":"ESE","pressure_mb":1008.0,"pressure_in":29.77,"precip_mm":0.0,"precip_in":0.0,"snow_cm":0.0,"humidity":18,"cloud":5,"feelslike_c":33.1,"feelslike_f":91.5,"windchill_c":34.9,"windchill_f":94.8,"heatindex_c":33.1,"heatindex_f":91.5,"dewpoint_c":7.1,"dewpoint_f":44.8,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":5.9,"gust_kph":9.4,"uv":8.0},{"time_epoch":1716307200,"time":"2024-05-21 17:00","temp_c":33.2,"temp_f":91.7,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":3.4,"wind_kph":5.4,"wind_degree":161,"wind_dir":"SSE","pressure_mb":1008.0,"pressure_in":29.77,"precip_mm":0.0,"precip_in":0.0,"snow_cm":0.0,"humidity":24,"cloud":0,"feelslike_c":31.6,"feelslike_f":88.9,"windchill_c":33.2,"windchill_f":91.7,"heatindex_c":31.6,"heatindex_f":88.9,"dewpoint_c":9.7,"dewpoint_f":49.4,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":4.6,"gust_kph":7.3,"uv":8.0},{"time_epoch":1716310800,"time":"2024-05-21 18:00","temp_c":31.4,"temp_f":88.5,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":5.1,"wind_kph":8.3,"wind_degree":213,"wind_dir":"SSW","pressure_mb":1009.0,"pressure_in":29.79,"precip_mm":0.0,"precip_in":0.0,"snow_cm":0.0,"humidity":30,"cloud":0,"feelslike_c":30.4,"feelslike_f":86.8,"windchill_c":31.4,"windchill_f":88.5,"heatindex_c":30.4,"heatindex_f":86.8,"dewpoint_c":11.6,"dewpoint_f":52.9,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":8.2,"gust_kph":13.1,"uv":8.0},{"time_epoch":1716314400,"time":"2024-05-21 19:00","temp_c":29.2,"temp_f":84.6,"is_day":0,"condition":{"text":"Clear ","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":7.4,"wind_kph":11.9,"wind_degree":216,"wind_dir":"SW","pressure_mb":1010.0,"pressure_in":29.83,"precip_mm":0.0,"precip_in":0.0,"snow_cm":0.0,"humidity":41,"cloud":0,"feelslike_c":29.3,"feelslike_f":84.8,"windchill_c":29.2,"windchill_f":84.6,"heatindex_c":29.3,"heatindex_f":84.8,"dewpoint_c":14.8,"dewpoint_f":58.6,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":11.8,"gust_kph":19.0,"uv":1.0},{"time_epoch":1716318000,"time":"2024-05-21 20:00","temp_c":27.9,"temp_f":82.2,"is_day":0,"condition":{"text":"Clear ","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":6.9,"wind_kph":11.2,"wind_degree":209,"wind_dir":"SSW","pressure_mb":1011.0,"pressure_in":29.86,"precip_mm":0.0,"precip_in":0.0,"snow_cm":0.0,"humidity":51,"cloud":2,"feelslike_c":28.7,"feelslike_f":83.6,"windchill_c":27.9,"windchill_f":82.2,"heatindex_c":28.7,"heatindex_f":83.6,"dewpoint_c":16.8,"dewpoint_f":62.2,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":10.7,"gust_kph":17.2,"uv":1.0},{"time_epoch":1716321600,"time":"2024-05-21 21:00","temp_c":26.8,"temp_f":80.3,"is_day":0,"condition":{"text":"Clear ","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":6.0,"wind_kph":9.7,"wind_degree":209,"wind_dir":"SSW","pressure_mb":1012.0,"pressure_in":29.9,"precip_mm":0.0,"precip_in":0.0,"snow_cm":0.0,"humidity":58,"cloud":4,"feelslike_c":28.0,"feelslike_f":82.4,"windchill_c":26.8,"windchill_f":80.3,"heatindex_c":28.0,"heatindex_f":82.4,"dewpoint_c":17.8,"dewpoint_f":64.1,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":9.8,"gust_kph":15.7,"uv":1.0},{"time_epoch":1716325200,"time":"2024-05-21 22:00","temp_c":26.3,"temp_f":79.3,"is_day":0,"condition":{"text":"Clear ","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":5.6,"wind_kph":9.0,"wind_degree":211,"wind_dir":"SSW","pressure_mb":1013.0,"pressure_in":29.92,"precip_mm":0.0,"precip_in":0.0,"snow_cm":0.0,"humidity":61,"cloud":6,"feelslike_c":27.6,"feelslike_f":81.6,"windchill_c":26.3,"windchill_f":79.3,"heatindex_c":27.6,"heatindex_f":81.6,"dewpoint_c":18.2,"dewpoint_f":64.8,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":9.3,"gust_kph":15.0,"uv":1.0},
                                {
                                    "time_epoch":1716328800,"time":"2024-05-21 23:00","temp_c":25.6,"temp_f":78.1,"is_day":0,"condition":
                                        {
                                            "text":"Clear ","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000
                                        },
                                        "wind_mph":5.8,"wind_kph":9.4,"wind_degree":212,"wind_dir":"SSW","pressure_mb":1013.0,"pressure_in":29.93,"precip_mm":0.0,"precip_in":0.0,"snow_cm":0.0,"humidity":64,"cloud":7,"feelslike_c":27.0,"feelslike_f":80.6,"windchill_c":25.6,"windchill_f":78.1,"heatindex_c":27.0,"heatindex_f":80.6,"dewpoint_c":18.4,"dewpoint_f":65.1,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":10.3,"gust_kph":16.6,"uv":1.0
                                        
                                }
                            ]
                        }
                ]
        }
}















================================  API call for daily weather =================================================
https://api.weatherapi.com/v1/current.json?key=[api_key]&q=[latitude,longitude]

Sample of return data

{
    "location":
        {
            "name":"Jos",
            "region":"Plateau",
            "country":"Nigeria",
            "lat":9.91,"lon":8.89,
            "tz_id":"Africa/Lagos",
            "localtime_epoch":1716233177,
            "localtime":"2024-05-20 20:26"
        },
    "current":
        {
            "last_updated_epoch":1716232500,
            "last_updated":"2024-05-20 20:15", 
            "temp_c":27.5,
            "temp_f":81.4,
            "is_day":0,
            "condition":
                {
                    "text":"Clear",
                    "icon":"//cdn.weatherapi.com/weather/64x64/night/113.png",
                    "code":1000},
                    "wind_mph":6.5,
                    "wind_kph":10.4,
                    "wind_degree":205,
                    "wind_dir":"SSW",
                    "pressure_mb":1011.0,
                    "pressure_in":29.84,
                    "precip_mm":0.0,
                    "precip_in":0.0,
                    "humidity":52,
                    "cloud":4,
                    "feelslike_c":28.3,
                    "feelslike_f":82.9,
                    "vis_km":10.0,
                    "vis_miles":6.0,
                    "uv":1.0,
                    "gust_mph":10.5,
                    "gust_kph":16.9
        }
}