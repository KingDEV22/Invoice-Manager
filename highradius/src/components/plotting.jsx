import React from "react";
import { Dialog, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const ChartPlot = (props) => {
  const handleClose = () => {
    props.setOpen(false);
  };
  const customerNumber = props.data.map((item) => {
    return item.count;
  });
  // function getSum(total, num) {
  //   return total + num.total_open_amount;
  // }
  //const totalOpenAmount = props.data.reduce(getSum, 0);
  const labelTitle = props.data.map((item) => {
    return item.cust_name;
  });
  const state = {
    labels: labelTitle,
    datasets: [
      {
        label: "No of Customer",
        backgroundColor: ["red", "red"],

        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: customerNumber,
      },
      {
        label: "Total open Amount",
        backgroundColor: ["green", "green"],
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: customerNumber,
      },
    ],
  };

  // console.log(labelTitle);
  // console.log(totalOpenAmount);
  // console.log(customerNumber);
  return (
    <Dialog open={props.open} onClose={handleClose} fullWidth={true}>
      <div style={{ background: "#2A3E4C" }}>
        <h2 style={{ color: "white", padding: 10, margin: 10 }}>Analysis</h2>
        <div>
          <Bar
            data={state}
            style={{
              height: window.innerHeight - 230,
              width: window.innerWidth - 10,
              overflow: "scroll",
            }}
            options={{
              title: {
                display: true,
                text: "Average Rainfall per month",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>
        <Grid container justify="center"></Grid>
        <Grid container justify="center" style={{ background: "#2A3E4C" }}>
          <Button
            onClick={handleClose}
            type="submit"
            variant="contained"
            color="primary"
            style={{ padding: 10, margin: 10 }}
            size="large"
          >
            Cancel
          </Button>
        </Grid>
      </div>
    </Dialog>
  );
};

export default ChartPlot;
