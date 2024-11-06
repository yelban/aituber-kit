console.log('bcq.js');

const bcqIndex = {
  "p000": 1,
  "p001": 2,
  "p002": 3,
  "p010": 4,
  "p011": 5,
  "p012": 6,
  "p020": 7,
  "p021": 8,
  "p022": 9,
  "P100": 10,
  "p101": 11,
  "p102": 12,
  "p110": 13,
  "p111": 14,
  "p112": 15,
  "p120": 16,
  "p121": 17,
  "p122": 18,
  "p200": 19,
  "p201": 20,
  "p202": 21,
  "p210": 22,
  "p211": 23,
  "p212": 24,
  "p220": 25,
  "p221": 26,
  "p222": 27
}

// 改為從 API 讀取 bcq 資料
let bcq = {};

fetch('/api/bcq-data')
  .then(response => response.json())
  .then(data => {
    bcq = data.bcq;
    console.log('bcq data loaded', bcq);
  })
  .catch(error => {
    console.error('Error loading bcq data:', error);
  });

function determinePhysique(data) {
  // 初始化三個數字
  let yangDigit = 0;
  let yinDigit = 0;
  let phlegmDigit = 0;

  // 根據 yang_type 決定第一個數字
  if (data.yang_type < 1) {
    yangDigit = 0;
  } else if (data.yang_type < 2) {
    yangDigit = 1;
  } else {
    yangDigit = 2;
  }

  // 根據 yin_type 決定第二個數字
  if (data.yin_type < 1) {
    yinDigit = 0;
  } else if (data.yin_type < 2) {
    yinDigit = 1;
  } else {
    yinDigit = 2;
  }

  // 根據 phlegm_type 決定第三個數字
  if (data.phlegm_type < 1) {
    phlegmDigit = 0;
  } else if (data.phlegm_type < 2) {
    phlegmDigit = 1;
  } else {
    phlegmDigit = 2;
  }

  // 組合成 physique 字串
  const physique = `p${yangDigit}${yinDigit}${phlegmDigit}`;
  return physique;
}

function padZero(num) {
  return String(num).padStart(2, '0');
}

// function onCanvasResize(canvas, callback) {
//   let lastWidth = canvas.width;
//   let lastHeight = canvas.height;

//   function checkSize() {
//       if (canvas.width !== lastWidth || canvas.height !== lastHeight) {
//           lastWidth = canvas.width;
//           lastHeight = canvas.height;
//           callback();
//       }
//   }

//   window.addEventListener('resize', checkSize);

//   // 可選：添加 MutationObserver 來監聽 DOM 變化
//   const observer = new MutationObserver(checkSize);
//   observer.observe(canvas, {
//       attributes: true,
//       attributeFilter: ['width', 'height']
//   });

//   // 可選：定期檢查大小變化
//   setInterval(checkSize, 1000);
// }

// var canvases = document.querySelectorAll('canvas');

// if (canvases.length > 0) {
//   onCanvasResize(canvases[0], function() {
//       console.log('Canvas 大小已變化');
//       console.log('新寬度:', canvases[0].width);
//       console.log('新高度:', canvases[0].height);

//       var canvases = document.querySelectorAll('canvas');
//       canvases[0].style.marginTop = '25px';
//   });
// }

