// words.js
const words = [
    { kanji: "工作", hiragana: "はたらきます", category: "動詞", course: "4"},
    { kanji: "休息", hiragana: "やすみます", category: "動詞", course: "4"},
    { kanji: "結束", hiragana: "おわります", category: "動詞", course: "4"},
    { kanji: "起床", hiragana: "おきます", category: "動詞", course: "4"},
    { kanji: "睡覺", hiragana: "ねます", category: "動詞", course: "4"},
    { kanji: "念書", hiragana: "べんきょうします", category: "動詞", course: "4"},
    { kanji: "去", hiragana: "いきます", category: "動詞", course: "5"},
    { kanji: "回", hiragana: "かえります", category: "動詞", course: "5"},
    { kanji: "來", hiragana: "きます", category: "動詞", course: "5"},
    { kanji: "喝", hiragana: "のみます", category: "動詞", course: "6" },
    { kanji: "吸（煙）", hiragana: "すいます", category: "動詞", course: "6" },
    { kanji: "聽", hiragana: "ききます", category: "動詞", course: "6" },
    { kanji: "閱讀", hiragana: "よみます", category: "動詞", course: "6" },
    { kanji: "書寫", hiragana: "かきます", category: "動詞", course: "6" },
    { kanji: "購買", hiragana: "かいます", category: "動詞", course: "6" },
    { kanji: "拍攝", hiragana: "とります", category: "動詞", course: "6" },
    { kanji: "見面", hiragana: "あいます", category: "動詞", course: "6" },
    { kanji: "吃", hiragana: "たべます", category: "動詞", course: "6" },
    { kanji: "看", hiragana: "みます", category: "動詞", course: "6" },
    { kanji: "做", hiragana: "します", category: "動詞", course: "6" },
    { kanji: "切", hiragana: "きります", category: "動詞", course: "7" },
    { kanji: "寄", hiragana: "おくります", category: "動詞", course: "7"  },
    { kanji: "得到", hiragana: "もらいます", category: "動詞", course: "7"  },
    { kanji: "借給", hiragana: "かします", category: "動詞", course: "7"  },
    { kanji: "學習", hiragana: "ならいます", category: "動詞", course: "7"  },
    { kanji: "給", hiragana: "あげます", category: "動詞", course: "7"  },
    { kanji: "借回來", hiragana: "かります", category: "動詞", course: "7"  },
    { kanji: "教，告訴", hiragana: "おしえます", category: "動詞", course: "7"  },
    { kanji: "打（電話）", hiragana: "かけます", category: "動詞", course: "7"  },
    { kanji: "懂，明白", hiragana: "わかります", category: "動詞", course: "9"  },
    { kanji: "有", hiragana: "あります", category: "動詞", course: "9"  },
    { kanji: "有", hiragana: "います", category: "動詞", course: "10"  },
    { kanji: "花費", hiragana: "かかります", category: "動詞", course: "11"  },
    { kanji: "請假 (向公司)", hiragana: "やすみます", category: "動詞", course: "11"},
    { kanji: "玩", hiragana: "あそびます", category: "動詞", course: "13"  },
    { kanji: "游泳", hiragana: "およぎます", category: "動詞", course: "13" },
    { kanji: "迎接", hiragana: "むかえます", category: "動詞", course: "13" },
    { kanji: "疲累", hiragana: "つかれます", category: "動詞", course: "13" },
    { kanji: "結婚", hiragana: "けっこんします", category: "動詞", course: "13" },
    { kanji: "買東西", hiragana: "かいものします", category: "動詞", course: "13" },
    { kanji: "吃飯", hiragana: "しょくじします", category: "動詞", course: "13" },
    { kanji: "散步", hiragana: "さんぽします", category: "動詞", course: "13" },
    { kanji: "關（空調）", hiragana: "けします", category: "動詞", course: "14" },
    { kanji: "趕快", hiragana: "いそぎます", category: "動詞", course: "14" },
    { kanji: "等", hiragana: "まちます", category: "動詞", course: "14" },
    { kanji: "拿", hiragana: "もちます", category: "動詞", course: "14" },
    { kanji: "取", hiragana: "とります", category: "動詞", course: "14" },
    { kanji: "幫忙", hiragana: "てつだいます", category: "動詞", course: "14" },
    { kanji: "叫", hiragana: "よびます", category: "動詞", course: "14" },
    { kanji: "說", hiragana: "はなします", category: "動詞", course: "14" },
    { kanji: "使用", hiragana: "つかいます", category: "動詞", course: "14" },
    { kanji: "坐", hiragana: "すわります", category: "動詞", course: "14" },
    { kanji: "站立", hiragana: "たちます", category: "動詞", course: "14" },
    { kanji: "進入", hiragana: "はいります", category: "動詞", course: "14" },
    { kanji: "下（雨）", hiragana: "ふります", category: "動詞", course: "14" },
    { kanji: "開（空調）", hiragana: "つけます", category: "動詞", course: "14" },
    { kanji: "開（門）", hiragana: "あけます", category: "動詞", course: "14" },
    { kanji: "閉（門）", hiragana: "しめます", category: "動詞", course: "14" },
    { kanji: "停止", hiragana: "とめます", category: "動詞", course: "14" },
    { kanji: "出示", hiragana: "みせます", category: "動詞", course: "14" },
    { kanji: "告訴", hiragana: "おしえます", category: "動詞", course: "14" },
    { kanji: "離開", hiragana: "でます", category: "動詞", course: "14" },
    { kanji: "復印", hiragana: "コピーします", category: "動詞", course: "14" },
    { kanji: "放置", hiragana: "おきます", category: "動詞", course: "15" },
    { kanji: "製造", hiragana: "つくります", category: "動詞", course: "15" },
    { kanji: "賣", hiragana: "うります", category: "動詞", course: "15" },
    { kanji: "知道", hiragana: "しります", category: "動詞", course: "15" },
    { kanji: "居住", hiragana: "すみます", category: "動詞", course: "15" },
    { kanji: "研究", hiragana: "けんきゅうします", category: "動詞", course: "15" },
    { kanji: "搭乘", hiragana: "のります", category: "動詞", course: "16" },
    { kanji: "拿出", hiragana: "だします", category: "動詞", course: "16" },
    { kanji: "領（錢）", hiragana: "おろします", category: "動詞", course: "16" },
    { kanji: "上（大學）", hiragana: "はいります", category: "動詞", course: "16" },
    { kanji: "推", hiragana: "おします", category: "動詞", course: "16" },
    { kanji: "喝", hiragana: "のみます", category: "動詞", course: "16" },
    { kanji: "下（電車）", hiragana: "おります", category: "動詞", course: "16" },
    { kanji: "轉乘", hiragana: "のりかえます", category: "動詞", course: "16" },
    { kanji: "淋", hiragana: "あびます", category: "動詞", course: "16" },
    { kanji: "放入", hiragana: "いれます", category: "動詞", course: "16" },
    { kanji: "畢業（大學）", hiragana: "でます", category: "動詞", course: "16" },
    { kanji: "開始", hiragana: "はじめます", category: "動詞", course: "16" },
    { kanji: "參觀", hiragana: "けんがくします", category: "動詞", course: "16" },
    { kanji: "打電話", hiragana: "でんわします", category: "動詞", course: "16" },
    { kanji: "遺失", hiragana: "なくします", category: "動詞", course: "17" },
    { kanji: "支付", hiragana: "はらいます", category: "動詞", course: "17" },
    { kanji: "歸還", hiragana: "かえします", category: "動詞", course: "17" },
    { kanji: "脫", hiragana: "ぬぎます", category: "動詞", course: "17" },
    { kanji: "帶，拿去", hiragana: "もっていきます", category: "動詞", course: "17" },
    { kanji: "吃藥", hiragana: "のみます", category: "動詞", course: "17" },
    { kanji: "入浴", hiragana: "はいります", category: "動詞", course: "17" },
    { kanji: "記住", hiragana: "おぼえます", category: "動詞", course: "17" },
    { kanji: "忘記", hiragana: "わすれます", category: "動詞", course: "17" },
    { kanji: "出門", hiragana: "でかけます", category: "動詞", course: "17" },
    { kanji: "帶，拿來", hiragana: "もってきます", category: "動詞", course: "17" },
    { kanji: "擔心", hiragana: "しんぱいします", category: "動詞", course: "17" },
    { kanji: "加班", hiragana: "ざんぎょうします", category: "動詞", course: "17" },
    { kanji: "出差", hiragana: "しゅっちょうします", category: "動詞", course: "17" },
    { kanji: "洗", hiragana: "あらいます", category: "動詞", course: "18" },
    { kanji: "彈奏", hiragana: "ひきます", category: "動詞", course: "18" },
    { kanji: "唱歌", hiragana: "うたいます", category: "動詞", course: "18" },
    { kanji: "能夠", hiragana: "できます", category: "動詞", course: "18" },
    { kanji: "收集", hiragana: "あつめます", category: "動詞", course: "18" },
    { kanji: "捨棄", hiragana: "すてます", category: "動詞", course: "18" },
    { kanji: "換", hiragana: "かえます", category: "動詞", course: "18" },
    { kanji: "駕駛", hiragana: "うんてんします", category: "動詞", course: "18" },
    { kanji: "預約", hiragana: "よやくします", category: "動詞", course: "18" },
    { kanji: "登，上", hiragana: "のぼります", category: "動詞", course: "19" },
    { kanji: "住（酒店）", hiragana: "とまります", category: "動詞", course: "19" },
    { kanji: "變成", hiragana: "なります", category: "動詞", course: "19" },
    { kanji: "打掃", hiragana: "そうじします", category: "動詞", course: "19" },
    { kanji: "洗衣服", hiragana: "せんたくします", category: "動詞", course: "19" },
    { kanji: "需要", hiragana: "いります", category: "動詞", course: "20" },
    { kanji: "調查", hiragana: "しらべます", category: "動詞", course: "20" },
    { kanji: "修理", hiragana: "しゅうります", category: "動詞", course: "20" },
    { kanji: "覺得", hiragana: "おもいます", category: "動詞", course: "21" },
    { kanji: "說", hiragana: "いいます", category: "動詞", course: "21" },
    { kanji: "贏", hiragana: "かちます", category: "動詞", course: "21" },
    { kanji: "有（慶典）", hiragana: "あります", category: "動詞", course: "21" },
    { kanji: "有用，派上用場", hiragana: "やくにたちます", category: "動詞", course: "21" },
    { kanji: "轉動", hiragana: "うごきます", category: "動詞", course: "21" },
    { kanji: "輸", hiragana: "まけます", category: "動詞", course: "21" },
    { kanji: "辭職", hiragana: "やめます", category: "動詞", course: "21" },
    { kanji: "小心，注意", hiragana: "きをつけます", category: "動詞", course: "21" },
    { kanji: "留學", hiragana: "りゅうがくします", category: "動詞", course: "21" },
    { kanji: "穿（鞋/褲）", hiragana: "はきます", category: "動詞", course: "22" },
    { kanji: "戴（帽）", hiragana: "かぶります", category: "動詞", course: "22" },
    { kanji: "穿（衫）", hiragana: "きます", category: "動詞", course: "22" },
    { kanji: "戴（眼鏡）", hiragana: "かけます", category: "動詞", course: "22" },
    { kanji: "出生", hiragana: "うまれます", category: "動詞", course: "22" },
    { kanji: "繫（領帶）", hiragana: "します", category: "動詞", course: "22" },
    { kanji: "問（老師）", hiragana: "ききます", category: "動詞", course: "23" },
    { kanji: "轉動", hiragana: "まわします", category: "動詞", course: "23" },
    { kanji: "拉", hiragana: "ひきます", category: "動詞", course: "23" },
    { kanji: "摸", hiragana: "さわります", category: "動詞", course: "23" },
    { kanji: "走（路）", hiragana: "あるきます", category: "動詞", course: "23" },
    { kanji: "過（橋）", hiragana: "わたります", category: "動詞", course: "23" },
    { kanji: "轉彎", hiragana: "まがります", category: "動詞", course: "23" },
    { kanji: "改變", hiragana: "かえます", category: "動詞", course: "23" },
    { kanji: "出來（零錢）", hiragana: "でます", category: "動詞", course: "23" },
    { kanji: "修理", hiragana: "なおします", category: "動詞", course: "24" },
    { kanji: "帶（某人）去", hiragana: "つれていきます", category: "動詞", course: "24" },
    { kanji: "送行", hiragana: "おくります", category: "動詞", course: "24" },
    { kanji: "給", hiragana: "くれます", category: "動詞", course: "24" },
    { kanji: "帶（某人）來", hiragana: "つれてきます", category: "動詞", course: "24" },
    { kanji: "介紹", hiragana: "しょうかいします", category: "動詞", course: "24" },
    { kanji: "帶路", hiragana: "あんないします", category: "動詞", course: "24" },
    { kanji: "說明", hiragana: "せつめいします", category: "動詞", course: "24" },
    { kanji: "到達", hiragana: "つきます", category: "動詞", course: "25" },
    { kanji: "增長", hiragana: "とります", category: "動詞", course: "25" },
    { kanji: "足夠", hiragana: "たります", category: "動詞", course: "25" },
    { kanji: "思考", hiragana: "かんがえます", category: "動詞", course: "25" },
    { kanji: "大きい", hiragana: "おおきい", category: "形容詞", course: "8" },
    { kanji: "小さい", hiragana: "ちいさい", category: "形容詞", course: "8" },
    { kanji: "美しい", hiragana: "うつくしい", category: "形容詞", course: "8" },
    { kanji: "貓", hiragana: "ねこ", category: "名詞", course: "8" },
    { kanji: "犬", hiragana: "いぬ", category: "名詞", course: "8" },
    { kanji: "本", hiragana: "ほん", category: "名詞", course: "8" },
    { kanji: "車", hiragana: "くるま", category: "名詞", course: "8" },
    { kanji: "山", hiragana: "やま", category: "名詞", course: "8" },
    { kanji: "川", hiragana: "かわ", category: "名詞", course: "8" },
    { kanji: "空", hiragana: "そら", category: "名詞", course: "8" },
    { kanji: "花", hiragana: "はな", category: "名詞", course: "8" },
    { kanji: "木", hiragana: "き", category: "名詞", course: "8" },
    { kanji: "海", hiragana: "うみ", category: "名詞", course: "8" },
];