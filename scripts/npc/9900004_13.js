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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "\t\t��ӭ����#e#r"+cm.getChannelServer().getServerName()+"#d-��Ʒ�һ�����\r\n\r\n"
			text += "#n#k�����㣺#r" + cm.getPlayer().getBeans() + "#k��\t  ���#r"+cm.getPlayer().getCSPoints(1) + "#k��\t  �����㣺#r" + cm.getDojoPoints() + " #k��\r\n"
			text += "#n#k��Ϸ�ң�#r" + cm.getMeso()+ "#kԪ#k\r\n\r\n"
			text += "----------------------��Ҷ��һ�---------------------"	
			text += "#L1##e#d110������#l    #L2##e#d120������#l  #L3##e#d130������#l\r\n\r\n"
			text += "#k#n----------------------����Ҷһ�---------------------"	
            text += "#L4##e#r�سɾ���#l     #L5##e#rף������#l    #L6##e#d�м�����#l\r\n\r\n"
			text += "#k#n----------------------���һ�----------------------"	
            text += "#L7##e#d�һ����#l     #L8##e#d�һ�����#l    #L9##e#r�߼�����#l\r\n\r\n" 
            cm.sendSimple(text);
        } else if (selection == 1) {//110�������һ�
		cm.openNpc(9900004, 131);	
        } else if (selection == 2) {//120�������һ�
		cm.openNpc(9900004, 132);		
        } else if (selection == 3) {//130�������һ�
		cm.openNpc(9900004, 133);	
        } else if (selection == 4) {//�سɾ���
		cm.openNpc(9900004, 134);
        } else if (selection == 5) {//ף������
		cm.openNpc(9900004, 135);
        } else if (selection == 6) {//�м�����
		cm.openNpc(9900004, 136);
        } else if (selection == 7) {//�һ����
		cm.openNpc(9900004, 137);
        } else if (selection == 8) {//�һ�����
		cm.openNpc(9900004, 138);
		} else if (selection == 9) {//�߼�����
		cm.openNpc(9900004, 139);
	}
    }
}


