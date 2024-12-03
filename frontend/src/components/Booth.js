import { useState, useEffect } from 'react';
import StaffList from './StaffList.js';
import CustomerList from './CustomerList.js'; 
import '../styling/Booth.css';

function Booth(props) {
    const { booth, booths, setBooths } = props;
    const [expanded, setExpanded] = useState(false);
    const [staffs, setStaffs] = useState([]);
    const [custs, setCusts] = useState([]); 

    useEffect(() => {
        // Fetch staffs for the booth
        fetch('http://localhost/api/booths/' + booth.id + '/staffs')
            .then((response) => response.json())
            .then((data) => setStaffs(data))
            .catch((error) => {
                console.error('Error fetching staffs:', error);
            });

        // Fetch custs for the booth
        fetch('http://localhost/api/booths/' + booth.id + '/custs')
            .then((response) => response.json())
            .then((data) => setCusts(data))
            .catch((error) => {
                console.error('Error fetching custs:', error);
            });
    }, [booth.id]);

    const expandStyle = {
        display: expanded ? 'block' : 'none',
    };

    async function doDelete(e) {
        e.stopPropagation();

        const response = await fetch('http://localhost/api/booths/' + booth.id, {
            method: 'DELETE',
        });

        if (response.ok) {
            const newBooths = booths.filter((c) => c.id !== booth.id);
            setBooths(newBooths);
        } else {
            console.error('Error deleting booth');
        }
    }

    return (
        <div key={booth.id} className="booth" onClick={() => setExpanded(!expanded)}>
            <div className="booth-title">
                <h3>{booth.name}</h3>
                <p>{booth.category}</p>
            </div>

            <div className="booth-action">
                <button className="button red" onClick={doDelete}>
                    Delete Booth
                </button>
            </div>

            <div style={expandStyle}>
                <hr />
                <StaffList staffs={staffs} setStaffs={setStaffs} booth={booth} />
                <hr />
                <CustomerList custs={custs} setCusts={setCusts} booth={booth} />
            </div>
        </div>
    );
}

export default Booth;
