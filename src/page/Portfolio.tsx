import { useState } from "react";
import Project from "../component/Project";
import Stack from "../component/Stack";
import Service from "../component/Service";

const Portfolio = () => {
  const [section, setSection] = useState("project");
  return (
    <div id="portfolio" className="portfolio-container">
      <h1 className="text-h2 text-color-secondary my-5 text-center">
        Portfolio Showcase
      </h1>
      <p className="text-csm text-center mb-5">
        {" "}
        Explore my journey through projects, technical expertise and services
      </p>
      <div className="portfolio-nav">
        <button
          onClick={() => setSection("project")}
          className={`${section == "project" ? "active-tab" : "portfolio-tab"} relative px-2 md:px-6`}
        >
          {section == "project" && (
            <div className="portfolio-tab-slider animate-tab-bar"></div>
          )}
          Project
        </button>
        <button
          onClick={() => setSection("stack")}
          className={`${section == "stack" ? "active-tab" : "portfolio-tab"} relative px-2 md:px-6`}
        >
          {section == "stack" && (
            <div className="portfolio-tab-slider animate-tab-bar"></div>
          )}
          Stack
        </button>
        <button
          onClick={() => setSection("service")}
          className={`${section == "service" ? "active-tab" : "portfolio-tab"} relative px-2 md:px-6`}
        >
          {section == "service" && (
            <div className="portfolio-tab-slider animate-tab-bar"></div>
          )}
          Service
        </button>
      </div>
      <div className="portfolio-tab-section transition-all duration-300">
        {section == "project" && <Project />}
        {section == "stack" && <Stack />}
        {section == "service" && <Service />}
      </div>
    </div>
  );
};

export default Portfolio;
