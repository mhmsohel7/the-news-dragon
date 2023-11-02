import { Button, Container } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D YYYY")}</p>
        {/* dynamic vabe use korte hobe moment k. */}
      </div>

      {/* Marquee with latest button */}
      <div className="d-flex mb-3">
        <Button variant="danger">Latest</Button>
        <Marquee speed={50} className="text-danger">
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>

      {/* Navbar  */}
    </Container>
  );
};

export default Header;
