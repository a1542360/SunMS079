/* ==================
 脚本类型:  NPC	    
 脚本作者：月亮     
 联系方式：2412614144
 =====================
 */
var 红色箭头 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2# ";

importPackage(net.sf.Start.client);
var status = 0;
var zones = 0;
var ItemId = Array(
    //物品1     物品2    数量    备注
	Array(1002847,4000463,200, "0"),//青蛙帽子
	Array(1002851,4000463,200, "1"),//金鸡官帽
	Array(1002425,4000463,200, "2"),//蓝马术帽
	Array(1002492,4000463,200, "2"),//白色棒球帽
	Array(1002663,4000463,200, "3"),//可乐帽子
	Array(1002677,4000463,200, "4"),//玩具匠人帽
	Array(1002699,4000463,200, "5"),//南瓜帽子
	Array(1002723,4000463,200, "7"),//月饼帽
	Array(1002879,4000463,200, "8"),//圣诞鹿角
	Array(1002737,4000463,200, "9"),//乖乖鼠头箍
	Array(1002743,4000463,200, "10"),//海洋之帽
	Array(1002798,4000463,200, "11"),//头顶年糕
	Array(1002799,4000463,200, "12"),//月桂冠
	Array(1002841,4000463,200, "13"),//幽灵小熊
	Array(1003027,4000463,200, "14"),//会说话的女巫帽
	Array(1002894,4000463,200, "15"),//粉色编织发带
	Array(1002895,4000463,200, "16"),//红色编织发带
	Array(1002896,4000463,200, "17"),//紫色编织发带
	Array(1002897,4000463,200, "18"),//橙色编织发带
	Array(1002898,4000463,200, "19"),//绿色编织发带
	Array(1002899,4000463,200, "20"),//黄色编织发带
	Array(1002900,4000463,200, "21"),//蓝色编织发带
	Array(1002901,4000463,200, "22"),//银色编织发带
	Array(1002902,4000463,200, "23"),//黑色编织发带
	Array(1003114,4000463,200, "24"),//紫龙头盔
	Array(1003219,4000463,200, "25"),//彩虹大蝴蝶结
	Array(1003360,4000463,200, "26"),//恶魔之角
	Array(1003359,4000463,200, "27"),//精灵王头冠
	Array(1003610,4000463,200, "28"),//可爱遮耳帽
	Array(1003717,4000463,200, "29"),//女王王冠
	Array(1003745,4000463,200, "30"),//进阶女王王冠
	Array(1442121,4000463,200, "31"),//白蛇帽子
	Array(1003980,4000463,200, "32"),//宇宙海盗全包式头盔
	Array(1003981,4000463,200, "33"),//头顶的宇宙海盗
	Array(1003982,4000463,200, "34"),//宇宙海盗半包式头盔
	Array(1004465,4000463,200, "35"),//烟花帽
	Array(1001081,4000463,200, "36"),//黑寡妇头盔
	Array(1052305,4000463,200, "37"),//女皇的卓越长袍
	Array(1050237,4000463,200, "38"),//红色套装
	Array(1050238,4000463,200, "39"),//绿色套装
	Array(1050239,4000463,200, "40"),//蓝色套装
	Array(1050240,4000463,200, "41"),//黑色套装
	Array(1051287,4000463,200, "42"),//粉色套装
	Array(1051288,4000463,200, "43"),//黄色套装
	Array(1051289,4000463,200, "44"),//黑寡妇套装
	Array(1052202,4000463,200, "45"),//品克缤套服
	Array(1052217,4000463,200, "46"),//白云套装
	Array(1052350,4000463,200, "47"),//傻瓜训练服
	Array(1052578,4000463,200, "48"),//唐云的厨师服
	Array(1052533,4000463,200, "49"),//脆弱新手骑士全身铠甲
	Array(1051310,4000463,200, "50"),//维丽尔连身衣
	Array(1050254,4000463,200, "51"),//维丽尔连身衣
	Array(1003424,4000463,200, "52"),//黄金三叶草帽子
	Array(1042234,4000463,200, "53"),//黄金三叶草T恤
	Array(1062150,4000463,200, "54"),//黄金三叶草裤子
	Array(1082415,4000463,200, "55"),//黄金三叶草手套
	Array(1072639,4000463,200, "56"),//黄金三叶草鞋
	Array(1102361,4000463,200, "57"),//黄金三叶草背包
	Array(1003423,4000463,200, "58"),//白银三叶草帽子
	Array(1042233,4000463,200, "59"),//白银三叶草连帽T恤
	Array(1062149,4000463,200, "60"),//白银三叶草裤子
	Array(1082414,4000463,200, "61"),//白银三叶草手套
	Array(1072638,4000463,200, "62"),//白银三叶草鞋
	Array(1102360,4000463,200, "63"),//白银三叶草背包
	Array(1050294,4000463,200, "64"),//军团战衣
	Array(1051360,4000463,200, "65"),//军团连衣裙
	Array(1082572,4000463,200, "66"),//牛郎星手套
	Array(1082477,4000463,200, "67"),//冒险勇士手套
	Array(1082424,4000463,200, "68"),//3x3 手套
	Array(1082431,4000463,200, "69"),//梦幻好友手镯
	Array(1082533,4000463,200, "70"),//艾利涅的手镯
	Array(1102590,4000463,200, "71"),//艾利涅的翅膀
	Array(1102681,4000463,200, "72"),//单身部队战斗披风
	Array(1102379,4000463,200, "73"),//情人节爱心气球
	Array(1102369,4000463,200, "74"),//月妙尾巴
	Array(1102299,4000463,200, "75"),//草绿爱心气球披风
	Array(1102061,4000463,200, "76"),//氧气桶
	Array(1012267,4000463,200, "77"),//甜瓜雪糕
	Array(1022095,4000463,200, "78"),//见钱眼开
	Array(1012288,4000463,200, "79"),//传说枫叶
	Array(1012454,4000463,200, "80"),//狐狸尖胡须
	Array(1012369,4000463,200, "81"),//卡腾的白卷胡子
	Array(1012448,4000463,200, "82"),//闪耀的夜光鼻
	Array(1012295,4000463,200, "83"),//生气的假面
	Array(1012294,4000463,200, "84"),//微笑的假面
	Array(1012293,4000463,200, "85"),//郁闷的假面
	Array(1012292,4000463,200, "86"),//哭泣的假面
	Array(1012084,4000463,200, "87"),//小白鼠面妆
	Array(1012254,4000463,200, "88"),//匹诺曹的鼻子
	Array(1012157,4000463,200, "89"),//草莓幕斯
	Array(1012446,4000463,200, "90"),//卡腾的烦恼胡子
	Array(1012447,4000463,200, "91"),//卡腾的蓝色胡子
	Array(1012445,4000463,200, "92"),//卡腾的大叔胡子
	Array(1012443,4000463,200, "93"),//卡腾的蓬松胡子
	Array(1012442,4000463,200, "94"),//卡腾的卷胡子
	Array(1012440,4000463,200, "95"),//卡腾的圆胡子
	Array(1012513,4000463,200, "96"),//短笛
	Array(1022114,4000463,200, "97"),//米卡埃尔的眼镜
	Array(1022166,4000463,200, "98"),//无限旅行者的防风镜
	Array(1022129,4000463,200, "99"),//精灵眼镜
	Array(1022172,4000463,200, "100"),//情人节甜蜜眼镜
	Array(1022237,4000463,200, "101"),//传说赏金猎人太阳眼镜
	Array(1022236,4000463,200, "102"),//大师赏金猎人太阳眼镜
	Array(1022143,4000463,200, "103"),//清凉仲夏潜水镜
	Array(1022137,4000463,200, "105"),//神圣拯救者护目镜
	Array(1022166,4000463,200, "106"),//无限旅行者的防风镜
	Array(1022135,4000463,200, "107"),//萧公的熊猫眼饰
	Array(1022136,4000463,200, "108"),//呆呆熊猫眼饰
	Array(1032113,4000463,200, "109"),//传说枫叶耳环
	Array(1032153,4000463,200, "110"),//葡萄耳环
	Array(1032114,4000463,200, "111"),//酸甜耳环
	Array(1032156,4000463,200, "112"),//神秘耳环
	Array(1032054,4000463,200, "113"),//彩虹耳环
	Array(1032226,4000463,200, "114"),//兔耳环
	Array(1122206,4000463,200, "115"),//西瓜项链
	Array(1122161,4000463,200, "116"),//金松饼项链
	Array(1122209,4000463,200, "117"),//黄金月饼项链
	Array(1122074,4000463,200, "118"),//枫叶吊坠1
	Array(1122260,4000463,200, "119"),//枫叶吊坠2
	Array(1122118,4000463,200, "120"),//永恒爱情证物
	Array(1132136,4000463,200, "121"),//联盟不灭法老腰带
	Array(1132179,4000463,200, "122"),//新人锁链
	Array(1132258,4000463,200, "123"),//完美的绝对腰带
	Array(1132228,4000463,200, "124"),//10周年黑色腰带
	Array(1082587,4000463,200, "125"),//2014运动会优胜组手套
	Array(1072929,4000463,200, "126")//2014运动会优胜组鞋子
    //如需其它道具兑换，请按照此格式自行添置。
    //代码,价格,介绍
    );


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
    cm.dispose();
    } else {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        sl = cm.getPlayer().getItemQuantity(4000463, false);
        StringS = "#b#n   角色剩余:" + sl + " 颗#v4000463#";
        for (var i = 0; i < ItemId.length; i++) {
        StringS += "\r\n#L" + i + "##b" + 红色箭头 + "#b#v " + ItemId[i][1] + " #" + ItemId[i][2] + "#n颗#k 兑换 #r#v" + ItemId[i][0] + "##z" + ItemId[i][0] + "##k#l";
        }
        cm.sendSimple(StringS, 2);
        zones == 0;

    } else if (status == 1) {
        if (zones == 0) {
            if (cm.getInventory(1).isFull()){
            cm.sendOk("#b请保证装备栏位至少有2个空格,否则无法购买.");
            cm.dispose();
            } else if (cm.getInventory(2).isFull()){
            cm.sendOk("#b请保证消耗栏位至少有2个空格,否则无法购买.");
            cm.dispose();
            } else if (cm.getInventory(3).isFull()){
            cm.sendOk("#b请保证设置栏位至少有2个空格,否则无法购买.");
            cm.dispose();
            } else if (cm.getInventory(4).isFull()){
            cm.sendOk("#b请保证其他栏位至少有2个空格,否则无法购买.");
            cm.dispose();
        } else if (cm.haveItem(ItemId[selection][1], ItemId[selection][2])) {
            cm.gainItem(ItemId[selection][1], -ItemId[selection][2]);
            cm.gainItem(ItemId[selection][0], 1);
            cm.sendOk("兑换成功，请检背包!"); 
            cm.dispose();
        } else {
            cm.sendOk("#v4000463#不足！");
            cm.dispose();
        }
        }
    }
    }
}	