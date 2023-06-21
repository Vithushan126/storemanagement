import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({ name: "" });
  const { name } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:8082/defect-tracker/api/v1/module/${id}`,
      user
    );
    navigate("/dashboard/return");
  };

  const loadUser = async () => {
    const result = await axios.get(
      `http://localhost:8082/defect-tracker/api/v1/module/${id}`
    );
    // console.log(result.data.result.modules);

    setUser(result.data);
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

export default EditUser;
