// 模拟实时比分数据
const scores = [
    { match: "巴萨 vs 皇马", score: "2:1" },
    { match: "曼联 vs 曼城", score: "1:3" },
    { match: "尤文 vs 国米", score: "0:0" }
];

// 动态渲染比分
document.addEventListener("DOMContentLoaded", () => {
    const scoresDiv = document.getElementById("scores");
    scoresDiv.innerHTML = scores
        .map(match => `<p>${match.match}: <strong>${match.score}</strong></p>`)
        .join("");
});
