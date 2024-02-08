import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";
import DashboardIcon from "./images/DashboardIcon";
import DataAnalysisIcon from "./images/DataAnalysisIcon";
import SuveyCreationIcon from "./images/SuveyCreationIcon";
import AIInterviewerIcon from "./images/AIInterviewerIcon";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Noto Sans', sans-serif",
    mainBg: "#fff",
    boxBg: "#fff",
    titleColor: "#000",
    border: "1px solid var(--Gray-200, #EAECF0)",
    boxShadow: "2px 2px 24px 0px rgba(0, 0, 0, 0.08)",
    lineColor: "#344054",
    linePointColor: "#000",
    linePointBorderColor: "rgba(0, 0, 0, 0.10)",

    data: [
      {
        icon: <SuveyCreationIcon color="#D0D5DD" />,
        title: "Survey <br/> Creation",
        curveColor: "#EAECF0",
      },
      {
        icon: <AIInterviewerIcon color="#31BFB0" />,
        title: "AI <br/> Interviewer",
        curveColor: "#15B8A6",
        features: ["Multiple languages", "Voice input"],
        featuresHeading: "Features",
        featureHeadingColor: "#98A2B3",
        featuresColor: "#0F9284",
        featuresBg: "rgba(49, 191, 176, 0.30)",
      },
      {
        icon: <DataAnalysisIcon color="#D0D5DD" />,
        title: "Data <br/> Analysis ",
        curveColor: "#EAECF0",
      },
      {
        icon: <DashboardIcon color="#83BBD8" />,
        title: "Insights <br/> Dashboard",
        curveColor: "#83BBD8",
        features: ["Thematic Analysis", "Sentiment Tracking"],
        featuresHeading: "Features",
        featureHeadingColor: "#98A2B3",
        featuresColor: "#3A718D",
        featuresBg: "rgba(131, 187, 216, 0.30)",
      },
    ],
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,
          "--boxBg": allData.boxBg,
          "--titleColor": allData.titleColor,
          "--border": allData.border,
          "--boxShadow": allData.boxShadow,
          "--lineColor": allData.lineColor,
          "--linePointColor": allData.linePointColor,
          "--linePointBorderColor": allData.linePointBorderColor,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
