import './App.css';

function App() {
	const rooms = [
		{ room_type: 'Queen', vacant_rooms: 5, price: 100 },
		{ room_type: 'Double', vacant_rooms: 3, price: 75 },
		{ room_type: 'Twin', vacant_rooms: 8, price: 60 }
	];

	return (
		<div className='App'>
			{rooms.map((el) => (
				<ol>
					<li>{el.room_type}</li>
					<li>{el.vacant_rooms}</li>
					<li>{el.price}</li>
				</ol>
			))}
		</div>
	);
}

export default App;

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
