import React from 'react';
import ShareRow from './ShareRow';


const SharesTable = ({info, shares}) => {
    console.log(info(shares))
    // const information =  info.map((shareInformation) => console.log(shareInformation))
    
    return (
        <>
       {/* <p>{information}</p> */}
        <ShareRow/>
        </>
    )
}

export default SharesTable;