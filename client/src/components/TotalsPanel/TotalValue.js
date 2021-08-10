import "./TotalValue.css";

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
      
        <h2>${totalValue}</h2>
    
    );
  };

  return (
    <div className="totals">
      <h3>Portfolio Value</h3>
      <h3>{calculateTotal()}</h3>
    </div>
  );
};

export default TotalValue;
