import React, { useContext, useState } from "react";
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
    <div className="main">
      <div className="nav">
        <p>Nexa</p>
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hi i am Nexa</span>
              </p>
              <p>How can i help you?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p
                  onClick={() =>
                    copyToClipBoard(
                      "Suggest beautiful places to see on an upcoming road trip"
                    )
                  }
                >
                  Suggest beautiful places to see on an upcoming road trip
                </p>
                <img
                  src="compass-regular.png"
                  alt="compass"
                  onClick={() =>
                    copyToClipBoard(
                      "Suggest beautiful places to see on an upcoming road trip"
                    )
                  }
                />
              </div>
              <div className="card">
                <p
                  onClick={() =>
                    copyToClipBoard(
                      "Create a template for an accountant’s resume with ten years of experience. Include sections for accomplishments, skills and certifications."
                    )
                  }
                >
                  Create a template for an accountant’s resume with ten years of
                  experience. Include sections for accomplishments, skills and
                  certifications.
                </p>
                <img
                  src="lightbulb-regular.png"
                  alt="compass"
                  onClick={() =>
                    copyToClipBoard(
                      "Create a template for an accountant’s resume with ten years of experience. Include sections for accomplishments, skills and certifications."
                    )
                  }
                />
              </div>
              <div className="card">
                <p
                  onClick={() =>
                    copyToClipBoard(
                      "Develop a compelling thesis statement for an argumentative essay about climate change."
                    )
                  }
                >
                  Develop a compelling thesis statement for an argumentative
                  essay about climate change.
                </p>
                <img
                  src="lightbulb-regular.png"
                  alt="compass"
                  onClick={() =>
                    copyToClipBoard(
                      "Develop a compelling thesis statement for an argumentative essay about climate change."
                    )
                  }
                />
              </div>
              <div className="card">
                <p
                  onClick={() =>
                    copyToClipBoard(
                      "Improve the readability of the following code"
                    )
                  }
                >
                  Improve the readability of the following code
                </p>
                <img
                  src="code-solid.png"
                  alt="compass"
                  onClick={() =>
                    copyToClipBoard(
                      "Improve the readability of the following code"
                    )
                  }
                />
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
            Nexa may display inaccurate info, including about people, so
            double-check its responses.your privacy and Nexa Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
