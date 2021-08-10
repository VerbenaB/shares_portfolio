import ReactHighcharts from "react-highcharts/ReactHighstock.src";
import moment from "moment";

const ShareCard = ({ share }) => {
  const dateArray = Object.keys(share["Time Series (Daily)"]);
  const copy = [...dateArray];

  const reversed = copy.reverse();
  reversed.splice(0, 30);

  // const date = dateArray[0]
  // console.log(moment(date).format("YYYY.MM.DD"))
  // const newDate = moment(date).format("YYYY.MM.DD");
  // const unixDate = parseInt((new Date(newDate).getTime() / 1000).toFixed(0))

  const getDataForPoints = () => {
    return reversed.map((point, i) => {
      return ([
        // This needs to be turned into a timestamp
        // (share["Time Series (Daily)"][reversed[i]]).getTime() / 1000,
        // unixDate,
        Number(share["Time Series (Daily)"][reversed[i]]["4. close"]),
      ]);
    });
  };

  const options = { style: "currency", currency: "USD" };
  const numberFormat = new Intl.NumberFormat("en-UK", options);
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
            color: "#E03838",
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
          moment(this.x).format("DD MM YYYY")
        );
      },
    },
    plotOptions: {
      series: {
        pointStart: Date.UTC(2021, 5, 1),
        pointInterval: 24 * 3600 * 1000,
        showInNavigator: true,
        gapSize: 6,
      },
    },
    title: {
      text: `Stock Chart`,
    },
    chart: {
      height: 400,
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
          count: 7,
          text: "7d",
        },
        {
          type: "month",
          count: 1,
          text: "1m",
        },
        {
          type: "all",
          text: "All",
        },
      ],
      selected: 2,
    },
    series: [
      {
        name: "Price",
        type: "spline",

        data: getDataForPoints(),
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
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
          {/* <td>{getDataForPoints()}</td> */}
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
      <ReactHighcharts config={configPrice} />
    </>
  );
};

export default ShareCard;
