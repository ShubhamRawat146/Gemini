import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [extended, setextended] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");

  // your function to copy here

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setextended((prev) => !prev)}
          className="bars"
          src="bars-solid.png"
          alt=""
        />
        <div className="new-chat">
          <img
            className="new-chat-img"
            src="square-plus-regular.png"
            alt="new-chat"
          />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Prompts</p>
            <div className="recent-entry">
              <img
                className="recent-message"
                src="message-regular.png"
                alt="recent-message"
              />
              <p onClick={() => copyToClipBoard("What is React")}>
                What is React...
              </p>
            </div>
            <div className="recent-entry">
              <img
                className="recent-message"
                src="message-regular.png"
                alt="recent-message"
              />
              <p>What is HTML...</p>
            </div>
            <div className="recent-entry">
              <img
                className="recent-message"
                src="message-regular.png"
                alt="recent-message"
              />
              <p>What is ReactNative...</p>
            </div>
            <div className="recent-entry">
              <img
                className="recent-message"
                src="message-regular.png"
                alt="recent-message"
              />
              <p>What is Mongoose...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img
            className="question"
            src="circle-question-regular.png"
            alt="question"
          />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img
            className="question"
            src="clock-rotate-left-solid.png"
            alt="question"
          />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img className="setting" src="gear-solid.png" alt="setting" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
