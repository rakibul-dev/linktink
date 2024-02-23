import React from "react";

import { EnterOutlined, LinkOutlined } from "@ant-design/icons";
import { Input, Flex, Typography, Row, Col, Button } from "antd";
import ShortLinkCard from "../ShortLinkCard/ShortLinkCard";
const { Title } = Typography;

const HomeBanner = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Flex vertical gap="large">
        <Row justify="center" align="center">
          <Col md={8}>
            <Flex align="center" vertical>
              <Title align="center">Empowering Short URLs with Analytics</Title>
              <Button type="primary" shape="round" size="large">
                Start for free
              </Button>
            </Flex>
          </Col>
        </Row>
        <Row justify="center" align="center">
          <Col md={10}>
            <Flex>
              <Input
                prefix={<LinkOutlined />}
                suffix={
                  <Button
                    shape="square"
                    icon={<EnterOutlined />}
                    size="small"
                    type="primary"
                  />
                }
                size="medium"
              />
            </Flex>
          </Col>
        </Row>
        <Row justify="center" align="center">
          <Col md={10}>
            <ShortLinkCard />
          </Col>
        </Row>
      </Flex>
    </div>
  );
};

export default HomeBanner;
