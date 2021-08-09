import React from 'react';
import Moment from 'react-moment';
import ShareRow from './ShareRow';
import moment from "moment";


const SharesTable = ({allInfo, findTickers, findClose}) => {

    if (!allInfo) {
        return null
    } 

    const getSymbol = (share) => {
        return null
    }

    const getValue = (share) => {
        // return share.num_of_shares * share close value 
        return null
    }

    const dateArray = Object.keys(allInfo[0]["Time Series (Daily)"])
   
    console.log(allInfo) 
    console.log(dateArray[0])

    

    // const getArray = (share) => share["Time Series (Daily)"]
    // const getDate = allInfo.map((share) => [Object.keys(getArray(share))][0])

    // console.log(allInfo.map((share) => share["Meta Data"]["2. Symbol"]))
    // for (let share of allInfo) {
    //     console.log(share["Time Series (Daily)"][getDate])
    // }
    
   
    

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
                {allInfo.map((share) => {
                    <tr>
                        <td>{getSymbol(share)}</td>
                        <td>{getValue(share)}</td>
                    </tr>
                })}
            </tbody>
        </table>
        
        <ShareRow/>
        </>
        
    )

}

export default SharesTable;