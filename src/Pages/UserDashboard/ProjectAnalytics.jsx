import React from "react";
import { Col, Row, Flex, Card, Segmented, Tabs, Typography } from "antd";

const { Title } = Typography;

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const ProjectAnalytics = () => {
  const [location, setLocation] = React.useState("Country");
  const [devicePlatform, setDevicePlatform] = React.useState("Device");

  const dataArr = [
    {
      date: "2024-02-19T08:06:27.295Z",
      count: 15,
    },
    {
      date: "2024-02-19T08:06:49.663Z",
      count: 8,
    },
  ];

  let labels = [];

  dataArr.map((item) => labels.push(item.date));
  //   const labels = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //   ];

  const formatedData = () => {
    let datasetArr = [];
    for (let item of dataArr) {
      //   console.log(item);
      let data = {};
      const date = item.date;

      data[date] = item.count;

      //   console.log(data);
      datasetArr.push({
        label: item.date,
        data,
        // data: { count: item.count },
        //   date: new Date("2024-02-19T08:06:27.295Z"),

        backgroundColor: "rgba(255, 99, 132, 0.5)",
      });
    }
    // console.log({ datasetArr });
    return datasetArr;
  };
  const dataset = formatedData();
  //   const data = {
  //     labels,
  //     datasets: dataset,
  //     // datasets: [
  //     //   {
  //     //     label: "Count",
  //     //     data: { January: 10 },
  //     //     //   date: new Date("2024-02-19T08:06:27.295Z"),

  //     //     backgroundColor: "rgba(255, 99, 132, 0.5)",
  //     //   },
  //     //   //   {
  //     //   //     label: "Dataset 1",
  //     //   //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //     //   //     backgroundColor: "rgba(255, 99, 132, 0.5)",
  //     //   //   },
  //     //   //   {
  //     //   //     label: "Dataset 2",
  //     //   //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //     //   //     backgroundColor: "rgba(53, 162, 235, 0.5)",
  //     //   //   },
  //     // ],
  //   };

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    // {
    //   name: "Page B",
    //   uv: 3000,
    //   pv: 1398,
    //   amt: 2210,
    // },
    // {
    //   name: "Page C",
    //   uv: 2000,
    //   pv: 9800,
    //   amt: 2290,
    // },

    {
      date: "2024-02-19T08:06:27.295Z",
      count: 15,
    },
    {
      date: "2024-02-19T08:06:49.663Z",
      count: 8,
    },
    {
      date: "2024-02-19T08:06:27.295Z",
      count: 15,
    },
    {
      date: "2024-02-19T08:06:49.663Z",
      count: 8,
    },
    {
      date: "2024-02-19T08:06:27.295Z",
      count: 15,
    },
    {
      date: "2024-02-19T08:06:49.663Z",
      count: 8,
    },
    {
      date: "2024-02-19T08:06:27.295Z",
      count: 15,
    },
    {
      date: "2024-02-19T08:06:49.663Z",
      count: 8,
    },
    {
      date: "2024-02-19T08:06:27.295Z",
      count: 15,
    },
    {
      date: "2024-02-19T08:06:49.663Z",
      count: 8,
    },
    {
      date: "2024-02-19T08:06:27.295Z",
      count: 15,
    },
    {
      date: "2024-02-19T08:06:49.663Z",
      count: 8,
    },
    {
      date: "2024-02-19T08:06:27.295Z",
      count: 15,
    },
    {
      date: "2024-02-19T08:06:49.663Z",
      count: 8,
    },
    {
      date: "2024-02-19T08:06:27.295Z",
      count: 15,
    },
    {
      date: "2024-02-19T08:06:49.663Z",
      count: 8,
    },
    {
      date: "2024-02-19T08:06:27.295Z",
      count: 15,
    },
    {
      date: "2024-02-19T08:06:49.663Z",
      count: 8,
    },
    {
      date: "2024-02-19T08:06:27.295Z",
      count: 15,
    },
    {
      date: "2024-02-19T08:06:49.663Z",
      count: 8,
    },
    {
      date: "2024-02-19T08:06:27.295Z",
      count: 15,
    },
    {
      date: "2024-02-19T08:06:49.663Z",
      count: 8,
    },
    {
      date: "2024-02-19T08:06:27.295Z",
      count: 15,
    },
    {
      date: "2024-02-19T08:06:49.663Z",
      count: 8,
    },
    {
      date: "2024-02-19T08:06:27.295Z",
      count: 15,
    },
    {
      date: "2024-02-19T08:06:49.663Z",
      count: 8,
    },
    {
      date: "2024-02-19T08:06:27.295Z",
      count: 15,
    },
    {
      date: "2024-02-19T08:06:49.663Z",
      count: 8,
    },
    {
      date: "2024-02-19T08:06:27.295Z",
      count: 15,
    },
    {
      date: "2024-02-19T08:06:49.663Z",
      count: 8,
    },
    {
      date: "2024-02-19T08:06:27.295Z",
      count: 15,
    },
    {
      date: "2024-02-19T08:06:49.663Z",
      count: 8,
    },
    {
      date: "2024-02-19T08:06:27.295Z",
      count: 15,
    },
    {
      date: "2024-02-19T08:06:49.663Z",
      count: 8,
    },
  ];

  const locations = () => {
    if (location === "Country") {
      return (
        <>
          <h2>Yes its Country</h2>
        </>
      );
    }
  };

  const devices = () => {
    if (devicePlatform === "Device") {
      return (
        <>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              //   width={700}
              style={{ width: "100%" }}
              // height={300}
              data={data}
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
                dataKey="date"
                //   yAxisId={0}
                //   dataKey={xKey}
                type="category"
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <Legend />
              {/* <Bar dataKey="pv" fill="#8884d8" /> */}
              <Bar dataKey="count" fill="#3aaf61" />
            </BarChart>
          </ResponsiveContainer>
        </>
      );
    }
  };
  return (
    <div>
      <Row justify="space-evenly" align="center">
        <Col xs={22} md={22}>
          {/* <DemoColumn /> */}
          {/* <Bar options={options} data={data} /> */}
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              //   width={700}
              style={{ width: "100%" }}
              height={300}
              data={data}
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
              <Bar dataKey="count" fill="#3aaf61" />
            </BarChart>
          </ResponsiveContainer>
        </Col>
        <Col md={10} xs={22}>
          <Card
            style={{
              width: "100%",
              height: "60vh",
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

            {locations()}
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
            {devices()}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectAnalytics;
