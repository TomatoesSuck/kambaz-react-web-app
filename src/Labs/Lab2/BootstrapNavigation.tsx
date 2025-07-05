import React from "react";
import { Nav, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BootstrapNavigation() {
  return (
    <div>
      {/* Tabs */}
      <div id="wd-css-navigating-with-tabs">
        <h2>Tabs</h2>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link href="#/Labs/Lab2/Active">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#/Labs/Lab2/Link1">Link 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#/Labs/Lab2/Link2">Link 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#/Labs/Lab2/Disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      {/* Pills */}
      <div id="wd-css-navigating-with-pills" style={{ marginTop: "20px" }}>
        <h2>Pills</h2>
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link to="/Labs" as={Link}>Labs</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/Labs/Lab1" as={Link}>Lab 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/Labs/Lab2" as={Link} active>Lab 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/Labs/Lab3" as={Link}>Lab 3</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/Kambaz" as={Link}>Kambaz</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://github.com/TomatoesSuck">My GitHub</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      {/* Card */}
      <div id="wd-css-navigating-with-cards" style={{ marginTop: "20px" }}>
        <h2>Cards</h2>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="images/stacked.jpg" />
          <Card.Body>
            <Card.Title>Stacking Starship</Card.Title>
            <Card.Text>
              Stacking the most powerful rocket in history. Mars or bust!
            </Card.Text>
            <Button variant="primary">Boldly Go</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}