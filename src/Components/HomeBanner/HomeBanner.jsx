import React from "react";

import { EnterOutlined, LinkOutlined } from "@ant-design/icons";
import { Input, Flex, Typography, Row, Col, Button } from "antd";
import ShortLinkCard from "../ShortLinkCard/ShortLinkCard";
const { Title } = Typography;
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const HomeBanner = () => {
  const navigate = useNavigate();
  const { id } = useSelector((state) => state.user.userInfo);
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
              <Button
                type="primary"
                shape="round"
                size="large"
                onClick={() => {
                  id
                    ? navigate("/user/dashboard/projects")
                    : navigate("/login");
                }}
              >
                Start for free
              </Button>
            </Flex>
          </Col>
        </Row>
        {/* <Row justify="center" align="center">
          <Col md={10} sm={20} xs={20}>
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
              style={{ width: "100%" }}
            />
          </Col>
        </Row> */}
        {/* <Row justify="center" align="center">
          <Col md={10} xs={20}>
            <ShortLinkCard />
          </Col>
        </Row> */}
      </Flex>
    </div>
  );
};

export default HomeBanner;
