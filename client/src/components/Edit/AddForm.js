import React, { useState } from "react";

const AddForm = ({ search, onShareSubmit }) => {
  const [shareName, setShareName] = useState("");
  const [numberOfShares, setNumberOfShares] = useState("");

  const handleShareChange = (e) => {
    setShareName(e.target.value);
    search(shareName);

    // postShare (from ShareServices) this will send to db
    // .then() => {addShare(whatever is selected)} (from SharesContainer) setUserShares([... userShares, share])
  };

  const handleNumberChange = (e) => {
    setNumberOfShares(e.target.value);
  };

  const handleButtonClick = (e) => {
    
    onShareSubmit({
      name: shareName,
      num_of_shares: numberOfShares,
    });

    setShareName("");
    setNumberOfShares("");
  };

  let numbers = [...Array(51).keys()];
  numbers = numbers.splice(1, 50);

  return (
    <>
      <h2>Add shares to your portfolio</h2>
      <form>
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

        <button onClick={handleButtonClick}>Add</button>
      </form>
    </>
  );
};

export default AddForm;
