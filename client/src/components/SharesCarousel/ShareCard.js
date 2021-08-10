const ShareCard = ({ allInfo, index }) => {
  const dateArray = Object.keys(allInfo[0]["Time Series (Daily)"]);

  const populateTable = () => {
    
      return (
        <tr key={index}>
          <td>{allInfo[index]["name"]}</td>
          {/* <td>{allInfo[index]["Meta Data"]["2. Symbol"]}</td> */}
          <td>
            {allInfo[index]["Time Series (Daily)"][dateArray[0]]["4. close"] *
              allInfo[index]["num_of_shares"]}
          </td>
        </tr>
      );
    
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Current value</th>
          </tr>
        </thead>
        <tbody>{populateTable()}</tbody>
      </table>
    </>
  );
};

export default ShareCard;
