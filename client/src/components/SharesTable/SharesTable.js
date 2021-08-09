import React from 'react';
import Moment from 'react-moment';
import ShareRow from './ShareRow';
import moment from "moment";


const SharesTable = ({allInfo, findTickers, findClose}) => {
    
    if (!allInfo) {
        return null
    } 

    const getSymbol = (share) => {
        // return share["Meta Data"]["2. Symbol"]
        return null
    }

    const getValue = () => {
        // return share.num_of_shares * share close value 
        allInfo.map((share, index) => {
            console.log(allInfo[index]["Meta Data"]["2. Symbol"])
            console.log(allInfo[index]["Time Series (Daily)"][dateArray[0]]["4. close"])
            console.log(allInfo[index].num_of_shares)
        })
        
        
    }

    const dateArray = Object.keys(allInfo[0]["Time Series (Daily)"])
    console.log(dateArray[0])
    
    console.log(allInfo) 
    console.log(allInfo[0]["Meta Data"]["2. Symbol"])

    console.log(allInfo[0]["Time Series (Daily)"][dateArray[0]]["4. close"])

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
                        <td>{getSymbol(share)}</td>
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