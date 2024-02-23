import React from "react";
import { Card, Button, Flex, Typography } from "antd";
import { GoogleCircleFilled, FacebookFilled } from "@ant-design/icons";
const { Title, Paragraph } = Typography;
const LoginPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          width: "40%",
        }}
      >
        <Flex justify="center" align="center" vertical gap="large">
          <Flex vertical justify="center" align="center">
            <img
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              style={{ height: "50px", width: "50px", borderRadius: "100%" }}
            />
            <Title level={5}>Login to Linktink</Title>
            <Paragraph>
              "Revamping short links with dynamic capabilities."
            </Paragraph>
          </Flex>

          <Flex vertical justify="center" align="center" gap="small">
            <a href={`${import.meta.env.VITE_API_ROOT_V1}/auth/user/google`}>
              <Button
                type="primary"
                shape="round"
                icon={<GoogleCircleFilled />}
                size="middle"
              >
                Login with Google
              </Button>
            </a>

            <Button
              type="primary"
              shape="round"
              icon={<FacebookFilled />}
              size="middle"
            >
              Login with Facebook
            </Button>
          </Flex>
        </Flex>
      </Card>
    </div>
  );
};

export default LoginPage;
