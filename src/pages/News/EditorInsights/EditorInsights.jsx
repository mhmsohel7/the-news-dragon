import { Card, Col, Row } from "react-bootstrap";
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";

const EditorInsights = () => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4 mt-4">
      <Col>
        <Card>
          <Card.Img variant="top" src={first} />
          <Card.Body>
            <Card.Title>First one</Card.Title>
            <Card.Text>
              The United States of America is committed to supporting the people
              of Ukraine as they continue the fight to defend their sovereignty.
              As part of that commitment, I am proud to announce our biggest
              tranche of security
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={second} />
          <Card.Body>
            <Card.Title>First one</Card.Title>
            <Card.Text>
              The United States of America is committed to supporting the people
              of Ukraine as they continue the fight to defend their sovereignty.
              As part of that commitment, I am proud to announce our biggest
              tranche of security
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={third} />
          <Card.Body>
            <Card.Title>First one</Card.Title>
            <Card.Text>
              The United States of America is committed to supporting the people
              of Ukraine as they continue the fight to defend their sovereignty.
              As part of that commitment, I am proud to announce our biggest
              tranche of security
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default EditorInsights;
