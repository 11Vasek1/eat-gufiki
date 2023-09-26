import { useRef } from 'react';
import './canvas.scss';

type canvasProps = {
    h: Array<number>,
    v: Array<number>,
    d: Array<number>
};

// function draw(obj:canvasProps, canvas: HTMLCanvasElement) {
    
// }

function Canvas({h,v,d}: canvasProps) {
    console.log(h,v,d);
    const canvasElement = useRef(null);

    // useEffect(()=>{
    //     console.log(canvasElement);
    //     draw({h,v,d}, canvasElement)
    // })

    return <canvas className="canvas" ref={canvasElement}></canvas>;
}

export default Canvas;