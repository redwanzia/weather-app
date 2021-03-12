import React, { useState } from 'react';
import axios from 'axios';

function App() {
	const [ query, setQuery ] = useState('');
	const [ weather, setWeather ] = useState([]);
	const [ title, setTitle ] = useState('');

	const stringUrl =
		'https://fathomless-falls-90637.herokuapp.com/https://www.metaweather.com/api/location/search/?query=';

	const locationUrl = 'https://fathomless-falls-90637.herokuapp.com/https://www.metaweather.com/api/location/';

	const fetchSearch = (e) => {
		if (e.key === 'Enter') {
			axios.get(`${stringUrl}${query}`).then((response) => {
				const result = response.data[0];
				setTitle(result.title);

				axios.get(`${locationUrl}${result.woeid}`).then((res) => {
					const resultWoeid = res.data.consolidated_weather;
					setWeather(resultWoeid);
					setQuery('');
					console.log(weather);
				});
			});
		}
	};

	return (
		<div className='App'>
			<main className='l'>
				<div className='search-box'>
					<input
						className='search-bar'
						placeholder='Search ...'
						type='text'
						onChange={(e) => setQuery(e.target.value)}
						value={query}
						onKeyPress={fetchSearch}
					/>
				</div>
				<div className='location-box'>
					<div className='location'>{title}</div>
				</div>
				<div className='weather-box'>
					<div className='t'>
						<h1>Five day Forecast</h1>
						{weather.map((el) => {
							return (
								<div className='container'>
									<div className='card'>
										<h2> Day:{el.applicable_date}</h2>
										<h2> {el.weather_state_name}</h2>
										<h3> Temperature : {Math.round(el.the_temp)}°C</h3>
										<h3> Minimum Temperature : {Math.round(el.min_temp)}°C</h3>
										<h3> Maximum Temperature : {Math.round(el.max_temp)}°C</h3>
										<h3> Humidity : {el.humidity}</h3>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
