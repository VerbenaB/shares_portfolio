import React, { useState } from "react";
import {TextField, FormGroup} from "@material-ui/core";
import "./AddForm.css";


const AddForm = ({ search, onShareSubmit}) => {
  const [shareObject, setShareObject] = useState("");
  const [numberOfShares, setNumberOfShares] = useState("");

  const handleShareChange = (e) => {
    search(e.target.value, (shareObj) => {
      setShareObject(shareObj);
    });
  };

  const handleNumberChange = (e) => {
    setNumberOfShares(e.target.value);
  };


  const handleButtonClick = (e) => {
    // e.preventDefault();

    onShareSubmit({
      share: shareObject[0],
      num_of_shares: numberOfShares,
    });

    setShareObject("");
    setNumberOfShares("");
  };


  return (
    <>
      <h2>New Share</h2>
      <form onSubmit={handleButtonClick} className="form">
        
          <TextField className="form-input" type="text" label="Name" onChange={handleShareChange} />
        
        
          <TextField className="form-input" label="Number of shares" onChange={handleNumberChange}/>
        
        <button className="add-button" onClick={handleButtonClick}>Add</button>
      </form> 
      
    </>
  );
};

export default AddForm;
