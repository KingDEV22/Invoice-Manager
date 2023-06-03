import React, { useState } from "react";
import { Dialog, TextField, Button } from "@material-ui/core";
import axios from "axios";
import { Grid, Box } from "@mui/material";
const AdvancedSearch = (props) => {
  const [documentId, setDocumentId] = useState("");
  const [invoiceId, setInvoiceId] = useState("");
  const [customerNumber, setCustomerNumber] = useState("");
  const [businessYear, setBusinessYear] = useState("");

  const handleClose = () => {
    props.setOpen(false);
  };
  const searchInvoice = (e) => {
    const query = [documentId, invoiceId, customerNumber, businessYear];
    console.log("hello");
    axios
      .get(`http://localhost:8080/Winter_Backend/advance?query=${query}`)
      .then((response) => {
        console.log(response.data);
        props.searchChange(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
    handleClose();
  };
  return (
    <Dialog open={props.open} onClose={handleClose} maxWidth={"lg"}>
      <div style={{ background: "#2A3E4C" }}>
        <h2 style={{ color: "white", padding: 10, margin: 10 }}>
          Advanced Search
        </h2>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 3, width: "80ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Grid
            container
            justifyContent="center"
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={5}>
              <TextField
                required
                id="outlined-required"
                placeholder="Document ID"
                inputProps={{
                  style: { fontFamily: "Arial", backgroundColor: "white" },
                }}
                onChange={(e) => setDocumentId(e.target.value)}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                required
                id="outlined-required"
                placeholder=" Invoice ID"
                inputProps={{
                  style: { fontFamily: "Arial", backgroundColor: "white" },
                }}
                onChange={(e) => setInvoiceId(e.target.value)}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                required
                id="outlined-required"
                placeholder=" Customer Number"
                inputProps={{
                  style: { fontFamily: "Arial", backgroundColor: "white" },
                }}
                onChange={(e) => setCustomerNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                required
                id="outlined-required"
                placeholder="Business Year"
                inputProps={{
                  style: { fontFamily: "Arial", backgroundColor: "white" },
                }}
                onChange={(e) => setBusinessYear(e.target.value)}
              />
            </Grid>
            <Grid container justifyContent="center">
              <Button
                onClick={searchInvoice}
                type="submit"
                variant="contained"
                color="primary"
                style={{ padding: 10, margin: 10 }}
              >
                Search
              </Button>

              <Button
                onClick={handleClose}
                type="submit"
                variant="contained"
                color="primary"
                style={{ padding: 10, margin: 10 }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Dialog>
  );
};

export default AdvancedSearch;
