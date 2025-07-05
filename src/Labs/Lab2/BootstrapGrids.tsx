import { Row, Col } from 'react-bootstrap';

export default function BootstrapGrids() {
  return (
    <>
    <div>
      <h2>Bootstrap</h2>
      <div id="wd-bs-grid-system">
        <h2>Grid system</h2>

        <Row>
          <Col className="bg-danger text-white">Left half</Col>
          <Col className="bg-primary text-white">Right half</Col>
        </Row>

        <Row>
          <Col xs={4} className="bg-warning">One third</Col>
          <Col xs={8} className="bg-success text-white">Two thirds</Col>
        </Row>

        <Row>
          <Col xs={2} className="bg-black text-white">Sidebar</Col>
          <Col xs={8} className="bg-secondary text-white">Main content</Col>
          <Col xs={2} className="bg-info text-white">Sidebar</Col>
        </Row>

      </div>
    </div>


    <div id="wd-bs-responsive-grids">
        <h2>Responsive grid system</h2>
        <Row>
            <Col xs={12} md={6} xl={3}
                className="bg-warning">
                <h3>Column A</h3>
            </Col>
            <Col xs={12} md={6} xl={3}
                className="bg-primary text-white">
                <h3>Column B</h3>
            </Col>
            <Col xs={12} md={6} xl={3}
                className="bg-danger text-white">
                <h3>Column C</h3>
            </Col>
            <Col xs={12} md={6} xl={3}
                className="bg-success text-white">
                <h3>Column D</h3>
            </Col>
        </Row>
    </div>

    <div id="wd-bs-responsive-dramatic">
  <h2>Responsive grid system</h2>
  <Row>
    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} className="bg-warning">
      <h4>1</h4>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} className="bg-primary text-white">
      <h4>2</h4>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} className="bg-danger text-white">
      <h4>3</h4>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} className="bg-success text-white">
      <h4>4</h4>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} className="bg-warning">
      <h4>5</h4>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} className="bg-primary text-white">
      <h4>6</h4>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} className="bg-danger text-white">
      <h4>7</h4>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} className="bg-success text-white">
      <h4>8</h4>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} className="bg-warning">
      <h4>9</h4>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} className="bg-primary text-white">
      <h4>10</h4>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} className="bg-danger text-white">
      <h4>11</h4>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} className="bg-success text-white">
      <h4>12</h4>
    </Col>
  </Row>
</div>

    </>
  );
}