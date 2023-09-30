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
	// const open = () => {
	// 	console.log('open');
	// 	setIsOpen(true);
	// };

	if (isOpen) {
		return (
			<div className={`card card_open`}>
				<div className='card__content'>
					<h3 className='card__title title'>{title}</h3>

					<p className='card__description text'>{description}</p>
					<button className='card__close close-btn' onClick={close}>
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1.25296 0.214964C0.96634 -0.0716548 0.501584 -0.0716548 0.214964 0.214964C-0.0716548 0.501584 -0.0716548 0.96634 0.214964 1.25296L1.25296 0.214964ZM14.747 15.785C15.0337 16.0717 15.4984 16.0717 15.785 15.785C16.0717 15.4984 16.0717 15.0337 15.785 14.747L14.747 15.785ZM0.214964 14.747C-0.0716548 15.0337 -0.0716548 15.4984 0.214964 15.785C0.501584 16.0717 0.96634 16.0717 1.25296 15.785L0.214964 14.747ZM15.785 1.25296C16.0717 0.96634 16.0717 0.501584 15.785 0.214964C15.4984 -0.0716548 15.0337 -0.0716548 14.747 0.214964L15.785 1.25296ZM0.214964 1.25296L14.747 15.785L15.785 14.747L1.25296 0.214964L0.214964 1.25296ZM1.25296 15.785L15.785 1.25296L14.747 0.214964L0.214964 14.747L1.25296 15.785Z'
								fill='black'
							/>
						</svg>
					</button>
					<button
						className={`card__check button${isActive ? ' button_active' : ''}`}
						onClick={() => {
							callback(!isActive);
							close();
						}}
					>
						{isActive ? 'Разметить?' : 'Отметить'}
					</button>
				</div>
			</div>
		);
	} else {
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
}

export default Card;
