import React, { Component } from "react";
//import { data } from "../data.js";
import _ from "lodash";
import PageOreintation from "./pageOreintation.jsx";
import { paginate } from "../utils/paginate";
import TableData from "./table.jsx";
import "../styles/table.css";
import axios from "axios";
import Tools from "./tools.jsx";
class Data extends Component {
  state = {
    rowCount: 5,
    currentPage: 0,
    tableHeader: {
      id: "Sl no",
      business_code: "Business Code",
      customer_number: "Customer Number",
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
      customer_payment_terms: "Customer Payment Terms",
      invoice_id: "Invoice ID",
    },
    sortColumn: {
      path: "Business Code",
      order: "asc",
    },
    data: [],
    searchQuery: "",
    checked: [],
  };

  componentDidMount() {
    const getData = () => {
      fetch(
        `http://localhost:8080/invoice/list?page=${this.state.currentPage}&pagesize=${this.state.rowCount}`
      )
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.setState({
            data: json,
          });
        });
    };
    getData();
  }
  handleCheckedValue = (e) => {
    var updatedList = [...this.state.checked];
    if (e.target.checked) {
      updatedList = [...this.state.checked, e.target.value];
      // idArray.push(sl_no);
    } else {
      updatedList.splice(this.state.checked.indexOf(e.target.value), 1);
    }
    this.setState({ checked: updatedList });
  };

  handlePageIncreamentChange = (page, currentCount) => {
    this.setState({ currentPage: page + 1, rowCount: currentCount });
  };
  handlePageDecrementChange = (page, currentCount) => {
    this.setState({ currentPage: page - 1, rowCount: currentCount });
  };
  handleValue = (e) => {
    this.setState({ rowCount: e.target.value });
  };
  handleSort = (path) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.setState({ sortColumn });
  };
  handleOnChange = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };
  render() {
    const {
      currentPage,
      rowCount,
      sortColumn,
      tableHeader,
      data,
      checked,
      searchQuery,
    } = this.state;

    const filterData =
      searchQuery === ""
        ? data
        : data.filter((item) => {
            const { cust_number, invoice_id, doc_id, business_year } = item;
            return (
              cust_number.toString().includes(searchQuery) ||
              invoice_id.toString().includes(searchQuery) ||
              doc_id.toString().includes(searchQuery) ||
              business_year.includes(searchQuery)
            );
          });
    const itemCount = filterData.length;
    const sorted = _.orderBy(filterData, [sortColumn.path], [sortColumn.order]);
    const currentData = paginate(sorted, currentPage, rowCount);
    return (
      <React.Fragment>
        <Tools searchChange={this.handleOnChange} alterInvoice={checked} />
        <TableData
          currentData={currentData}
          tableHeader={tableHeader}
          handleSort={this.handleSort}
          setCheckedValue={this.handleCheckedValue}
        />
        <PageOreintation
          rowCount={rowCount}
          itemCount={itemCount}
          currentPage={currentPage}
          onPageIncreamentChange={this.handlePageIncreamentChange}
          onPageDecreamentChange={this.handlePageDecrementChange}
          handleValue={this.handleValue}
        />
      </React.Fragment>
    );
  }
}

export default Data;
