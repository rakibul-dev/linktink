import { Col, Row, Flex, Card, Typography, Input, Modal, Button } from "antd";
import { useState } from "react";
import { BarChartOutlined, LinkOutlined } from "@ant-design/icons";
const { Title, Paragraph } = Typography;
const ProjectListing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Flex vertical gap={50}>
        <Card style={{ width: "100%", height: "100px" }}>
          <Flex justify="space-between" align="center">
            <Title level={1} style={{ margin: 0, padding: 0 }}>
              My Projects
            </Title>
            <Button type="primary" onClick={showModal}>
              CREATE PROJECT
            </Button>
          </Flex>
          <Col md={8}></Col>
          <Col
            md={8}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Flex justify="center" align="center">
              {" "}
            </Flex>
          </Col>
        </Card>
        <Row
          justify="start"
          align="center"
          gutter={[15, 15]}
          style={{ width: "100%" }}
        >
          <Col md={7}>
            <Card style={{ width: "100%", height: "100px" }}>
              <Flex>
                <Title level={4} style={{ margin: 0 }}>
                  Youtube
                </Title>
              </Flex>
              <Flex gap={8}>
                <Flex align="center" gap={4}>
                  <BarChartOutlined />
                  <Paragraph style={{ margin: 0 }}>230 clicks</Paragraph>
                </Flex>
                <Flex align="center" gap={4}>
                  <LinkOutlined />
                  <Paragraph style={{ margin: 0 }}>230 clicks</Paragraph>
                </Flex>
              </Flex>
            </Card>
          </Col>
          <Col md={7}>
            <Card style={{ width: "100%", height: "100px" }}>
              <Flex>
                <Title level={4} style={{ margin: 0 }}>
                  Youtube
                </Title>
              </Flex>
              <Flex gap={8}>
                <Flex align="center" gap={4}>
                  <BarChartOutlined />
                  <Paragraph style={{ margin: 0 }}>230 clicks</Paragraph>
                </Flex>
                <Flex align="center" gap={4}>
                  <LinkOutlined />
                  <Paragraph style={{ margin: 0 }}>230 clicks</Paragraph>
                </Flex>
              </Flex>
            </Card>
          </Col>{" "}
          <Col md={7}>
            <Card style={{ width: "100%", height: "100px" }}>
              <Flex>
                <Title level={4} style={{ margin: 0 }}>
                  Youtube
                </Title>
              </Flex>
              <Flex gap={8}>
                <Flex align="center" gap={4}>
                  <BarChartOutlined />
                  <Paragraph style={{ margin: 0 }}>230 clicks</Paragraph>
                </Flex>
                <Flex align="center" gap={4}>
                  <LinkOutlined />
                  <Paragraph style={{ margin: 0 }}>230 clicks</Paragraph>
                </Flex>
              </Flex>
            </Card>
          </Col>{" "}
          <Col md={7}>
            <Card style={{ width: "100%", height: "100px" }}>
              <Flex>
                <Title level={4} style={{ margin: 0 }}>
                  Youtube
                </Title>
              </Flex>
              <Flex gap={8}>
                <Flex align="center" gap={4}>
                  <BarChartOutlined />
                  <Paragraph style={{ margin: 0 }}>230 clicks</Paragraph>
                </Flex>
                <Flex align="center" gap={4}>
                  <LinkOutlined />
                  <Paragraph style={{ margin: 0 }}>230 clicks</Paragraph>
                </Flex>
              </Flex>
            </Card>
          </Col>
        </Row>
      </Flex>

      <Modal
        title="Create a new project"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            {/* <CancelBtn /> */}
            <Button type="primary" onClick={handleOk}>
              Create project
            </Button>
          </>
        )}
      >
        {/* Create a new project input field */}
        <Input placeholder="Project name" />
        {/* Create a new project  button */}
      </Modal>
    </div>
  );
};

export default ProjectListing;