// 創建彈窗表單的HTML內容
var formContent = `
  <form>
    <div class="caption-area bg-white rounded-8" style="border: 1px solid #002864;">
      <div class="mt-4 relative">
        <label for="name" class="block text-[#ababab] -mb-8 ml-[10px] relative z-10" style="font-size: 12px;">稱呼</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          class="w-full bg-[#EDEFF2] rounded-lg focus:outline-none focus:ring-0"
          style="
            border: 0px solid #002864;
            border-radius: 8px;
            padding: 6px 12px;
          "
        />
        <button 
          type="button"
          class="absolute right-4 bg-[#9098A3] flex items-center justify-center"
          onclick="this.previousElementSibling.value=''"
          style="
            padding: 4px;           /* 增加內邊距 */
            border-radius: 50%;
            width: 18px;           /* 增加按鈕寬度 */
            height: 18px;          /* 增加按鈕高度 */
            right: 12px;
            top: calc(50% + 0.5rem - 10px);  /* 減少 3px 的偏移 */
          "
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18"             /* 增加 SVG 寬度 */
            height="18"            /* 增加 SVG 高度 */
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2.5"     /* 稍微調整線條粗細 */
            stroke-linecap="round" 
            stroke-linejoin="round"
            style="color: white;"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div class="mt-4 relative">
        <label for="gender" class="block text-[#ababab] -mb-8 ml-[10px] relative z-10" style="font-size: 12px;">性別</label>
        <div class="w-full bg-[#EDEFF2] rounded-lg focus:outline-none focus:ring-0"
          style="
            border: 0px solid #002864;
            border-radius: 8px;
            padding: 6px 12px;
          "
        >
          <div class="flex justify-between">
            <div class="flex items-center flex-1 justify-center">
              <input type="radio" id="male" name="gender" value="M" required>
              <label for="male" class="radio-label ml-4">男性</label>
            </div>
            <div class="flex items-center flex-1 justify-center">
              <input type="radio" id="female" name="gender" value="F" required>
              <label for="female" class="radio-label ml-4">女性</label>
            </div>
          </div>
        </div>
      </div>  
      <div class="mt-4 relative">
        <label for="age" class="block text-[#ababab] -mb-8 ml-[10px] relative z-10" style="font-size: 12px;">年齡:</label>
        <input type="number" id="age" name="age" min="15" max="150" required class="w-full bg-[#EDEFF2] rounded-lg focus:outline-none focus:ring-0"
          style="
            border: 0px solid #002864;
            border-radius: 8px;
            padding: 6px 12px;
          ">
      </div>
      <div class="mt-4 relative">
        <label for="height" class="block text-[#ababab] -mb-8 ml-[10px] relative z-10" style="font-size: 12px;">身高:</label>
        <input type="number" id="height" name="height" min="100" max="250" required class="w-full bg-[#EDEFF2] rounded-lg focus:outline-none focus:ring-0"
          style="
            border: 0px solid #002864;
            border-radius: 8px;
            padding: 6px 12px;
          ">
      </div>
      <div class="mt-4 relative">
        <label for="weight" class="block text-[#ababab] -mb-8 ml-[10px] relative z-10" style="font-size: 12px;">體重:</label>
        <input type="number" id="weight" name="weight" min="15" max="250" required class="w-full bg-[#EDEFF2] rounded-lg focus:outline-none focus:ring-0"
          style="
            border: 0px solid #002864;
            border-radius: 8px;
            padding: 6px 12px;
          ">
      </div>
      <div class="mt-16 relative">
        <button id="closeBtn" class="float-right bg-[#EDEFF2] rounded-lg hover:bg-[#002864] hover:text-white"
          style="
            border: 0px solid #002864;
            border-radius: 10px;
            padding: 6px 12px;
          ">完成</button>
      </div>
    </div>
  </form>
`;

// 創建彈窗元素
var popup = document.createElement("div");
popup.id = "popup";
// popup.style.position = 'absolute';
// popup.style.zIndex = '100';
popup.style.cssText = `
  position: absolute;
  z-index: 100;
`;

popup.classList.add("popup", "bottom-[100px]", "w-[50%]");

// var left = (document.documentElement.clientWidth - popup.offsetWidth) / 2;
// var top = 150;
// popup.style.left = left + 'px';
// popup.style.top = top + 'px';
popup.innerHTML = formContent;

// 將彈窗添加到文檔中
document.body.appendChild(popup);

var popupDiv = document.getElementById("popup");
// popupDiv.style.left = '50%';
// popupDiv.style.transform = 'translateX(-50%)';
// popupDiv.style.top = '100px';
// popupDiv.classList.add("bg-base"); 

