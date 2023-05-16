import React, { useState } from 'react'


export const Form = (props) => {

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const ToUpperCase = () => {
        setText(text.toUpperCase());
    }
    const ToLowerCase = () => {
        setText(text.toLowerCase());
    }

    const [text, setText] = useState('');``
    return (
        <>
            <div className="container my-2">
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">{props.label}</label>
                    <textarea  onChange={handleChange} className="form-control" value={text} id="text" rows="4"/>
                </div>
                <button onClick={ToUpperCase} className="btn btn-primary mx-2">Convert To UpperCase</button>
                <button onClick={ToLowerCase} className="btn btn-primary mx-2">Convert To LowerCase</button>
            </div>
            <div className="container my-2">
                <h3>Your Blog Analysis</h3>
                <p>{text.split(" ").length} words {text.length}characters </p>
                <p>{0.008*text.split(" ").length} minutes to read</p>
                <h3>Your Blog Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
