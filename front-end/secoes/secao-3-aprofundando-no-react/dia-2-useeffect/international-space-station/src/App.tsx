import { useState, useEffect } from 'react';
import { fetchCoordinates } from './services/services';
import './App.css'

type Coordinates = {
  latitude: number;
  longitude: number;
}


function App() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCoordinates();
      setCoordinates({ latitude: data.latitude, longitude: data.longitude});
      setLoading(true);
    }
    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 3000);

    return () => { // Essa é a função cleanup
      clearInterval(intervalId);
    };


  }, []);

  if (!loading) {
    return <h1>Loading...</h1>
  }

  return (
    
    <div>
      <h1>International Space Station Location Tracker</h1>
      {coordinates && (
        <div>
          <h2>{`Latitude: ${coordinates.latitude}`}</h2>
          <h2>{`Longitude: ${coordinates.longitude}`}</h2>
        </div>
      )}
    </div>
  )
}

export default App
