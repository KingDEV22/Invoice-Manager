import React, { useState } from "react";
import { Dialog, TextField, Button } from "@material-ui/core";
import axios from "axios";
import { Grid, Box } from "@material-ui/core";
const EditInvoice = (props) => {
  const handleClose = () => {
    props.setOpen(false);
  };
  const [customer_payment_terms, setCustPaymentTerms] = useState("");
  const [invoice_currency, setInvoiceCurrency] = useState("");
  const editInvoice = () => {
    const docId = props.editInvoiceNo[0];
    const EditInvoice = {
      docId,
      invoice_currency,
      customer_payment_terms,
    };

    console.log(EditInvoice);
    axios
      .put(`http://localhost:8080/invoice/update`, {
        docId,
        invoice_currency,
        customer_payment_terms,
      })
      .then((response) => {
        console.log(response);
        handleClose();
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
    handleClose();
  };
  return (
    <Dialog open={props.open} onClose={handleClose} maxWidth={"lg"}>
      <div style={{ background: "#2A3E4C" }}>
        <h2 style={{ color: "white", padding: 10, margin: 10 }}>Edit</h2>
        <Grid container>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "35ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="outlined"
              placeholder="Invoice Currency"
              inputProps={{
                style: {
                  fontFamily: "Arial",
                  backgroundColor: "white",
                  padding: 15,
                  margin: 12,
                },
              }}
              color="primary"
              style={{ margin: 10 }}
              onChange={(e) => setInvoiceCurrency(e.target.value)}
            />

            <TextField
              required
              id="outlined"
              placeholder=" Customer Payment Terms"
              inputProps={{
                style: {
                  fontFamily: "Arial",
                  backgroundColor: "white",
                  padding: 15,
                  margin: 12,
                },
              }}
              style={{ margin: 10 }}
              onChange={(e) => setCustPaymentTerms(e.target.value)}
            />
          </Box>
        </Grid>
        <Grid container style={{ background: "#2A3E4C" }}>
          <Button
            onClick={editInvoice}
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
      </div>
    </Dialog>
  );
};

export default EditInvoice;
