import React from "react";

const SharesTable = ({ allInfo }) => {
  if (!allInfo || !allInfo[0]["Meta Data"]) {
    return null;
  }

  const dateArray = Object.keys(allInfo[0]["Time Series (Daily)"]);

  const populateTable = () => {
    return allInfo.map((share, index) => {
      console.log(allInfo[index]["Meta Data"]["2. Symbol"]);

      return (
        <tr key={index}>
          <td>{allInfo[index]["Meta Data"]["2. Symbol"]}</td>
          <td>
            {allInfo[index]["Time Series (Daily)"][dateArray[0]]["4. close"] *
              allInfo[index]["num_of_shares"]}
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Current value</th>
          </tr>
        </thead>
        <tbody>{populateTable()}</tbody>
      </table>
    </>
  );
};

export default SharesTable;
