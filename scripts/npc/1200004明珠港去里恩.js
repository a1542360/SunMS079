/* ==================
 �ű�����: NPC	    
 �ű���Ȩ��Machi&�鼪ð�յ��Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
function start() {
    cm.sendYesNo("����Ҫȥ���������֧��#b 80 ���#k ���Ǳ�Լһ����.");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("���㿼�Ǻ��������Ұ�!");
	cm.dispose();
	} else {
    if(cm.getPlayer().getMeso() >= 80) {
	cm.gainMeso(-80);
	cm.warpBack(200090060,140020300,80);
    }
    cm.dispose();
}
}
