import * as React from "react";

const IllustrationDrawer = ({ canvasImage, leftPersonText, setLeftPersonText, rightPersonText, setRightPersonText, handleTextChange }) => {
    return (
        <>
            <div className="illustration__drawer">
                <canvas width="400" height="300" ref={canvasImage} />
            </div>
            <div className="illustration__text-container">
                <div className="illustration__single">
                    <input type="text" placeholder="Tekst osoby po lewej" value={leftPersonText} onChange={e => setLeftPersonText(e.target.value)} />
                    <button className="btn red-btn box-shadow" onClick={() => handleTextChange("left")}>Dodaj</button>
                </div>
                <div className="illustration__single">
                    <input type="text" placeholder="Tekst osoby po prawej" value={rightPersonText} onChange={e => setRightPersonText(e.target.value)} />
                    <button className="btn red-btn box-shadow" onClick={() => handleTextChange("right")}>Dodaj</button>
                </div>
            </div>
        </>
    )
}

export default IllustrationDrawer;