import { Col, Row, Flex, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { setUserInfo } from "../../Redux/slices/userSlice";
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
      <Row justify="space-evenly" align="center">
        <Col xs={4} md={4}>
          Logo
        </Col>
        <Col xs={6} sm={0}>
          Hamburger menu
        </Col>

        <Col xs={0} md={12}>
          <Flex justify="flex-end" gap="large">
            <Button type="text">contact</Button>
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
