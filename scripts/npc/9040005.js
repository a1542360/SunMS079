/* ==================
 �ű�����:  NPC	    
 �ű����ߣ�����     
 ��ϵ��ʽ��2412614144
 =====================
 */
 var status = -1;

function action(mode, type, selection) {
    if (mode != 1) {
	cm.sendOk("��ɹ�������ĺ�����!");
	cm.dispose();
	return;
    }
status++;
    if (status == 0) {
	if (cm.isPlayerInstance()) {
		cm.sendSimple("������ʲô? \r\n #L0#�뿪��������#l");
	} else {
		cm.sendOk("�Բ����Ҳ���Ϊ�����κ���!");
		cm.warp(990001100);
		cm.dispose();
	}
    }
    else if (status == 1) {
	cm.sendYesNo("��ȷ�������������㽫���ܻ���!");
    }
    else if (status == 2) {
	if (cm.isPlayerInstance()) { 
	    cm.warp(990001100);
		cm.getEventManager("GuildQuest").setProperty("GuildQuest", "true");
		cm.getPlayer().getEventInstance().removePlayer(cm.getPlayer());
	}
	cm.dispose();
	return;
    }
}
