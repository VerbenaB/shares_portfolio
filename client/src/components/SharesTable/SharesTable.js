import React from 'react';
import ShareRow from './ShareRow';

const SharesTable = ({sharesInfo}) => {
    
    if (!allInfo) {
        return null
    } 

    // const getSymbol = (share) => {
    //     return share["Meta Data"]["2. Symbol"]
    //     return null
    // }

    const dateArray = Object.keys(allInfo[0]["Time Series (Daily)"])

    const getValue = () => {
        // return share.num_of_shares * share close value 
        const data = allInfo.map((share, index) => {
            console.log(allInfo[index]["Meta Data"]["2. Symbol"])
            console.log(allInfo[index]["Time Series (Daily)"][dateArray[0]]["4. close"]) 
        })    
    }


    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Symbol</th>
                    <th>Current value</th>
                </tr>
            </thead>
            <tbody>
                {allInfo.forEach((share) => {
                    <tr>
                        {/* <td>{getSymbol()}</td> */}
                        <td>{getValue()}</td>
                    </tr>
                })} 
            </tbody>
        </table>
        
        <ShareRow/>
        </>
        
    )

}

export default SharesTable;