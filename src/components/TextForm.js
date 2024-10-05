import React, { useState } from 'react'


export default function TextForm(props) {
    
    const handleUpClick = () => {
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        SetText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const hadlelowclick = () => {
        // console.log("lower was clicked" + text);
        let newText = text.toLowerCase();
        SetText(newText);
        props.showAlert("Converted to Lower Case", "success");

    }
    const handleClearText = () => {
        // console.log("clear was clicked" + text);
        let newText = "";
        SetText(newText);
        props.showAlert("Cleared text", "success");

    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied text", "success");

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ] +/);
        SetText(newText.join(" "));
        props.showAlert("Remove Extra Spaces", "success");

    }
    const handleOnChange = (e) => {
        // console.log("On Change");
        SetText(e.target.value);
    }


    const [text, SetText] = useState("");


    return (
        <>
            <div className="container" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "#13466e" : "white", color: props.mode === "dark" ? "white" : "#042743" }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Upper Case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={hadlelowclick}>Convert to lower Case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
