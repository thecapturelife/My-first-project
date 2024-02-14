 
import React, { useContext } from "react";
import SideBar from "./SideBar";
import { Button, Container, Table } from "react-bootstrap";
import { UserLogin } from "../App";
import { useNavigate } from "react-router-dom";


const AdminProducts = () => {
  const { product, setProduct } = useContext(UserLogin);
  const navigate = useNavigate();

  const removeProduct = (id) => {
    const newUpdate = product.filter((item) => item.Id !== id);
    setProduct(newUpdate);
  };

  return (
    <div style={{ display: "flex" }}>
      <SideBar />

      <Container fluid className="mt-3" style={{ overflow: "scroll", height: "90vh", backgroundColor: "#c8e6c9" }}>
        <h1 className="mb-4" style={{ textAlign: "center" }}>
          All products
        </h1>
        <hr />
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actual Price</th>
              <th>Animal</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item) => (
              <tr key={item.Id}>
                <td>{item.Id}</td>
                <td style={{ textAlign: "center" }}>
                  <img style={{ height: "2rem" }} src={item.Image} alt={item.ProductName} />
                </td>
                <td>{item.ProductName}</td>
                <td>{item.OldPrice}</td>
                <td>{item.Price}</td>
                <td>{item.Animal}</td>
                <td>{item.Stock}</td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    style={{ backgroundColor: "#ff9900", borderColor: "#ff9900", marginRight: "10px" }}
                    onClick={() => navigate(`/editproduct/${item.Id}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    style={{ backgroundColor: "#cc0000", borderColor: "#cc0000" }}
                    onClick={() => removeProduct(item.Id)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default AdminProducts;

