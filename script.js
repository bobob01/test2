// 幹話資料庫 (你可以自己無限新增)
const bullshitList = [
    "在哪裡跌倒，就在哪裡躺下。",
    "努力不一定會成功，但不努力一定很輕鬆。",
    "小時候胖不是胖，是真的很胖。",
    "長得醜不是你的錯，但出來嚇人就是你的不對了。",
    "錢不是萬能的，是九千九百九十九能。",
    "不要看別人表面上過得好，其實他們私底下過得更好。",
    "就算大雨讓這座城市顛倒，公司還是會算你遲到。",
    "你以為有錢人很快樂嗎？他們的快樂你根本想像不到。",
    "有時候你不努力一下，你都不知道什麼叫絕望。",
    "萬事開頭難，中間難，結尾也難。",
    "雖然你脾氣差，但你長得醜啊！",
    "人生就是起起落落落落落落落落..."
];

// 取得 HTML 元素
const generateBtn = document.getElementById('generate-btn');
const textElement = document.getElementById('bullshit-text');

// 綁定按鈕點擊事件
generateBtn.addEventListener('click', () => {
    // 1. 先把文字變透明 (觸發 CSS 的 transition)
    textElement.style.opacity = 0;
    
    // 2. 等待 300 毫秒後 (讓透明動畫跑完)，換字並顯示
    setTimeout(() => {
        // 隨機抽取一個索引值
        const randomIndex = Math.floor(Math.random() * bullshitList.length);
        
        // 替換文字
        textElement.textContent = bullshitList[randomIndex];
        
        // 把文字變回不透明
        textElement.style.opacity = 1;
    }, 300); 
});
