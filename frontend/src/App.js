import { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import Stats from './components/Stats';
import './App.css';

function App() {
    const [contacts, setContacts] = useState([]);

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

            {/* Render Contacts with embedded Companies */}
            <div>
                <ContactList contacts={contacts} setContacts={setContacts} />
                <p>Click a contact to view associated phone numbers and companies.</p>
            </div>

            {/* Stats component remains visible */}
            <Stats />
        </div>
    );
}

export default App;
