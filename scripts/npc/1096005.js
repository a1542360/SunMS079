/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
		cm.sendNextNoESC("好的！ 我们走吧!");
	} else if (status == 1) {
		cm.forceCompleteQuest(2572);
		cm.sendDirectionInfo("Effect/Direction4.img/effect/cannonshooter/flying/0");
		cm.sendDirectionInfo("Effect/Direction4.img/effect/cannonshooter/flying1/0");
		cm.sendDirectionStatus(1, 1000);
		cm.warp(912060300,0);
		cm.dispose();
	}
}