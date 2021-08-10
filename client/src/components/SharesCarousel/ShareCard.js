import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";


// const options = { style: "currency", currency: "USD" };
// const numberFormat = new Intl.NumberFormat("en-US", options);

const options = {
  title: {
    text: "stock chart",
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9],
    },
  ],
};



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
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"stockChart"}
          options={options}
        />
        <tbody>{populateTable()}</tbody>
      </table>
    </>
  );
};

export default ShareCard;
