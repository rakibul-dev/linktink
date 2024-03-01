import React, { useEffect } from "react";
import { Col, Row, Flex, Card, Segmented, Typography } from "antd";

const { Title } = Typography;
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { getShortLinkAnalytics } from "../../Redux/slices/shortlinkSlice";
const ShortlinkAnalytics = () => {
  const dispatch = useDispatch();
  const {
    clicks,
    cities,
    countries,
    devices,
    operating_systems,
    browsers,
    clicksByDate,
  } = useSelector((state) => state.shortlinks.analytics);

  const { id } = useParams();

  const [location, setLocation] = React.useState("Country");
  const [devicePlatform, setDevicePlatform] = React.useState("Device");

  useEffect(() => {
    dispatch(getShortLinkAnalytics({ id }));
  }, []);

  const devicesChart = () => {
    if (devicePlatform === "Device") {
      return (
        <>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              //   width={700}
              style={{ width: "100%" }}
              // height={300}
              data={devices}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              layout="vertical"
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis type="number" />
              <YAxis
                dataKey="device"
                //   yAxisId={0}
                //   dataKey={xKey}
                type="category"
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <Legend />
              {/* <Bar dataKey="pv" fill="#8884d8" /> */}
              <Bar dataKey="count" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </>
      );
    } else if (devicePlatform === "Browser") {
      return (
        <>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              //   width={700}
              style={{ width: "100%" }}
              // height={300}
              data={browsers}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              layout="vertical"
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis type="number" />
              <YAxis
                dataKey="browser"
                //   yAxisId={0}
                //   dataKey={xKey}
                type="category"
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <Legend />
              {/* <Bar dataKey="pv" fill="#8884d8" /> */}
              <Bar dataKey="count" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </>
      );
    } else {
      return (
        <>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              //   width={700}
              style={{ width: "100%" }}
              // height={300}
              data={operating_systems}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              layout="vertical"
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis type="number" />
              <YAxis
                dataKey="os"
                //   yAxisId={0}
                //   dataKey={xKey}
                type="category"
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <Legend />
              {/* <Bar dataKey="pv" fill="#8884d8" /> */}
              <Bar dataKey="count" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </>
      );
    }
  };
  const locationsChart = () => {
    if (location === "Country") {
      return (
        <>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              //   width={700}
              style={{ width: "100%" }}
              // height={300}
              data={countries}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              layout="vertical"
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis type="number" />
              <YAxis
                dataKey="country"
                //   yAxisId={0}
                //   dataKey={xKey}
                type="category"
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <Legend />
              {/* <Bar dataKey="pv" fill="#8884d8" /> */}
              <Bar dataKey="count" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </>
      );
    } else if (location === "City") {
      return (
        <>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              //   width={700}
              style={{ width: "100%" }}
              // height={300}
              data={cities}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              layout="vertical"
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis type="number" />
              <YAxis
                dataKey="city"
                //   yAxisId={0}
                //   dataKey={xKey}
                type="category"
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <Legend />
              {/* <Bar dataKey="pv" fill="#8884d8" /> */}
              <Bar dataKey="count" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </>
      );
    }
  };
  return (
    <div>
      {devices ? (
        <Row justify="space-evenly" align="center">
          <Col xs={22} md={22}>
            {/* <DemoColumn /> */}
            {/* <Bar options={options} data={data} /> */}

            <Flex>
              <Title level={5}>{clicks} Clicks</Title>
            </Flex>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                //   width={700}
                style={{ width: "100%" }}
                height={300}
                data={clicksByDate}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                {/* <Bar dataKey="pv" fill="#8884d8" /> */}
                <Bar dataKey="count" fill="#f97316" />
              </BarChart>
            </ResponsiveContainer>
          </Col>
          <Col md={10} xs={22}>
            <Card
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <Flex
                justify="space-between"
                align="start"
                style={{ width: "100%" }}
              >
                <Title level={4} style={{ margin: "0px" }}>
                  Locations
                </Title>
                <Segmented
                  defaultValue="Country"
                  color="green"
                  style={{
                    marginBottom: 8,
                  }}
                  onChange={(value) => setLocation(value)}
                  options={["Country", "City"]}
                />
              </Flex>

              {locationsChart()}
            </Card>
          </Col>
          <Col md={10} xs={22}>
            <Card
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <Flex
                justify="space-between"
                align="start"
                style={{ width: "100%" }}
              >
                <Title level={4} style={{ margin: "0px" }}>
                  Devices
                </Title>
                <Segmented
                  defaultValue="Device"
                  color="green"
                  style={{
                    marginBottom: 8,
                  }}
                  onChange={(value) => setDevicePlatform(value)}
                  options={["Device", "Browser", "Os"]}
                />
              </Flex>
              {devicesChart()}
            </Card>
          </Col>
        </Row>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default ShortlinkAnalytics;
