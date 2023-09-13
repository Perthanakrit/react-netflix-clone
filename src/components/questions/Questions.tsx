import React, { useState } from "react";
import { QuestionsContainer } from "./Styled";

interface Props {
  title: string;
  info: string;
}

export default function Questions(question: Props) {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <QuestionsContainer>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            background: "#303030",
            fontSize: "1.4rem",
            borderRadius: "1.1px",
            width: "750px",
            borderBottom: "1px solid #000",
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem 2rem",
          }}
        >
          <h3 style={{ display: "flex", alignItems: "center" }}>
            {question.title}
          </h3>
          <button
            style={{
              border: "none",
              background: "transparent",
              fontSize: "3rem",
              color: "#fff",
            }}
            onClick={() => setShowInfo(!showInfo)}
          >
            {showInfo ? "x" : "+"}
          </button>
        </div>
      </div>
      {showInfo && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              background: "#303030",
              fontSize: "1.5rem",
              borderRadius: "5px",
              width: "750px",
              padding: "1rem 2rem",
              marginBottom: "0.5rem",
            }}
          >
            {question.info}
          </p>
        </div>
      )}
    </QuestionsContainer>
  );
}
