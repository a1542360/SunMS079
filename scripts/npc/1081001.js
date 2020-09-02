/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
var status = -1;
var returnmap = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.sendNext("你不回去 #m"+returnmap+"# 那真是太棒了!\r\n看看我在这边还不是过得好好，和你讲话仿佛回到了以前呢!");
	cm.safeDispose();
	return;
    }
    if (status == 0) {
	returnmap = cm.getSavedLocation("FLORINA");
	cm.sendSimple("所以你想离开 #b#m110000000##k? 如果你想我可以帮助你回到 #b#m"+returnmap+"##k. 但是需要10000金币!\n\r\n#L0##b我愿意付 10000 金币#l");
    } else if (status == 1) {
	cm.sendYesNo("你确定你想回到 #b#m"+returnmap+"##k? 好吧，我们得走快点了");
    } else if (status == 2) {
	if (cm.getMeso() < 10000) {
		cm.sendOk("好像金币不够!");
		cm.dispose();
	} else {
	if (returnmap < 0) {
		returnmap = 104000000;
	}
	cm.gainMeso(-10000);
	cm.warp(returnmap, 0);
	cm.clearSavedLocation("FLORINA");
	cm.dispose();
    }
}
}