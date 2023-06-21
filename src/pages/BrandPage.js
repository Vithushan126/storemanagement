import * as React from "react";
import { useState } from "react";
import { DataGrid, GridDeleteIcon } from "@mui/x-data-grid";
import { Edit, Edit as EditIcon } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import Iconify from "../components/iconify";
import Popup from "../components/popup/Popup";
import Form from "../components/form/Form";
import BrandForm from "../components/form/BrandForm";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  // { field: "image", headerName: "Image", width: 70 },
  { field: "firstName", headerName: "First Name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "button",
    headerName: "Action",
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
        &nbsp;
        <Button
          variant="contained"
          color="error"
          size="small"
          startIcon={<GridDeleteIcon />}
          // onClick={() => handleDelete(params.row.id)}
        >
          Delete
        </Button>
      </>
    ),
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon" },
  { id: 2, lastName: "Lannister", firstName: "Cersei" },
  { id: 3, lastName: "Lannister", firstName: "Jaime" },
  { id: 4, lastName: "Stark", firstName: "Arya" },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys" },
  { id: 6, lastName: "Melisandre", firstName: null },
  { id: 7, lastName: "Clifford", firstName: "Ferrara" },
  { id: 8, lastName: "Frances", firstName: "Rossini" },
  { id: 9, lastName: "Roxie", firstName: "Harvey" },
];
const handleDelete = (id) => {
  // Handle brand deletion logic here
  console.log(`Deleting brand with ID ${id}`);
};

const BrandPage = () => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" gutterBottom>
          Brand List
        </Typography>
        <Button
          variant="contained"
          onClick={() => setOpenPopup(true)}
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          Add Brand
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
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <BrandForm />
      </Popup>
    </div>
  );
};

export default BrandPage;
