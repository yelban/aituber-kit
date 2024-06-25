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

const bcq = {
  "1": {
      "陽虛": "正常",
      "陰虛": "正常",
      "痰瘀": "正常",
      "類型簡述": "1.陽虛方面正常＋陰虛方面正常＋痰瘀方面正常",
      "運動養生建議": "調氣和神法",
      "當季建議水果參考": "隨意！",
      "傳統藥膳參考": "都行！",
      "現代食療參考": "輕鬆吃！",
      "備註": "隨心所欲吃！吃得開心就好！記得運動！",
      "情緒": "情緒穩定，無明顯不適",
      "宜": "十六蹲",
      "宜排版": "萬事皆宜，繼續保持！",
      "忌": "諸事不忌！",
      "忌排版": "諸事不忌，只忌破壞生活平衡。",
      "金句": "明天的事不需要憂慮，因為我們後天就會知道了。",
      "金句排版Y": "Now Balance\n明天的事無需憂慮"
  },
  "2": {
      "陽虛": "正常",
      "陰虛": "正常",
      "痰瘀": "傾向",
      "類型簡述": "2.陽虛方面正常＋陰虛方面正常＋有痰瘀傾向",
      "運動養生建議": "拍式",
      "當季建議水果參考": "葡萄、芭樂、木瓜",
      "傳統藥膳參考": "薏仁蓮子湯",
      "現代食療參考": "蒟蒻絲酸辣湯",
      "備註": "避免生冷冰涼、肥膩黏滯食物的飲食。",
      "情緒": "偶爾情緒波動，易煩躁或抑鬱",
      "宜": "拍式\n吃正餐",
      "宜排版": "早午晚的正餐，吃好吃飽吃滿滿！\n還想要動一動？點我看看<a href='https://www.youtube.com/watch?v=UYYtdJf3wcA' target='_blank'>(拍式)適合的活動</a>！",
      "忌": "吃零食",
      "忌排版": "三餐已經吃好吃滿，就不要再讓你的胃吃零食了！",
      "金句": "江湖在走，脂肪要有。",
      "金句排版Y": "江湖在走，\n肌肉脂肪都要有。"
  },
  "3": {
      "陽虛": "正常",
      "陰虛": "正常",
      "痰瘀": "體質",
      "類型簡述": "3.陽虛方面正常＋陰虛方面正常＋是痰瘀體質",
      "運動養生建議": "調氣和神法",
      "當季建議水果參考": "葡萄、芭樂、木瓜",
      "傳統藥膳參考": "丹參山楂茶",
      "現代食療參考": "小黃瓜泡菜炒豬肉",
      "備註": "避免生冷冰涼、肥膩黏滯食物的飲食。",
      "情緒": "易煩躁、易怒，偶有胸悶",
      "宜": "動一動",
      "宜排版": "左三圈，右三圈，最需要來動一動！",
      "忌": "吃宵夜",
      "忌排版": "台灣宵夜美食很多，還是看看就好。",
      "金句": "夜長未必夢多，但想吃的一定很多。",
      "金句排版Y": "夜長未必夢多，\n但想吃的一定很多。"
  },
  "4": {
      "陽虛": "正常",
      "陰虛": "傾向",
      "痰瘀": "正常",
      "類型簡述": "4.陽虛方面正常＋有陰虛傾向＋痰瘀方面正常",
      "運動養生建議": "健胃功",
      "當季建議水果參考": "西瓜、蓮霧、水梨",
      "傳統藥膳參考": "白木耳蓮子湯",
      "現代食療參考": "山藥涼拌小番茄",
      "備註": "避免油炸辛辣的飲食。",
      "情緒": "煩躁、易怒、心情起伏不定",
      "宜": "健胃功\n好消化的食物",
      "宜排版": "夏天來碗白木耳蓮子湯，或是涼拌山藥豆腐配白米飯，清清涼涼富有膳食纖維又好消化！\n還想要動一動？點我看看<a href='https://www.youtube.com/watch?v=F6Sl-cYElMY&t=11s' target='_blank'>(健胃功)適合的活動！</a>",
      "忌": "大魚大肉",
      "忌排版": "放過端午節拜拜的粽子串跟三牲吧，這些大魚大肉留給其他人處理吧！",
      "金句": "腸胃好，人不老。",
      "金句排版Y": "腸胃好，\n人不老。"
  },
  "5": {
      "陽虛": "正常",
      "陰虛": "傾向",
      "痰瘀": "傾向",
      "類型簡述": "5.陽虛方面正常＋有陰虛傾向＋有痰瘀傾向",
      "運動養生建議": "醫學八段錦 2",
      "當季建議水果參考": "西瓜、蓮霧、水梨",
      "傳統藥膳參考": "桂圓紅棗雞湯",
      "現代食療參考": "海帶芽芝麻湯",
      "備註": "避免生冷冰涼、油炸辛辣、肥膩黏滯的飲食。",
      "情緒": "煩躁、易怒、偶爾情緒低落",
      "宜": "醫學八段錦 2\n唱歌\n",
      "宜排版": "天氣炎熱適合躲去KTV跟朋友大唱痛快，一掃三把火！\n還想要動一動？點我看看<a href='https://www.youtube.com/watch?v=xCa1eyE6iQc' target='_blank'>(醫學八段錦2)適合的活動！</a>",
      "忌": "熬夜滑手機",
      "忌排版": "已經告訴你，不要熬夜滑手機了！",
      "金句": "不要熬夜，對手機不好。",
      "金句排版Y": "不要熬夜，\n對手機不好。"
  },
  "6": {
      "陽虛": "正常",
      "陰虛": "傾向",
      "痰瘀": "體質",
      "類型簡述": "6.陽虛方面正常＋有陰虛傾向＋是痰瘀體質",
      "運動養生建議": "八卦步法 3",
      "當季建議水果參考": "西瓜、蓮霧、水梨",
      "傳統藥膳參考": "川芎白芷茶",
      "現代食療參考": "櫻花蝦蒜炒蘆筍",
      "備註": "避免生冷冰涼、油炸辛辣、肥膩黏滯的飲食。",
      "情緒": "煩躁、易怒、心情低落，偶有胸悶",
      "宜": "八卦步法 3\n深呼吸\n淩波微步",
      "宜排版": "你會凌波微步嗎？不會也沒關係，最簡單的就是深！呼！吸！\n還想要動一動？點我看看<a href='https://www.youtube.com/watch?v=hUh3yHEMbXU' target='_blank'>(八卦步法3)適合的活動！</a>",
      "忌": "勇往直前\n為民除害",
      "忌排版": "不准正義感氾濫，更不能化身為周楚為民除害。",
      "金句": "路見不平，繞道而行。",
      "金句排版Y": "路見不平，\n繞道而行。"
  },
  "7": {
      "陽虛": "正常",
      "陰虛": "體質",
      "痰瘀": "正常",
      "類型簡述": "7.陽虛方面正常＋是陰虛體質＋痰瘀方面正常",
      "運動養生建議": "站樁 2",
      "當季建議水果參考": "西瓜、蓮霧、水梨",
      "傳統藥膳參考": "沙參玉竹燉雞湯",
      "現代食療參考": "牡蠣菠菜奶油燉飯",
      "備註": "避免油炸辛辣的飲食。",
      "情緒": "\t煩躁不安、焦慮、失眠、多夢、心悸",
      "宜": "站樁\n水梨\n西瓜汁去冰\n沙參玉竹燉雞湯",
      "宜排版": "夏天就是要點一杯去冰的西瓜原汁！如果你是料理達人，沙參玉竹燉雞湯也適合讓你大展廚藝！\n還想要動一動？點我看看<a href='https://www.youtube.com/watch?v=ZtPykzPwOXA' target='_blank'>(站樁)適合的活動！</a>",
      "忌": "熬夜\n逛夜市",
      "忌排版": "雖然是夏天也不要再逛夜市了，陰虛體質請！放！棄！熬！夜！",
      "金句": "睡前喝一杯牛奶，可以幫助牛奶業者更容易入睡。",
      "金句排版Y": "煩憂無止盡，\n只需你躺好"
  },
  "8": {
      "陽虛": "正常",
      "陰虛": "體質",
      "痰瘀": "傾向",
      "類型簡述": "8.陽虛方面正常＋是陰虛體質＋有痰瘀傾向",
      "運動養生建議": "八卦步法 2",
      "當季建議水果參考": "西瓜、蓮霧、水梨",
      "傳統藥膳參考": "四物雞湯",
      "現代食療參考": "蛤蜊海帶芽泡飯",
      "備註": "避免生冷冰涼、油炸辛辣、肥膩黏滯的飲食。",
      "情緒": "煩躁、易怒、心情起伏不定",
      "宜": "靜坐\n走路\n銀耳蓮子百合湯",
      "宜排版": "適合靜坐完，走路去買一碗銀耳蓮子百合湯。",
      "忌": "熬夜\n甜食\n麻辣燙",
      "忌排版": "放棄熬夜、甜點跟麻辣燙，世界會海闊天空。",
      "金句": "摸了自己一下，啊，好痛，果然美麗的玫瑰都帶刺",
      "金句排版Y": "摸一下自己，好痛啊！\n果然美麗的玫瑰都帶刺"
  },
  "9": {
      "陽虛": "正常",
      "陰虛": "體質",
      "痰瘀": "體質",
      "類型簡述": "9.陽虛方面正常＋是陰虛體質＋是痰瘀體質",
      "運動養生建議": "醫學八段錦 3",
      "當季建議水果參考": "西瓜、蓮霧、水梨",
      "傳統藥膳參考": "當歸紅棗排骨湯",
      "現代食療參考": "牛肉番茄涮涮鍋",
      "備註": "避免生冷冰涼、油炸辛辣、肥膩黏滯的飲食。",
      "情緒": "煩躁不安、焦慮、抑鬱、易怒",
      "宜": "超慢跑\n醫學八段錦\n海帶豆腐湯",
      "宜排版": "打開180BPM的音樂節奏，在家享受超...超...超慢跑吧！結束後，動手煮碗簡易的海帶豆腐湯享用享用吧！\n還想要動一動？點我看看<a href='https://www.youtube.com/watch?v=p66HmM5zyBk' target='_blank'>(醫學八段錦)適合的活動！</a>",
      "忌": "夜市料理",
      "忌排版": "又油又重口味的夜市料理，最近還是緩緩吧！",
      "金句": "今天有點阿炸，遠離火象星座。",
      "金句排版Y": "今天有點阿炸，\n遠離火象星座。"
  },
  "10": {
      "陽虛": "傾向",
      "陰虛": "正常",
      "痰瘀": "正常",
      "類型簡述": "10.有陽虛傾向＋陰虛方面正常＋痰瘀方面正常",
      "運動養生建議": "陽手式",
      "當季建議水果參考": "芒果、荔枝、榴槤",
      "傳統藥膳參考": "四神湯",
      "現代食療參考": "鹽燒焗烤青蔥",
      "備註": "避免生冷冰涼的飲食。",
      "情緒": "易疲憊、情緒低落，可能有輕微的怕冷感。",
      "宜": "四神湯",
      "宜排版": "夏天的冷氣房總是不小心調太冷，沒關係，來碗暖暖的四神湯補一補吧！",
      "忌": "平日賴床",
      "忌排版": "平日還是乖乖早睡早起吧！",
      "金句": "賴床是對週末最起碼的尊重。",
      "金句排版Y": "賴床是對週末\n最起碼的尊重。"
  },
  "11": {
      "陽虛": "傾向",
      "陰虛": "正常",
      "痰瘀": "傾向",
      "類型簡述": "11.有陽虛傾向＋陰虛方面正常＋有痰瘀傾向",
      "運動養生建議": "八卦步法 2",
      "當季建議水果參考": "芒果、荔枝、榴槤",
      "傳統藥膳參考": "艾葉生薑茶",
      "現代食療參考": "洋蔥泥豬排",
      "備註": "避免生冷冰涼、肥膩黏滯的飲食。",
      "情緒": "偶爾情緒波動，易煩躁或抑鬱",
      "宜": "八卦步法 2\n奮鬥",
      "宜排版": "打起精神來吧！人生有多少時間可以奮！鬥！\n還想要動一動？點我看看<a href='https://www.youtube.com/watch?v=R77jY1SlQ2M' target='_blank'>(八卦步法2)適合的活動！</a>",
      "忌": "上香",
      "忌排版": "燒香拜佛抱佛腳，還是省省吧，最近是不管用的！",
      "金句": "在上進跟上班之間，選擇了上香。",
      "金句排版Y": "上進跟上班之間，\n選擇了上香。"
  },
  "12": {
      "陽虛": "傾向",
      "陰虛": "正常",
      "痰瘀": "體質",
      "類型簡述": "12.有陽虛傾向＋陰虛方面正常＋是痰瘀體質",
      "運動養生建議": "上壽導引法（第二版）6",
      "當季建議水果參考": "芒果、荔枝、榴槤",
      "傳統藥膳參考": "陳皮鱔魚湯",
      "現代食療參考": "紅豆生薑粥",
      "備註": "避免生冷冰涼、肥膩黏滯的飲食。",
      "情緒": "易煩躁、易怒，偶有胸悶",
      "宜": "上壽導引法（第二版）6",
      "宜排版": "電鍋懶人法煮紅豆粥，加點生薑片就能暖暖胃！\n還想要動一動？點我看看<a href='https://www.youtube.com/watch?v=6uBWMSDg1h0' target='_blank'>(上壽導引法（第二版）6)適合的活動！</a>",
      "忌": "拳擊有氧\n鹽酥雞",
      "忌排版": "最近不適合激烈的拳擊有氧跟令人激動的鹹酥雞。",
      "金句": "成人的世界，除了容易長胖，其他的都不容易。",
      "金句排版Y": "成人的世界裡，\n除了容易長胖，\n其他都不容易。"
  },
  "13": {
      "陽虛": "傾向",
      "陰虛": "傾向",
      "痰瘀": "正常",
      "類型簡述": "13.有陽虛傾向＋有陰虛傾向＋痰瘀方面正常",
      "運動養生建議": "蛤蟆式 1",
      "當季建議水果參考": "葡萄、芭樂、木瓜",
      "傳統藥膳參考": "當歸黃耆湯",
      "現代食療參考": "薑汁牛肉炒高麗菜",
      "備註": "避免生冷冰涼、油炸辛辣的飲食。",
      "情緒": "煩躁、易怒、偶爾情緒低落",
      "宜": "蛤蟆式 1",
      "宜排版": "喝點少油的當歸黃耆湯，補補身！\n還想要動一動？點我看看<a href='https://www.youtube.com/watch?v=IOSvr_RO4w0' target='_blank'>(蛤蟆式 1)適合的活動！</a>",
      "忌": "冰涼、炸物",
      "忌排版": "香噴噴炸雞排跟冰冰涼涼思樂冰很吸引人，但禁止你被吸引。",
      "金句": "做人要大度，不要大肚。",
      "金句排版Y": "做人要大度，\n但不要大肚。"
  },
  "14": {
      "陽虛": "傾向",
      "陰虛": "傾向",
      "痰瘀": "傾向",
      "類型簡述": "14.有陽虛傾向＋有陰虛傾向＋有痰瘀傾向",
      "運動養生建議": "醫學八段錦 1",
      "當季建議水果參考": "葡萄、芭樂、木瓜",
      "傳統藥膳參考": "參耆紅棗湯",
      "現代食療參考": "蓮藕糖醋雞",
      "備註": "避免生冷冰涼、油炸辛辣、肥膩黏滯的飲食。",
      "情緒": "煩躁、易怒、偶爾情緒低落",
      "宜": "醫學八段錦 1\n看看遠方",
      "宜排版": "踏踏青、爬爬山、看看遠方吧！\n還想要動一動？點我看看<a href='https://www.youtube.com/watch?v=IOSvr_RO4w0' target='_blank'>(醫學八段錦1)適合的活動！</a>",
      "忌": "跟老闆視訊會議",
      "忌排版": "不要緊盯著電腦螢幕，暫時排開所有惱人的會議吧！",
      "金句": "今天不適合上班，只適合領薪水。",
      "金句排版Y": "今天不適合上班，\n只適合領薪水。"
  },
  "15": {
      "陽虛": "傾向",
      "陰虛": "傾向",
      "痰瘀": "體質",
      "類型簡述": "15.有陽虛傾向＋有陰虛傾向＋是痰瘀體質",
      "運動養生建議": "迎春納福",
      "當季建議水果參考": "葡萄、芭樂、木瓜",
      "傳統藥膳參考": "茯苓當歸雞湯",
      "現代食療參考": "生薑鮭魚燴鴻喜菇",
      "備註": "避免生冷冰涼、油炸辛辣、肥膩黏滯的飲食。",
      "情緒": "煩躁、易怒、心情低落，偶有胸悶",
      "宜": "迎春納福",
      "宜排版": "快去中藥行抓把茯苓當歸來燉雞湯。\n還想要動一動？點我看看<a href='https://www.youtube.com/watch?v=ZtPykzPwOXA' target='_blank'>(迎春納福)適合的活動！</a>",
      "忌": "曝曬活動\n",
      "忌排版": "台灣夏天已經夠熱了，不需要曝曬自己再爆量的紫外線下！",
      "金句": "你需要的不是積少成多，是積少化痰。",
      "金句排版Y": "你需要的不是積少成多，\n是積少化痰。"
  },
  "16": {
      "陽虛": "傾向",
      "陰虛": "體質",
      "痰瘀": "正常",
      "類型簡述": "16.有陽虛傾向＋是陰虛體質＋痰瘀方面正常",
      "運動養生建議": "站樁 2",
      "當季建議水果參考": "葡萄、芭樂、木瓜",
      "傳統藥膳參考": "芍藥甘草茶",
      "現代食療參考": "菠菜鮭魚奶油燉菜",
      "備註": "避免生冷冰涼、油炸辛辣的飲食。",
      "情緒": "煩躁、心慌、易疲勞、偶爾怕冷",
      "宜": "站樁\n散步\n桂圓紅棗雞湯\n小熊軟糖",
      "宜排版": "散步去巷口便利商店買包小熊軟糖，宵夜就來碗桂圓紅棗雞湯補補身！\n還想要動一動？點我看看<a href='https://www.youtube.com/watch?v=ZtPykzPwOXA' target='_blank'>(站樁)適合的活動！</a>",
      "忌": "紅茶冰\n麻辣鍋",
      "忌排版": "炎熱的夏天好想要躲進冷氣房大嗑麻辣鍋，配上超級胖胖杯的紅茶冰，又辣又冰，勸你最近還是先別吧！",
      "金句": "萬睡、萬睡、萬萬睡。卡早睏卡有眠。",
      "金句排版Y": "萬睡、萬睡、萬萬睡。\n卡早睏卡有眠。"
  },
  "17": {
      "陽虛": "傾向",
      "陰虛": "體質",
      "痰瘀": "傾向",
      "類型簡述": "17.有陽虛傾向＋是陰虛體質＋有痰瘀傾向",
      "運動養生建議": "八卦步法 1",
      "當季建議水果參考": "葡萄、芭樂、木瓜",
      "傳統藥膳參考": "熟地燉豬蹄",
      "現代食療參考": "牛肉茼蒿沙拉",
      "備註": "避免生冷冰涼、油炸辛辣、肥膩黏滯的飲食。",
      "情緒": "煩躁、心慌、易怒、偶爾怕冷",
      "宜": "八卦步法\n出去走走\n蹄花凍\n",
      "宜排版": "先出門散散步，再打開手機搜尋蹄花凍，今晚就去吃這道菜！\n還想要動一動？<a href='https://www.youtube.com/watch?v=F6Sl-cYElMY' target='_blank'>點我看看(八卦補法)適合的活動！</a>",
      "忌": "癱在床上\n有糖有冰手搖飲",
      "忌排版": "「今晚好想攤在床上，再來杯有糖有冰手搖飲喔。」誒，快把你的吳伯毅關掉。",
      "金句": "明知山有虎，不去明知山。但可以去有風的地方。",
      "金句排版Y": "明知山有虎。\n不去山，但可以去有風的地方。"
  },
  "18": {
      "陽虛": "傾向",
      "陰虛": "體質",
      "痰瘀": "體質",
      "類型簡述": "18.有陽虛傾向＋是陰虛體質＋是痰瘀體質",
      "運動養生建議": "上壽導引法（第一版）",
      "當季建議水果參考": "葡萄、芭樂、木瓜",
      "傳統藥膳參考": "黃耆當歸瘦肉湯",
      "現代食療參考": "牛肉蕃茄煮",
      "備註": "避免生冷冰涼、油炸辛辣、肥膩黏滯的飲食。",
      "情緒": "煩躁、心慌、抑鬱、疲憊、心情低落",
      "宜": "上壽導引法一\n光合作用\n瘦肉湯",
      "宜排版": "最棒的就是到走出戶外行光合作用，然後到ㄕㄨㄤ ㄩㄝˋ喝碗元氣瘦肉湯！\n還想要動一動？點我看看<a href='https://www.youtube.com/watch?v=F6Sl-cYElMY' target='_blank'>(上壽導引法一)適合的活動！</a>",
      "忌": "宅在家\n政論節目",
      "忌排版": "最糟糕的就是宅在家不耍廢，還要看政論節目氣噗噗。",
      "金句": "努力不一定會成功，但不努力一定會很輕鬆。",
      "金句排版Y": "努力不一定會成功，\n但不努力一定會\n很！輕！鬆！"
  },
  "19": {
      "陽虛": "體質",
      "陰虛": "正常",
      "痰瘀": "正常",
      "類型簡述": "19.是陽虛體質＋陰虛方面正常＋痰瘀方面正常",
      "運動養生建議": "站樁 1",
      "當季建議水果參考": "芒果、荔枝、榴槤",
      "傳統藥膳參考": "黃耆薑棗粥",
      "現代食療參考": "鰱魚生薑蔬菜湯",
      "備註": "避免生冷冰涼的飲食。",
      "情緒": "易疲憊、情緒低落",
      "宜": "站樁 1\n廣場舞\n光合作用",
      "宜排版": "到自由廣場跳跳廣場舞，還能順便行光合作用！\n還想要動一動？點我看看<a href='https://www.youtube.com/watch?v=ZtPykzPwOXA' target='_blank'>(站樁 1)適合的活動！</a>",
      "忌": "拼命滑手機",
      "忌排版": "雖然現在一歲小孩都很愛滑手機，但你已經不是一歲小孩，別拼老命了。",
      "金句": "只要努力，沒有什麼事情是搞不砸的。",
      "金句排版Y": "當不沈迷沙發與手機時\n所有美好都會如約而至"
  },
  "20": {
      "陽虛": "體質",
      "陰虛": "正常",
      "痰瘀": "傾向",
      "類型簡述": "20.是陽虛體質＋陰虛方面正常＋有痰瘀傾向",
      "運動養生建議": "浩然正氣",
      "當季建議水果參考": "芒果、荔枝、榴槤",
      "傳統藥膳參考": "桂皮羊肉湯",
      "現代食療參考": "鯖魚青蔥煮物",
      "備註": "避免生冷冰涼、肥膩黏滯的飲食。",
      "情緒": "易疲憊、偶爾情緒波動，易煩躁或抑鬱",
      "宜": "浩然正氣\n桂皮羊肉湯",
      "宜排版": "桂皮羊肉湯剛好適合你！\n還想要動一動？點我看看<a href='https://www.youtube.com/watch?v=F6Sl-cYElMY' target='_blank'>(浩然正氣)適合的活動！</a>",
      "忌": "難消化的食物",
      "忌排版": "粽子節的粽子是不是還沒消化完？最近還是少吃點這類難消化的食物吧！",
      "金句": "吃飽了才有力氣減肥！",
      "金句排版Y": "先吃飽，\n才有力氣減肥！"
  },
  "21": {
      "陽虛": "體質",
      "陰虛": "正常",
      "痰瘀": "體質",
      "類型簡述": "21.是陽虛體質＋陰虛方面正常＋是痰瘀體質",
      "運動養生建議": "迎春納福",
      "當季建議水果參考": "芒果、荔枝、榴槤",
      "傳統藥膳參考": "胡椒豬肚湯",
      "現代食療參考": "鮮蔬羊肉熱吵",
      "備註": "避免生冷冰涼、肥膩黏滯的飲食。",
      "情緒": "易疲憊、易煩躁、偶有胸悶",
      "宜": "胡椒豬肚湯\n迎春納福\n超慢跑",
      "宜排版": "現在就用超慢跑，跑去喝碗胡椒豬肚湯吧！\n還想要動一動？點我看看<a href='https://www.youtube.com/watch?v=F6Sl-cYElMY' target='_blank'>(迎春納福)適合的活動！</a>",
      "忌": "躺平\n吃到飽",
      "忌排版": "健身當道的年代，沒有吃到飽再躺平的選項。",
      "金句": "減肥不是說出來嚇唬這身肥肉的。",
      "金句排版Y": "減肥不是只用說的，\n就能嚇唬這身肥肉。"
  },
  "22": {
      "陽虛": "體質",
      "陰虛": "傾向",
      "痰瘀": "正常",
      "類型簡述": "22.是陽虛體質＋有陰虛傾向＋痰瘀方面正常",
      "運動養生建議": "臥功八法",
      "當季建議水果參考": "葡萄、芭樂、木瓜",
      "傳統藥膳參考": "黃耆枸杞紅棗茶",
      "現代食療參考": "蒜香奶油燒鰹魚",
      "備註": "避免生冷冰涼、油炸辛辣的飲食。",
      "情緒": "易疲憊、煩躁、易怒",
      "宜": "臥功八法\n誦經\n黃耆枸杞紅棗茶",
      "宜排版": "誠心建議泡杯黃耆枸杞紅棗茶，打開般若波羅蜜多心經，享受一個人的下午。\n還想要動一動？點我看看<a href='https://www.youtube.com/' target='_blank'>(臥功八法)適合的活動！</a>",
      "忌": "破口大罵",
      "忌排版": "今天不適合破口大罵，明天不適合，後天也不適合。",
      "金句": "沒有情緒，就不會被勒索。(沒有道德就不會被綁架?)",
      "金句排版Y": "沒有情ㄉㄠˋ緒ㄉㄜˊ，\n就不會被勒ㄅㄤˇ索ㄐㄧㄚˋ"
  },
  "23": {
      "陽虛": "體質",
      "陰虛": "傾向",
      "痰瘀": "傾向",
      "類型簡述": "23.是陽虛體質＋有陰虛傾向＋有痰瘀傾向",
      "運動養生建議": "醫學八段錦 6",
      "當季建議水果參考": "葡萄、芭樂、木瓜",
      "傳統藥膳參考": "黃耆枸杞湯",
      "現代食療參考": "鰹魚洋蔥昆布湯",
      "備註": "避免生冷冰涼、油炸辛辣、肥膩黏滯的飲食。",
      "情緒": "易疲憊、煩躁、易怒、偶爾情緒低落",
      "宜": "醫學八段錦 6\n補眠\n散步",
      "宜排版": "選擇去散散步，或是躲回棉被裡好好補個眠吧。\n還想要動一動？點我看看<a href='https://www.youtube.com/watch?v=AX1_p_enab4' target='_blank'>(醫學八段錦 6)適合的活動！</a>",
      "忌": "罵小孩",
      "忌排版": "不只是自己的小孩，連別人的小孩都不准罵！",
      "金句": "特別能吃苦這五個字,能做到前四個字就不錯了。",
      "金句排版Y": "「特別能吃苦」這五個字，\n能做到前四個就不錯了。"
  },
  "24": {
      "陽虛": "體質",
      "陰虛": "傾向",
      "痰瘀": "體質",
      "類型簡述": "24.是陽虛體質＋有陰虛傾向＋是痰瘀體質",
      "運動養生建議": "醫學八段錦 7",
      "當季建議水果參考": "葡萄、芭樂、木瓜",
      "傳統藥膳參考": "黃耆田七排骨湯",
      "現代食療參考": "雞肉生薑糯米粥",
      "備註": "避免生冷冰涼、油炸辛辣、肥膩黏滯的飲食。",
      "情緒": "易疲憊、煩躁、易怒、心情低落，偶有胸悶",
      "宜": "醫學八段錦7\n好好吃飯\n黃耆田七排骨湯",
      "宜排版": "今日宜好好吃飯，尤其菜色裡宜有黃耆田七排骨湯。\n還想要動一動？點我看看<a href='https://www.youtube.com/watch?v=fefSvwyAWUc' target='_blank'>(醫學八段錦7)適合的活動！</a>",
      "忌": "亂吃保健食品\n吃零食",
      "忌排版": "沒事不要吃一堆保健食品跟零食。",
      "金句": "打起精神，但別不小心把它打死了！",
      "金句排版Y": "打起精神，\n但別不小心把它打死了！"
  },
  "25": {
      "陽虛": "體質",
      "陰虛": "體質",
      "痰瘀": "正常",
      "類型簡述": "25.是陽虛體質＋是陰虛體質＋痰瘀方面正常",
      "運動養生建議": "上壽導引法（第二版）5",
      "當季建議水果參考": "葡萄、芭樂、木瓜",
      "傳統藥膳參考": "當歸黃耆雞湯",
      "現代食療參考": "生薑炒雞肝",
      "備註": "避免生冷冰涼、油炸辛辣的飲食。",
      "情緒": "煩躁、心慌、抑鬱、怕冷、疲憊",
      "宜": "上壽導引法二\n休假\n補眠\n雞湯",
      "宜排版": "只需要休假、補眠、喝雞湯，很重要請做三次。\n還想要動一動？點我看看<a href='https://www.youtube.com/watch?v=F6Sl-cYElMY' target='_blank'>(上壽導引法二)適合的活動！</a>",
      "忌": "工作\n爆汗\n",
      "忌排版": "嚴禁工作、爆汗、爆汗工作跟工作爆汗。",
      "金句": "如果你不按時吃飯，就要按時吃藥了。",
      "金句排版Y": "如果你不按時吃飯，\n就要按時吃藥了。"
  },
  "26": {
      "陽虛": "體質",
      "陰虛": "體質",
      "痰瘀": "傾向",
      "類型簡述": "26.是陽虛體質＋是陰虛體質＋有痰瘀傾向",
      "運動養生建議": "上壽導引法（第二版）",
      "當季建議水果參考": "葡萄、芭樂、木瓜",
      "傳統藥膳參考": "十全大補湯",
      "現代食療參考": "豬五花南瓜炊飯",
      "備註": "避免生冷冰涼、油炸辛辣、肥膩黏滯的飲食。",
      "情緒": "焦慮、抑鬱、疲憊、怕冷、心情低落",
      "宜": "上壽導引法二\n好好呼吸\n心靈雞湯",
      "宜排版": "需要找個Mentor，可以給你一碗心靈雞湯跟教你如何好好呼吸。\n還想要動一動？點我看看<a href='https://www.youtube.com/watch?v=F6Sl-cYElMY' target='_blank'>(上壽導引法二)適合的活動！</a>",
      "忌": "上班\n冰過的水果\n難消化的食物",
      "忌排版": "「冰過的水果」跟「難消化的食物」，都跟「上班」一樣對你不好。",
      "金句": "當你沒有空休息的時候，就是你該休息的時候。",
      "金句排版Y": "當你沒有空休息的時候，\n就是你該休息的時候。"
  },
  "27": {
      "陽虛": "體質",
      "陰虛": "體質",
      "痰瘀": "體質",
      "類型簡述": "27.是陽虛體質＋是陰虛體質＋是痰瘀體質",
      "運動養生建議": "上壽導引法（第二版）",
      "當季建議水果參考": "葡萄、芭樂、木瓜",
      "傳統藥膳參考": "當歸生薑羊肉爐",
      "現代食療參考": "菠菜蛤蜊豆漿鍋",
      "備註": "避免生冷冰涼、油炸辛辣、肥膩黏滯的飲食。",
      "情緒": "焦慮、抑鬱、疲憊、怕冷、心情低落",
      "宜": "上壽導引法二\n曬太陽\n當歸生薑羊肉湯",
      "宜排版": "曬太陽跟喝碗當歸生薑羊肉湯，兩個選擇你都要！\n還想要動一動？點我看看<a href='https://www.youtube.com/watch?v=F6Sl-cYElMY' target='_blank'>(上壽導引法二)適合的活動！</a>",
      "忌": "忙碌\n中醫說不能吃的那些",
      "忌排版": "中醫跟你說不能吃的那些食物，以及瞎忙白忙真忙都不好。",
      "金句": "今晚仰臥，明早起坐，健身有時候就是那麼簡單",
      "金句排版Y": "今晚仰臥，明早起坐，\n健身有時候就是那麼簡單！"
  }
}

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
    <div class="caption-area bg-[#2b6e6e] p-24">
      <div class="caption">哈囉您好！<br />
        我是你的中醫體質管家<br />
        想要了解今天的身體體質建議嗎？<br />
        一起來檢視看看吧！<br />
      </div>
      <div class="mt-24">
        <label for="name">姓名:</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="mt-8">
        <label for="age">年齡:</label>
        <input type="number" id="age" name="age" min="15" max="150" required>
      </div>
      <div class="mt-8">
        <label>性別:</label>
        <input type="radio" id="male" name="gender" value="M" required>
        <label for="male" class="radio-label">男性</label>
        <input type="radio" id="female" name="gender" value="F" required>
        <label for="female" class="radio-label">女性</label>
      </div>
      <div class="mt-8">
        <label for="height">身高:</label>
        <input type="number" id="height" name="height" min="100" max="250" required>
      </div>
      <div class="mt-8">
        <label for="weight">體重:</label>
        <input type="number" id="weight" name="weight" min="15" max="250" required>
      </div>
      <button id="closeBtn">開始</button>
    </div>
  </form>
