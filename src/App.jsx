import "./App.css";
import { Button } from "antd";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";

import { useEffect, useState } from "react";
// function App() {
//   return (

//   );
// }

// export default App;

import React from "react";

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Function to get cookie value by name
    function getCookie(cookieName) {
      let cookies = document.cookie;
      let cookieArray = cookies.split("; ");

      for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        let [name, value] = cookie.split("=");

        if (name === cookieName) {
          return decodeURIComponent(value);
        }
      }

      return null;
    }

    let username = getCookie("user");
    try {
      const dataObject = JSON.parse(username);
      console.log(dataObject);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
