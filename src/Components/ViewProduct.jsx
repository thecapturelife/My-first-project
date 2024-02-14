import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Container,
} from "react-bootstrap";
import { UserLogin } from "../App";
import Navigationbar from "./user/Navigationbar";
import { toast } from "react-toastify";
const ViewProduct = () => {
  const navigate = useNavigate();
  const { login,  product,cart, setCart } = useContext(UserLogin);
  const { id } = useParams();
  const filteredProduct = product.find((item) => item.Id === parseInt(id));
  
  const AddCart = () => {
    if (login) {
      let cartItem = login.cart.find((item)=>item.Id==filteredProduct.Id)
      if (!cartItem){
          login.cart.push(filteredProduct)
          setCart(!cart)
      }
      
    } else {
      toast.warning("Please Login");
      navigate("/login");
    }
  };
  console.warn(login);
  return (
    <div style={{ background: "rgb(230, 230, 219)" }}>
      <Navigationbar />

      <Container className="d-flex justify-content-center align-items-center mt-5">
      
          <div key={filteredProduct.Id} style={{ alignItems: "center" }}>
            <Card
              className="shadow p-1 m-2 bg-body-tertiary rounded"
              style={{
                width: "18rem",
                height: "28rem",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardBody>
                <CardImg
                  style={{ height: "15rem" }}
                  className="p-2"
                  variant="top"
                  src={filteredProduct.Image}
                />
                <br />
                <CardTitle style={{ textAlign: "center" }}>
                  {filteredProduct.ProductName}
                </CardTitle>
                <h6 style={{ textAlign: "center" }}>
                  Price : <del>{filteredProduct.OldPrice}</del>
                </h6>
                <h6 style={{ textAlign: "center" }}>
                  Offer Price : {filteredProduct.Price}
                </h6>
                <p style={{ textAlign: "center" }}>Animal : {filteredProduct.Animal}</p>
              </CardBody>
              <div>
                {login&&login.cart.find((cartItem) => cartItem.Id === filteredProduct.Id) ? (
                  <Button
                    variant="outline-dark"
                    onClick={() => navigate("/cart")}
                  >
                    Go To Cart
                  </Button>
                ) : (
                  <Button variant="outline-dark" onClick={AddCart}>
                    Add To Cart
                  </Button>
                )}
              </div>
            </Card>
          </div>
    
      </Container>
    </div>
  );
};

export default ViewProduct;