import React, { useState } from "react";
import {TextField, Button} from "@material-ui/core"

const AddForm = ({ search, onShareSubmit, portfolioShares }) => {
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

  var displayError = "";

  const handleButtonClick = (e) => {
    e.preventDefault();

    // if (portfolioShares.length() >= 5) {
    //   displayError =
    //     "Sorry, you've reached your limit. If you wish to add another share, please delete one first";
    // } else {
    //   displayError = "Hello";
    // }

    onShareSubmit({
      share: shareObject[0],
      num_of_shares: numberOfShares,
    });

    setShareObject("");
    setNumberOfShares("");
  };


  return (
    <>
      <h2>Add a Share</h2>
      <form onSubmit={handleButtonClick}>
        <TextField type="text" label="search" onChange={handleShareChange} />

        <TextField
          
          defaultValue="5"
          label="Number of shares"
          onChange={handleNumberChange}
        />

        <Button color="secondary">Add</Button>
      </form>

      {/* <p>{displayError}</p> */}
    </>
  );
};

export default AddForm;
