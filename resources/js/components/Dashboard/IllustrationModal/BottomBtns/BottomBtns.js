import * as React from "react";

const BottomBtns = ({ handleCanvasClear, handleWordIllustrationRemove, handleSaveIllustration }) => {
    return (
        <div className="illustration__content--btns">
            <button className="btn red-btn box-shadow" onClick={handleCanvasClear}>
                Wyczyść wszystkie teksty
            </button>
            <button className="btn red-btn box-shadow" onClick={handleWordIllustrationRemove}>
                Usuń ilustracje
            </button>
            <button className="btn red-btn box-shadow" onClick={handleSaveIllustration}>
                Zapisz
            </button>
        </div>
    )
}

export default BottomBtns;