import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProviders";
import { FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  //this "user" comes from authprovider.jsx in "authInfo"
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/category/0">Home</Link>

              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#carrer">Carrer</Nav.Link>
            </Nav>

            <Nav>
              {user && (
                <Nav.Link href="#deets">
                  <FaUserCircle style={{ fontSize: "2rem" }} />
                </Nav.Link>
              )}
              {user ? (
                <Button variant="secondary">Logout</Button>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
