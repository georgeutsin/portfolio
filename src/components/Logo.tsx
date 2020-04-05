import React from "react"
import './logo.scss'

export default (props: any) => <span className="logo" style={{ fontSize: props.fontSize ?? "1em" }}>
    <span className="light">George</span>
    <span className="heavy">Utsin</span>
</span>;
