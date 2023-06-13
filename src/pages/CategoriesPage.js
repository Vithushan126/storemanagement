import * as React from "react";
// import Iconify from "src/components/iconify/Iconify";
import { Button, Container, Stack, Typography } from "@mui/material";
import { DataGrid, GridDeleteIcon } from "@mui/x-data-grid";
import { Edit, Edit as EditIcon } from "@mui/icons-material";

import { useState } from "react";
import Popup from "../components/popup/Popup";
import Form from "../components/form/Form";

// import Scrollbar from "../components/scrollbar";
// import Iconify from "src/components/iconify/Iconify";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
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
  {
    field: "actions",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => (
      <>
        <Button
          gap="1rem"
          variant="contained"
          color="primary"
          size="small"
          startIcon={<EditIcon />}
          // onClick={() => handleEdit(params.row.id)}
        >
          Edit
        </Button>

        <Button
          variant="contained"
          color="secondary"
          size="small"
          startIcon={<GridDeleteIcon />}
          // onClick={() => handleDelete(params.row.id)}
        >
          Delete
        </Button>
      </>
    ),
  },
  // {
  //   field: "actions1",
  //   headerName: "Actions",
  //   width: 120,
  //   renderCell: (params) => (
  //     <Button
  //       variant="contained"
  //       color="secondary"
  //       size="small"
  //       startIcon={<GridDeleteIcon />}
  //       // onClick={() => handleDelete(params.row.id)}
  //     >
  //       Delete
  //     </Button>
  //   ),
  // },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const CategoriesPage = () => {
  const handleEdit = (id) => {
    // Handle the edit action for a specific row
    console.log(`Edit action for row with ID: ${id}`);
  };

  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Categories Page
          </Typography>
          <Button
            variant="contained"
            onClick={() => setOpenPopup(true)}
            // startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New Categorie
          </Button>
        </Stack>

        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </Container>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <Form />
      </Popup>
    </div>
  );
};

export default CategoriesPage;
