import OptionWrap from "./OptionWrap";

function QuestionSection(props) {
    const {
        score,
        setScore,
        setShowScore,
        questionArr,
        randomQuestions,
        currentQuestion,
        setCurrentQuestion,
        selectedOpt,
        setSelectedOpt,
    } = props;

    return (
        <>
            {questionArr.length <= 0 ? (
                <button
                    onClick={() => {
                        randomQuestions();
                    }}
                    className="startBtn"
                >
                    Start the game!
                </button>
            ) : (
                <div className="section">
                    <div class="question-section">
                        <div className="question-count-wrap">
                            <div className="question-count">
                                <span>Question</span>
                                <p>
                                    {currentQuestion + 1} / {questionArr.length}
                                </p>
                            </div>
                        </div>
                        <div className="flex-wrap">
                            <div
                                className="question-title"
                                key={currentQuestion}
                            >
                                <h3>
                                    {questionArr[currentQuestion].question} ?
                                </h3>
                            </div>
                            {/* 選項 render */}
                            <OptionWrap
                                currentQuestion={currentQuestion}
                                selectedOpt={selectedOpt}
                                setSelectedOpt={setSelectedOpt}
                                questionArr={questionArr}
                            />

                            {/* 下一頁按鈕 */}
                            <div className="nextBtnWrap">
                                <button
                                    className="nextBtn"
                                    key={"next" + currentQuestion}
                                    onClick={() => {
                                        const nextQuestion =
                                            currentQuestion + 1;
                                        // 如果目前這題有選答案才可以下一題
                                        if (
                                            selectedOpt.Q === currentQuestion &&
                                            selectedOpt.opt > -1
                                        ) {
                                            // 算分數
                                            if (
                                                questionArr[currentQuestion]
                                                    .ans === selectedOpt.opt
                                            ) {
                                                setScore(score + 1);
                                            }
                                            // console.log(selectedOpt);

                                            if (
                                                nextQuestion <
                                                questionArr.length
                                            ) {
                                                setCurrentQuestion(
                                                    nextQuestion
                                                );
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
            )}
        </>
    );
}

export default QuestionSection;
