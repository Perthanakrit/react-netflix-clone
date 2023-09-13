import React from "react";

import moblieImg from "../../assets/mobile-image.jpg";
import boxShot from "../../assets/boxshot.png";
import downloadIcon from "../../assets/download-icon.gif";
import { DownloadContainer } from "./Styles";

export default function () {
  return (
    <DownloadContainer>
      <div style={{ width: "100%", position: "relative" }}>
        <img width="100%" src={moblieImg} alt="img" />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, 90%)",
            border: "2px solid hsla(0, 0%, 100%, .25)",
            borderRadius: "10px",
            background: "#000",
            display: "flex",
            padding: "0.5rem",
            width: "60%",
            height: "100px",
            justifyContent: "space-between",
          }}
        >
          <img src={boxShot} alt="img" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "-60px",
            }}
          >
            <p>
              Stranger Things <br />
              <span style={{ color: "#0071eb", fontSize: "0.8rem" }}>
                Dowloading...
              </span>
            </p>
          </div>
          <img src={downloadIcon} alt="" />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <h3 style={{ fontSize: "3rem" }}>
            Download your shows to watch offline.
          </h3>

          <p style={{ fontSize: "1.5rem", marginTop: "1rem" }}>
            Save your favorites easily and always have something to watch.
          </p>
        </div>
      </div>
    </DownloadContainer>
  );
}
