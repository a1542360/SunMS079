/* ==================
 脚本类型: NPC	    
 脚本版权：一线海冒险岛团队
 联系扣扣：297870163    609654666
 =====================
 */
function start() {
    cm.sendYesNo("你想要去天空之城必须支付#b 5000 枫币#k 大概一分钟...");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("等你考虑好再来找我吧!");
	cm.dispose();
	} else {
    if(cm.getPlayer().getMeso() >= 5000) {
	cm.gainMeso(-5000);
	cm.warpBack(200090021,200000100,80);
    }
    cm.dispose();
}
}
