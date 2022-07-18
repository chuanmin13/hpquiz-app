import React, { useEffect, useRef, useState } from "react";
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
    // const qLength = questions.length;
    const qLength = 8;
    let questionArr;

    // 隨機選題目
    // TODO: 沒辦法固定這八題~~~
    function nowQuestions() {
        const ranNum = [];
        const newQuestions = [];
        const q = questions.map((v) => {
            return v;
        });

        while (newQuestions.length < 8) {
            const ran = Math.floor(Math.random() * 25);
            if (!ranNum.includes(ran)) {
                ranNum.push(ran);
                newQuestions.push(q[ran]);
            }
        }
        console.log(ranNum);
        questionArr = newQuestions;
    }
    nowQuestions();

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
                        questionArr={questionArr}
                    />
                )}
                <footer>made by &copy; chuanmin</footer>
            </div>
        </div>
    );
}

export default App;
