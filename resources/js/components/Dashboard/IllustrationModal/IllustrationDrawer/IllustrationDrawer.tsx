import * as React from "react";

const IllustrationDrawer = ({ canvasImage }) => {
    return (
        <div className="illustration__drawer">
            <canvas width="400" height="300" ref={canvasImage} />
        </div>
    )
}

export default IllustrationDrawer;