/*�ϳ�NPC ����:bay ��*/
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
            for (i = 0; i < 60; i++) {
                text += "";
            }
            text +="��Ԫ�ؽ�ָ#v1112774#\r\n���˹̶�����ά�͹���ħ���ȼӳ�֮����⻹�����гɳ�\r\n";
			text +="����ѡ���˺ϳɷ�Ԫ��֮��\r\n";
			text +="�ý�ָ���󽫲��ܺϳ�����Ԫ�صĽ�ָ\r\n";
			text +="�����ؿ���\r\n";
            text += "#L1##v1112774##e#kC����Ԫ��(��ά+5 ����+2 ħ��+4 ����+15)#l\r\n";
			text += "#L2##v1112773##e#kB����Ԫ��(��ά+7 ����+5 ħ��+8 ����+30)#l\r\n";
			text += "#L3##v1112772##e#kA����Ԫ��(��ά+10����+10ħ��+15����+50)#l\r\n";
            cm.sendSimple(text);
			        } else if (selection == 1) {
        cm.openNpc(9310072, 51);//
        } else if (selection == 2) {
		cm.openNpc(9310072, 52);//
		} else if (selection == 3) {
		cm.openNpc(9310072, 53);//
		} else if (selection == 3) {
		cm.openNpc(9201123, 4);//
		} else if (selection == 4) {
		cm.openNpc(9900004, 5);//
		} else if (selection == 5) {
        cm.openNpc(9900004, 6);//
	}
    }
}