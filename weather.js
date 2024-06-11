
const apiKey = '';
const latitude = '';
const longitude = '';

const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}`;



fetch(url)
.then(response => {
	if (!response.ok) {
	throw new Error('Network response was not ok ' + response.statusText);
	}
	return response.json();
})
.then(data => {
	console.log(data);

	//get current temperature and round up to the nearest integer
	const current_temp =  Math.round(data.current.temp_c);

	// maximum temperature
	const max_tempt = data.forecast.forecastday[0].day.maxtemp_c;

	// miniimum temperature
	const min_tempt = data.forecast.forecastday[0].day.mintemp_c;

	// get time temperature
	const d = new Date(data.location.localtime);

	// get the city and region name
	const state_location = data.location.name+', '+data.location.region;

	// get the country name
	const country_location = data.location.country;

	// get the current weather icon
	let icon = data.current.condition.icon;

	// Remove two forward slashes so we get the right file path where images are stored
	let final_icon = icon.replace(/\/\//g, "");

	console.log(final_icon);

	// Create a new img element
	let imgElement = document.createElement('img');

	// Set the src attribute to the URL of the image
	imgElement.src = final_icon;

	// Optionally, set other attributes like alt, width, and height
	imgElement.alt = data.current.condition.text;
	// imgElement.width = 300;  // Set the width to 300 pixels
	// imgElement.height = 200; // Set the height to 200 pixels

	// get the current humidity
	const humidity = data.current.humidity

	// get the feels-like temperature
	const feels_like = data.current.feelslike_c

	// get chances of rain falling
	const chance_of_rain = data.forecast.forecastday[0].day.daily_chance_of_rain;

	// get the current pressure
	const pressure = data.current.pressure_in

	// get the current dewpoint
	const dewpoint = data.current.dewpoint_c

	// get the current windspeed
	const windspeed = data.current.wind_mph +'mph '+ data.current.wind_dir

	// get sunrise time
	const sunrise = data.forecast.forecastday[0].astro.sunrise;

	// get sunset time
	const sunset = data.forecast.forecastday[0].astro.sunset;

	// get the current cloudcover
	const cloudcover = data.current.cloud

	// get hourly data and loop through
	const hourly = data.forecast.forecastday[0].hour;

	console.log(hourly)

	// Select the table body where rows will be added
	const tableBody = document.querySelector('#myTable tbody');

	// Loop through the hourly forecast
	for (let i = 0; i < hourly.length; i++) {

		// Create a new table row
		const row = document.createElement('tr');

		// Create a cell for the hour_time_cell item
		const hour_time_cell = document.createElement('td');
		// get the hourly time at the current index
		hour_time_cell.textContent = hourly[i].time;
		row.appendChild(hour_time_cell); // Append the cell to the row

		// Create a cell for the hour_temp_cell item
		const hour_temp_cell = document.createElement('td');
		// get the hourly temperature at the current index
		hour_temp_cell.textContent = hourly[i].temp_c;
		row.appendChild(hour_temp_cell); // Append the cell to the row

		// Create a cell for the hour_rain_chance_cell item
		const hour_rain_chance_cell = document.createElement('td');
		// get the hourly rain chance at the current index
		hour_rain_chance_cell.textContent = hourly[i].chance_of_rain;
		row.appendChild(hour_rain_chance_cell); // Append the cell to the row
		
		// get hourly icon at the current index and Remove two forward slashes so we get the right file path where images are stored
		hourly_icons_with_slashes = hourly[i].condition.icon
		let right_icon_path = hourly_icons_with_slashes.replace(/\/\//g, "");

		// Create a cell for the hour_icon_cell item
		const hour_icon_cell = document.createElement('td');

		// Create a new img element
		let imgElement = document.createElement('img');
		// Set the src attribute to the URL of the image
		imgElement.src = right_icon_path;

		hour_icon_cell.appendChild(imgElement); // Append the image to the cell
		row.appendChild(hour_icon_cell); // Append the cell to the row

		// Append the row to the table body
		tableBody.appendChild(row);
		
	}

	
	
	// Outputting to HTML element
	//output Current temperature to the target HTML element
	document.getElementById('cur_temp').innerText = `${current_temp}`;

	//output maximum day temperature to the target HTML element
	document.getElementById('max_temp').innerText = `${max_tempt}`;

	//output minimum day temperature to the target HTML element
	document.getElementById('min_temp').innerText = `${min_tempt}`;

	//output today's date to the target HTML element
	document.getElementById("timedate").innerHTML = d.toDateString();	
	
	//output state location to the target HTML element
	document.getElementById('citystate').innerText = `${state_location}`;

	//output country location to the target HTML element
	document.getElementById('country').innerText = `${country_location}`;

	// Select the target HTML element
	let imageContainer = document.getElementById('current_icon');
	// Append the img element to the target container
	imageContainer.appendChild(imgElement);

	//output humidity to the target HTML element
	document.getElementById('humidity').innerText = `${humidity}`;

	//output feel like to the target HTML element
	document.getElementById('feels').innerText = `${feels_like}`;

	//output chances of rain to the target HTML element
	document.getElementById('rainchance').innerText = `${chance_of_rain}`;
	
	//output pressure to the target HTML element
	document.getElementById('pressure').innerText = `${pressure}`;

	//output dewpoint to the target HTML element
	document.getElementById('dew').innerText = `${dewpoint}`;

	//output wind to the target HTML element
	document.getElementById('wind').innerText = `${windspeed}`;

	//output sunrise to the target HTML element
	document.getElementById('sunrise').innerText = `${sunrise}`;

	//output sunset to the target HTML element
	document.getElementById('sunset').innerText = `${sunset}`;

	//output cloudcover to the target HTML element
	document.getElementById('cloudcover').innerText = `${cloudcover}`;
		
})
.catch(error => {
	console.error('There has been a problem with your fetch operation:', error);
});