import React from "react";
import { FooterContainer, FooterList } from "./Style";

export default function Footer() {
  return (
    <FooterContainer>
      <p>Questions? Call 1-800-012-298</p>
      <FooterList>
        <ul>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Inverstor Relations</a>
          </li>
          <li>
            <a>Ways to Watch</a>
          </li>
          <li>
            <a>Corporate Information</a>
          </li>
          <li>
            <a>Only on Netflix</a>
          </li>
        </ul>
        <ul>
          <li>
            <a>Help Center</a>
          </li>
          <li>
            <a>Jobs</a>
          </li>
          <li>
            <a>Teams of us</a>
          </li>
          <li>
            <a>Contact us</a>
          </li>
        </ul>
        <ul>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Inverstor Relations</a>
          </li>
          <li>
            <a>Ways to Watch</a>
          </li>
          <li>
            <a>Corporate Information</a>
          </li>
          <li>
            <a>Only on Netflix</a>
          </li>
        </ul>
      </FooterList>
      <a
        style={{
          padding: "1rem 2rem",
          border: "1px solid #737373",
          borderRadius: "5px",
          display: "inline-block",
          marginBottom: "1rem",
          color: "#737373",
          textDecoration: "none",
        }}
        href="#"
      >
        English
      </a>
      <p>Per Trakanjan</p>
    </FooterContainer>
  );
}
