import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewUser = () => {
  const [user, setUser] = useState({
    name: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(
      `http://localhost:8082/defect-tracker/api/v1/module/${id}`
    );
    console.log({ result });
    setUser(result.data.result.module);
  };

  return (
    <div>
      <div>
        <div>
          Deteils of User id:{user.id}
          <ul>
            <li>
              <b>Name:</b>
              {user.name}
            </li>
          </ul>
        </div>
      </div>
      <button>
        <Link to="/dashboard/return">Back to Home</Link>
      </button>
    </div>
  );
};

export default ViewUser;
