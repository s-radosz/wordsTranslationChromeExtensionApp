import * as React from "react";

const BottomBtns = ({ handleCanvasClear, handleWordIllustrationRemove, handleSaveIllustration }) => {
    return (
        <div className="illustration__content--btns">
            <button className="btn yellow-btn" onClick={handleCanvasClear}>
                Clear all texts
                </button>
            <button className="btn yellow-btn" onClick={handleWordIllustrationRemove}>
                Remove illustration
            </button>
            <button className="btn yellow-btn" onClick={handleSaveIllustration}>
                Save
            </button>
        </div>
    )
}

export default BottomBtns;