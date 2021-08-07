import React from "react";


const AddForm = ({ search }) => {
  // const [formData, setFormData] = useState("");

  const handleChange = (e) => {

    // setFormData(e.target.value);
    search(e.target.value);

    // postShare (from ShareServices) this will send to db
    // .then() => {addShare(whatever is selected)} (from SharesContainer) setUserShares([... userShares, share])
  };

  return (
    <form>
      <input type="text" placeholder="search" onChange={handleChange} />
    </form>
  );
};

export default AddForm;
