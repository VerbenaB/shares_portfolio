import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import moment from "moment";
import TotalsPanel from "../components/TotalsPanel/TotalPanel";
import SharesTable from "../components/SharesTable/SharesTable";
import SharesCarousel from "../components/SharesCarousel/SharesCarousel";
// import ToggleAddForm from '../components/Edit/ToggleAddForm';
import AddForm from "../components/Edit/AddForm";
import { getShares, getTickers, postShare } from "../components/ShareService";
// import ToggleDeleteForm from '../components/Edit/ToggleDeleteForm';
// import DeleteForm from '../components/Edit/DeleteForm';

const SharesContainer = () => {
  // const [portfolioShares, setPortfolioShares] = useState([]);
  const [sharesInfo, setSharesInfo] = useState(null);

  useEffect(() => {
    getShares().then((dbShares) => {
      getInfoFromAV(dbShares);
    });
  }, []);

  const getInfoFromAV = (shares) => {
    const fetches = shares.map((share) => {
      return fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${share.share.symbol}&apikey=${process.env.ALPHAVANTAGE_KEY}`
      ).then((res) => res.json());
    });
    Promise.all(fetches).then((results) => {
      setSharesInfo(results);
    });
  };

  const searchTicker = (search_term, cb) => {
    getTickers(search_term).then((res) => cb(res));
  };

  const shareSubmit = (shareObject) => {
    postShare(shareObject);
  };

  const findCurrentInfo = () => {
    let recents =  sharesInfo.map((share) => share[0]["Time Series (Daily)"].keys()[0])
    recents.map((recent) => recent["4. close"])
    // console.log(shares[0]['Time Series (Daily)']) 
  }
  const findTickers = () => {
    sharesInfo.map((share) => share["Meta Data"]["2. Symbol"])
    
    // shares.map((share) => share[0]["Meta Data"]["2. Symbol"])
  }


  return (
    <>
      <TotalsPanel />
      <SharesCarousel />
      <SharesTable allInfo={sharesInfo} findClose={findCurrentInfo} findTickers={findTickers}/>
      <AddForm search={searchTicker} onShareSubmit={shareSubmit} />
    </>
  );
};

export default SharesContainer;
