import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import "../styles/QuestionRow.css";

function QuestionRow({question, answer}) {
    const [opended, setOpened] = useState(false);

    return (
        <div className='question_row'>
            <div>
                <h3>{question}</h3>
                {!opended? 
                <AddIcon fontSize='large' className="row_icon" onClick={() => {setOpened(true)}} /> : 
                <CloseIcon fontSize='large' className="row_icon" onClick={() => {setOpened(false)}} />}
            </div>
            <p className={opended? "show":""}>{answer}</p>
        </div>
    )
}

export default QuestionRow;
