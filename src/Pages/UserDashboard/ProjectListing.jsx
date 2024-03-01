import {
  Col,
  Row,
  Flex,
  Card,
  Typography,
  Input,
  Tooltip,
  Modal,
  Button,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  BarChartOutlined,
  LinkOutlined,
  EyeOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import {
  createProject,
  deleteProject,
  getProjects,
} from "../../Redux/slices/projectSlice";
import { useNavigate } from "react-router-dom";
const { Title, Paragraph } = Typography;
const ProjectListing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [projectname, setProjectName] = useState();
  const { projects } = useSelector((state) => state.projects);
  const { userInfo } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getProjects());
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModal, setDeleteModal] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (projectname) {
      dispatch(
        createProject({ project_name: projectname, project_by: userInfo.id })
      ).then((res) => setIsModalOpen(false));
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDeleteModalOk = (id) => {
    // console.log({ id });

    dispatch(deleteProject({ id })).then((res) => setDeleteModal(false));
  };
  const handleDeleteModalCancel = () => {
    setDeleteModal(false);
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
                <Card style={{ width: "100%", height: "100%" }}>
                  <Flex vertical gap={8}>
                    {" "}
                    <Flex>
                      <Title level={4} style={{ margin: 0, padding: 0 }}>
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
                    <Flex gap={8}>
                      <Tooltip title="View project">
                        <Button
                          size="small"
                          type="primary"
                          shape="circle"
                          icon={<EyeOutlined />}
                          onClick={() => {
                            navigate(`/user/dashboard/projects/${project.id}`);
                          }}
                        />
                      </Tooltip>{" "}
                      <Tooltip title="Delete project">
                        <Button
                          size="small"
                          type="primary"
                          shape="circle"
                          icon={<DeleteOutlined />}
                          onClick={() => {
                            setDeleteModal(true);
                          }}
                        />
                      </Tooltip>
                    </Flex>
                  </Flex>
                </Card>
                <Modal
                  title={`Delete ${project.project_name} project`}
                  open={isDeleteModal}
                  //   onOk={}
                  onCancel={handleDeleteModalCancel}
                  footer={(_, { OkBtn, CancelBtn }) => (
                    <>
                      {/* <CancelBtn /> */}
                      <Button
                        type="primary"
                        onClick={() => {
                          handleDeleteModalOk(project.id);
                        }}
                      >
                        Delete project
                      </Button>
                    </>
                  )}
                >
                  {/* Create a new project input field */}
                  <Title level={5}>
                    The project and associated all links with this project will
                    be deleted.
                  </Title>
                  {/* Create a new project  button */}
                </Modal>
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
        <Input
          placeholder="Project name"
          onChange={(e) => {
            setProjectName(e.target.value);
          }}
        />
        {/* Create a new project  button */}
      </Modal>
    </div>
  );
};

export default ProjectListing;
