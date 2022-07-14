import { useState } from "react";

// 對答案 & 分數累計
function handleAnsOptionClick(isCorrect) {
    const [score, setScore] = useState(0);

    if (isCorrect) {
        const newScore = score + 1;
        setScore(newScore);
    }
}

export default handleAnsOptionClick;
