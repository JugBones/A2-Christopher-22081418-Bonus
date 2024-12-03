import { useState, useEffect } from 'react';
import BoothList from './components/BoothList';
import Stats from './components/Stats';
import './App.css';

function App() {
    const [booths, setBooths] = useState([]);

    // Fetch booths on component mount
    useEffect(() => {
        fetch('http://localhost/api/booths')
            .then(response => response.json())
            .then(data => setBooths(data))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div className='page'>
            <h1>Pekan Raya Jakarta Management App</h1>

            {/* Render Booths with embedded Custs */}
            <div>
                <BoothList booths={booths} setBooths={setBooths} />
                <p>Click a booth to view associated staff numbers and custs.</p>
            </div>

            {/* Stats component remains visible */}
            <Stats />
        </div>
    );
}

export default App;
