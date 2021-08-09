import React from 'react';
import ShareRow from './ShareRow';


const SharesTable = ({allInfo}) => {
    console.log("yes", allInfo)
    if (!allInfo) {
        return null
    } 

    return (
        <>
        {/* <p>{findCurrentInfo(allInfo)}</p> */}
        <p>{allInfo[0]["Meta Data"]["2. Symbol"]}</p>
        <p>{find}</p>
        <ShareRow/>
        </>
    )

}

export default SharesTable;