import React from 'react';
import Moment from 'react-moment';
import ShareRow from './ShareRow';
import moment from "moment";


const SharesTable = ({allInfo, findTickers, findClose}) => {
    console.log("yes", allInfo) 

    if (!allInfo) {
        return null
    } 

    const getArray = (share) => share["Time Series (Daily)"]

    console.log(allInfo.map((share) => share["Meta Data"]["2. Symbol"]))
    console.log(allInfo.map((share) => [Object.keys(getArray(share))][0]))

    return (
        <>
        {/* <p>{findClose}</p>
        <p>{allInfo[0]["Meta Data"]["2. Symbol"]}</p> 
        <p>{findTickers}</p> */}
        <ShareRow/>
        </>
    )

}

export default SharesTable;