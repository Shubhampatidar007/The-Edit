import React, { useState } from 'react';

export default function TextArea(props) {
  let [text, settext] = useState("");
  const textAreaValueBlank = () => {
    settext("");
  };

  const ToLowerCaseFun = () => {
    let ToLowerCaseCode = text.toLowerCase();
    settext(ToLowerCaseCode);
    props.showalert("Converted to Lower Case", "success");
  };

  const ToUpperCaseFun = () => {
    let ToUpperCaseCode = text.toUpperCase();
    settext(ToUpperCaseCode);
    props.showalert("Converted to UpperCase Case", "success");
  };

  const ToCaptalizeCaseFun = () => {
    let Usertext = text;
    let lower = Usertext.toLowerCase();
    let ToCaptizeCode = lower.charAt(0).toUpperCase() + lower.slice(1);
    settext(ToCaptizeCode);
    props.showalert("Converted to Capitalize", "success");
  };

  const ToCopyText = () => {
    let Usertext = text;
    navigator.clipboard.writeText(Usertext);
    props.showalert("Text was copy to clipboard", "success");
  };

  const OnChangefun = (event) => {
    console.log("On clicked is now clicked");
    settext(event.target.value);
  };

  return (
    <div>
      <div className='container mt-4'>
        <h4 className='my-lg-4'>TYPE SOMETHING TO ANALYZE</h4>
        <div className="form-group">
          <textarea
            className="form-control "
            rows="5"
            value={text}
            onClick={textAreaValueBlank}
            onChange={OnChangefun}
            id="floatingTextarea"
          ></textarea>
        </div>
        <div className='buttons container mt-4'>
          <input type="button" onClick={ToUpperCaseFun} className='btn btn-primary m-1' value="ToUpperCase" />
          <input type="button" onClick={ToLowerCaseFun} className='btn btn-primary m-1' value="ToLowerCase" />
          <input type="button" onClick={ToCaptalizeCaseFun} className='btn btn-primary m-1' value="ToCapitalizeCase" />
          <input type="button" onClick={ToCopyText} className='btn btn-primary m-1' value="Copy To Clipboard" />
        </div>
      </div>
      <div className='Word-counter container'>
        <h2 className='my-4'>Word Counter</h2>
        <h5>The Total Number Of Word {text.split(" ").length} And Character are {text.length}</h5>
      </div>
    </div>
  );
}