`;

// 創建彈窗元素
var popup = document.createElement("div");
popup.id = "popup";
popup.style.position = 'absolute';
popup.style.zIndex = '100';
popup.classList.add("popup", "bottom-24", "w-[60%]");

// var left = (document.documentElement.clientWidth - popup.offsetWidth) / 2;
// var top = 150;
// popup.style.left = left + 'px';
// popup.style.top = top + 'px';
popup.innerHTML = formContent;

// 將彈窗添加到文檔中
document.body.appendChild(popup);

var popupDiv = document.getElementById("popup");
popupDiv.style.left = '50%';
popupDiv.style.transform = 'translateX(-50%)';
// popupDiv.style.top = '100px';
// popupDiv.classList.add("bg-base"); 

function showQuestion(index, data) {
  var question = data[index];
  console.log('question', question);
  var questionElement = document.createElement('div');
  questionElement.classList.add("question", "bg-[#2b6e6e]", "p-24");
  
  // 決定按鈕標籤
  var buttonLabel = index === data.length - 1 ? "提交" : "下一題";

  // 建立具有按鈕形狀的選項，套用 Tailwind CSS 樣式
  var optionsHTML = question.options.map(option => `
    <button class="option-button" data-value="${option.value}">
      ${option.label}
    </button>
  `).join('');

  questionElement.innerHTML = `
    <h3 class="font-semibold mb-4 question-area">${question.question}</h3>
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
  fetchTTS(question.question);

  // 為每個選項按鈕添加點擊事件
  document.querySelectorAll('.option-button').forEach(button => {
    button.addEventListener('click', function() {
      // 存儲選擇的答案
      var selectedOption = this.getAttribute('data-value');
      var answers = JSON.parse(sessionStorage.getItem('answers')) || {};
      answers[question.id] = parseInt(selectedOption, 10);
      sessionStorage.setItem('answers', JSON.stringify(answers));

      // 清除當前題目內容
      form.innerHTML = '';

      // 顯示下一題或完成處理
      index++;
      if (index < data.length) {
        showQuestion(index, data);
      } else {
        console.log('問卷完成');
        // TODO: 進行問卷完成後的處理，例如提交資料至伺服器等
        submitAnswers();  // 假設有一個函數來處理最終的提交
      }
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

function fetchTTS(text) {
  console.log('fetchTTS(text)');

  // 如果有正在播放的音頻，先停止它
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

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
    };
  })
  .catch(error => {
    console.error('Error fetching TTS:', error);
  });
}


// 獲取表單元素
var form = popupDiv.querySelector("form");

popupDiv.style.display = 'none';

var btn = document.getElementById("closeBtn");

// 創建覆蓋層
const overlay = document.createElement('div');
overlay.id = 'startOverlay';
overlay.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// 創建按鈕
const startButton = document.createElement('button');
startButton.id = 'startButton';
startButton.textContent = '開始體驗';
startButton.style.cssText = `
  padding: 10px 20px;
  font-size: 3em;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
`;

// 添加滑鼠懸停效果
startButton.onmouseover = function() {
  this.style.backgroundColor = '#45a049';
};
startButton.onmouseout = function() {
  this.style.backgroundColor = '#4CAF50';
};

// 將按鈕添加到覆蓋層
overlay.appendChild(startButton);

// 將覆蓋層添加到 body
document.body.appendChild(overlay);

// 添加按鈕點擊事件
startButton.addEventListener('click', function() {
  // 淡出效果
  overlay.style.transition = 'opacity 0.5s ease-out';
  overlay.style.opacity = '0';

  popupDiv.style.display = 'block';

  // 等待淡出動畫完成後移除覆蓋層
  setTimeout(() => {
    document.body.removeChild(overlay);
    
  }, 500);

  // 播放語音
  fetchTTS("哈囉您好！我是你的中醫體質管家，想要了解今天的身體體質建議嗎？一起來檢視看看吧！");
});

// fetchTTS("哈囉您好！我是你的中醫體質管家，想要了解今天的身體體質建議嗎？一起來檢視看看吧！");

// 表單提交事件處理函數
btn.addEventListener("click", function (event) {
  event.preventDefault(); // 防止表單提交刷新頁面

  // var canvases = document.querySelectorAll('canvas');
  // canvases[0].style.marginTop = '50px';

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

