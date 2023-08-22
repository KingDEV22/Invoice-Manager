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
    slNo: "Sl no",
    businessCode: "Business Code",
    custNumber: "Customer Number",
    clearDate: "Clear Date",
    buisnessYear: "Buisness Year",
    docId: "Doc ID",
    postingDate: "Posting Date",
    documentCreateDate: "Document Create Date",
    dueInDate: "Due In Date",
    invoiceCurrency: "Invoice Currency",
    documentType: "Document Type",
    postingId: "Posting ID",
    totalOpenAmount: "Total Open Amount",
    baselineCreateDate: "Baseline Create Date",
    custPaymentTerms: "Customer Payment Terms",
    invoiceId: "Invoice ID",
    agingBucket: "Aging Bucket",
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
      <TableRow key={info.slNo}>
        <TableCell>
          <Checkbox
            {...label}
            sx={{ color: "white", padding: 3 }}
            value={info.docId}
            color="default"
            onChange={props.setCheckedValue}
          />
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.slNo}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.businessCode}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.custNumber}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.clearDate != null ? info.clearDate : "N/A"}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.buisnessYear}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.docId}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.postingDate}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.documentCreateDate}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.dueInDate}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.invoiceCurrency}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.documentType}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.postingId}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.totalOpenAmount}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.baselineCreateDate}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.custPaymentTerms}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.invoiceId}
        </TableCell>
        <TableCell
          align="center"
          style={{ color: "white", fontFamily: "Fira Sans" }}
        >
          {info.agingBucket}
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
        // height: window.innerHeight - 230,
        // width: window.innerWidth - 20,
        overflow: "scroll",
      }}
    >
      <Table className="table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <Checkbox
                {...label}
                sx={{ color: "white" }}
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
