function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
			if(cm.getPlayer().getMapId() == 108010101 || cm.getPlayer().getMapId() == 108010201 || cm.getPlayer().getMapId() == 108010301 || cm.getPlayer().getMapId() == 108010401 || cm.getPlayer().getMapId() == 108010501){
	cm.sendOk("����ͼ��ʱ�޷�ʹ��ʹ����������");
cm.dispose();
return;
}		
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "   #k��ӭ������֮�Ƚ�ָ����!����֮ǰ����ȷ����鱳��װ�������п�λû.���������ɵ���ʧ���ге�!\r\n"
			text += "#L1##e#dС���ָ#l#v1112907#��ά����+1\r\n\r\n" 
			text += "#L2##e#d������ָ#l#v1112915#��ά����+3\r\n\r\n"
			text += "#L3##e#d�λ�Ů����ػ�#l#v1112932#��ά����+5\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
        cm.openNpc(9310074, 1);//С���ָ
        } else if (selection == 2) {
		cm.openNpc(9310074, 2);//������ָ
        } else if (selection == 3) {
		cm.openNpc(9310074, 3);//�λ�Ů����ػ�
	}
    }
}


