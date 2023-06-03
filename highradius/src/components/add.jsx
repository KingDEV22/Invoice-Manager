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
  const [business_code, setBusinessCode] = useState("");
  const [cust_number, setCustomerNumber] = useState("");
  const [clear_date, setClearDate] = useState("");
  const [business_year, setBusinessYear] = useState("");
  const [customer_id, setCustomerId] = useState("");
  const [posting_date, setPostingDate] = useState("");
  const [document_create_date, setDocumentCreateDate] = useState("");
  const [due_in_date, setDueDate] = useState("");
  const [invoice_currency, setInvoiceCurrency] = useState("");
  const [document_type, setDocuemntType] = useState("");
  const [posting_id, setPostingId] = useState("");
  const [total_open_amount, setTotalOpenAmount] = useState("");
  const [baseline_create_date, setBaselineCreateDate] = useState("");
  const [invoice_id, setInvoiceId] = useState("");
  const [customer_payment_terms, setCustPaymentTerms] = useState("");
  const postInvoice = () => {
    const invoiceData = {
      business_code,
      cust_number,
      clear_date,
      business_year,
      customer_id,
      posting_date,
      document_create_date,
      due_in_date,
      invoice_currency,
      document_type,
      posting_id,
      total_open_amount,
      baseline_create_date,
      invoice_id,
      customer_payment_terms,
    };
    axios
      .post(`http://localhost:8080/Winter_Backend/add`, invoiceData)
      .catch((error) => {
        console.log(error);
      });
    handleClose();
  };
  return (
    <Dialog open={props.open} onClose={handleClose} maxWidth={"lg"}>
      <Grid container justifyContent="center" style={{ background: "#2A3E4C" }}>
        <h3 style={{ color: "white", padding: 10, margin: 10 }}>Add</h3>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { p: 2.2, width: "30ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-"
            // label="Outlined"
            // variant="outlined"
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
