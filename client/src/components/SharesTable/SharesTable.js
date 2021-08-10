import React from "react";
import "./SharesTable.css";
import { TableCell, TableRow, TableBody, TableHead } from "@material-ui/core";

const SharesTable = ({ allInfo }) => {
  if (!allInfo || !allInfo[0]["Meta Data"]) {
    return null;
  }

  const dateArray = Object.keys(allInfo[0]["Time Series (Daily)"]);

  const populateTable = () => {
    return allInfo.map((share, index) => {
      return (
        <TableRow key={index}>
          <TableCell className="share-td">{allInfo[index]["name"]}</TableCell>
          <TableCell className="share-td">{allInfo[index]["Meta Data"]["2. Symbol"]}</TableCell>
          <TableCell className="share-td">
            {allInfo[index]["Time Series (Daily)"][dateArray[0]]["4. close"] *
              allInfo[index]["num_of_shares"]}
          </TableCell>
        </TableRow>
      );
    });
  };

  return (
   <>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell align="left">Sybmol</TableCell>
        <TableCell align="right">Current Value</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {populateTable()}
    </TableBody>
   </>
  //  <div className="shares-table">
  //     <table className="table">
  //       <thead>
  //         <tr>
  //           <th>Name</th>
  //           <th>Symbol</th>
  //           <th>Current value</th>
  //         </tr>
  //       </thead>
  //       <tbody>{populateTable()}</tbody>
  //     </table>
  //   </div>
  );
};

export default SharesTable;
