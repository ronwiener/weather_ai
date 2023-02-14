import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import { Typography } from "@mui/material";
import MainCard from "./components/MainCard/MainCard";
//import Header from "./components/Header/Header";
//import { Typography } from "@mui/material";

import "./App.css";

const alanKey =
  "31164018717d6c0c953170496d91f1f82e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  //const [cityName, setCityName] = useState("");
  const [data, setData] = useState({});

  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const infoCards = [
    {
      color: "#00838f",
      title: "Find the latest Weather Conditions in any City",
      text: "Give me the weather for...(location)",
    },
  ];

  // const alanBtnRef = useRef({}).current;
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, weatherData }) => {
        if (command === "city") {
          setData(weatherData);
        } else {
          alanBtn().playText("Please try that again");
        }
      } /*
      onButtonState: async function (status) {
        if (status === "ONLINE") {
          if (!this.greetingWasSaid) {
            await alanBtnRef.btnInstance.activate();
            alanBtnRef.btnInstance.playText(
              "Hi Ron, I'm Alan.  Let me know what city you want to search for the current weather conditions."
            );
            this.greetingWasSaid = true;
          }
        }
      }, */,
    });
  }, []);

  //console.log(data);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img
          style={{
            height: matchesSM ? "16vh" : "27vh",
            borderRadius: "15%",
            margin: " 1% 0",
          }}
          src="https://alan.app/brand_assets/logo-horizontal/color/alan-logo-horizontal-color.svg"
          alt="alan logo"
        />
      </div>
      {!data.length ? (
        <Grow in>
          <Grid
            style={{
              width: "100%",
              justifyContent: "center",
            }}
            container
            alignItems="center"
            spacing={3}
          >
            {infoCards.map((infoCard) => (
              <Grid
                item
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    height: "45vh",
                    padding: "10%",
                    borderRadius: 10,
                    backgroundColor: infoCard.color,
                    color: "white",
                  }}
                >
                  <Typography variant="h5">{infoCard.title}</Typography>
                  {infoCard.info ? (
                    <Typography variant="h6">
                      <strong>{infoCard.title.split(" ")[2]}</strong>
                      <br />
                      {infoCard.info}
                    </Typography>
                  ) : null}
                  <Typography variant="h6">
                    <span style={{ fontSize: "1.20em" }}> Try saying:</span>
                    <br />
                    <i>{infoCard.text}</i>
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grow>
      ) : (
        <MainCard weatherData={data} />
      )}
    </div>
  );
}

export default App;
