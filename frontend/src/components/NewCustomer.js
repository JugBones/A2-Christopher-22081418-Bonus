import { useState } from 'react';

function NewCustomer(props) {
    const {booth, custs, setCusts} = props;
    const [customer_name, setCustomerName] = useState('');
    const [customer_address, setCustomerAddress] = useState('');

    async function createCustomer(e) {
        e.preventDefault();

        const response = await fetch('http://localhost/api/booths/' + booth.id + '/custs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                customer_name,
                customer_address,
            })
        });

        const data = await response.json();

        if (data.id) {
            setCusts([...custs, data]);
        }

        setCustomerName('');
        setCustomerAddress('');
    }

    return (
        <form onSubmit={createCustomer} onClick={(e) => e.stopPropagation()} className="new-customer">
            <input
                type="text"
                placeholder="Customer Name"
                onChange={(e) => setCustomerName(e.target.value)}
                value={customer_name}
            />
            <input
                type="text"
                placeholder="Customer Address"
                onChange={(e) => setCustomerAddress(e.target.value)}
                value={customer_address}
            />
            <button className="button green" type="submit">
                Add {booth.name} Customer
            </button>
        </form>
    );
}

export default NewCustomer;
