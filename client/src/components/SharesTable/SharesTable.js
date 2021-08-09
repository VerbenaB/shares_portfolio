import React from 'react';
import Moment from 'react-moment';
import ShareRow from './ShareRow';
import moment from "moment";


const SharesTable = ({allInfo, findTickers, findClose}) => {
    
    // console.log("yes", allInfo) 

    if (!allInfo) {
        return null
    } 

    const dateArray = Object.keys(allInfo[0]["Time Series (Daily)"])
    
    console.log(dateArray[0])

    // const getArray = (share) => share["Time Series (Daily)"]
    // const getDate = allInfo.map((share) => [Object.keys(getArray(share))][0])

    // console.log(allInfo.map((share) => share["Meta Data"]["2. Symbol"]))
    // for (let share of allInfo) {
    //     console.log(share["Time Series (Daily)"][getDate])
    // }
    
    // const shareNodes = allInfo.map()
    

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