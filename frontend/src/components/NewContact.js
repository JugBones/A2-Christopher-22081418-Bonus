import { useState } from 'react';

function NewContact(props) {
    const {contacts, setContacts} = props;
    const [address, setAddress] = useState('');
    const [name, setName] = useState('family');

    async function createContact(e) {
        e.preventDefault();

        const response = await fetch('http://localhost/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                address
            })
        });

        const data = await response.json();

        if (data.id) {
            setContacts([...contacts, data]);
        }

        setName('family');
        setAddress('');
    }

	return (
        <form className='new-contact' onSubmit={createContact}>
            <select name="contact-category" onChange={(e) => setName(e.target.value)} value={name}>
                <option value="family">Family</option>
                <option value="friends">Friends</option>
                <option value="work">Work</option>
                <option value="others">Others</option>
            </select>
            <input type='text' placeholder='Address' onChange={(e) => setAddress(e.target.value)} value={address}/>
            <button className='button green' type='submit'>Create Contact</button>
        </form>
	);
}

export default NewContact;