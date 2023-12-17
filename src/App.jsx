import { useState } from "react";
import "./global.css";
import Result from "./components/result";
import { TypeAnimation } from "react-type-animation";
import Nav from "./components/nav.jsx";
import Fade from "react-reveal/Fade";
import Textra from "react-textra";
import Choose from "./components/choose.jsx";
import Activity from "./components/Activity.jsx";
import Rest from "./components/Rest.jsx";

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="head-contain">
          <div className="feeling-contain">
            <Textra effect="downTop" data={["💫", "🍕", "🎨", "💖"]} />
            <p>I'm feeling </p>
            <p>
              <Textra
                effect="downTop"
                data={["lucky", "hungry", "creative", "social"]}
              />
            </p>
          </div>

          <div className="text-contain">
            <Fade bottom>
              <h1>When you need a </h1>
            </Fade>
            <Fade bottom delay={400}>
              <TypeAnimation
                sequence={[
                  "decisive friend",
                  2000, // wait 1s before replacing
                  "restuaunt expert",
                  2000,
                  "ride-or-die",
                  2000,
                ]}
                wrapper="span"
                speed={1}
                style={{
                  fontSize: "5em",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "1000",
                  display: "inline-block",
                  margin: "0",
                  background: `-webkit-linear-gradient(45deg, var(--prim), var(--sec))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textAlign: "center",
                }}
                repeat={Infinity}
              />
            </Fade>
          </div>
          <Fade bottom delay={800}>
            <p>
              Don't care what you do but still want to be surprised? Select your
              filtering preferences and get stuff recommended to you.
            </p>
          </Fade>

          <Fade bottom delay={1200}>
            <button className="btn-primary">Start</button>
          </Fade>
        </div>
        <div className="choose-contain">
          <div className="choose">
            <div className="option">restaurants</div>
            {/* <div className="option">
              <Choose ButtonLabel={activity} />
            </div> */}
            <div className="option">fun</div>
          </div>
        </div>

        <div className="main-contain">
          <Rest />
        </div>
      </div>
    </>
  );
}

export default App;
