import React from "react";

// Simple Quiz UI Component - No Logic, Just Interface
function Quiz() {
    return (
        <div className="quiz-container">
            {/* Quiz Header with Progress and Score */}
            <div className="quiz-header">
                <div className="progress-container">
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '40%' }}></div>
                    </div>
                    <span className="progress-text">Question 2 of 5</span>
                </div>
                <div className="score-display">Score: 1/1</div>
            </div>

            {/* Question Section */}
            <div className="question-container">
                <h2 className="question-text">
                    What is the capital of France?
                </h2>

                {/* Answer Options */}
                <div className="options-container">
                    <button className="option-btn">
                        <span className="option-letter">A</span>
                        London
                    </button>
                    <button className="option-btn selected">
                        <span className="option-letter">B</span>
                        Paris
                    </button>
                    <button className="option-btn">
                        <span className="option-letter">C</span>
                        Berlin
                    </button>
                    <button className="option-btn">
                        <span className="option-letter">D</span>
                        Madrid
                    </button>
                </div>

                {/* Action Button */}
                <div className="button-container">
                    <button className="next-btn">
                        Submit Answer
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Quiz;