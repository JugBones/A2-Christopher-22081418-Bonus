import Staff from './Staff.js';
import NewStaff from './NewStaff.js';

function StaffList(props) {
    const { booth, staffs, setStaffs } = props;

    return (
        <div className="staff-list">
            <NewStaff staffs={staffs} setStaffs={setStaffs} booth={booth} />

            <table onClick={(e) => e.stopPropagation()}>
                <thead>
                    <tr>
                        <th>Staff Name</th> {/* Add staff_name column */}
                        <th>Staff Type</th>
                        <th>Staff Number</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {staffs.map((staff) => {
                        return (
                            <Staff
                                key={staff.id}
                                staff={staff}
                                staffs={staffs}
                                setStaffs={setStaffs}
                                booth={booth}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default StaffList;
