import { useState } from 'react';
import './card.scss';

type cardProps = {
	title: string;
	// index: number;
	callback: (value: boolean) => void;
	isActive: boolean;
};

function Card({ title, callback, isActive }: cardProps) {
	const [isOpen, setIsOpen] = useState(false);

	const close = () => {
		console.log('close');
		setIsOpen(false);
	};
	// const open = () => {
	// 	console.log('open');
	// 	setIsOpen(true);
	// };

    return (
			<div
				className={`card ${isActive ? 'card_active' : ''}`}
				// onClick={open}
				onClick={(event: React.MouseEvent) => {
					event.preventDefault();
					callback(!isActive);
				}}
				// onContextMenu={(event: React.MouseEvent) => {
				// 	event.preventDefault();
				// 	callback(!isActive);
				// }}
			>
				<div className='card__content'>
					<img src='./placeholder.png' className='card__image' />
					<h3 className='card__title sm-title'>{title}</h3>
				</div>
			</div>
		);
}

export default Card;
