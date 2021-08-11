import React, { useEffect, useState } from "react";
import TotalsPanel from "../components/TotalsPanel/TotalPanel";
import SharesTable from "../components/SharesTable/SharesTable";
import SharesList from "../components/SharesCarousel/SharesList";
// import ToggleAddForm from '../components/Edit/ToggleAddForm';
import AddForm from "../components/Edit/AddForm";
import { getShares, getTickers, postShare } from "../components/ShareService";
import "./SharesContainer.css";
import Grid from "@material-ui/core/Grid";
// import ToggleDeleteForm from '../components/Edit/ToggleDeleteForm';
// import DeleteForm from '../components/Edit/DeleteForm';

const SharesContainer = () => {
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
      const sharesWithNumOfShares = results.map((avShare, i) => {
        avShare.num_of_shares = shares[i].num_of_shares;
        avShare.name = shares[i]["share"]["name"];
        return avShare;
      });
      console.log(sharesWithNumOfShares);
      setSharesInfo(sharesWithNumOfShares);
    });
  };

  const searchTicker = (search_term, cb) => {
    getTickers(search_term).then((res) => cb(res));
  };

  const shareSubmit = (shareObject) => {
    postShare(shareObject);
  };

  if ((!sharesInfo) || sharesInfo[0]["Note"]) {
    return <div className="dashboard"><p>Loading ...</p></div>  
  }

  return (
    <div className="main">
      
        <div className="dashboard">
          
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
              <TotalsPanel allInfo={sharesInfo} />
            </Grid>
            <Grid item xs={6}>
              <SharesTable allInfo={sharesInfo} />
            </Grid>
            <Grid item xs={12}>
              <SharesList allInfo={sharesInfo} />
            </Grid>
          </Grid>
        </div>
      

      <AddForm search={searchTicker} onShareSubmit={shareSubmit} />
    </div>
  );
};

export default SharesContainer;
