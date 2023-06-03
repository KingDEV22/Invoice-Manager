import React, { useState } from "react";
import { Dialog, Button } from "@material-ui/core";
import { TextField } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Box from "@mui/material/Box";
import ChartPlot from "./plotting";

const Analytics = (props) => {
  const [clear_date, setClearDate] = useState("");
  const [baseline_create_date, setBaselineCreateDate] = useState("");
  const [due_in_date, setDueDate] = useState("");
  const [clear_date1, setClearDate1] = useState("");
  const [baseline_create_date1, setBaselineCreateDate1] = useState("");
  const [due_in_date1, setDueDate1] = useState("");
  const [invoice_currency, setInvoiceCurrency] = useState("");
  const [openChartPlot, setOpenChartPlot] = useState(false);
  const [analyticData, setanalyticData] = useState([]);
  const handleClose = () => {
    props.setOpen(false);
  };
  const handleSubmit = () => {
    console.log(clear_date);
    console.log(baseline_create_date);
    console.log(due_in_date);
    console.log(invoice_currency);
    const filterdata = [
      clear_date,
      clear_date1,
      due_in_date,
      due_in_date1,
      baseline_create_date,
      baseline_create_date1,
      invoice_currency,
    ];
    axios
      .get(`http://localhost:8080/Winter_Backend/Analytics?data=${filterdata}`)
      .then((response) => {
        //console.log(response.data);
        // props.searchChange(response.data);
        setanalyticData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setOpenChartPlot(true);
    // handleClose();
  };
  console.log(analyticData);
  return (
    <Dialog open={props.open} onClose={handleClose} maxWidth={"lg"}>
      <div style={{ background: "#2A3E4C" }}>
        <h2 style={{ color: "white", padding: 10, margin: 10 }}>
          Analytics View{" "}
        </h2>
        {/* <Grid container justify="center"> */}
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "90ch" },
          }}
          noValidate
          autoComplete="off"
          //   sx={{ width: "100%" }}
        >
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
            <Grid item xs={6}>
              <h4 style={{ color: "white", padding: 10, margin: 10 }}>
                Clear Date
              </h4>
            </Grid>
            <Grid item xs={6}>
              <h4 style={{ color: "white", padding: 10, margin: 10 }}>
                Due Date
              </h4>
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                id="date outlined-basic"
                // sx={{ width: 220 }}
                inputProps={{
                  style: {
                    fontFamily: "Arial",
                    backgroundColor: "white",
                    padding: 20,
                    margin: 7,
                    width: 230,
                  },
                }}
                variant="outlined"
                type="date"
                // label="Clear Date"
                color="primary"
                style={{ padding: 0, margin: 10 }}
                onChange={(e) => setClearDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                id="date outlined-basic"
                // sx={{ width: 220 }}
                inputProps={{
                  style: {
                    fontFamily: "Arial",
                    backgroundColor: "white",
                    padding: 20,
                    margin: 7,
                    width: 230,
                  },
                }}
                variant="outlined"
                type="date"
                // label="Clear Date"
                color="primary"
                style={{ padding: 0, margin: 10 }}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                id="outlined"
                inputProps={{
                  style: {
                    fontFamily: "Arial",
                    backgroundColor: "white",
                    padding: 20,
                    margin: 7,
                    width: 230,
                  },
                }}
                type="date"
                // label=" Due Date"
                style={{ padding: 0, margin: 10 }}
                color="primary"
                onChange={(e) => setClearDate1(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                id="outlined"
                inputProps={{
                  style: {
                    fontFamily: "Arial",
                    backgroundColor: "white",
                    padding: 20,
                    margin: 7,
                    width: 230,
                  },
                }}
                type="date"
                // label=" Due Date"
                style={{ padding: 0, margin: 10 }}
                color="primary"
                onChange={(e) => setDueDate1(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <h4 style={{ color: "white", padding: 10, margin: 10 }}>
                Baseline Create Date
              </h4>
            </Grid>
            <Grid item xs={6}>
              <h4 style={{ color: "white", padding: 10, margin: 10 }}>
                Invoice Currency
              </h4>
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                id="outlined"
                inputProps={{
                  style: {
                    fontFamily: "Arial",
                    backgroundColor: "white",
                    padding: 20,
                    margin: 7,
                    width: 230,
                  },
                }}
                type="date"
                //   label="  Baseline Create Date"
                color="primary"
                style={{ padding: 0, margin: 10 }}
                onChange={(e) => setBaselineCreateDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                id="outlined"
                inputProps={{
                  style: {
                    fontFamily: "Arial",
                    backgroundColor: "white",
                    padding: 15,
                    margin: 0,
                  },
                }}
                //label="Invoice Currency"
                color="primary"
                style={{ paddingLeft: 1, margin: 10 }}
                onChange={(e) => setInvoiceCurrency(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                id="outlined"
                inputProps={{
                  style: {
                    fontFamily: "Arial",
                    backgroundColor: "white",
                    padding: 20,
                    margin: 7,
                    width: 230,
                  },
                }}
                type="date"
                // label="  Baseline Create Date"
                color="primary"
                style={{ padding: 0, margin: 10 }}
                onChange={(e) => setBaselineCreateDate1(e.target.value)}
              />
            </Grid>
          </Grid>
        </Box>
        {/* </Grid> */}
        <Grid container justify="center" style={{ background: "#2A3E4C" }}>
          <Button
            onClick={handleSubmit}
            type="submit"
            variant="contained"
            color="primary"
            style={{ padding: 10, margin: 10 }}
            size="large"
          >
            Submit
          </Button>
          <ChartPlot
            open={openChartPlot}
            setOpen={setOpenChartPlot}
            data={analyticData}
          />
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

export default Analytics;
