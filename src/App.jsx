import "./App.css";
import { Button } from "antd";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";

import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setUserInfo } from "./Redux/slices/userSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
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

    let userData = getCookie("user");

    if (userData) {
      try {
        const userDataObject = JSON.parse(userData);
        console.log(userDataObject);

        dispatch(setUserInfo(userDataObject));
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
