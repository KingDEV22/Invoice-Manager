import React from "react";
import { Checkbox } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
const TableData = (props) => {
  const tableHeader = {
    sl_no: "Sl no",
    business_code: "Business Code",
    cust_number: "Customer Number",
    clear_date: "Clear Date",
    buisness_year: "Buisness Year",
    doc_id: "Doc ID",
    posting_date: "Posting Date",
    document_create_date: "Document Create Date",
    due_in_date: "Due In Date",
    invoice_currency: "Invoice Currency",
    document_type: "Document Type",
    posting_id: "Posting ID",
    total_open_amount: "Total Open Amount",
    baseline_create_date: "Baseline Create Date",
    cust_payment_terms: "Customer Payment Terms",
    invoice_id: "Invoice ID",
    aging_bucket: "Aging Bucket",
  };
  const [checked, setchecked] = useState(false);

  const label = {
    inputProps: { "aria-label": "Checkbox demo" },
  };
  const handlecheck = (e) => {
    props.setAllChecked(e);
    // setDataLength(props.rowCount);
    setchecked(checked === true ? false : true);
  };
  const DisplayData = props.currentData.map((info) => {
    return (
      <TableRow key={info.doc_id}>
        <Checkbox
          {...label}
          sx={{ color: "white", padding: 3 }}
          value={info.doc_id}
          color="default"
          onChange={props.setCheckedValue}
        />
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.sl_no}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.business_code}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.cust_number}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.clear_date != null ? info.clear_date : "N/A"}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.business_year.substr(0, 4)}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.doc_id}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.posting_date}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.document_create_date}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.due_in_date}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.invoice_currency}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.document_type}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.posting_id}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.total_open_amount}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.baseline_create_date}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.cust_payment_terms}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.invoice_id}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.aging_bucket}
        </TableCell>
      </TableRow>
    );
  });
  const displayTitle = Object.keys(tableHeader).map((item) => {
    return (
      <TableCell
        key={item}
        align="center"
        style={{
          color: "white",
          fontWeight: "bold",
        }}
        onClick={() => props.handleSort(item)}
      >
        {tableHeader[`${item}`]}
      </TableCell>
    );
  });

  return (
    <TableContainer
      style={{
        height: window.innerHeight - 230,
        width: window.innerWidth - 20,
        overflow: "scroll",
      }}
    >
      <Table className="table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox
                {...label}
                sx={{ color: "white" }}
                // id="outlined"
                // value={info.sl_no}
                color="default"
                onClick={handlecheck}
                disableRipple={true}
              />
            </TableCell>
            {displayTitle}
          </TableRow>
        </TableHead>
        <TableBody>{DisplayData}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
