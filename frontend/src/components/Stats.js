import { useState, useEffect } from "react";

function Stats() {
    const [expanded, setExpanded] = useState(false);
    const [totalBooths, setTotalBooths] = useState(0);
    const [totalStaffs, setTotalStaffs] = useState(0);
    const [lastUpdatedBooth, setLastUpdatedBooth] = useState('');
    const [oldestBooth, setOldestBooth] = useState('');
    const [totalCusts, setTotalCusts] = useState(0); // New state for total custs

    // Fetch stats
    async function getStats() {
        try {
            const response = await fetch('http://localhost/api/stats');
            const data = await response.json();
            setTotalBooths(data.totalBooths);
            setTotalStaffs(data.totalStaffs);
            setTotalCusts(data.totalCusts);
            setLastUpdatedBooth(data.lastUpdatedBooth);
            setOldestBooth(data.oldestBooth);
        } catch (error) {
            console.error('Error fetching booth stats:', error);
        }
    }
 

    useEffect(() => {
        getStats();
    }, []);

    return (
        <div className="stats">
            <p onClick={(e) => setExpanded(!expanded)}>{expanded ? 'Hide Stats' : 'Show Stats'}</p>

            <div className="stats-container" style={{ display: expanded ? 'block' : 'none' }}>
                <p><b>Number of Booths:</b></p>
                <p>{totalBooths}</p>

                <p><b>Number of Staffs:</b></p>
                <p>{totalStaffs}</p>

                <p><b>Number of Custs:</b></p>
                <p>{totalCusts}</p>

                <p><b>Newest Booth Timestamp:</b></p>
                <p>{lastUpdatedBooth}</p>

                <p><b>Oldest Booth Timestamp:</b></p>
                <p>{oldestBooth}</p>

                <br />
                <button className="button green" onClick={(e) => { getStats(); }}>Refresh</button>
            </div>
        </div>
    );
}

export default Stats;
