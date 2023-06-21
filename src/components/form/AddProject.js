import { Style } from "@mui/icons-material";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddProject = () => {
  const navigate = useNavigate();
  //   const [project, setProject] = useState({ name: "" });

  const onSubmit = async (e) => {
    // e.preventDefault();
    // await axios.post(
    //   "http://localhost:8082/defect-tracker/api/v1/module",
    //   user
    // );
    navigate("/dashboard/categories");
  };
  return (
    <div>
      {/* <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      > */}
      <Box>
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          style={{ fontFamily: "Times New Roman" }}
        >
          Add new Project
        </Typography>
        <Typography
          id="modal-modal-description"
          variant="h8"
          style={{ fontFamily: "Times New Roman" }}
        >
          Create new Project
        </Typography>
        <form onSubmit={(e) => onSubmit(e)}>
          <div>
            {/* <Box sx={{ mt: 2, mb: 2 }}>
              <TextField label="Project ID" fullWidth required />
            </Box> */}
            <Box sx={{ mt: 2, mb: 2 }}>
              <TextField label="Project Name" fullWidth required />
            </Box>
            <Box sx={{ mt: 2, mb: 2 }}>
              <TextField label="Project Code" fullWidth required />
            </Box>
            <Box sx={{ mt: 2, mb: 2 }}>
              <TextField label="Project Description" fullWidth />
            </Box>
          </div>
          <div>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>{" "}
            <Button variant="contained" color="primary">
              <Link to="/dashboard/categories">Cancel</Link>
            </Button>
          </div>
        </form>
      </Box>
    </div>
  );
};

export default AddProject;
