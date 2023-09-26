import { useEffect, useRef } from 'react';
import './canvas.scss';

type canvasProps = {
	h: Array<number>;
	v: Array<number>;
	d: Array<number>;
    width: number,
    height: number,
};

function draw(obj: canvasProps, c: HTMLCanvasElement) {
	console.log(obj, c);

	const ctx = c.getContext('2d');

    if(ctx){
        ctx.beginPath();
        ctx.arc(50, 50, 50, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function Canvas({ h, v, d, width, height }: canvasProps) {
	console.log(h, v, d);
	const canvasRef = useRef(null);

	useEffect(() => {
        const c = canvasRef.current;
		console.log(typeof c);

		// if(canvasElement)
		// console.log(canvasElement);
		draw({ h, v, d, width, height }, c);
	});

	return <canvas className='canvas' width={width} height={height} ref={canvasRef}></canvas>;
}

export default Canvas;
