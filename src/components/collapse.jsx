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
        <span className={displayContent? "vector-icon-open": ""   
        }>
          <img src={ChevronDown} alt="" />
        </span>
      </button>
      {displayContent && <div className="banner-subtitle">{content}</div>}
    </div>
  );
}
