import React from "react";
import "./SharesTable.css";

const SharesTable = ({ allInfo }) => {
  if (!allInfo || !allInfo[0]["Meta Data"]) {
    return null;
  }

  const dateArray = Object.keys(allInfo[0]["Time Series (Daily)"]);

  const populateTable = () => {
    return allInfo.map((share, index) => {
      return (
        <tr key={index}>
          <td className="share-td">{allInfo[index]["name"]}</td>
          <td className="share-td">{allInfo[index]["Meta Data"]["2. Symbol"]}</td>
          <td className="share-td">
            {allInfo[index]["Time Series (Daily)"][dateArray[0]]["4. close"] *
              allInfo[index]["num_of_shares"]}
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="shares-table">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Current value</th>
          </tr>
        </thead>
        <tbody>{populateTable()}</tbody>
      </table>
    </div>
  );
};

export default SharesTable;
