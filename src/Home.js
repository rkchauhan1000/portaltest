import React, { useState, useMemo, useEffect } from "react";
import "./Home.css";
import Calendar from "react-calendar";
import { Chart } from "react-charts";
import { forwardRef } from "react";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { Bar, Line, Pie } from "react-chartjs-2";
import Axios from "axios";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
function Home() {
  const [userName, setUserName] = useState("Ritik");
  const [newDate, setNewDate] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    let date = new Date();
    setNewDate(date);
    // const userEmailId = localStorage.getItem("user");
    let userEmailId = "test@mdchoraria.com";

    Axios.get(
      `https://script.google.com/macros/s/AKfycbyF7jz_3GfXTTFaCk5cSyBDr8VsrUjvt7ZH89r05BaOfKTBV07Y/exec?action=rechargeReport&emailId=${userEmailId}`
    ).then((res) => {
      console.log(res.data.records);
      setData(res.data.records);
    });

    Axios.get(
      `https://script.google.com/macros/s/AKfycby23Ft8dAYxTsgmb2IPGtuVW7NhOrwtOqHxrPpEZ--O0_BO6A0/exec?action=itrReport&client=${userEmailId}`
    ).then((res) => {
      console.log(res);
    });
  }, []);
  const onChange = (date) => {
    setNewDate(date);
    console.log(date);
  };
  const handleClick = (value) => {
    console.log(value);
  };

  // const columns = [
  //   { header: "Date", type: "date" },
  //   { header: "Recharge Amount", type: "number" },
  //   { header: "Mode", type: "text" },
  //   { header: "Status", type: "text" },
  // ];

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  return (
    <>
      <div className="container" style={{ paddingTop: "10px" }}>
        <div className="row">
          <div className="col s8">
            <h5>Welcome {userName}, to TdsBachao Dashboard</h5>

            {data && (
              <MaterialTable
                icons={tableIcons}
                // columns={columns}
                data={data}
                title="Recharge Reports"
              />
            )}

            {/* <Bar
              // data={}
              width={100}
              height={50}
              options={{ maintainAspectRatio: false }}
            /> */}
            {/* <div
              className="ag-theme-alpine"
              style={{ height: "250px", width: "600px" }}
            >
              {data && <AgGridReact rowData={data} />}
            </div> */}
          </div>
          <div className="col s4">
            <Calendar
              onChange={onChange}
              value={newDate && newDate}
              // maxDate={newDate && newDate}
              // onClick={(value) => handleClick(value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
