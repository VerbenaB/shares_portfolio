import ReactHighcharts from "react-highcharts/ReactHighstock.src";
import moment from "moment";

const options = { style: "currency", currency: "USD" };
const numberFormat = new Intl.NumberFormat("en-US", options);

const configPrice = {
  yAxis: [
    {
      offset: 20,

      labels: {
        formatter: function () {
          return numberFormat.format(this.value);
        },
        x: -15,
        style: {
          color: "#000",
          position: "absolute",
        },
        align: "left",
      },
    },
  ],
  tooltip: {
    shared: true,
    formatter: function () {
      return (
        numberFormat.format(this.y, 0) +
        "</b><br/>" +
        moment(this.x).format("MMMM Do YYYY, h:mm")
      );
    },
  },
  plotOptions: {
    series: {
      showInNavigator: true,
      gapSize: 6,
    },
  },
  rangeSelector: {
    selected: 1,
  },
  title: {
    text: `Bitcoin stock price`,
  },
  chart: {
    height: 600,
  },

  credits: {
    enabled: false,
  },

  legend: {
    enabled: true,
  },
  xAxis: {
    type: "date",
  },
  rangeSelector: {
    buttons: [
      {
        type: "day",
        count: 1,
        text: "1d",
      },
      {
        type: "day",
        count: 7,
        text: "7d",
      },
      {
        type: "month",
        count: 1,
        text: "1m",
      },
      {
        type: "month",
        count: 3,
        text: "3m",
      },
      {
        type: "all",
        text: "All",
      },
    ],
    selected: 4,
  },
  series: [
    {
      name: "Price",
      type: "spline",

      data: priceData,
      tooltip: {
        valueDecimals: 2,
      },
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
        <tbody>{populateTable()}</tbody>
      </table>
    </>
  );
};

export default ShareCard;
