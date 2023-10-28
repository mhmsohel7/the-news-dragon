import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Qzone from "../../Qzone/Qzone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub /> Login with Github
      </Button>

      {/* List group */}
      <div className="mt-4">
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> InstaGram
          </ListGroup.Item>
          <ListGroup.Item>
            <FaLinkedin /> LinkedIn
          </ListGroup.Item>
        </ListGroup>
      </div>

      {/* Qzone */}
      <Qzone></Qzone>

      <div className="position-relative mt-2 ">
        <div>
          <img src={bg} alt="" />
        </div>
        <div className="position-absolute top-0 p-2 mt-5 text-white">
          <div className="text-center">
            <h1>Create an Amazing Newspaper</h1>
          </div>
          <p className="mt-3  text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure iste
            sunt, sit minima qui modi nobis temporibus tenetur placeat, lorem
            ispum.
          </p>
          <div className="text-center ">
            <Button variant="danger">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
