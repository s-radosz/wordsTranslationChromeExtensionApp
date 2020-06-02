import * as React from "react";

const WordsListRow = ({
    word,
    handleRemoveWord,
    i
}) => {
    console.log(["WordsListRow", word])
    return (
        <tr className="tranlation__row" key={i}>
            <th scope="row">{word.id}</th>
            <td>
                {word.en}
            </td>
            <td>
                {word.pl}
            </td>
            <td onClick={() => handleRemoveWord(word.id)}>
                Remove
            </td>
        </tr>
    );
};

export default WordsListRow;