import { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import Stats from './components/Stats';
import Companies from './components/Companies'; 
import './App.css';

function App() {
    const [contacts, setContacts] = useState([]);
    const [showCompanies, setShowCompanies] = useState(false);

    // Fetch contacts on component mount
    useEffect(() => {
        fetch('http://localhost/api/contacts')
            .then(response => response.json())
            .then(data => setContacts(data))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div className='page'>
            <h1>Contactor</h1>
            
            {/* Button to toggle between Contacts and Companies */}
            <div>
                <button onClick={() => setShowCompanies(false)}>Contacts</button>
                <button onClick={() => setShowCompanies(true)}>Companies</button>
            </div>

            {/* Render either Contacts or Companies based on toggle */}
            {showCompanies ? (
                <div>
                    <h2>Companies</h2>
                    <Companies />
                </div>
            ) : (
                <div>
                    <ContactList contacts={contacts} setContacts={setContacts} />
                    <p>Click a contact to view associated phone numbers</p>
                </div>
            )}

            {/* Stats component remains visible */}
            <Stats />
        </div>
    );
}

export default App;
