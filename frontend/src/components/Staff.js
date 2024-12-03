function Staff(props) {
    const { booth, staff, staffs, setStaffs } = props;

    async function deleteStaff() {
        const response = await fetch(
            'http://localhost/api/booths/' + booth.id + '/staffs/' + staff.id,
            {
                method: 'DELETE',
            }
        );

        let newStaffs = staffs.filter((p) => {
            return p.id !== staff.id;
        });

        setStaffs(newStaffs);
    }

    return (
        <tr>
            <td>{staff.staff_name}</td> {/* Display staff name */}
            <td>{staff.staff_type}</td>
            <td>{staff.staff_number}</td>
            <td
                style={{
                    width: '14px',
                }}
            >
                <button className="button red" onClick={deleteStaff}>
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default Staff;
