import React from "react";
import { Card, Typography, Row, Col, Flex, Button } from "antd";
const { Paragraph } = Typography;
import {
  CopyOutlined,
  CheckCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const ShortLinkCard = () => {
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Row gutter={[20, 20]} align="middle" justify="space-between">
          <Col md={4}>
            <img
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "100%",
              }}
            />
          </Col>
          <Col md={16}>
            <Flex vertical>
              <Flex gap="small">
                <Paragraph
                  copyable={{
                    icon: [
                      <CopyOutlined
                        key="copy-icon"
                        style={{ color: "black" }}
                      />,
                      <CheckCircleOutlined key="copied-icon" />,
                    ],
                    tooltips: ["click to copy", "you coppied!!"],
                  }}
                  style={{ margin: "0px", padding: "0px" }}
                >
                  https://linktink.com/345sdf34
                </Paragraph>

                <div
                  style={{
                    height: "20px",
                    width: "30%",
                    border: "1px solid black",
                  }}
                >
                  100 clicks
                </div>
              </Flex>
              <Paragraph style={{ margin: "0px", padding: "0px" }}>
                https://youtube.com
              </Paragraph>
            </Flex>
          </Col>
          <Col md={3}>
            <Flex justify="center">
              <Button type="primary" icon={<SettingOutlined />} size="small" />
            </Flex>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ShortLinkCard;
