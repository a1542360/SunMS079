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
            text += "		#v4001221# #v4001222# #v4001223# #v4001224# #v4001225#\r\n "
			text += "  #r����ύ����֮ǰ���鱳����λ!\r\n "
			text += "  #d�����������߱�Ψһ��,������ϲ����ڱ䶯!\r\n "
			text +="#v3994085##L2##e#k������#l#v3994085#\r\n\r\n"
			text +=" #v3994085##L3##e#k��������#l#v3994085#\r\n\r\n" 
            cm.sendSimple(text);
        } else if (selection == 1) {
						if(cm.getPlayer().getMapId() == 910000000){
	cm.sendOk("���Ѿ����г��ˣ����˺���?");
cm.dispose();
return;
}		
		cm.warp(910000000);
		cm.dispose();
        } else if (selection == 2) {//10
		cm.openNpc(9310071, 14);
        } else if (selection == 3) {//20-50
		cm.openNpc(9310071, 15);
        } else if (selection == 4) {//20-50
		cm.openNpc(9310102, 30);
        } else if (selection == 5) {//51-100
		cm.openNpc(9310102, 40);
        } else if (selection == 6) {//51-100
		cm.openNpc(9900004, 205);
        } else if (selection == 7) {//101-200
		cm.openNpc(9900004, 206);
        } else if (selection == 8) {//101-200
		cm.openNpc(9900004, 207);
		} else if (selection == 9) {//ͬ����װ
		cm.openNpc(9900004, 9);
		} else if (selection == 10) {//ɾ��ָ����Ʒ
		cm.openNpc(9900004, 10);
	    } else if (selection == 11) {//��������
		cm.openNpc(9900004, 91);
		cm.dispose();
		} else if (selection == 12) {//��Ҷ�һ�
		cm.openNpc(9900004, 12);
		} else if (selection == 13) {//��Ҷ�һ�
		cm.openNpc(9900004, 33);
	}
    }
}


