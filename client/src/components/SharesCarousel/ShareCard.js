const ShareCard = ({ allInfo, index }) => {
  const dateArray = Object.keys(allInfo[0]["Time Series (Daily)"]);
  const thirtyDays = dateArray.splice(0, 30);

  const turnBackwards = (arr) => {
    let infoArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      infoArray.push(arr[i]);
    }
    return infoArray;
  };

  const datePoints = turnBackwards(thirtyDays);

  const getDataForPoints = () => {
    return datePoints.map((point, i) => {
        return allInfo[index]["Time Series (Daily)"][dateArray[i]]["4. close"]
    });
  };

  const populateTable = () => {
    return (
      <>
        <tr key={index}>
          <td>{allInfo[index]["name"]}</td>
          {/* <td>{allInfo[index]["Meta Data"]["2. Symbol"]}</td> */}
          <td>
            {allInfo[index]["Time Series (Daily)"][dateArray[0]]["4. close"] *
              allInfo[index]["num_of_shares"]}
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
