import { useState } from 'react';

function NewBooth(props) {
    const {booths, setBooths} = props;
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');

    async function createBooth(e) {
        e.preventDefault();

        console.log("Name:", name, "Category:", category); // Debug log

        const response = await fetch('http://localhost/api/booths', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                category
            })
        });

        const data = await response.json();

        if (data.id) {
            setBooths([...booths, data]);
        }

        setName('');
        setCategory('');
    }

	return (
        <form className='new-booth' onSubmit={createBooth}>
            <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} value={name}/>
            <input type='text' placeholder='Category' onChange={(e) => setCategory(e.target.value)} value={category}/>
            <button className='button green' type='submit'>Create Booth</button>
        </form>
	);
}

export default NewBooth;