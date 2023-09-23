import './cards.scss';
import Card from '../Card/Card.tsx';

import json from '../recepcies.json';

function Cards() {
	console.log(json);
    const cardList = json.recepcies.map( info => 
        <Card title={info.title} description={info.description} /> 
    );
	return (
		<div className='cards'>
			{cardList}
		</div>
	);
}

export default Cards;
