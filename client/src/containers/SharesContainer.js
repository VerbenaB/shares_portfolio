import React, { useEffect, useState } from "react";
import TotalsPanel from "../components/TotalsPanel/TotalPanel";
import SharesTable from "../components/SharesTable/SharesTable";
import SharesCarousel from "../components/SharesCarousel/SharesCarousel";
// import ToggleAddForm from '../components/Edit/ToggleAddForm';
import AddForm from "../components/Edit/AddForm";
import { getShares, getTickers, postShare } from "../components/ShareService";
// import ToggleDeleteForm from '../components/Edit/ToggleDeleteForm';
// import DeleteForm from '../components/Edit/DeleteForm';

const SharesContainer = () => {
  // const [selectedShare, setSelectedShare] = useState({});
  const [portfolioShares, setPortfolioShares] = useState({});
  const [sharesInfo, setSharesInfo] = useState({});

  useEffect(() => {
    getShares().then((dbShares) => {
      setPortfolioShares(dbShares);
      getInfoFromAV(portfolioShares);
    });
  }, []);

  const getInfoFromAV = (shares) => {
    if (shares.length > 1) {
      const fetches = shares.map((share) => {
        return fetch(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${share.share.symbol}&apikey=${process.env.ALPHAVANTAGE_KEY}`
        ).then((res) => res.json());
      });
      Promise.all(fetches)
        .then((results) => {
          setSharesInfo(results)
        })
    } else {
      return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${portfolioShares[0].share.symbol}&apikey=${process.env.ALPHAVANTAGE_KEY})
    }
    
    
  };

  const searchTicker = (search_term, cb) => {
    getTickers(search_term).then((res) => cb(res));
  };

  const shareSubmit = (shareObject) => {
    postShare(shareObject).then(
      setPortfolioShares([...portfolioShares, shareObject])
    );
  };

  return (
    <>
      <TotalsPanel />
      <SharesCarousel />
      <SharesTable />
      <AddForm search={searchTicker} onShareSubmit={shareSubmit} />
    </>
  );
};

export default SharesContainer;
