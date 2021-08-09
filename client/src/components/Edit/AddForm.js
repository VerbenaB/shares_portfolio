import React, { useState } from "react";

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

  // let displayError = () => {""};
  
  const handleButtonClick = (e) => {
    e.preventDefault();

    // if (portfolioShares.length() === 5) {
    //   displayError = () => {
    //     return "Sorry, you've reached your limit. If you wish to add another share, please delete one first";
    //   };
    // } else {
    //   displayError = () => {
    //     return "Hello";
    //   };
    // }

    onShareSubmit({
      share: shareObject,
      num_of_shares: numberOfShares,
    });

    setShareObject("");
    setNumberOfShares("");
  };

  let numbers = [...Array(51).keys()];
  numbers = numbers.splice(1, 50);

  return (
    <>
      <h2>Add shares to your portfolio</h2>
      <form onSubmit={handleButtonClick}>
        <input type="text" placeholder="search" onChange={handleShareChange} />

        <label htmlFor="numbers">Number of shares</label>
        <input
          list="numbers"
          id="numbers"
          placeholder="5"
          onChange={handleNumberChange}
        />
        <datalist id="numbers">
          {numbers.map((number) => {
            return <option key={number} value={number} />;
          })}
        </datalist>

        {/* <p>{displayError()}</p> */}

        <button>Add</button>
      </form>
    </>
  );
};

export default AddForm;
