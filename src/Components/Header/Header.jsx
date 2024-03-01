import { Col, Row, Flex, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { setUserInfo } from "../../Redux/slices/userSlice";
import logo from "../../../public/images/link.png";
import { MenuOutlined } from "@ant-design/icons";
const Header = () => {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginLogoutHandler = async () => {
    if (userInfo.id) {
      const res = await axios.get(
        `${import.meta.env.VITE_API_ROOT_V1}/auth/user/logout`
      );

      console.log({ res });

      Cookies.remove("user");

      dispatch(setUserInfo({}));
      navigate("/");
    } else {
      navigate("/login");
    }
  };
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
      <Row justify="space-between" align="center" style={{ padding: "50px" }}>
        <Col xs={4} md={4}>
          <img
            src={logo}
            alt=""
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
          />
        </Col>
        {/* <Col xs={2} sm={2} md={0}>
          <Flex align="center" justify="center" vertical>
            <Button type="primary" icon={<MenuOutlined />} size="small" />
          </Flex>
        </Col> */}

        <Col xs={16} md={12}>
          <Flex justify="flex-end" gap="large">
            {userInfo.id ? (
              <div>
                <Button
                  type="text"
                  onClick={() => {
                    navigate("/user/dashboard/projects");
                  }}
                >
                  Projects
                </Button>
              </div>
            ) : null}

            <Button type="primary" onClick={() => loginLogoutHandler()}>
              {userInfo.id ? "Logout" : "Login"}
            </Button>
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
