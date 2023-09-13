import { useState } from "react";
import "./App.css";
import Download from "./components/download/Download";
import Enjor from "./components/enjor/Enjor";
import Header from "./components/header/Header";
import KidZone from "./components/kidZone/KidZone";
import Questions from "./components/questions/Questions";
import Watch from "./components/watch/Watch";
import data from "./data";
import Footer from "./components/footer/Footer";

function App() {
  const [questions, setQuestions] = useState<any>(data);

  return (
    <>
      <Header />
      <Enjor />
      <Download />
      <Watch />
      <KidZone />
      <div
        style={{
          padding: "3rem",
          background: "#000",
          color: "#fff",
          textAlign: "center",
          borderBottom: " 8px solid #222",
        }}
      >
        <h3 style={{ fontSize: "3rem", marginBottom: "2rem" }}>
          Frequently Asked Questions
        </h3>
        {questions.map((question: any) => {
          return <Questions key={question.id} {...question} />;
        })}
        <p style={{ marginTop: "2rem", fontSize: "1.2rem" }}>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <input
          style={{ width: "500px", padding: "1.5rem 1rem" }}
          type="email"
          placeholder="Email address"
        />
        <button
          style={{
            width: "200px",
            padding: "1.2rem 1rem",
            color: "#fff",
            backgroundColor: "#e50914",
            fontSize: "1.5rem",
            border: "none",
            position: "relative",
            top: "4px",
          }}
          type="submit"
        >
          Get Started
        </button>
      </div>
      <Footer />
    </>
  );
}

export default App;
