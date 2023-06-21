import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const columns = [
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 }];

const Form = () => {
  return (
    // <div>
    //   <div style={{ height: 400, width: "100%" }}>
    //     <DataGrid rows={rows} columns={columns} />
    //   </div>
    // </div>
    <form>
      <div>
        <label htmlFor="name">
          ID:
          <input type="number" id="name" name="id" />
        </label>
        <label htmlFor="name">
          First Name:
          <input type="text" id="name" name="firstname" />
        </label>
        <label htmlFor="name">
          Last Name:
          <input type="text" id="name" name="lastname" />
        </label>
        <label htmlFor="name">
          Age:
          <input type="number" id="name" name="age" />
        </label>
        <label htmlFor="name">
          Full Name:
          <input type="text" id="name" name="fullname" />
        </label>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
