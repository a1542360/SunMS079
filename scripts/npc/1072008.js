/* ==================
 �ű�����:  NPC	    
 �ű����ߣ�����     
 ��ϵ��ʽ��2412614144
 =====================
 */

var status;

function start() {
    status = -1;
    action(1,0,0);
}

function action(mode,type,selection) {
    if (status == -1) {
	if (cm.getMapId() == 108000500) {
	    if (!(cm.haveItem(4031857,15))) {
		cm.sendNext("��ȥ�ռ� 15�� #b#v4031857##z4031857##k ����.");
		cm.dispose();
	    } else {
		status = 2;
		cm.sendNext("��ϲͨ����θ����� ���Ѿ��Ǹ�ǿ��ĺ����������ҽ��������֤�����ǿ��!");
	    }
	} else if (cm.getMapId() == 108000502) {
	    if (!(cm.haveItem(4031856,15))) {
		cm.sendNext("��ȥ�ռ�15�� #b#v4031856##z4031856##k ����.");
		cm.dispose();
	    } else {
		status = 2;
		cm.sendNext("��ϲͨ����θ����� ���Ѿ��Ǹ�ǿ��ĺ����������ҽ��������֤�����ǿ��,��ȥ�Ժ����!");
	    }
	} else {
	    cm.sendNext("�������ٳ���һ��.");
	    cm.dispose();
	}
    } else if (status == 2) {
	cm.warp(120000101,0);
	cm.dispose();
    }
}