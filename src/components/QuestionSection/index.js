import questions from "../../data/questions";
import OptionWrap from "./OptionWrap";

import { useState } from "react";

function QuestionSection(props) {
    // 現在在哪一題
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // 選到哪一題的哪一個答案
    const [selectedOpt, setSelectedOpt] = useState({ Q: 0, opt: -1 });

    const { score, setScore, setShowScore } = props;

    return (
        <>
            <div className="section">
                <div class="question-section">
                    <div className="question-count-wrap">
                        <div className="question-count">
                            <span>Question</span>
                            <p>
                                {currentQuestion + 1} / {questions.length}
                            </p>
                        </div>
                    </div>
                    <div className="flex-wrap">
                        <div className="question-title" key={currentQuestion}>
                            <h3 style={{ wordSpacing: "2px" }}>
                                {questions[currentQuestion].question} ?
                            </h3>
                        </div>
                        {/* 選項 render */}
                        <OptionWrap
                            currentQuestion={currentQuestion}
                            selectedOpt={selectedOpt}
                            setSelectedOpt={setSelectedOpt}
                        />

                        {/* 下一頁按鈕 */}
                        <div className="nextBtnWrap">
                            <button
                                className="nextBtn"
                                key={"next" + currentQuestion}
                                onClick={() => {
                                    const nextQuestion = currentQuestion + 1;
                                    // 如果目前這題有選答案才可以下一題
                                    if (
                                        selectedOpt.Q === currentQuestion &&
                                        selectedOpt.opt > -1
                                    ) {
                                        // 算分數
                                        if (
                                            questions[currentQuestion].ans ===
                                            selectedOpt.opt
                                        ) {
                                            setScore(score + 1);
                                        }
                                        console.log(selectedOpt);

                                        if (nextQuestion < questions.length) {
                                            setCurrentQuestion(nextQuestion);
                                        } else {
                                            setShowScore(true);
                                        }
                                    }
                                }}
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuestionSection;
