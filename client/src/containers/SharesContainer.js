import React from 'react';
import TotalsPanel from '../components/TotalsPanel/TotalPanel';
import SharesTable from '../components/SharesTable/SharesTable';
import SharesCarousel from '../components/SharesCarousel/SharesCarousel';
// import ToggleAddForm from '..card/components/Edit/ToggleAddForm';
// import AddForm from '../components/Edit/AddForm';
// import ToggleDeleteForm from '../components/Edit/ToggleDeleteForm';
// import DeleteForm from '..component/components/Edit/DeleteForm';


const SharesContainer = () => {
    return(
        <>
        <TotalsPanel/>
        <SharesCarousel/>
        <SharesTable/>
        </>
    )
}

export default SharesContainer;