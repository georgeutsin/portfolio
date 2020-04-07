import React from "react"

import './photolist.scss'

export default (props: any) => {
    const list = props.list.slice(0, 10).map((e: any) => {
        const photo = e.node;
        return <li className="photoThumb" key={photo.id}>
                {photo.url_m && <img src={photo.url_m} />}
        </li>;
    });

    return <ul className="photoGrid">
        {list}
        {props.list.length > 9 &&
            <li className="photoThumb" key="more">
                <a href="photos">
                    <div className="card">
                        <div className="more both-center">
                            more...
                            </div>
                    </div>
                </a>
            </li>
        }
    </ul>;
}
