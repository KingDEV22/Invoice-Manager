import React, { useState } from "react";
import { Dialog, Button } from "@material-ui/core";
import { TextField } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Box from "@mui/material/Box";
const AddInvoice = (props) => {
  const handleClose = () => {
    props.setOpen(false);
    window.location.reload(false);
  };
  const [businessCode, setBusinessCode] = useState("");
  const [custNumber, setCustomerNumber] = useState("");
  const [clearDate, setClearDate] = useState("");
  const [businessYear, setBusinessYear] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [postingDate, setPostingDate] = useState("");
  const [documentCreateDate, setDocumentCreateDate] = useState("");
  const [dueInDate, setDueDate] = useState("");
  const [invoiceCurrency, setInvoiceCurrency] = useState("");
  const [documentType, setDocuemntType] = useState("");
  const [postingId, setPostingId] = useState("");
  const [totalOpenAmount, setTotalOpenAmount] = useState("");
  const [baselineCreateDate, setBaselineCreateDate] = useState("");
  const [invoiceId, setInvoiceId] = useState("");
  const [customerPaymentTerms, setCustPaymentTerms] = useState("");
  const postInvoice = () => {
    const invoiceData = {
      businessCode,
      custNumber,
      clearDate,
      businessYear,
      customerId,
      postingDate,
      documentCreateDate,
      dueInDate,
      invoiceCurrency,
      documentType,
      postingId,
      totalOpenAmount,
      baselineCreateDate,
      invoiceId,
      customerPaymentTerms,
    };
    axios
      .post(`http://localhost:8080/invoice/add`, invoiceData)
      .catch((error) => {
        console.log(error);
      });
    handleClose();
  };
  return (
    <Dialog open={props.open} onClose={handleClose} maxWidth={"lg"}>
      <Grid container justifyContent="center" style={{ background: "#2A3E4C" }}>
        <h3 style={{ color: "white", padding: 10, margin: 1 }}>Add</h3>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { p: 2.2, width: "20ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-"
            variant="outlined"
            inputProps={{
              style: {
                fontFamily: "Arial",
                background: "white",
                padding: 15,
                margin: 0,
              },
            }}
            label="Business Code"
            color="primary"
            style={{ paddingLeft: 1, margin: 20 }}
            onChange={(e) => setBusinessCode(e.target.value)}
          />
          <TextField
            required
            id="outlined-basic"
            inputProps={{
              style: {
                fontFamily: "Arial",
                backgroundColor: "white",
                padding: 15,
                margin: 0,
              },
            }}
            label=" Customer Number"
            //=" Customer Number"
            color="primary"
            type="text"
            style={{ paddingLeft: 1, margin: 20 }}
            onChange={(e) => setCustomerNumber(e.target.value)}
          />
          <TextField
            required
            id="date outlined-basic"
            // sx={{ width: 220 }}
            inputProps={{
              style: {
                fontFamily: "Arial",
                backgroundColor: "white",
                padding: 19,
                margin: 1,
              },
            }}
            variant="outlined"
            type="date"
            label="Clear Date"
            color="primary"
            style={{ paddingLeft: 0, margin: 20 }}
            onChange={(e) => setClearDate(e.target.value)}
          />
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
            label="Business Year"
            color="primary"
            style={{ paddingLeft: 1, margin: 20 }}
            onChange={(e) => setBusinessYear(e.target.value)}
          />
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
            label="  Customer ID"
            color="primary"
            style={{ paddingLeft: 1, margin: 20 }}
            onChange={(e) => setCustomerId(e.target.value)}
          />
          <TextField
            required
            id="outlined"
            inputProps={{
              style: {
                fontFamily: "Arial",
                backgroundColor: "white",
                padding: 19,
                margin: 1,
              },
            }}
            type="date"
            label=" Posting Date"
            color="primary"
            style={{ paddingLeft: 1, margin: 20 }}
            onChange={(e) => setPostingDate(e.target.value)}
          />
          <TextField
            required
            id="outlined"
            inputProps={{
              style: {
                fontFamily: "Arial",
                backgroundColor: "white",
                padding: 19,
                margin: 1,
              },
            }}
            type="date"
            label="  Document Create Date"
            color="primary"
            style={{ paddingLeft: 1, margin: 20 }}
            onChange={(e) => setDocumentCreateDate(e.target.value)}
          />
          <TextField
            required
            id="outlined"
            inputProps={{
              style: {
                fontFamily: "Arial",
                backgroundColor: "white",
                padding: 19,
                margin: 1,
              },
            }}
            type="date"
            label=" Due Date"
            style={{ paddingLeft: 1, margin: 20 }}
            color="primary"
            onChange={(e) => setDueDate(e.target.value)}
          />
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
            label="Invoice Currency"
            color="primary"
            style={{ paddingLeft: 1, margin: 20 }}
            onChange={(e) => setInvoiceCurrency(e.target.value)}
          />
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
            label=" Document type"
            color="primary"
            style={{ paddingLeft: 1, margin: 20 }}
            onChange={(e) => setDocuemntType(e.target.value)}
          />
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
            label=" Posting ID"
            color="primary"
            style={{ paddingLeft: 1, margin: 20 }}
            onChange={(e) => setPostingId(e.target.value)}
          />
          <TextField
            required
            id="outlined"
            inputProps={{
              style: {
                fontFamily: "Arial",
                backgroundColor: "white",
                padding: 19,
                margin: 1,
              },
            }}
            type="date"
            label="  Baseline Create Date"
            color="primary"
            style={{ paddingLeft: 1, margin: 20 }}
            onChange={(e) => setBaselineCreateDate(e.target.value)}
          />
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
            label="   Total Open Amount"
            color="primary"
            style={{ paddingLeft: 1, margin: 20 }}
            onChange={(e) => setTotalOpenAmount(e.target.value)}
          />

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
            label=" Customer Payment Terms"
            color="primary"
            style={{ paddingLeft: 1, margin: 20 }}
            onChange={(e) => setCustPaymentTerms(e.target.value)}
          />
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
            label="Invoice ID"
            color="primary"
            style={{ paddingLeft: 1, margin: 20 }}
            onChange={(e) => setInvoiceId(e.target.value)}
          />
        </Box>

        <Button
          onClick={postInvoice}
          type="submit"
          variant="contained"
          color="primary"
          style={{ padding: 10, margin: 10 }}
          size="large"
        >
          Submit
        </Button>
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
    </Dialog>
  );
};

export default AddInvoice;
