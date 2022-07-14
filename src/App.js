import React, { useState } from "react";
import "./App.css";

import questions from "./data/questions";

// import handleReplayBtn from "./components/handleReplayBtn";
import ScoreSection from "./components/ScoreSection";
import QuestionSection from "./components/QuestionSection";

function App() {
    // 分數累計
    const [score, setScore] = useState(0);
    // 最後分數呈現
    const [showScore, setShowScore] = useState(false);

    // 總題數
    const qLength = questions.length;

    // 上一題按鈕
    // const handlePrevBtn = (ansOption) => {
    //     const nextQuestion = currentQuestion - 1;
    //     if (nextQuestion >= 0) {
    //         setCurrentQuestion(nextQuestion);
    //     }
    // };

    // 對答案
    // const handleAnsOptionClick = (isCorrect, i) => {
    //     if (isCorrect) {
    //         const newScore = score + 1;
    //         setScore(newScore);
    //     }
    // };

    return (
        <div className="app">
            <div className="container">
                <h1>Harry Potter Quiz Game</h1>
                {showScore ? (
                    <ScoreSection score={score} qLength={qLength} />
                ) : (
                    <QuestionSection
                        score={score}
                        setScore={setScore}
                        setShowScore={setShowScore}
                    />
                )}
                <footer>made by &copy; chuanmin</footer>
            </div>
        </div>
    );
}

export default App;
