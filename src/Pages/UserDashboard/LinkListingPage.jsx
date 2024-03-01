import {
  Col,
  Row,
  Flex,
  Card,
  Typography,
  Input,
  Modal,
  Button,
  Dropdown,
  QRCode,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  BarChartOutlined,
  ThunderboltOutlined,
  ArrowDownOutlined,
  AppstoreAddOutlined,
  SettingOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { createProject, getProjects } from "../../Redux/slices/projectSlice";

const { Title, Paragraph } = Typography;
import { SearchOutlined } from "@ant-design/icons";
import { useParams, useNavigate } from "react-router-dom";
import logo from "../../../public/images/link.png";
import {
  CopyOutlined,
  CheckCircleOutlined,
  DeleteFilled,
} from "@ant-design/icons";
import {
  createShortlink,
  getShortlinks,
  setShortlinksEmpty,
} from "../../Redux/slices/shortlinkSlice";
const LinkListingPage = () => {
  const navigate = useNavigate();
  const [destinationUrl, setDestinationUrl] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { shortlinks } = useSelector((state) => state.shortlinks);

  useEffect(() => {
    dispatch(getShortlinks(id));
    return () => dispatch(setShortlinksEmpty());
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQrCodeModalOpen, setQrCodeModal] = useState(false);
  const [qrCodeData, setQrCodeData] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (destinationUrl) {
      dispatch(
        createShortlink({ origina_url: destinationUrl, project_id: id })
      ).then((res) => setIsModalOpen(false));
    }
  };
  const handleQrCodeModal = () => {
    setQrCodeModal(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const items = [
    {
      label: (
        <Button
          type="primary"
          icon={<SettingOutlined />}
          size="small"
          onClick={() => {
            setQrCodeModal(true);
          }}
        >
          Qr code
        </Button>
      ),
      key: "0",
    },
  ];

  const downloadQRCode = (id) => {
    const canvas = document.getElementById(id)?.querySelector("canvas");
    if (canvas) {
      const url = canvas.toDataURL();
      const a = document.createElement("a");
      a.download = "QRCode.png";
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div>
      <Card style={{ width: "100%", height: "100px" }}>
        <Flex justify="space-between" align="center">
          <Title level={1} style={{ margin: 0, padding: 0 }}>
            Create a new shortlink
          </Title>
          <Flex gap={4}>
            <Button
              type="primary"
              onClick={() => {
                navigate(`/user/dashboard/projects/analytics/${id}`);
              }}
            >
              Project analytics
            </Button>
            <Button type="primary" onClick={showModal}>
              Create shortlink
            </Button>
          </Flex>
        </Flex>
      </Card>
      <Row
        style={{ width: "100%", marginTop: "50px" }}
        gutter={[50, 50]}
        justify="center"
        align="middle"
      >
        {shortlinks ? (
          shortlinks.map((shortlink) => (
            <>
              <Col md={16} key={shortlink.id}>
                <Card style={{ width: "100%" }}>
                  <Row gutter={[20, 20]} align="middle" justify="space-between">
                    <Col md={2}>
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
                    <Col md={10}>
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
                            {shortlink.shortened_url}
                          </Paragraph>
                        </Flex>
                        <Paragraph style={{ margin: "0px", padding: "0px" }}>
                          {shortlink.original_url}
                        </Paragraph>
                      </Flex>
                    </Col>
                    <Col md={8}>
                      <Flex justify="center" align="center" gap={4}>
                        <Button
                          type="primary"
                          icon={<ThunderboltOutlined />}
                          onClick={() => {
                            navigate(
                              `/user/dashboard/shortlinks/analytics/${shortlink.id}`
                            );
                          }}
                        >
                          {shortlink.total_clicks} clicks
                        </Button>
                        <Dropdown menu={{ items }} trigger={["click"]}>
                          <Button
                            type="primary"
                            icon={<AppstoreAddOutlined />}
                            size="small"
                          />
                        </Dropdown>
                      </Flex>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Modal
                title="Qrcode"
                open={isQrCodeModalOpen}
                onOk={handleQrCodeModal}
                onCancel={handleQrCodeModal}
                footer={(_, { OkBtn, CancelBtn }) => (
                  <>
                    {/* <CancelBtn /> */}
                    <Button
                      type="primary"
                      onClick={() => {
                        downloadQRCode(shortlink.id);
                        handleQrCodeModal();
                      }}
                    >
                      Download qrcode
                    </Button>
                  </>
                )}
              >
                {/* Create a new project input field */}
                <div id={shortlink.id}>
                  <QRCode
                    errorLevel="H"
                    value={shortlink.shortened_url}
                    icon={logo}
                  />
                </div>

                {/* Create a new project  button */}
              </Modal>
            </>
          ))
        ) : (
          <h2>loading...</h2>
        )}

        {shortlinks && shortlinks.length === 0 ? <h2>Empty</h2> : null}
      </Row>
      <Modal
        title="Create a new shortlink"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            {/* <CancelBtn /> */}
            <Button type="primary" onClick={handleOk}>
              Create shortlink
            </Button>
          </>
        )}
      >
        {/* Create a new project input field */}
        <Input
          placeholder="Destination url"
          onChange={(e) => {
            setDestinationUrl(e.target.value);
          }}
        />
        {/* Create a new project  button */}
      </Modal>

      {/* Qr code modal */}
    </div>
  );
};

export default LinkListingPage;