function showQuestion(index, data) {
  var question = data[index];
  console.log('question', question);
  var questionElement = document.createElement('div');
  questionElement.classList.add("question", "p-16");
  
  // 決定按鈕標籤
  var buttonLabel = index === data.length - 1 ? "提交" : "下一題";

  // 建立具有按鈕形狀的選項，套用 Tailwind CSS 樣式
  var optionsHTML = question.options.map(option => `
    <button class="option-button w-full hover:bg-[#004099] hover:text-white focus:bg-[#004099] focus:text-white active:bg-[#004099] active:text-white" data-value="${option.value}">
      <div class="flex items-center">
      <div class="w-[30px] flex-shrink-0">
        <span class="inline-flex items-center justify-center w-6 h-6 min-w-[24px] min-h-[24px] bg-white text-[#004099] rounded-[50%] font-bold" style="aspect-ratio: 1">${option.value}</span>
      </div>
      <div class="text-left flex-grow pl-4">
        ${option.label}
      </div>
    </div>
    </button>
  `).join('');

  questionElement.innerHTML = `
    <div>
      <div class="options grid grid-cols-1 gap-4">${optionsHTML}</div>
    </div>
    <button id="nextBtn" class="mt-4 option-button font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" style="display:none;">${buttonLabel}</button>
  `;

  // questionElement.innerHTML = `
  //     <h3>${question.question}</h3>
  //     <div>
  //       ${question.options.map(option => `
  //         <label>
  //           <input type="radio" name="answer" value="${option.value}" required>
  //           ${option.label}
  //         </label>
  //       `).join('')}
  //     </div>
  //     <button id="nextBtn">${buttonLabel}</button>
  //   `;

  // 清除上一題的內容
  form.innerHTML = '';

  // 顯示當前題目
  form.appendChild(questionElement);

  // 發送 TTS API 請求
  fetchTTS(question.question, function() {
    console.log('語音播放結束', question.question);

      const answerInput = document.getElementById('answerInput');
      if (answerInput) {
        // 設置 data-input-type 屬性的值 = name
        answerInput.setAttribute('data-answer-type', 'answer');
      }

      // 找到麥克風按鈕並觸發點擊
      const micButton = document.getElementById('voiceInput');
      if (micButton) {
        micButton.click();
      }
  });

  // 為每個選項按鈕添加點擊事件
  document.querySelectorAll('.option-button').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      
      // 存儲選擇的答案
      var selectedOption = this.getAttribute('data-value');
      var answers = JSON.parse(sessionStorage.getItem('answers')) || {};
      answers[question.id] = parseInt(selectedOption, 10);
      sessionStorage.setItem('answers', JSON.stringify(answers));

      setTimeout(() => {
        // 清除當前題目內容
        form.innerHTML = '';

        // 顯示下一題或完成處理
        index++;
        if (index < data.length) {
          setTimeout(() => {
            showQuestion(index, data);
          }, 100);
        } else {
          console.log('問卷完成');
          // TODO: 進行問卷完成後的處理，例如提交資料至伺服器等
          submitAnswers();  // 假設有一個函數來處理最終的提交
        }
      }, 500);
    });
  });

  // 如果是第一題，清空 sessionStorage 中的 answers
  if (index === 0) {
    sessionStorage.removeItem('answers');
  }
}

