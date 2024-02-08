import React, { useEffect, useState } from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({ data }) => {
  const [maxFeatureHeight, setMaxFeatureHeight] = useState(0);

  useEffect(() => {
    // Find the maximum height among feature containers
    const featureContainers = document.querySelectorAll(`.${classes.features}`);
    let max = 0;
    featureContainers.forEach((container) => {
      max = Math.max(max, container.clientHeight);
    });
    setMaxFeatureHeight(max);
  }, [data]);

  return (
    <div
      className="min-h-screen flex items-center justify-center w-full"
      style={{ background: "var(--mainBg)" }}
    >
      <div
        className={classes.wrapper}
        style={{ "--marginBottom": `${maxFeatureHeight}px` }}
      >
        {data.map((el, i) => (
          <div
            key={i}
            className={[
              classes.box,
              (i + 1) % 2 === 0 ? classes.even : classes.odd,
            ].join(" ")}
            style={{
              "--curveColor": el.curveColor,
              "--featureHeadingColor": el.featureHeadingColor,
              "--featuresColor": el.featuresColor,
              "--featuresBg": el.featuresBg,
            }}
          >
            <div className={classes.icon}>{el.icon}</div>
            <h3
              className={classes.title}
              dangerouslySetInnerHTML={{ __html: el.title }}
            ></h3>
            <div className={classes.curve}></div>

            {(i + 1) % 2 === 0 && (
              <div className={classes.features}>
                <h3 className={classes.featureHeading}>{el.featuresHeading}</h3>

                {el.features.map((feature, i) => (
                  <p className={classes.feature} key={i}>
                    {feature}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
