import { useState } from 'react';
import './card.scss';

type cardProps = {
	title: string;
	description: string;
	// index: number;
	callback: (value: boolean) => void;
	isActive: boolean;
};

function Card({ title, description, callback, isActive }: cardProps) {
	const [isOpen, setIsOpen] = useState(false);

	const close = () => {
		console.log('close');
		setIsOpen(false);
	};
	const open = () => {
		console.log('open');
		setIsOpen(true);
	};

	if (isOpen) {
		return (
			<div className={`card card_open`}>
				<div className='card__content'>
					<h3 className='card__title'>{title}</h3>

					<p className='card__description'>{description}</p>
					<button className='card__close' onClick={close}>
						close
					</button>
					<button
						className='card__check'
						onClick={() => {
							callback(!isActive);
                            close()
						}}
					>
						{isActive ? 'checked' : 'unchecked'}
					</button>
				</div>
			</div>
		);
	} else {
		return (
			<div
				className={`card ${isActive ? 'card_active' : ''}`}
				onClick={open}
                onContextMenu={(event: React.MouseEvent) => {
                    event.preventDefault();
                    callback(!isActive);
                }}
			>   
				<div className='card__content'>
                    <img src="/placeholder.png" className="card__image" />
					<h3 className='card__title'>{title}</h3>
				</div>
			</div>
		);
	}
}

export default Card;
