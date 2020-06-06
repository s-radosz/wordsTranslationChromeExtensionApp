import * as React from "react";

const IllustrationDrawer = ({ canvasImage, leftPersonText, setLeftPersonText, rightPersonText, setRightPersonText, handleTextChange }) => {
    return (
        <>
            <div className="illustration__drawer">
                <canvas width="400" height="300" ref={canvasImage} />
            </div>
            <div className="illustration__text-container">
                <div className="illustration__single">
                    <input type="text" placeholder="Left person text" value={leftPersonText} onChange={e => setLeftPersonText(e.target.value)} />
                    <button className="btn yellow-btn" onClick={() => handleTextChange("left")}>Add</button>
                </div>
                <div className="illustration__single">
                    <input type="text" placeholder="Left person text" value={rightPersonText} onChange={e => setRightPersonText(e.target.value)} />
                    <button className="btn yellow-btn" onClick={() => handleTextChange("right")}>Add</button>
                </div>
            </div>
        </>
    )
}

export default IllustrationDrawer;