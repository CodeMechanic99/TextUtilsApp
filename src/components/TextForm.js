import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Convert Upper case button is clicked : "+text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Upper Case!","success");
    }
    const handleLowClick = () => {
        console.log("Convert Lower case button is clicked : "+text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lower Case!","success");
    }
    const handleClearClick = () => {
        let newtext = '';
        setText(newtext);
        props.showAlert("Text has been cleared!","success");
    }
    const handleOnchange = (event) => {
        console.log("Onchange event");
        setText(event.target.value); 
    }
    const handleCopy = (event) => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!","success");
    }
    const [text, setText] = useState('');
    // text = "newtext"; // wrong way to change state
    // setText("newtext"); // Correct way to change state
    
    return (
        <div className="container">
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <label htmlFor="textBox" className="form-label">Example textarea</label>
                <textarea className="form-control" value={text} onChange={handleOnchange} id="textBox" rows="3" placeholder={text}></textarea>
            </div>
            <button className="btn btn-sm btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-sm btn-warning mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-sm btn-danger mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-sm btn-info mx-1" onClick={handleCopy}>Copy to Clipboard</button>
            <h2>Your Text Summary:</h2>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{ 0.008* text.split(" ").length} Minuits reading time.</p>
            <h2>Preview:</h2>
            <p>{text.length>0?text:'Enter Text in above box to preview it here'}</p>
        </div>
    )
}