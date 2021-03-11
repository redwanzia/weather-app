
import './App.css';

function App() {
  const rooms = [
    { room_type: "Queen", vacant_rooms: 5, price: 100 },
    { room_type: "Double", vacant_rooms: 3, price: 75 },
    { room_type: "Twin", vacant_rooms: 8, price: 60 }
  ];

  return (
    <div className="App">
    {rooms.map(el=>(
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
