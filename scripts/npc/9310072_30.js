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
            text +="ľԪ�ؽ�ָ#v1112770#\r\n���˹̶�����ά�͹���ħ���ȼӳ�֮����⻹��Ѫ���ɳ�\r\n";
			text +="����ѡ���˺ϳ�ľԪ��֮��\r\n";
			text +="�ý�ָ���󽫲��ܺϳ�����Ԫ�صĽ�ָ\r\n";
			text +="�����ؿ���\r\n";
            text += "#L1##v1112770##e#kC��ľԪ��(��ά+5 ����+2 ħ��+4 hp+120)#l\r\n";
			text += "#L2##v1112769##e#kB��ľԪ��(��ά+7 ����+5 ħ��+8 hp+300)#l\r\n";
			text += "#L3##v1112768##e#kA��ľԪ��(��ά+10 ����+10 ħ��+15 hp+600)#l\r\n";
            cm.sendSimple(text);
			        } else if (selection == 1) {
        cm.openNpc(9310072, 31);//սʿ
        } else if (selection == 2) {
		cm.openNpc(9310072, 32);//��ʦ
		} else if (selection == 3) {
		cm.openNpc(9310072, 33);//������
		} else if (selection == 3) {
		cm.openNpc(9201123, 4);//����
		} else if (selection == 4) {
		cm.openNpc(9900004, 5);//����
		} else if (selection == 5) {
        cm.openNpc(9900004, 6);//��Ч
	}
    }
}