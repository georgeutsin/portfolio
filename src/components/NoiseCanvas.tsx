import React from "react"
import Noise from "../utils/Noise";

class NoiseCanvas extends React.Component<any, any> {
    private ctx: CanvasRenderingContext2D | null;
    private canvasRef: React.RefObject<HTMLCanvasElement>;
    private noise: Noise;

    constructor(props: any) {
        super(props);
        this.state = {
            canvasHeight: 0,
            canvasWidth: 0,
        };

        this.ctx = null;
        this.canvasRef = React.createRef<HTMLCanvasElement>();
        this.noise = new Noise();
    }

    public windowResizeListener() {
        this.setState({
            canvasHeight: window.innerHeight,
            canvasWidth: document.body.clientWidth,
        }, () => {
            this.noise.updateCanvasDims();
        });

    }

    public componentDidMount() {
        window.addEventListener("resize", this.windowResizeListener.bind(this));
        window.addEventListener("orientationchange", this.windowResizeListener.bind(this));

        if (this.canvasRef.current) { // Shouldn't be null, since its declared in the constructor.
            this.ctx = this.canvasRef.current.getContext("2d");
            this.noise.setCtx(this.ctx);
            this.windowResizeListener(); // to fix canvas width bug
        }
    }

    public componentWillUnmount() {
        window.removeEventListener("resize", this.windowResizeListener);
        window.removeEventListener("orientationchange", this.windowResizeListener);
    }

    render() {
        return <canvas
            className="noiseCanvas"
            ref={this.canvasRef}
            width={this.state.canvasWidth}
            height={this.state.canvasHeight}>
            Your browser does not support canvas element.
        </canvas>;
    }
}

export default NoiseCanvas;