import React, { useState } from "react"

import './photopreview.scss'

const closeSVG = <svg viewBox="0 0 352 512" className="close icon">
    <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 
    0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21
    111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28
    12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19
     0-44.48L242.72 256z"></path>
</svg>;

const rightSVG = <svg viewBox="0 0 320 512" className="right icon">
    <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941
    0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256
    34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475
    239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
</svg>;

const leftSVG = <svg viewBox="0 0 320 512" className="left icon">
    <path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37
    24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94
    0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
</svg>;

export default (props: any) => {
    const [image, setImage] = useState(null);

    function closeClicked() {
        setImage(null);
        props.closeCB();
    }

    function nextClicked() {
        setImage(null);
        props.nextCB();
    }

    function prevClicked() {
        setImage(null);
        props.prevCB();
    }

    if (props.idx === null || props.idx === undefined) {
        return null;
    }

    const photo = props.list[props.idx];
    if (!photo.node) {
        return null;
    }

    const img = new Image();
    img.src = photo.node.url_o;
    img.onload = () => {
        setImage(photo.node.url_o);
    };

    return <div className="previewContainer">
        {image === null && <div className="loadingWheel"> Source: {photo.node.url_o}</div>}
        <div className="closeBG" onClick={closeClicked}></div>
        <button className="close" onClick={closeClicked}>{closeSVG}</button>
        <button className="next" onClick={nextClicked}>{rightSVG}</button>
        <button className="prev" onClick={prevClicked}>{leftSVG}</button>

        {image && <img src={photo.node.url_o} className="both-center" alt="photo" />}
    </div>;
}
