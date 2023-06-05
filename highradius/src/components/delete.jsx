import React from "react";
import { Dialog } from "@mui/material";
import axios from "axios";
import { Grid, Button } from "@material-ui/core";
const DeleteInvoice = ({ open, setOpen, alterInvoice }) => {
  const handleClose = () => {
    setOpen(false);
  };
  const deleteInvoice = () => {
    axios
      .delete("http://localhost:8080/invoice/delete", {
        data: { alterInvoice },
      })
      .then((response) => {
        console.log(response);
        handleClose();
        window.location.reload(false);
        // setDataPageCount(0);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(alterInvoice);
  };
  return (
    <Dialog open={open} onClose={handleClose} maxWidth={"lg"}>
      <div style={{ background: "#2A3E4C", color: "white" }}>
        <h2 style={{ padding: 10, margin: 10 }}>Delete Records ?</h2>
        <p style={{ padding: 10, margin: 10 }}>
          Are you sure you want to delete these record[s] ?
        </p>
        <Grid
          container
          justifyContent="center"
          style={{ background: "#2A3E4C" }}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ padding: 10, margin: 10 }}
            size="large"
            onClick={deleteInvoice}
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

export default DeleteInvoice;
