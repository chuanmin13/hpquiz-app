import { useState } from "react";

function ScoreSection(props) {
    const { score, qLength } = props;
    // replayBtn 動畫
    const [replayAni, setReplayAni] = useState("replayBtn");

    return (
        <>
            <div className="section">
                {/* 答題完呈現總分的畫面 */}
                <div className="score-section">
                    <h3>
                        You had finished the Harry Potter quiz!
                        <br />
                        已完成哈利波特小測驗!
                    </h3>
                    <p className="final-score">
                        You scored {score} out of {qLength}
                    </p>
                    <h4 className="final-score">您得到的總分為 {score} 分！</h4>
                    <button
                        className={replayAni}
                        onClick={() => {
                            setReplayAni("replayBtn run");
                            setTimeout(() => {
                                window.location.reload();
                            }, 500);
                        }}
                    >
                        Play again
                    </button>
                </div>
            </div>
        </>
    );
}

export default ScoreSection;
