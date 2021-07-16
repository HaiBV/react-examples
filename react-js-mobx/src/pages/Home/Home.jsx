import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import Stores from "stores";
import logo from "./logo.svg";
import "./Home.scss";
import { Button } from "antd";

const Home = () => {
  const userStore = useContext(Stores.UserStoreContext);
  const { t } = useTranslation();
  const [name, setName] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t("home.hello_world")}</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <div style={{ textAlign: "center" }}>
          <input
            type="text"
            value={name}
            style={{ color: "black" }}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Button onClick={() => userStore.changeName(name)}>ChangeName</Button>
        </div>
      </header>
    </div>
  );
};

export default Home;
