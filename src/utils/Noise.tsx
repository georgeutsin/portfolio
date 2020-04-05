interface NoiseProps {
    fps?: number;
    numFrames?: number;
}

class Noise {
    private ctx: CanvasRenderingContext2D | null;
    private lastTimestamp: number;
    private fpsInterval: number;
    private noiseFrames: ImageData[];
    private frameIdx: number;
    private numFrames: number;

    constructor(props: NoiseProps = {}) {
        this.ctx = null;
        this.lastTimestamp = Date.now();
        this.fpsInterval = 1000 / (props.fps ?? 7);
        this.noiseFrames = new Array();
        this.frameIdx = 0;
        this.numFrames = props.numFrames ?? 4;

        this.animate = this.animate.bind(this);
    }

    public setCtx(ctx: CanvasRenderingContext2D | null) {
        this.ctx = ctx;
        this.animate();
    }

    public getNoiseFrame(idx: number): ImageData {
        if (idx < this.noiseFrames.length) {
            return this.noiseFrames[idx];
        }

        if (this.ctx) {
            var w = this.ctx.canvas.width,
                h = this.ctx.canvas.height;

            var frame = this.ctx.createImageData(w, h);
            var buffer32 = new Uint32Array(frame.data.buffer)

            for (let j = 0; j < buffer32.length; j++) {
                buffer32[j] = ((25 * Math.random()) | 0) << 24;
            }
            this.noiseFrames.push(frame);
            return frame;
        }

        return new ImageData(0, 0);
    }

    public updateCanvasDims() {
        this.noiseFrames.length = 0;
    }

    public animate() {
        requestAnimationFrame(this.animate);
        const now = Date.now();
        const elapsed = now - this.lastTimestamp;

        if (elapsed > this.fpsInterval) {
            this.lastTimestamp = now - (elapsed % this.fpsInterval);
            if (this.ctx) {
                this.ctx.putImageData(this.getNoiseFrame(this.frameIdx), 0, 0);
                this.frameIdx = (this.frameIdx + 1) % this.numFrames;
            }
        }
    }
}

export default Noise;