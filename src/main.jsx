import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider } from "antd";
import theme from "./Theme/Theme.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  </>
);
