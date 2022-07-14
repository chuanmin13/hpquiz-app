// 重玩遊戲

const handleReplayBtn = () => {
    document.querySelector(".replayBtn").classSet("run");
    setTimeout(() => {
        window.location.reload();
    }, 500);
};

export default handleReplayBtn;
