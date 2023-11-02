import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container className="w-25 mx-auto">
      <h3 className="text-center">Please Register...</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Your name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter Your Photo URL"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Your email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Check
            type="checkbox"
            name="accept"
            label="Accept terms & conditions"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-success">
          Already have an account? <Link to="/login">Login</Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
