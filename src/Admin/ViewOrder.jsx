import React, { useContext } from "react";
import SideBar from "./SideBar";
import { UserLogin } from "../App";
import { Container, Table } from "react-bootstrap";

const ViewOrder = () => {
  const { buy } = useContext(UserLogin);
  // console.log(buy);

  return (
    <div className="d-flex">
      <SideBar />
      <Container fluid className="mt-3" style={{ overflow: "scroll", minHeight: "90vh" }}>
        <div className="w-100 text-center">
          <h1>Order List</h1>
          <br />
          <hr />
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Qty</th>
              </tr>
            </thead>
            <tbody>
              {buy.map((item) => (
                <tr>
                  <td>{item.ProductName}</td>
                  <td>{item.Price}</td>
                  <td>{item.Qty}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default ViewOrder;
