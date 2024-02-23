import { Col, Row, Flex, Button } from "antd";

const Header = () => {
  return (
    <div
      style={{
        height: "60px",
        width: "100%",
        borderBottom: "1px solid #d9d9d9",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Row justify="space-evenly" align="center">
        <Col xs={4} md={4}>
          Logo
        </Col>
        <Col xs={6} sm={0}>
          Hamburger menu
        </Col>

        <Col xs={0} md={12}>
          <Flex justify="flex-end" gap="large">
            <Button type="text">contact</Button>
            <Button type="primary">Login</Button>
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
