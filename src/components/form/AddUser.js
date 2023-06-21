import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "" });
  const { name } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "http://localhost:8082/defect-tracker/api/v1/module",
      user
    );
    navigate("/dashboard/return");
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <label htmlFor="Name">
            Name
            <input
              type={"text"}
              placeholder="Enter the Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
        <button>
          <Link to="/dashboard/return">Cancel</Link>
        </button>
      </form>
    </div>
  );
};

export default AddUser;
