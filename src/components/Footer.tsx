import React from "react"
import Logo from "./Logo";
import './footer.scss'

const d = new Date();
const waterSVG = <svg viewBox="0 0 352 512" className="droplet icon"><path></path></svg>;

export default () => <div className="footer">
    <div className="verticalSpacing"></div>
    <div className="pageWrapper">
        <div><Logo></Logo> &copy; {d.getFullYear()}</div>
        <div>Made with {waterSVG} </div>
        <div>Product of Canada</div>
    </div>
    <div className="verticalSpacing"></div>
</div>;
