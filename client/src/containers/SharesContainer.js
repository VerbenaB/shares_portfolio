import React, {useEffect} from 'react';
import TotalsPanel from '../components/TotalsPanel/TotalPanel';
import SharesTable from '../components/SharesTable/SharesTable';
import SharesCarousel from '../components/SharesCarousel/SharesCarousel';
// import ToggleAddForm from '..card/components/Edit/ToggleAddForm';
// import AddForm from '../components/Edit/AddForm';
// import ToggleDeleteForm from '../components/Edit/ToggleDeleteForm';
// import DeleteForm from '..component/components/Edit/DeleteForm';


const SharesContainer = () => {
    
    useEffect(() => {
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=${process.env.ALPHAVANTAGE_KEY}`)
            .then(res => res.json())
            .then(data => console.log(data["Weekly Time Series"]))
    }, []) 

    


    return(
        <>
        <TotalsPanel/>
        <SharesCarousel/>
        <SharesTable/>
        </>
    )
}

export default SharesContainer;