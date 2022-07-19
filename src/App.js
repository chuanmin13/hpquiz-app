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
    // 現在在哪一題
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // 選到哪一題的哪一個答案
    const [selectedOpt, setSelectedOpt] = useState({ Q: 0, opt: -1 });

    // 總題數
    // const qLength = questions.length;
    const qLength = 5;
    const [questionArr, setQuestionArr] = useState([]);

    // 隨機選題目
    function randomQuestions() {
        // 從題庫取出5個亂數的題目index值
        const numArr = questions.map((v, i) => {
            return i;
        });
        const ranNumArr = numArr
            .sort(() => Math.random() - 0.5)
            .slice(0, qLength);

        // 用亂數index設定題目
        const qArr = questions.filter((v, i) => {
            return ranNumArr.includes(i);
        });
        setQuestionArr(qArr);
        // console.log(qArr);
        // console.log(questionArr[0].question);
    }

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
                        currentQuestion={currentQuestion}
                        setCurrentQuestion={setCurrentQuestion}
                        selectedOpt={selectedOpt}
                        setSelectedOpt={setSelectedOpt}
                        questionArr={questionArr}
                        randomQuestions={randomQuestions}
                    />
                )}
                <footer>made by &copy; chuanmin</footer>
            </div>
        </div>
    );
}

export default App;
