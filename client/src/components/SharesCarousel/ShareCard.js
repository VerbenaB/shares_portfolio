const ShareCard = ({ share }) => {
  const dateArray = Object.keys(share["Time Series (Daily)"]);
  const copy = [...dateArray];

  const reversed = copy.reverse();
  reversed.splice(0, 30);

  const getDataForPoints = () => {
    return reversed.map((point, i) => {
      return `${share["Time Series (Daily)"][reversed[i]]["4. close"]} , `;
    });
  };

  const populateTable = () => {
    return (
      <>
        <tr key={share["name"]}>
          <td>{share["name"]}</td>
          {/* <td>{allInfo[index]["Meta Data"]["2. Symbol"]}</td> */}
          <td>
            {share["Time Series (Daily)"][dateArray[0]]["4. close"] *
              share["num_of_shares"]}
          </td>
        </tr>
        <tr>
          <td>Highcharts chart</td>
          <td>{getDataForPoints()}</td>
        </tr>
      </>
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
