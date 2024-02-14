import React, { useContext } from "react";
import "../Navigation.css";
import { useNavigate } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
import { UserLogin } from "../../App";
import { toast } from "react-toastify";
import { NavDropdown, Navbar, Container, Nav } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";
import { BiSolidLogInCircle , BiSolidLogOutCircle } from "react-icons/bi";
import { MdAdminPanelSettings } from "react-icons/md";




const Navigationbar = () => {
  const navigate = useNavigate();
  const { login, setLogin, setCart } = useContext(UserLogin);

  const Logout = () => {
    if (login) {
      setLogin(false);
      setCart([]);
      toast.success("Logout Success");
    } else {
      navigate("/login");
    }
  };

  return (
    <Navbar expand="lg" className="nav" sticky="top" bg="light" variant="light"> {/* Added bg and variant for color */}
      <Container fluid className="nav-bar">
        <Navbar.Brand>
          <h1
            title="Home"
            style={{
              cursor: "pointer",
              fontSize: "2rem",
              textAlign: "center",
              margin: "0",
              padding: "1rem",
              color: "#BB0D3A", 
              fontFamily: "monospace",
            }}
            className="nav-title"
            onClick={() => navigate("/")}
          >
            SnuggleSupplyCo
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-links">
            <Nav.Link className="underline-collection" onClick={() => navigate("/collection")}>
              Collection
            </Nav.Link>
            <Nav.Link className="underline-cat" onClick={() => navigate("/cat")}>
              Cat
            </Nav.Link>
              <Nav.Link className="underline-dog" onClick={() => navigate("/dog")}>
                Dog
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="icons" style={{ justifyContent: "end" }}>
          <Nav style={{ gap: "0.6rem", alignItems: "center" }}>
            <div
              onClick={login?() => navigate("/cart"):()=> navigate('/login')}
              style={{ fontSize: "27px" }}
              title="Cart"
            >
              <BsCart4 />
            </div>
            {login ? (
              <NavDropdown
                style={{ fontSize: "27px" }}
                title={<BiSolidLogOutCircle 
                onClick={Logout} />}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">{login && login.name}</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link
                onClick={() => navigate("/login")}
                style={{ fontSize: "27px" }}
                title="login"
              >
                <BiSolidLogInCircle />

              </Nav.Link>
            )}
            <Nav.Link
              style={{ fontSize: "27px" }}
              onClick={() => navigate("/adminlogin")}
              title="Admin"
            >
            <MdAdminPanelSettings />

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
