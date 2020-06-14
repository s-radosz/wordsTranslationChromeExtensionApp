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
                <button className="btn red-btn box-shadow" onClick={() => handleRemoveWord(word.id)}>
                    Usuń
                </button>
            </td>
            <td>
                <button className="btn blue-btn box-shadow" onClick={() => handleAddIllustration(word.id)}>
                    Dodaj ilustrację
                </button>
            </td>
        </tr>
    );
};

export default WordsListRow;