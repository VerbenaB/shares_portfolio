import React, {useEffect} from 'react';
import TotalsPanel from '../components/TotalsPanel/TotalPanel';
import SharesTable from '../components/SharesTable/SharesTable';
import SharesCarousel from '../components/SharesCarousel/SharesCarousel';
// import ToggleAddForm from '../components/Edit/ToggleAddForm';
import AddForm from '../components/Edit/AddForm';
// import ToggleDeleteForm from '../components/Edit/ToggleDeleteForm';
// import DeleteForm from '../components/Edit/DeleteForm';


const SharesContainer = () => {
    

    const Search = (search_term) => {
        useEffect(() => {
            fetch(`https://ticker-2e1ica8b9.now.sh/keyword/${search_term}`)
                .then(res => res.json())
                .then(data => console.log(data))
        }, []) 
    }


    return(
        <>
            <TotalsPanel/>
            <SharesCarousel/>
            <SharesTable/>
            <AddForm search={Search}/>
        </>
    )
}

export default SharesContainer;