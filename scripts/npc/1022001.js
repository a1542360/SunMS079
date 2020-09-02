/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
var status = 0;
var maps = Array(104000000, 100000000, 101000000, 103000000, 120000000);
var rCost = Array(5000, 5000, 5000, 5000, 5000);
var costBeginner = Array(120, 100, 80, 100, 100);
var cost = new Array("5,000", "5,000", "5,000", "5,000", "5,000");
var show;
var sCost;
var selectedMap = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
	cm.dispose();
	return;
    } else if (status >= 2 && mode == 0) {
	cm.sendNext("这里还有很多地方可以逛。当你想要去不同的城镇的时候，欢迎随时来找我吧。");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("您好~! 勇士部落计程车. 想要往其他村庄安全又快速的移动吗? 如果是这样 为了优先考量满足顾客, 请使用 #b#p1022001##k 亲切的送你到想要到达的地方！");
    } else if (status == 1) {
	var job = cm.getJob();
	if (job == 0 || job == 1000 || job == 2000) {
	    var selStr = "我们有特殊90%折扣，对于新手选择你的目的地#b";
	    for (var i = 0; i < maps.length; i++) {
		selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + costBeginner[i] + " 金币)#l";
	    }
	} else {
	    var selStr = "请选择目的地.#b";
	    for (var i = 0; i < maps.length; i++) {
		selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + cost[i] + " 金币)#l";
	    }
	}
	cm.sendSimple(selStr);
    } else if (status == 2) {
	var job = cm.getJob();
	if (job == 0 || job == 1000 || job == 2000) {
	    sCost = costBeginner[selection];
	    show = costBeginner[selection];
	} else {
	    sCost = rCost[selection];
	    show = cost[selection];
	}
	cm.sendYesNo("你在这里没有任何事情做，是吧? #b#m" + maps[selection] + "##k 他将花费你的 #b" + show + " 金币#k.");
	selectedMap = selection;
    } else if (status == 3) {
	if (cm.getMeso() < sCost) {
	    cm.sendNext("很抱歉由于你没有足够的金币 所以你将无法乘坐出租车!");
	} else {
	    cm.gainMeso(-sCost);
	    cm.warp(maps[selectedMap]);
	}
	cm.dispose();
    }
}