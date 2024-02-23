import {
  Col,
  Row,
  Flex,
  Card,
  Segmented,
  Tabs,
  Typography,
  Button,
} from "antd";
import { BarChartOutlined, LinkOutlined } from "@ant-design/icons";
const { Title, Paragraph } = Typography;
const ProjectListing = () => {
  return (
    <div>
      <Flex vertical gap={50}>
        <Card style={{ width: "100%", height: "100px" }}>
          <Flex justify="space-between" align="center">
            <Title level={1} style={{ margin: 0, padding: 0 }}>
              My Projects
            </Title>
            <Button type="primary">CREATE PROJECT</Button>
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
    </div>
  );
};

export default ProjectListing;
