import React from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminIntro from "./adminIntro";
import AdminAbout from "./adminAbout";
import { useSelector } from "react-redux";
import AdminExperience from "./adminExperience.js";
import AdminProjects from "./adminProjects.js";

function Admin() {
  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div>
      <Header />
      {portfolioData && (
        <div className="mt-5 p-5">
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Intro" key="1">
              <AdminIntro />
            </Tabs.TabPane>
            <Tabs.TabPane tab="About" key="2">
              <AdminAbout />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Experience" key="3">
              <AdminExperience />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Projects" key="4">
              <AdminProjects />
            </Tabs.TabPane>
          </Tabs>
        </div>
      )}
    </div>
  );
}

export default Admin;
