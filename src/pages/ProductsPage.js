import { Helmet } from "react-helmet-async";
import { useState } from "react";
// @mui
import { Container, Stack, Typography } from "@mui/material";
// components
import {
  ProductSort,
  ProductList,
  ProductCartWidget,
  ProductFilterSidebar,
} from "../sections/@dashboard/products";
// mock
import PRODUCTS from "../_mock/products";

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const userData = [
    { id: 1, name: "Logesh", username: "jvlogesh" },
    { id: 2, name: "Ramesh", username: "rameshtr" },
    { id: 3, name: "Daniel", username: "danielradcliff" },
  ];

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  const [users, setUsers] = useState(userData);

  return (
    <>
      <h1>Product Page</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Actiions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
    //     <Helmet>
    //       <title> Dashboard: Products </title>
    //     </Helmet>

    //     <Container>
    //       <Typography variant="h4" sx={{ mb: 5 }}>
    //         Products
    //       </Typography>

    //       <Stack
    //         direction="row"
    //         flexWrap="wrap-reverse"
    //         alignItems="center"
    //         justifyContent="flex-end"
    //         sx={{ mb: 5 }}
    //       >
    //         <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
    //           <ProductFilterSidebar
    //             openFilter={openFilter}
    //             onOpenFilter={handleOpenFilter}
    //             onCloseFilter={handleCloseFilter}
    //           />
    //           <ProductSort />
    //         </Stack>
    //       </Stack>

    //       <ProductList products={PRODUCTS} />
    //       <ProductCartWidget />
    //     </Container>
    //   </>
  );
}
