import { useState } from 'react';

function NewStaff(props) {
    const { booth, staffs, setStaffs } = props;
    const [staff_number, setStaffNumber] = useState('');
    const [staff_type, setStaffType] = useState('cashier');
    const [staff_name, setStaffName] = useState(''); // New state for staff name

    async function createStaff(e) {
        e.preventDefault();

        const response = await fetch(
            'http://localhost/api/booths/' + booth.id + '/staffs',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    staff_number,
                    staff_type,
                    staff_name, // Send staff_name to backend
                }),
            }
        );

        const data = await response.json();

        if (data.id) {
            setStaffs([...staffs, data]);
        }

        setStaffNumber('');
        setStaffType('cashier');
        setStaffName(''); // Reset staff_name
    }

    return (
        <form onSubmit={createStaff} onClick={(e) => e.stopPropagation()} className="new-staff">
            <input
                type="text"
                placeholder="Staff Name"
                onChange={(e) => setStaffName(e.target.value)} // Input for staff_name
                value={staff_name}
            />
            <select
                name="staff-type"
                onChange={(e) => setStaffType(e.target.value)}
                value={staff_type}
            >
                <option value="cashier">Cashier</option>
                <option value="sales">Sales</option>
                <option value="stockmanager">Stock Manager</option>
                <option value="manager">Manager</option>
            </select>
            <input
                type="text"
                placeholder="Staff Number"
                onChange={(e) => setStaffNumber(e.target.value)}
                value={staff_number}
            />
            <button className="button green" type="submit">
                Add {booth.name} Staff
            </button>
        </form>
    );
}

export default NewStaff;