function submitAnswers() {
  // 從 sessionStorage 讀取數據
  var userId = sessionStorage.getItem("userid");
  var age = sessionStorage.getItem("age");
  var gender = sessionStorage.getItem("gender");
  var height = sessionStorage.getItem("height");
  var weight = sessionStorage.getItem("weight");
  var answers = JSON.parse(sessionStorage.getItem("answers")); // 確保解析成對象

  // 組合要發送的數據
  var postData = {
    user_id: userId,
    age: parseInt(age, 10), // 確保轉換成數字
    sex: gender,
    // 假設 height 和 weight 是固定值，或者也可以從某處讀取
    height: parseInt(height, 10), 
    weight: parseInt(weight, 10),
    answers: answers
  };

  console.log('postData', postData);

  // 使用 fetch 發送 POST 請求
  fetch('https://dev-api.auohealth.com/api/v1/bcqs/type/inference', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);

    const physique = determinePhysique(data);

    // 清除當前題目內容
    // form.innerHTML = '';
    popup.remove();

    // 建立一個新的 div 元素
    var doneDiv = document.createElement('div');
    doneDiv.id = 'done';

    // 設置 div 的寬度和高度
    doneDiv.style.width = '457px';
    doneDiv.style.height = '90px';

    // 設置 div 的位置為絕對定位
    doneDiv.style.position = 'absolute';

    // 設置 div 的上下左右距離都為 50%，使其在頁面中心
    doneDiv.style.top = '50px';
    doneDiv.style.left = '50%';
    doneDiv.style.background = `linear-gradient(
      135deg,
      rgba(40, 80, 135, 0.4) 0%,
      rgba(40, 80, 135, 0.6) 100%
    )`;
    doneDiv.style.backgroundImage = `linear-gradient(
      135deg,
      rgba(40, 80, 135, 0.4) 0%,
      rgba(40, 80, 135, 0.6) 100%
    ),
    url('data:image/png;base64,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')
    `;
    doneDiv.style.color = 'aliceblue';
    doneDiv.style.fontSize = '1.25em';
    doneDiv.style.zIndex = 1001;
    doneDiv.style.padding = '10px';

    // 使用 transform 屬性將 div 向上和向左移動自身寬高的一半，實現真正的居中
    doneDiv.style.transform = 'translateX(-50%)';

    doneDiv.innerHTML = '<div>恭喜你完成體質問卷<br />讓我們來看看今日的建議吧！</div>';

    fetchTTS("恭喜你完成體質問眷!讓我們來看看今日的建議吧。");

    // 將新的 div 元素添加到頁面的 body 中
    document.body.appendChild(doneDiv);

    // 創建一個新的 div 元素
    var newDiv = document.createElement('div');
    newDiv.id = "report";

    // 設置 div 的寬度和高度
    newDiv.style.width = '457px';
    newDiv.style.height = '577px';
    // newDiv.style.width = '1600px';
    // newDiv.style.height = '2020px';

    // 設置 div 的背景圖片
    newDiv.style.backgroundImage = 'url("/gif/BG-blue.gif")';

    // 設置 div 的背景圖片尺寸
    newDiv.style.backgroundSize = '457px 577px';

    // 設置 div 的背景圖片重複方式和位置
    newDiv.style.backgroundRepeat = 'no-repeat';
    newDiv.style.backgroundPosition = 'center';

    // 設置 div 的位置為絕對定位
    newDiv.style.position = 'absolute';

    // 設置 div 的上下左右距離都為 50%，使其在頁面中心
    newDiv.style.top = '50%';
    newDiv.style.left = '50%';

    // 使用 transform 屬性將 div 向上和向左移動自身寬高的一半，實現真正的居中
    newDiv.style.transform = 'translate(-50%, -50%)';

    // 創建另一個新的 div 元素
    var innerDiv = document.createElement('div');
    innerDiv.id = "innerDiv";
    // 向 innerDiv 添加一些內容

    var name = sessionStorage.getItem("name");
    const idx = bcqIndex[physique];
    const result = bcq[idx.toString()];

    let bcqTypeA = "BodyConstitution-blueA.gif";
    switch (result["陽虛"]) {
      case "正常":
        bcqTypeA = "BodyConstitution-blueA.gif";
        break;
      case "傾向":
        bcqTypeA = "BodyConstitution-blueB1.gif";
        break;
      case "體質":
        bcqTypeA = "BodyConstitution-blueC1.gif";
        break;
    }

    let bcqTypeB = "BodyConstitution-blueA.gif";
    switch (result["陰虛"]) {
      case "正常":
        bcqTypeB = "BodyConstitution-blueA.gif";
        break;
      case "傾向":
        bcqTypeB = "BodyConstitution-blueB2.gif";
        break;
      case "體質":
        bcqTypeB = "BodyConstitution-blueC2.gif";
        break;
    }

    let bcqTypeC = "BodyConstitution-blueA.gif";
    switch (result["痰瘀"]) {
      case "正常":
        bcqTypeC = "BodyConstitution-blueA.gif";
        break;
      case "傾向":
        bcqTypeC = "BodyConstitution-blueB3.gif";
        break;
      case "體質":
        bcqTypeC = "BodyConstitution-blueC3.gif";
        break;
    }

    // var today = new Date();
    // var day = String(today.getDate());

    // var dayHant = "農民曆-2406-date0621.png";
    // switch (day) {
    //   case "21":
    //     dayHant = "農民曆-2406-date0621.png";
    //     break;
    //   case "22":
    //     dayHant = "農民曆-2406-date0622.png";
    //     break;
    //   case "23":
    //     dayHant = "農民曆-2406-date0623.png";
    //     break;
    //   case "24":
    //     dayHant = "農民曆-2406-date0624.png";
    //     break;
    // }

    var today = new Date();
    var day = today.getDate();

    var dayHant = `農民曆-2406-date06${day.toString().padStart(2, '0')}.png`;

    var bcqDesc = "農民曆-2406-blue" + padZero(idx) + ".png";

    var bcqYes = result["宜排版"];

    var bcqNo = result["忌排版"];


    innerDiv.innerHTML = `<div>
    <div id="bcq-name" class="bcq-result">${name}</div>
    <div id="bcq-day-hant" claee="bcq-result"><img src="/png/${dayHant}"></div>
    <div id="bcq-type-a" class="bcq-result"><img src="/gif/${bcqTypeA}"></div>
    <div id="bcq-type-b" class="bcq-result"><img src="/gif/${bcqTypeB}"></div>
    <div id="bcq-type-c" class="bcq-result"><img src="/gif/${bcqTypeC}"></div>
    <div id="bcq-desc" class="bcq-result"><img src="/png/${bcqDesc}"></div>
    <div id="bcq-yes" class=bcq-result">${bcqYes}</div>
    <div id="bcq-no" class=bcq-result">${bcqNo}</div>
    </div>`;

    // 將 innerDiv 添加到 newDiv 中
    newDiv.appendChild(innerDiv);

    // 將新的 div 元素添加到頁面的 body 中
    document.body.appendChild(newDiv);

    var canvas = document.querySelector('canvas');
    
    // 確認 canvas 元素存在
    if (canvas) {
      // 獲取 canvas 的父元素
      var parent = canvas.parentNode;
      
      // 從父元素中移除 canvas
      parent.removeChild(canvas);
      
      console.log('第一個 Canvas 已刪除');
    } else {
        console.log('找不到 canvas 元素');
    }

  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

// 全域音頻對象
let currentAudio = null;

function fetchTTS(text, callback) {
  console.log('fetchTTS(text)', text);

  showDialogBox(text);

  // 如果有正在播放的音頻，先停止它
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  hideAssistantText();

  // 替換文字：將 "乾" 替換為 "甘"，將 "重重的" 替換為 "眾眾的"
  const processedText = text
    .replace(/乾/g, '甘')
    .replace(/重重的/g, '仲仲的')
    .replace(/質/g, '值')
    .replace(/吧/g, '巴');

  const apiUrl = 'https://tts.ai.auo.to/tts';
  const data = {
    character: "1.sunny",
    text: processedText
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'audio/wav'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.blob();
  })
  .then(blob => {
    const url = URL.createObjectURL(blob);
    // 創建新的音頻對象並賦值給全域變數
    currentAudio = new Audio(url);
    currentAudio.play();

    // 監聽播放結束事件，清理資源
    currentAudio.onended = function() {
      URL.revokeObjectURL(url);
      currentAudio = null;

      // 如果有提供 callback 函數就執行它
      if (typeof callback === 'function') {
        callback();
      }
    };
  })
  .catch(error => {
    console.error('Error fetching TTS:', error);
  });
}

