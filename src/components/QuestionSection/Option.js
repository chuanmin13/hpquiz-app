function Option(props) {
    return (
        <>
            <button
                key={i}
                onClick={() => {
                    setSelectedOpt({
                        Q: currentQuestion,
                        opt: i,
                    });
                }}
                className={
                    selectedOpt.Q === currentQuestion && selectedOpt.opt === i
                        ? "optionBtn selected"
                        : "optionBtn"
                }
            >
                {o.optText}
            </button>
        </>
    );
}

export default Option;
