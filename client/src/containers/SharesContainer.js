import React, { useEffect, useState } from "react";
import TotalsPanel from "../components/TotalsPanel/TotalPanel";
import SharesTable from "../components/SharesTable/SharesTable";
import SharesCarousel from "../components/SharesCarousel/SharesCarousel";
// import ToggleAddForm from '../components/Edit/ToggleAddForm';
import AddForm from "../components/Edit/AddForm";
import { getShares, getTickers } from "../components/ShareService";
// import ToggleDeleteForm from '../components/Edit/ToggleDeleteForm';
// import DeleteForm from '../components/Edit/DeleteForm';

const SharesContainer = () => {
  const [allShares, setAllShares] = useState({});
  const [userShares, setUserShares] = useState({});

  useEffect(() => {
    getShares().then((dbShares) => {
      setUserShares(dbShares);
    });
  }, []);

  const searchTicker = (search_term) => {
      getTickers(search_term)
        .then((res) => setUserShares(res))
        // .then((data) => console.log(data));
      // set user shares [... seaerchresult]
    };


  return (
    <>
      <TotalsPanel />
      <SharesCarousel />
      <SharesTable />
      <AddForm search={searchTicker} />
    </>
  );
};

export default SharesContainer;
