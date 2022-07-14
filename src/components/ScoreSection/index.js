function ScoreSection(props) {
    const { score, qLength } = props;

    return (
        <>
            <div className="section">
                {/* 答題完呈現總分的畫面 */}
                <div className="score-section">
                    <h3>You had finished the Harry Potter quiz!</h3>
                    <p>
                        You scored {score} out of {qLength}
                    </p>
                    <button
                        className="replayBtn"
                        // onClick={() => handleReplayBtn()}
                    >
                        Play again
                    </button>
                </div>
            </div>
        </>
    );
}

export default ScoreSection;
