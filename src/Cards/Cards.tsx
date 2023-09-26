import './cards.scss';
import Card from '../Card/Card.tsx';
import json from '../recepcies.json';
import { useEffect, useRef, useState } from 'react';
import Canvas from '../Canvas/Canvas.tsx';

function Cards() {
	console.log(json);
	const startStatuses = Array(25).fill(false);
	const [statuses, setStatuses] = useState(startStatuses);

	console.log(statuses);

    let widht = 0;
    let height = 0;

	const createCallback = (index: number) => {
		return (value: boolean) => {
			const newArr = [...statuses];
			newArr[index] = value;
			setStatuses(newArr);
		};
	};

    const boxRef = useRef(null);

    useEffect(()=>{
        const element:HTMLElement = boxRef.current
        if(element){
            widht = element.clientWidth;
            height = widht;
        }
    })

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
		<div className='cards' ref={boxRef}>
			{cardList}
			<Canvas h={[0,1,0,0,0]} v={[0,0,0,0,0]} d={[0,0]} width={widht} height={height}/>
		</div>
	);
}

export default Cards;
