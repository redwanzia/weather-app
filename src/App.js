import './App.css';

function App() {
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
					<input className='search-bar' placeholder='Search ...' type='text' />
				</div>
				<div className='location-box'>
					<div className='location'>Toronto</div>
					<div className='date'>{getDate(new Date())}</div>
				</div>
				<div className='weather-box'>
					<div className='temp'>15°c</div>
				</div>
			</main>
		</div>
	);
}

export default App;
