import ChevronDown from "../assets/Vector.svg";
import { useState } from "react";

export default function Collapse({ title, content }) {
  const [displayContent, setDisplayContent] = useState(false);
  return (
    <div className="collapse-container">
      <button
        className="apropos-button"
        onClick={() => {
          setDisplayContent(!displayContent);
        }}
        aria-expanded={displayContent ? true : false}
      >
        {title}
        <span
          className={displayContent ? "vector-icon-open" : "vector-icon-close"}
        >
          <img src={ChevronDown} alt="" />
        </span>
      </button>
      <div
        className={
          displayContent
            ? "banner-subtitle banner-subtitle-open"
            : "banner-subtitle"
        }
      >
        {content}
      </div>
    </div>
  );
}
