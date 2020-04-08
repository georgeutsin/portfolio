import React from "react"
import PhotoPreview from "./PhotoPreview";
import './photolist.scss'

class PhotoList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            previewIdx: null,
        };

        this.closeCB = this.closeCB.bind(this);
        this.nextCB = this.nextCB.bind(this);
        this.prevCB = this.prevCB.bind(this);
        this.setPreview = this.setPreview.bind(this);
    }

    public closeCB() {
        this.setState({ previewIdx: null });
    }

    public nextCB() {
        let i = this.state.previewIdx;
        if (i + 1 < this.props.list.length) {
            this.setState({ previewIdx: i + 1 });
        }
    }

    public prevCB() {
        let i = this.state.previewIdx;
        if (i - 1 >= 0) {
            this.setState({ previewIdx: i - 1 });
        }
    }

    public setPreview(idx: number) {
        this.setState({ previewIdx: idx });
    }

    render() {
        const list = this.props.list.map((e: any, idx: number) => {
            const photo = e.node;
            return <li className="photoThumb" key={photo.id}>
                {photo.url_n && <img src={photo.url_n} alt="photo" onClick={() => { this.setPreview(idx); }} />}
            </li>;
        });

        return <ul className="photoGrid">
            <PhotoPreview
                list={this.props.list}
                idx={this.state.previewIdx}
                closeCB={this.closeCB}
                nextCB={this.nextCB}
                prevCB={this.prevCB}>
            </PhotoPreview>
            {list}
            {this.props.showMore &&
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
}

export default PhotoList;
