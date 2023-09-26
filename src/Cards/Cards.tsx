import './cards.scss';
import Card from '../Card/Card.tsx';
import json from '../recepcies.json';
import { useState } from 'react';
import Canvas from '../Canvas/Canvas.tsx';

function Cards() {
	console.log(json);
	const startStatuses = Array(25).fill(false);
	const [statuses, setStatuses] = useState(startStatuses);

	console.log(statuses);

	const createCallback = (index: number) => {
		return (value: boolean) => {
			const newArr = [...statuses];
			newArr[index] = value;
			setStatuses(newArr);
		};
	};

	const cardList = json.recepcies.map((info, index) => (
		<Card
			title={info.title}
			description={info.description}
			// index={index}
			key={index}
			callback={createCallback(index)}
			isActive={statuses[index]}
		/>
	));
	return (
		<div className='cards'>
			{cardList}
			<Canvas h={[0,1,0,0,0]} v={[0,0,0,0,0]} d={[0,0]}/>
		</div>
	);
}

export default Cards;
