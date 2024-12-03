import Booth from './Booth.js';
import NewBooth from './NewBooth.js';

function BoothList(props) {
    const {booths, setBooths} = props;

	return (
		<div className='booth-list'>
            <h2>Booths</h2>

            <NewBooth booths={booths} setBooths={setBooths} />

            <hr />

            {
                booths.map((booth) => {
                    return (
                        <Booth key={booth.id} booth={booth} booths={booths} setBooths={setBooths} />
                    );
                })
            }
        </div>
	);
}

export default BoothList;