import React, { useEffect, useState } from "react";
import "../styles/tool.css";
import { Button } from "@mui/material";
import AddInvoice from "./add";
import EditInvoice from "./edit";
import DeleteInvoice from "./delete";
import AdvancedSearch from "./advancedSearch";
import axios from "axios";
import ReplayIcon from "@mui/icons-material/Replay";
import Analytics from "./analytics";

const Tools = (props) => {
  const alterInvoiceLength = props.alterInvoice.length;
  const [openAddInvoice, setOpenAddInvoice] = useState(false);
  const [openEditInvoice, setOpenEditInvoice] = useState(false);
  const [openDeleteInvoice, setOpenDeleteInvoice] = useState(false);
  const [openAdvancedSearch, setOpenAdvancedSearch] = useState(false);
  const [openAnalytics, setOpenAnalytics] = useState(false);
  const [searchQuery, setSearchResult] = useState("");
  const handleAddInvoice = () => {
    setOpenAddInvoice(true);
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:8080/invoice?keyword=${searchQuery}`
  //       );
  //       props.searchChange(response.data, searchQuery);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   if (searchQuery !== "") {
  //     fetchData();
  //   }
  // }, [searchQuery]);

  const handleEditInvoice = () => {
    if (props.alterInvoice.length === 1) {
      setOpenEditInvoice(true);
    }
  };
  const handleAnalyticsView = () => {
    setOpenAnalytics(true);
  };
  const handleDeleteInvoice = () => {
    setOpenDeleteInvoice(true);
  };
  const handleAdvanceSearch = () => {
    setOpenAdvancedSearch(true);
  };
  const searchResult = (data) => {
    props.searchChange(data, "search");
  };
  return (
    <div className="tools">
      <div style={{ paddingRight: "20px", paddingTop: "10px" }}>
        <Button
          variant="contained"
          style={{ color: "white", margin: 15, padding: 10 }}
          onClick={props.predict}
        >
          {" "}
          Predict
        </Button>
        <Button
          variant="contained"
          onClick={handleAnalyticsView}
          style={{ color: "white", margin: 15, padding: 10 }}
        >
          {" "}
          Analytics View
        </Button>
        <Analytics open={openAnalytics} setOpen={setOpenAnalytics} />
        <Button
          onClick={handleAdvanceSearch}
          variant="contained"
          style={{ color: "white", margin: 15, padding: 10 }}
        >
          Advanced Search
        </Button>
        <AdvancedSearch
          open={openAdvancedSearch}
          setOpen={setOpenAdvancedSearch}
          searchChange={searchResult}
        />
        <Button
          variant="outlined"
          style={{ padding: 10, margin: 10 }}
          onClick={() => {
            window.location.reload(false);
          }}
        >
          <ReplayIcon color="info" />
        </Button>
      </div>
      <input
        type="text"
        placeholder="Search Customer ID"
        className="search"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            props.searchChange(e.currentTarget.value);
          }
        }}
        // onChange={handleSearchResult}
      />
      <div style={{ paddingRight: "20px", paddingTop: "10px" }}>
        <Button
          onClick={handleAddInvoice}
          variant="contained"
          style={{ color: "white", margin: 10, padding: 10 }}
        >
          {" "}
          Add
        </Button>
        <AddInvoice
          open={openAddInvoice}
          setOpen={setOpenAddInvoice}
          // setDataPageCount={setDataPageCount}
          // setData={setData}
          style={{ color: "white", margin: 10, padding: 10 }}
        />
        <Button
          onClick={handleEditInvoice}
          variant="contained"
          disabled={alterInvoiceLength === 1 ? false : true}
          style={{ color: "white", margin: 10, padding: 10 }}
        >
          Edit
        </Button>
        <EditInvoice
          open={openEditInvoice}
          setOpen={setOpenEditInvoice}
          editInvoiceNo={props.alterInvoice}
        />
        <Button
          onClick={handleDeleteInvoice}
          variant="contained"
          disabled={alterInvoiceLength === 0}
          style={{ color: "white", margin: 15, padding: 10 }}
        >
          Delete
        </Button>
        <DeleteInvoice
          open={openDeleteInvoice}
          setOpen={setOpenDeleteInvoice}
          alterInvoice={props.alterInvoice}
        />
      </div>
    </div>
  );
};

export default Tools;
