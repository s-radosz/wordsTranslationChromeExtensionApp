import * as React from "react";

const WordsListRow = ({
    word,
    handleRemoveWord,
    handleAddIllustration,
    i
}) => {
    return (
        <tr className="tranlation__row" key={i}>
            <th scope="row">{word.id}</th>
            <td>
                {word.en}
            </td>
            <td>
                {word.pl}
            </td>
            <td>
                <button className="btn yellow-btn" onClick={() => handleRemoveWord(word.id)}>
                    Remove
                </button>
            </td>
            <td>
                <button className="btn yellow-btn" onClick={() => handleAddIllustration(word.id)}>
                    Add illustration
                </button>
            </td>
        </tr>
    );
};

export default WordsListRow;