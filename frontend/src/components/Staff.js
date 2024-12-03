import { useState } from 'react';

function Staff(props) {
    const { booth, staff, staffs, setStaffs } = props;
    const [isEditing, setIsEditing] = useState(false);
    const [editedStaff, setEditedStaff] = useState({
        staff_name: staff.staff_name,
        staff_type: staff.staff_type,
        staff_number: staff.staff_number,
    });

    async function deleteStaff() {
        const response = await fetch(
            'http://localhost/api/booths/' + booth.id + '/staffs/' + staff.id,
            { method: 'DELETE' }
        );

        if (response.ok) {
            const newStaffs = staffs.filter((p) => p.id !== staff.id);
            setStaffs(newStaffs);
        }
    }

    async function updateStaff(e) {
        e.preventDefault();

        const response = await fetch(
            'http://localhost/api/booths/' + booth.id + '/staffs/' + staff.id,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editedStaff),
            }
        );

        if (response.ok) {
            const updatedStaff = await response.json();
            const updatedStaffs = staffs.map((p) =>
                p.id === updatedStaff.id ? updatedStaff : p
            );
            setStaffs(updatedStaffs);
            setIsEditing(false);
        }
    }

    return (
        <tr>
            {!isEditing ? (
                <>
                    <td>{staff.staff_name}</td>
                    <td>{staff.staff_type}</td>
                    <td>{staff.staff_number}</td>
                    <td>
                        <button className="button yellow" style={{ backgroundColor: '#008cba', color: 'white' }} onClick={() => setIsEditing(true)}>
                            Edit
                        </button>
                        <button className="button red" onClick={deleteStaff}>
                            Delete
                        </button>
                    </td>
                </>
            ) : (
                <td colSpan="4">
                    <form onSubmit={updateStaff} className="edit-staff">
                        <input
                            type="text"
                            value={editedStaff.staff_name}
                            onChange={(e) =>
                                setEditedStaff({ ...editedStaff, staff_name: e.target.value })
                            }
                            placeholder="Staff Name"
                        />
                        <select
                            value={editedStaff.staff_type}
                            onChange={(e) =>
                                setEditedStaff({ ...editedStaff, staff_type: e.target.value })
                            }
                        >
                            <option value="cashier">Cashier</option>
                            <option value="sales">Sales</option>
                            <option value="stockmanager">Stock Manager</option>
                            <option value="manager">Manager</option>
                        </select>
                        <input
                            type="text"
                            value={editedStaff.staff_number}
                            onChange={(e) =>
                                setEditedStaff({ ...editedStaff, staff_number: e.target.value })
                            }
                            placeholder="Staff Number"
                        />
                        <button type="submit" className="button green">
                            Save
                        </button>
                        <button
                            type="button"
                            className="button red"
                            style={{ backgroundColor: '#F44336', color: 'white' }}
                            onClick={() => setIsEditing(false)}
                        >
                            Cancel
                        </button>
                    </form>
                </td>
            )}
        </tr>
    );
}

export default Staff;