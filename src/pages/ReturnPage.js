import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// @mui
import { Grid, Button, Container, Stack, Typography } from "@mui/material";
// components

import Iconify from "../components/iconify";
import {
  BlogPostCard,
  BlogPostsSort,
  BlogPostsSearch,
} from "../sections/@dashboard/blog";
// mock
import POSTS from "../_mock/blog";

// ----------------------------------------------------------------------

// const SORT_OPTIONS = [
//   { value: "latest", label: "Latest" },
//   { value: "popular", label: "Popular" },
//   { value: "oldest", label: "Oldest" },
// ];

// ----------------------------------------------------------------------

export default function ReturnPage() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get(
        "http://localhost:8082/defect-tracker/api/v1/module"
      );
      console.log(result.data.result.modules);
      setUsers(result.data.result.modules);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  const deleteUsers = async (id) => {
    await axios.delete(
      `http://localhost:8082/defect-tracker/api/v1/module/${id}`
    );
    loadUsers();
  };

  return (
    <>
      <h1>Return Page</h1>
      <button>
        <Link to="/dashboard/adduser">Add User</Link>
      </button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <button>
                  <Link to={`/dashboard/viewuser/${user.id}`}>View</Link>
                </button>
                <button>
                  <Link to={`/dashboard/edituser/${user.id}`}>Edit</Link>
                </button>
                <button onClick={() => deleteUsers(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
    //     <Helmet>
    //       <title> Dashboard: Blog | Minimal UI </title>
    //     </Helmet>
    //     <Container>
    //       <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
    //         <Typography variant="h4" gutterBottom>
    //           Blog
    //         </Typography>
    //         <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
    //           New Post
    //         </Button>
    //       </Stack>
    //       <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
    //         <BlogPostsSearch posts={POSTS} />
    //         <BlogPostsSort options={SORT_OPTIONS} />
    //       </Stack>
    //       <Grid container spacing={3}>
    //         {POSTS.map((post, index) => (
    //           <BlogPostCard key={post.id} post={post} index={index} />
    //         ))}
    //       </Grid>
    //     </Container>
  );
}
