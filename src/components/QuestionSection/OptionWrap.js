function OptionWrap(props) {
    const { currentQuestion, selectedOpt, setSelectedOpt, questionArr } = props;

    return (
        <>
            <div className="option-wrap">
                {questionArr[currentQuestion].options.map((o, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            setSelectedOpt({
                                Q: currentQuestion,
                                opt: i,
                            });
                        }}
                        className={
                            selectedOpt.Q === currentQuestion &&
                            selectedOpt.opt === i
                                ? "optionBtn selected"
                                : "optionBtn"
                        }
                    >
                        {o.optText}
                    </button>
                ))}
            </div>
        </>
    );
}

export default OptionWrap;
