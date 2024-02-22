import React from "react";
import { Row, Col, Typography, Flex, Button } from "antd";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;
const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Flex
        vertical
        align="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Flex vertical align="center" justify="center" gap={20}>
          <Title
            level={1}
            style={{ fontSize: "64px", fontWeight: "bold", margin: "0px" }}
          >
            Ooops!
          </Title>
          <Title
            level={1}
            style={{ fontSize: "24px", fontWeight: "bold", margin: "0px" }}
          >
            404-PAGE NOT FOUND
          </Title>
          <Button type="primary" onClick={() => navigate("/")}>
            GO TO HOMEPAGE
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default PageNotFound;
