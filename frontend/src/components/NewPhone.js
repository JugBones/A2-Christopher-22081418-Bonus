import { useState } from 'react';

function NewPhone(props) {
    const {contact, phones, setPhones} = props;
    const [phone_number, setPhoneNumber] = useState('');
    const [phone_type, setPhoneType] = useState('family');

    async function createPhone(e) {
        e.preventDefault();

        const response = await fetch('http://localhost/api/contacts/' + contact.id + '/phones', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone_number,
                phone_type
            })
        });

        const data = await response.json();

        if (data.id) {
            setPhones([...phones, data]);
        }

        setPhoneNumber('');
        setPhoneType('family');
    }

	return (
        <form onSubmit={createPhone} onClick={(e) => e.stopPropagation()} className='new-phone'>
            <select name="phone-type" onChange={(e) => setPhoneType(e.target.value)} value={phone_type}>
                <option value="family">Family</option>
                <option value="friends">Friends</option>
                <option value="work">Work</option>
                <option value="others">Others</option>
            </select>
            <input type='text' placeholder='Phone Number' onChange={(e) => setPhoneNumber(e.target.value)} value={phone_number}/>
            <button className='button green' type='submit'>Add {contact.name} Phone</button>
        </form>
	);
}

export default NewPhone;