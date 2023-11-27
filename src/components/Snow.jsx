import { useEffect, useState } from "react";
import "./Snow.css";

function Snow({ freq }) {
  const genSnow = (frequency) => {
    const content = [];
    const width = window.innerWidth;
    const maxHeigth = window.innerHeight;

    for (let i = 0; i < frequency; i++) {
      for (let j = 0; j < frequency; j++) {
        const props = {
          speed: Math.random(),
          initialLeft: Math.random() * width,
          initialTop: maxHeigth - (i + 1) * 100,
          radius: Math.random() * 8 + 8,
          maxHeight: maxHeigth,
        };

        content.push(<Snowflake key={crypto.randomUUID()} props={props} />);
      }
    }

    return content;
  };

  return (
    <>
      <div id="snow">{genSnow(freq)}</div>
    </>
  );
}

export default Snow;

function Snowflake({ props }) {
  const { speed, initialLeft, initialTop, radius, maxHeight } = props;
  const [left, setLeft] = useState(initialLeft);
  const [top, setTop] = useState(initialTop);
  let goingRight = Boolean(Math.round(Math.random));
  const maxXMovement = 200 * Math.random() + 10;

  useEffect(() => {
    const interval = setInterval(() => {
      setTop((curr) => {
        if (curr <= maxHeight) {
          return curr + 2 * speed + 1;
        } else {
          return -10;
        }
      });

      setLeft((curr) => {
        if (goingRight) {
          if (curr >= initialLeft + maxXMovement) {
            goingRight = !goingRight;
            return initialLeft + maxXMovement;
          } else {
            return curr + Math.random();
          }
        } else {
          if (curr <= initialLeft - maxXMovement) {
            goingRight = !goingRight;
            return initialLeft - maxXMovement;
          } else {
            return curr - Math.random();
          }
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  const snowFlakeStyle = {
    left: left,
    width: radius,
    height: radius,
    top: top,
    zIndex: Math.random() * 10 + 1,
  };

  return <div className="snowflake" style={snowFlakeStyle}></div>;
}
