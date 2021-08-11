import ReactHighcharts from "react-highcharts/ReactHighstock.src";
import moment from "moment";

const ShareCard = ({ share }) => {
  const dateArray = Object.keys(share["Time Series (Daily)"]);
  const copy = [...dateArray];

  const reversed = copy.reverse();
  reversed.splice(0, 30);


  const getDataForPoints = () => {
    return reversed.map((point, i) => {
      return ([
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
        pointStart: moment().subtract(reversed.length, 'days'),
        pointInterval: 24 * 3600 * 1000,
        showInNavigator: true,
        gapSize: 6,
      },
    },
    title: {
      text: ` `,
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
          </tr>
        </thead>
        <tbody>{populateTable()}</tbody>
      </table>
      <ReactHighcharts config={configPrice} />
    </>
  );
};

export default ShareCard;
