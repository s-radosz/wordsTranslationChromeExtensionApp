import * as React from "react";
import IllustrationDrawer from "./IllustrationDrawer/IllustrationDrawer"
//@ts-ignore
import close from "./../../../../assets/images/close.png";
import { handlePostRequest } from "./../../helpers/api"
import { connect } from "react-redux";

const IllustrationModal = ({ setShowIllustrationModal, currentWordIdIllustration, config, user }) => {
    const [leftPersonText, setLeftPersonText] = React.useState("");
    const [rightPersonText, setRightPersonText] = React.useState("");

    const canvasImage = React.useRef(null);

    const closeModal = () => {
        setShowIllustrationModal(false);
    }

    const handleFormatCanvasText = (text) => {
        //add \n every 3 third word
        return text.split(/((?:\w+ ){3})/g).filter(Boolean).join("\n");
    }

    const handleTextChange = (direction) => {
        console.log(["handleTextChange", direction])

        const ctx = canvasImage.current.getContext('2d');
        ctx.font = "14px Arial";
        let lineheight = 15;

        if (direction === "left") {
            let lines = handleFormatCanvasText(leftPersonText).split('\n');
            //x, y, max-width
            for (var i = 0; i < lines.length; i++)
                ctx.fillText(lines[i], 30, 100 + (i * lineheight));
        } else {
            let lines = handleFormatCanvasText(rightPersonText).split('\n');
            //x, y, max-width
            for (var i = 0; i < lines.length; i++)
                ctx.fillText(lines[i], 290, 100 + (i * lineheight));
        }
    }

    const handleAddEmptyImageToCanvas = () => {
        console.log(["canvasImage", canvasImage.current, canvasImage, canvasImage.current.getContext('2d')])
        const ctx = canvasImage.current.getContext('2d');

        var imageObj1 = new Image();
        imageObj1.src = `http://127.0.0.1:8000/images/conversation.png`
        imageObj1.onload = function () {
            ctx.drawImage(imageObj1, 0, 50
                , 400, 200);
        }
    }

    const handleCanvasClear = () => {
        const ctx = canvasImage.current.getContext('2d');

        ctx.clearRect(0, 0, 400, 300);

        handleAddEmptyImageToCanvas();
    }

    const handleSaveIllustration = async () => {
        let base64Canvas = canvasImage.current.toDataURL();

        let saveIllustration = await handlePostRequest(`${config.paths.API_URL}/words/illustartion/new`, {
            wordId: currentWordIdIllustration,
            base64Image: base64Canvas,

        }, user.token)

        console.log(["saveIllustration", saveIllustration])
    }

    const loadSavedIllustration = async () => {
        let currentIllustration = await handlePostRequest(`${config.paths.API_URL}/words/illustartion/find`, {
            wordId: currentWordIdIllustration,
        }, user.token)

        //@ts-ignore
        if (currentIllustration.base64_image) {
            const ctx = canvasImage.current.getContext('2d');

            var imageObj1 = new Image();
            //@ts-ignore
            imageObj1.src = currentIllustration.base64_image;
            imageObj1.onload = function () {
                ctx.drawImage(imageObj1, 0, 50
                    , 400, 200);
            }
        } else {
            handleAddEmptyImageToCanvas()
        }

        //@ts-ignore
        console.log(["currentIllustration", currentIllustration, currentIllustration.base64_image])
    }

    React.useEffect(() => {
        //handleAddEmptyImageToCanvas();
        loadSavedIllustration();
    }, [])

    return (
        <div className="illustration__container">
            <div className="illustration__wrapper">
                <div className="illustration__overlay" onClick={closeModal}></div>
                <div className="illustration__content">
                    <div className="close">
                        <div className="close-icon__container">
                            <img src="/images/close.png" onClick={closeModal} />
                        </div>
                    </div>

                    <div className="illustration__content--elements">
                        <IllustrationDrawer canvasImage={canvasImage} />
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
                    </div>
                    <div className="illustration__content--btns">
                        <button className="btn yellow-btn" onClick={handleCanvasClear}>
                            Clear all texts
                            </button>
                        <button className="btn yellow-btn" onClick={() => console.log("remove")}>
                            Remove illustration
                        </button>
                        <button className="btn yellow-btn" onClick={handleSaveIllustration}>
                            Save
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

const mapStateToProps = state => ({
    config: state.config,
    user: state.user
});

export default connect(
    mapStateToProps,
    {}
)(IllustrationModal);