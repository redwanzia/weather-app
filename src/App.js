import React, { useState } from 'react';
import axios from 'axios'

function App() {
	const [ query, setQuery ] = useState('');
  const [ weather, setWeather ] = useState([]);
  const [title, setTitle] = useState('')

	

  const stringUrl = 'https://fathomless-falls-90637.herokuapp.com/https://www.metaweather.com/api/location/search/?query=';
  
  const locationUrl = 'https://fathomless-falls-90637.herokuapp.com/https://www.metaweather.com/api/location/'

	// 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/query=';

	// const fetchSearch = (stringInput) => {
	// 	let res = fetch(`${stringUrl}${query}`).then(res.json()).then((result) => {
	// 		setWeather(result);
	// 		setQuery('');
	// 	});
	// };
	const fetchSearch = (e) => {
		if (e.key === 'Enter') {
      
      axios.get(`${stringUrl}${query}`)
      .then(response=>{
        const result = response.data[0]
        setTitle(result.title)       
        
     
        axios.get(`${locationUrl}${result.woeid}`)
        .then(res=>{
          const resultWoeid = res.data.consolidated_weather
          setWeather(resultWoeid)
          setQuery('')
          console.log(weather);
        })
      })
     
      
      
		}
  };
  

 

	const getDate = (d) => {
		let months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];
		let days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

		let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();

		return `${day} ${date} ${month} ${year}`;
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
					<div className='date'>{getDate(new Date())}</div>
				</div>
				<div className='weather-box'>
          <div className='t'>
           <h1>Five day Forecast</h1>
            {weather.map(el=>{
                return(
                  <div className='card'>
                   
                    <h2> Day:{el.applicable_date}</h2>
                    <h2> Temperature :{el.the_temp}</h2>
                    <h2> Minimum Temperature :{el.min_temp}</h2>
                    <h2> Maximum Temperature :{el.max_temp}</h2>                  
                  </div>
                ) 
              })}
          </div>
				</div>
			</main>
		</div>
	);
}


export default App;
