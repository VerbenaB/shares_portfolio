import React from "react";

const SharesTable = ({ allInfo }) => {
  if (!allInfo || !allInfo[0]["Meta Data"]) {
    return null;
  }

  // const getSymbol = (share) => {
  //     return share["Meta Data"]["2. Symbol"]
  //     return null
  // }

  const dateArray = Object.keys(allInfo[0]["Time Series (Daily)"]);

  const getValue = () => {
    // return share.num_of_shares * share close value
    return allInfo.map((share, index) => {
      console.log(allInfo[index]["Meta Data"]["2. Symbol"]);

      return (
        <tr key={index}>
          <td>{allInfo[index]["Meta Data"]["2. Symbol"]}</td>
          <td>
            {allInfo[index]["Time Series (Daily)"][dateArray[0]]["4. close"]}
          </td>
        </tr>
      );
    });
  };

  //   console.log(allInfo[0]["Meta Data"]["2. Symbol"]);
  //   console.log(allInfo[0]["Time Series (Daily)"][dateArray[0]]["4. close"]);

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
          
            {getValue()}
          
        </tbody>
      </table>
    </>
  );
};

export default SharesTable;
