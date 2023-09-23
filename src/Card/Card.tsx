import { useState } from "react";
import "./card.scss";

type cardProps = {
    title: string,
    description: string,
}

function Card({title, description}:cardProps) {
    const [isOpen, setIsOpen] = useState(false);

    // const close = ()=>setIsOpen(false);
    const open = ()=>setIsOpen(true);

	return <div 
        className={`card${isOpen?' card_open':''}`}
        onDoubleClick={open}>
        <div className="card__content">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>;
}

export default Card;
