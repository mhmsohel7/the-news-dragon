import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container className="w-25 mx-auto">
      <h3 className="text-center">Please Login...</h3>
      <Form>
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
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-success">
          Dont have an account? <Link to="/register">Register</Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
