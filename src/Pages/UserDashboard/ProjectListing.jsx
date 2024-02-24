import { Col, Row, Flex, Card, Typography, Input, Modal, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BarChartOutlined, LinkOutlined } from "@ant-design/icons";
import { getProjects } from "../../Redux/slices/projectSlice";
import { useNavigate } from "react-router-dom";
const { Title, Paragraph } = Typography;
const ProjectListing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projects);
  useEffect(() => {
    dispatch(getProjects());
  }, []);

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
        </Card>
        <Row
          justify="start"
          align="center"
          gutter={[15, 15]}
          style={{ width: "100%" }}
        >
          {projects && projects.length ? (
            projects.map((project) => (
              <Col md={7} key={project.id}>
                <Card
                  style={{ width: "100%", height: "100px", cursor: "pointer" }}
                  onClick={() => {
                    navigate(`/user/dashboard/projects/${project.id}`);
                  }}
                >
                  <Flex>
                    <Title level={4} style={{ margin: 0 }}>
                      {project.project_name}
                    </Title>
                  </Flex>
                  <Flex gap={8}>
                    <Flex align="center" gap={4}>
                      <LinkOutlined />
                      <Paragraph style={{ margin: 0 }}>
                        {project.shortlink_count} Links
                      </Paragraph>
                    </Flex>
                    <Flex align="center" gap={4}>
                      <BarChartOutlined />
                      <Paragraph style={{ margin: 0 }}>
                        {project.total_clicks} Clicks
                      </Paragraph>
                    </Flex>
                  </Flex>
                </Card>
              </Col>
            ))
          ) : (
            <h2>Loading</h2>
          )}
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
