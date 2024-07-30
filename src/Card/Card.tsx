// import { useState } from 'react';
import './card.scss';

type cardProps = {
	title: string;
	callback: (value: boolean) => void;
	isActive: boolean;
};

function Card({ title, callback, isActive }: cardProps) {
    const lines = title.split('\n').map(t => <h3 className='card__title sm-title'>{t}</h3>)

    return (
			<div
				className={`card ${isActive ? 'card_active' : ''}`}
				onClick={(event: React.MouseEvent) => {
					event.preventDefault();
					callback(!isActive);
				}}
			>
				<div className='card__content'>
					<img src='./placeholder.png' className='card__image' />
					{lines}
				</div>
			</div>
		);
}

export default Card;
