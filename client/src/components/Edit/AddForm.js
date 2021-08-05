import React, {Button} from 'react';
import {useState} from "react";

const AddForm = ({search}) => {

    // const [formData, setFormData] = useState("");
    
    const handleChange = (e) => {
        e.preventDefault();
        // formData = e.target.value;
        // setFormData(formData);
        search(e.target.value);

        // postShare (from ShareServices) this will send to db
        // .then() => {addShare(whatever is selected)} (from SharesContainer) setUserShares([... userShares, share])
    }

    return (    
        <form>
            <input type="text" value="search" onChange={handleChange} />
            {/* <Button id="search">Button</Button> */}
        </form>
    
    );
}

export default AddForm;