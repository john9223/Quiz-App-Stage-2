import React, { Component } from "react";

class ResultComponent extends Component {
  render() {
    return (
      <>
        <div className="result-container">
            <div className="result-subContainer">
                <h1 className="heading">Result</h1>
                <div className="resultBoard">
                  <h3 className="pratice">You need more practice</h3>
                  <h1 className="score">Your Score is 20%</h1>

                  <p className="result">No of questions <span className="nos">15</span></p>
                  <p className="result"> No of attempted questions <span className="nos">9</span></p>
                  <p className="result">No of correct questions <span className="nos">3</span></p>
                  <p className="result">No of wrong questions <span className="nos">6</span></p>
                </div>
                <div className="buttons-result">
                  <button className="play-again">Play Again</button>
                  <button className="home-button">Back to Home</button>
                </div>
            </div>
        </div>    
      </>
    );
  }
}
export default ResultComponent;