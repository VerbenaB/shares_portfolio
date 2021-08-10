const TotalValue = ({ allInfo }) => {
  if (!allInfo || !allInfo[0]["Meta Data"]) {
    return null;
  }

  const dateArray = Object.keys(allInfo[0]["Time Series (Daily)"]);

  const calculateTotal = () => {
    let totalValue = 0;
    allInfo.forEach((share, index) => {
      totalValue +=
        allInfo[index]["Time Series (Daily)"][dateArray[0]]["4. close"] *
        allInfo[index]["num_of_shares"];
    });
    return (
      <tr>
        <td>{totalValue}</td>
      </tr>
    );
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Total value</th>
          </tr>
        </thead>
        <tbody>{calculateTotal()}</tbody>
      </table>
    </>
  );
};

export default TotalValue;
