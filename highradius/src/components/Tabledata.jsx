import React, { useEffect, useState } from "react";
import _ from "lodash";
import PageOreintation from "./pageOreintation.jsx";
import TableData from "./table.jsx";
import "../styles/table.css";
import axios from "axios";
import Tools from "./tools.jsx";
const Data = () => {
  const [data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState(0);
  const [rowCount, setrowCount] = useState(10);
  const [sortColumn, setsortColumn] = useState({
    path: "sl_no",
    order: "asc",
  });
  const [checked, setchecked] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query === "") {
      axios
        .get(`http://localhost:8080/Winter_Backend/data?page=${currentPage}`)
        .then((response) => {
          setData((prev) => [...prev, ...response.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [currentPage]);
  const handleCheckedValue = (e) => {
    var updatedList = [...checked];
    if (e.target.checked) {
      updatedList = [...checked, e.target.value];
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1);
    }
    console.log(updatedList);
    setchecked(updatedList);
  };
  const handleAllChecked = (event) => {
    if (event.target.checked) {
      const newSelected = currentData.map((item) => item["doc_id"].toString());
      console.log(newSelected);
      setchecked(newSelected);
    } else {
      setchecked([]);
    }
  };

  const handlepredict = () => {
    axios
      .post(`http://127.0.0.1:5000/get_prediction?doc_id=${checked}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePageIncreamentChange = (page, currentCount) => {
    setcurrentPage(page + 1);
    setrowCount(currentCount);
  };
  const handlePageDecrementChange = (page, currentCount) => {
    setcurrentPage(page - 1);
    setrowCount(currentCount);
  };
  const handleValue = (e) => {
    setrowCount(e.target.value);
  };
  const handleSort = (path) => {
    const sort = { ...sortColumn };
    if (sort.path === path) sort.order = sort.order === "asc" ? "desc" : "asc";
    else {
      sort.path = path;
      sort.order = "asc";
    }
    setsortColumn(sort);
  };
  const handleSearchChange = (searchData, query) => {
    setData(searchData);
    setQuery(query);
    setcurrentPage(0);
  };

  const paginate = (data, pageNumber, rowCount) => {
    const index = (pageNumber - 1) * rowCount;
    return _(data).slice(index).take(rowCount).value();
  };
  const itemCount = data.length;
  const sorted = _.orderBy(data, [sortColumn.path], [sortColumn.order]);
  const currentData = paginate(sorted, currentPage + 1, rowCount);

  return (
    <React.Fragment>
      <Tools
        searchChange={handleSearchChange}
        alterInvoice={checked}
        currentPage={currentPage}
        predict={handlepredict}
      />
      <TableData
        currentData={currentData}
        handleSort={handleSort}
        rowCount={rowCount}
        setCheckedValue={handleCheckedValue}
        setAllChecked={handleAllChecked}
      />
      <PageOreintation
        rowCount={rowCount}
        itemCount={itemCount}
        currentPage={currentPage}
        onPageIncreamentChange={handlePageIncreamentChange}
        onPageDecreamentChange={handlePageDecrementChange}
        handleValue={handleValue}
      />
      <div className="center">
        <a href="#">Privacy Policy</a> &#169;| 2022 Highradius Corporation. All
        rights reserved.
      </div>
    </React.Fragment>
  );
};

export default Data;
