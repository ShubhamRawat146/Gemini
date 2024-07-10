import React, { useContext } from "react";
import "./Main.css";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hi i am Gemini</span>
              </p>
              <p>How can i help you?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src="compass-regular.png" alt="compass" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src="compass-regular.png" alt="compass" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src="compass-regular.png" alt="compass" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src="code-solid.png" alt="compass" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src="user.png" alt="user" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src="gemini_pro_logo.png" alt="gemini-logo" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src="images-regular.png" alt="img" />
              <img src="microphone-solid.png" alt="mic" />
              {input ? (
                <img
                  onClick={() => onSent()}
                  src="paper-plane-regular.png"
                  alt="send"
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
