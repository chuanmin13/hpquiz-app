const questions = [
    {
        question: "請問魔法部遊客入口的電話要撥幾號",
        options: [
            { optText: 64224, isCorrect: false },
            { optText: 62442, isCorrect: true },
            { optText: 64242, isCorrect: false },
        ],
        ans: 1,
    },
    {
        question: "鄧不利多的全名",
        options: [
            {
                optText: "阿不思．博知維．巫服利．布萊恩．鄧不利多",
                isCorrect: true,
            },
            {
                optText: "阿不思．巫服利．博知維．布萊恩．鄧不利多",
                isCorrect: false,
            },
            {
                optText: "阿不思．布萊恩．博知維．巫服利．鄧不利多",
                isCorrect: false,
            },
        ],
        ans: 0,
    },
    {
        question: "榮恩當上級長之後茉莉買了___給他當禮物",
        options: [
            { optText: "彗星二六零", isCorrect: false },
            { optText: "狂風十一號", isCorrect: true },
            { optText: "彗星二九零", isCorrect: false },
        ],
        ans: 1,
    },
    {
        question: "誰沒參加D.A在豬頭酒吧的首次聚會",
        options: [
            { optText: "賈斯汀．方列里", isCorrect: false },
            { optText: "蘇珊．波恩", isCorrect: false },
            { optText: "西莫．斐尼干", isCorrect: true },
        ],
        ans: 2,
    },
    {
        question: "張秋是哪一個魁地奇球隊的球迷",
        options: [
            { optText: "泥水池聯隊", isCorrect: false },
            { optText: "波樹之光隊", isCorrect: false },
            { optText: "龍捲風隊", isCorrect: true },
        ],
        ans: 2,
    },
    {
        question: "海格不在霍格華茲的時候，奇獸飼育學的代課教授是",
        options: [
            { optText: "辛尼區教授", isCorrect: false },
            { optText: "葛伯蘭教授", isCorrect: true },
            { optText: "崔老妮教授", isCorrect: false },
        ],
        ans: 1,
    },
    {
        question: "多比本來是誰家的家庭小精靈",
        options: [
            { optText: "馬份", isCorrect: true },
            { optText: "柯羅奇", isCorrect: false },
            { optText: "隆巴頓", isCorrect: false },
        ],
        ans: 0,
    },
    {
        question: "除了多比，誰也跟哈利提過萬應室",
        options: [
            { optText: "瘋眼穆敵", isCorrect: false },
            { optText: "天狼星", isCorrect: false },
            { optText: "鄧不利多", isCorrect: true },
        ],
        ans: 2,
    },
    {
        question: "哈利五年級的時候，史萊哲林魁地奇代表隊的新隊長是誰",
        options: [
            { optText: "蒙塔", isCorrect: true },
            { optText: "瓦林頓", isCorrect: false },
            { optText: "馬份", isCorrect: false },
        ],
        ans: 0,
    },
    {
        question: "海格有個同父異母的弟弟名子叫",
        options: [
            { optText: "嘎哭", isCorrect: false },
            { optText: "禍頭", isCorrect: false },
            { optText: "呱拉", isCorrect: true },
        ],
        ans: 2,
    },
    {
        question: "妙麗爸媽的職業是",
        options: [
            { optText: "會計師", isCorrect: false },
            { optText: "牙醫", isCorrect: true },
            { optText: "證券交易員", isCorrect: false },
        ],
        ans: 1,
    },
    {
        question: "衛斯理太太織給哈利有龍的那件聖誕毛衣底色是",
        options: [
            { optText: "綠色", isCorrect: true },
            { optText: "紅色", isCorrect: false },
            { optText: "藍色", isCorrect: false },
        ],
        ans: 0,
    },
    {
        question: "守護魔法石的關卡順序",
        options: [
            {
                optText: "海格-芽菜-孚立維-奈米奈娃-奎若-石內卜-鄧不利多",
                isCorrect: true,
            },
            {
                optText: "海格-芽菜-奈米奈娃-奎若-孚立維-石內卜-鄧不利多",
                isCorrect: false,
            },
            {
                optText: "海格-芽菜-孚立維-奎若-奈米奈娃-石內卜-鄧不利多",
                isCorrect: false,
            },
        ],
        ans: 0,
    },
    {
        question: "第二集的時候，誰沒有被蛇妖石化",
        options: [
            { optText: "丹尼．克利維", isCorrect: true },
            { optText: "敏西–波平頓的尼古拉斯爵士", isCorrect: false },
            { optText: "賈斯汀．方列里", isCorrect: false },
        ],
        ans: 0,
    },
    {
        question: "哪一個不是路平教授的期末考障礙賽關卡",
        options: [
            { optText: "滾帶落", isCorrect: false },
            { optText: "哼唧砰", isCorrect: false },
            { optText: "河童", isCorrect: true },
        ],
        ans: 2,
    },
    {
        question: "路平教授的期末考障礙賽關卡的滾帶落是甚麼顏色",
        options: [
            { optText: "綠色", isCorrect: true },
            { optText: "紅色", isCorrect: false },
            { optText: "藍色", isCorrect: false },
        ],
        ans: 0,
    },
    {
        question: "誰沒從石內卜的私人儲藏櫃偷過藥材",
        options: [
            { optText: "妙麗", isCorrect: false },
            { optText: "柯羅奇", isCorrect: false },
            { optText: "哈利", isCorrect: true },
        ],
        ans: 2,
    },
    {
        question: "是誰通知鄧不利多衛斯理先生已經被送到聖蒙果了",
        options: [
            { optText: "得麗", isCorrect: true },
            { optText: "非尼呀", isCorrect: false },
            { optText: "狄劈", isCorrect: false },
        ],
        ans: 0,
    },
    {
        question: "哈利他們去聖蒙果探望衛斯理先生時，在幾樓遇到洛哈和奈威",
        options: [
            { optText: "二樓", isCorrect: false },
            { optText: "四樓", isCorrect: true },
            { optText: "六樓", isCorrect: false },
        ],
        ans: 1,
    },
    {
        question: "天狼星的曾曾曾曾外祖父非尼呀屬於哪個學院",
        options: [
            { optText: "史萊哲林", isCorrect: true },
            { optText: "葛來芬多", isCorrect: false },
            { optText: "雷文克勞", isCorrect: false },
        ],
        ans: 0,
    },
    {
        question: "魁地奇世界盃的時候，史坦跟迷拉吹噓說他",
        options: [
            { optText: "發明了可以飛到月球的掃帚", isCorrect: false },
            {
                optText: "是一年可以賺進一百袋金加隆的吸血鬼獵人",
                isCorrect: false,
            },
            { optText: "即將成為有史以來最年輕的魔法部長", isCorrect: true },
        ],
        ans: 2,
    },
    {
        question: "崔老妮崩潰的時候就會喝的那種飲料",
        options: [
            { optText: "火燒威士忌", isCorrect: false },
            { optText: "濃茶+一大匙白蘭地", isCorrect: false },
            { optText: "烹調用雪莉酒", isCorrect: true },
        ],
        ans: 2,
    },
    {
        question: "妙麗的護法是",
        options: [
            { optText: "水獺", isCorrect: true },
            { optText: "天鵝", isCorrect: false },
            { optText: "貓咪", isCorrect: false },
        ],
        ans: 0,
    },
    {
        question: "弗雷和喬治把___塞進一樓的消失櫥櫃",
        options: [
            { optText: "高爾", isCorrect: false },
            { optText: "瓦林頓", isCorrect: false },
            { optText: "蒙塔", isCorrect: true },
        ],
        ans: 2,
    },
    {
        question: "哈利普等巫測黑魔法防禦術術科的監考官是",
        options: [
            { optText: "禿福", isCorrect: true },
            { optText: "馬治邦", isCorrect: false },
            { optText: "推克微", isCorrect: false },
        ],
        ans: 0,
    },
];

export default questions;