// 在頁面載入時隱藏 canvas 元素
const canvasElement = document.querySelector('canvas')

if (canvasElement) {
  canvasElement.style.display = 'none'
}

// 獲取表單元素
var form = popupDiv.querySelector("form");

popupDiv.style.display = 'none';

var btn = document.getElementById("closeBtn");

// 修改覆蓋層樣式和內容
const overlay = document.createElement('div');
overlay.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;  // 縱向排列
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// 創建一個容器來包裝主要內容
const contentContainer = document.createElement('div');
contentContainer.style.cssText = `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;  // 設定容器高度
  text-align: center;
`;

// 修改標題樣式
const title = document.createElement('div');
title.style.cssText = `
  color: #002964;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;
title.textContent = '中醫體質智析';

// 創建說明文字
const description = document.createElement('div');
description.style.cssText = `
  color: #002964;
  font-size: 1rem;
  text-align: center;
  // margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;
description.textContent = '此體驗將蒐集相關個人資訊(毋須真實姓名)與身體狀況';

// 創建提示文字
const hint = document.createElement('div');
hint.style.cssText = `
  color: #002964;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 20px;
  // margin-top: -20px;
`;
hint.textContent = '請先閱讀並同意下方個資同意書，再進行體驗';

// 修改連結樣式
const link = document.createElement('div');
link.style.cssText = `
  color: #002964;
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: underline;
  text-underline-offset: 3px;  // 添加這行來增加底線距離
  cursor: pointer;  // 這邊的游標設定好像沒有作用
  // margin-bottom: 20px;
`;
link.style.cursor = 'pointer' // 確保游標為 pointer
link.textContent = '閱讀個人資料蒐集、處理及利用同意書';

// 創建免責聲明
const disclaimer = document.createElement('div');
disclaimer.style.cssText = `
  color: #002964;
  font-size: 0.8rem;
  text-align: center;
  // position: absolute;
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1001;  // 確保顯示在其他元素之上
  // width: 100%;    // 確保寬度為 100%
  // max-width: 90%; // 可選：設定最大寬度，避免在特寬螢幕上文字過長
  padding: 0 20px; // 可選：增加左右內邊距
`;
disclaimer.style.width = '100%';
disclaimer.style.color = '#002964';
disclaimer.textContent = '本體驗僅供瞭解初步體質狀況，無法取代醫療診斷';

document.body.appendChild(disclaimer);

// 將元素添加到容器中，而不是直接添加到覆蓋層
contentContainer.appendChild(title);
contentContainer.appendChild(description);
contentContainer.appendChild(hint);
contentContainer.appendChild(link);

// 將容器和免責聲明添加到覆蓋層
overlay.appendChild(contentContainer);

// 創建同意書對話框
const privacyDialog = document.createElement('div');
privacyDialog.style.cssText = `
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 600px;
  background: transparent;
  // background-color: rgba(219,215,209, 0.5);
  z-index: 1001;
`;

// 添加同意書內容
privacyDialog.innerHTML = `
  <div style="
    background: #002864;
    color: white;
    padding: 40px;
    border-radius: 20px;
    font-size: 11px;
    line-height: 1.6;
  ">
    <h2 style="
      font-size: 1.2em;
      font-weight: bold;
      margin-bottom: 20px;
    ">個人資料蒐集、處理及利用同意書</h2>
    
    <div style="margin-bottom: 5px;">
      友達耘康股份有限公司今為「智慧中醫體質諮詢平台」<br/>
      辦理中醫體質諮詢體驗、產出體質量表、串聯至使用者帳號等客戶服務以及統計和研究事項(以下簡稱「蒐集目的」)，將蒐集您的性別、年齡、身高體重與健康狀況資料。並依個人資料保護法告知您資料利用之期間、地區、對象及方式如下：
    </div>
    
    <div style="margin-bottom: 3px;">(1)期間：至蒐集目的消滅時止。</div>
    <div style="margin-bottom: 3px;">(2)地區：中華民國境內及境外。</div>
    <div style="margin-bottom: 3px;">(3)對象：友達耘康股份有限公司</div>
    <div style="margin-bottom: 5px;">(4)方式：以自動化機器或其他非自動化之利用方式。</div>
    
    <div style="margin-bottom: 20px;">
      對於您所提供之個人資料，您享有查詢或請求閱覽、請求製給複製本、請求補充或更正、請求停止蒐集、處理或利用、請求刪除之權利，如欲行使前述權利，請聯繫 
      <span style="text-decoration: underline;">Service@auohealth.com</span>。
    </div>
    
    <div style="margin-bottom: 20px;">
      您若拒絕提供相關個人資料，我們無法進行必要之處理作業，致無法提供您相關服務。
    </div>
    
    <div style="margin-bottom: 20px;">
      如果您同意提供相關個人資料，請按下方同意鍵。
    </div>
    
    
  </div>
  <div style="
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
    ">
      <button id="disagreeBtn" style="
        padding: 10px 30px;
        background: #002864;
        color: white;
        border: 2px solid white;
        border-radius: 25px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: bold;
      ">不同意，退出體驗</button>
      
      <button id="agreeBtn" style="
        padding: 10px 50px;
        background: #002864;
        color: white;
        border: 2px solid white;
        border-radius: 25px;
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: bold;
      ">同意</button>
    </div>
`;

// 將對話框添加到文檔中
document.body.appendChild(privacyDialog);

// 添加事件監聽器
link.addEventListener('click', () => {
  privacyDialog.style.display = 'block';
  overlay.style.backgroundColor = 'rgba(255,255,255,1)';
  disclaimer.style.color = '#FFF';
});

// // 添加按鈕點擊事件
// startButton.addEventListener('click', function() {
//   // 淡出效果
//   overlay.style.transition = 'opacity 0.5s ease-out';
//   overlay.style.opacity = '0';

//   popupDiv.style.display = 'block';

//   // 等待淡出動畫完成後移除覆蓋層
//   setTimeout(() => {
//     document.body.removeChild(overlay);
    
//   }, 500);

//   // 播放語音
//   fetchTTS("我是你的中醫體質管家，你叫什麼名？", function() {
//     console.log('語音播放結束');

//     const answerInput = document.getElementById('answerInput');
//     if (answerInput) {
//       // 設置 data-input-type 屬性的值 = name
//       answerInput.setAttribute('data-answer-type', 'name');
//     }

//     // 找到麥克風按鈕並觸發點擊
//     const micButton = document.getElementById('voiceInput');
//     if (micButton) {
//       micButton.click();
//     }

//     // 找到姓名輸入框並設置焦點
//     const nameInput = document.querySelector('input[name="name"]');
//     if (nameInput) {
//       nameInput.focus();
//     }
//   });
// });
// fetchTTS("哈囉您好！我是你的中醫體質管家，想要了解今天的身體體質建議嗎？一起來檢視看看吧！");

// 表單提交事件處理函數
btn.addEventListener("click", function (event) {
  event.preventDefault(); // 防止表單提交刷新頁面

  // var canvases = document.querySelectorAll('canvas');
  // canvases[0].style.marginTop = '50px';

  const answerInput = document.getElementById('answerInput');
  if (answerInput) {
    answerInput.setAttribute('data-answer-type', 'answer2');
  }

  // 獲取年齡和性別的值
  var name = form.elements["name"].value;
  var age = form.elements["age"].value;
  var gender = form.elements["gender"].value;
  var height = form.elements["height"].value;
  var weight = form.elements["weight"].value;

  // 檢查三個欄位是否都不為空
  if (name.trim() !== "" && age.trim() !== "" && gender.trim() !== "") {
    // 將使用者輸入的資訊儲存到 sessionStorage
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("age", age);
    sessionStorage.setItem("gender", gender);
    sessionStorage.setItem("height", height);
    sessionStorage.setItem("weight", weight);

    // 獲取當前的時間戳
    var timestamp = new Date().getTime();
    // 生成 userid
    var userid = `${name}-${age}-${gender}-${timestamp}`;
    // 將 userid 存入 sessionStorage
    sessionStorage.setItem("userid", userid);

    // 使用 Fetch API 發送 GET 請求到遠端 API
    fetch(`https://dev-api.auohealth.com/api/v1/bcqs/questions?sex=${gender}&age=${age}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('請求失敗');
      })
      .then(data => {
        // console.log(data, typeof data, data.data[0]);
        // console.log('原始資料:', JSON.stringify(data, null, 2));

        // 進行文字替換
        const replacedData = data.data.map(item => {
          const originalQuestion = item.question;
          const replacedQuestion = item.question
            .replace(/^我/g, '你')
            .replace(/我/g, '你');
          // console.log('替換前:', originalQuestion);
          // console.log('替換後:', replacedQuestion);
          return {
            ...item,
            question: replacedQuestion
          };
        });

        console.log('替換後資料:', JSON.stringify(replacedData, null, 2));

        // 將 API 資料儲存到 sessionStorage
        sessionStorage.setItem('questions', JSON.stringify(replacedData));


        // 清除表單內容
        // TODO: { 清除表單內容 }
        form.reset();

        // 顯示第一個問題
        // { 顯示第一個問題 與答案選項，使用者選擇答案後，清除當前題目，顯示下一題 }
        var currentQuestionIndex = 0;

        showQuestion(currentQuestionIndex, replacedData);
      })
      .catch(error => {
        console.error('發生錯誤:', error);
      });
  } else {
    // 如果有欄位為空,顯示提示訊息
    alert("請填寫所有欄位!");

    // 關閉彈窗
    // document.body.removeChild(popup);
  }
});


// 將覆蓋層添加到文檔中
document.body.appendChild(overlay);

const disagreeBtn = document.getElementById('disagreeBtn');

// 添加滑鼠懸停效果
disagreeBtn.onmouseover = function() {
  this.style.backgroundColor = '#003e95';
};
disagreeBtn.onmouseout = function() {
  this.style.backgroundColor = '#002964';
};

// 添加按鈕事件處理
disagreeBtn.addEventListener('click', () => {
  window.location.href = '/'; // 或其他退出處理邏輯
});

const agreeBtn = document.getElementById('agreeBtn');

// 添加滑鼠懸停效果
agreeBtn.onmouseover = function() {
  this.style.backgroundColor = '#003e95';
};
agreeBtn.onmouseout = function() {
  this.style.backgroundColor = '#002964';
};

agreeBtn.addEventListener('click', () => {
  // 淡出效果
  overlay.style.transition = 'opacity 0.5s ease-out';
  overlay.style.opacity = '0';

  privacyDialog.style.display = 'none';
  // popupDiv.style.display = 'block';
  // overlay.style.display = 'none';

  popupDiv.style.display = 'block';

  disclaimer.style.color = '#002964';

  // 顯示 canvas 元素
  if (canvasElement) {
    canvasElement.style.display = 'block'
  }

  // 等待淡出動畫完成後移除覆蓋層
  setTimeout(() => {
    document.body.removeChild(overlay);
    
  }, 500);

  // 播放語音
  // const text = "我是你的中醫體質管家，請問你叫什麼名字？";
  const text = "我是您的中醫體質諮詢師，小若。 您想了解今天的體質狀況嗎？ 我會詢問您幾個問題，最後提供您今天的體質農民曆。";
  // showDialogBox(text);
  fetchTTS(text, function() {
    console.log('語音播放結束');

    const answerInput = document.getElementById('answerInput');
    if (answerInput) {
      // 設置 data-input-type 屬性的值 = initial
      answerInput.setAttribute('data-answer-type', 'initial');
    }

    // // 找到麥克風按鈕並觸發點擊
    // const micButton = document.getElementById('voiceInput');
    // if (micButton) {
    //   micButton.click();
    // }

    // // 找到姓名輸入框並設置焦點
    // const nameInput = document.querySelector('input[name="name"]');
    // if (nameInput) {
    //   nameInput.focus();
    // }

    fetchTTS("為了增加體質分類的準確性，請協助我完成基本資料填寫。首先請問您怎麼稱呼。", function() {
      console.log('語音播放結束');

      const answerInput = document.getElementById('answerInput');
      console.log('answerInput:', answerInput);
      if (answerInput) {
        // 設置 data-input-type 屬性的值 = name
        answerInput.setAttribute('data-answer-type', 'name');
      }

      // 找到麥克風按鈕並觸發點擊
      const micButton = document.getElementById('voiceInput');
      console.log('micButton:', micButton);
      if (micButton) {
        micButton.click();
      }

      // 找到姓名輸入框並設置焦點
      const nameInput = document.querySelector('input[name="name"]');
      console.log(nameInput);
      if (nameInput) {
        nameInput.focus();
      }
    });
  });
});

// 創建左側名稱標籤
const agentTag = document.createElement('div');
agentTag.textContent = '歐凱若';
agentTag.id = 'agentTag';
agentTag.style.cssText = `
  position: fixed;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgb(72,238,238);
  color: rgb(0,128,128);
  padding: 7px 15px;
  border-radius: 12px;
  border: 1px solid rgb(0,128,128);
  font-size: 0.9rem;
  font-weight: bold;
  z-index: 1000;
  display: none;
`;

// 將名稱標籤添加到文檔中
document.body.appendChild(agentTag);

// 創建對話框
const dialogBox = document.createElement('div');
dialogBox.id = 'dialogBox';
dialogBox.textContent = '我會詢問您幾個問題，最後提供專屬今天的體質農民曆。';
dialogBox.style.cssText = `
  position: absolute;
  left: 10px;
  background-color: white;
  color: rgb(0, 128, 128);
  padding: 7px 15px;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid rgb(0, 128, 128);
  width: 45%;
  max-width: 90%;
  line-height: 1.5;
  z-index: 1000;
  white-space: wrap;
  display: none;
`;

// 將對話框添加到文檔中
document.body.appendChild(dialogBox);

// 將函數掛載到 window 物件
window.bcqFunctions = {
  fetchTTS: fetchTTS,
  // 其他需要暴露的函數...
};

function showDialogBox(text) {
  const dialogBox = document.getElementById('dialogBox')
  const agentTag = document.getElementById('agentTag')
  
  if (dialogBox && agentTag) {
    // 設置初始透明度和位置
    dialogBox.style.opacity = '0'
    agentTag.style.opacity = '0'
    dialogBox.style.transform = 'translateX(-50px)'
    
    // 顯示元素
    dialogBox.style.display = 'block'
    agentTag.style.display = 'block'

    // 設置 dialogBox 位置
    if (!window.isDialogBoxPositionSet) {
      const agentTagElement = document.getElementById('agentTag')
      if (agentTagElement) {
        const agentTagRect = agentTagElement.getBoundingClientRect()
        console.log(agentTagRect)
        dialogBox.style.top = `${agentTagRect.top + 50}px`
        window.isDialogBoxPositionSet = true
      }
    }
    
    // 設置過渡效果 - 同時處理透明度和位置的過渡
    dialogBox.style.transition = 'opacity 0.5s ease-in, transform 0.5s ease-out'
    agentTag.style.transition = 'opacity 0.5s ease-in'
    
    // 設置文字內容
    dialogBox.textContent = text
    
    // 使用 setTimeout 確保過渡效果生效
    setTimeout(() => {
      dialogBox.style.opacity = '1'
      agentTag.style.opacity = '1'
      dialogBox.style.transform = 'translateX(0)'
    }, 10)
  }
}

function hideAssistantText() {
  const assistantText = document.getElementById('assistantText');
  if (assistantText) {
    assistantText.style.display = 'none';
  }
}