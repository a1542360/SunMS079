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
            text +=" ��.������ĩ������һ�����Ա.\r\n"
            text += " #r�������500��#v4031250##z4031250#�Ļ��������Ҷһ������.\r\n\r\n"
			text += "#b#v5201000#x500 #v5150040#x1 #v5110000#x1 #v2140002#x10�� #v5440000#x1500 \r\n            #v2022452#x10000#k    #v3012006#x1\r\n"			
			text += "#L0##e#d#v4031250#500����ȡ�ҵĻ����#l\r\n\r\n"
			//text += "#L2##e#d#v5220000#���ְٱ�ȯ����#l\r\n"
            cm.sendOk(text);
        } else if (selection == 0) {
		if (cm.haveItem(4031250, 500)) {//�ж�����Ʒ
		cm.gainItem(4031250, -500);//�۳�����Ʒ
		cm.gainItem(1442039, 1, 1);//������Ʒ+���� ����cm.gainItem(1072369, 1, 1);������Ʒ+����+����
		cm.gainItem(5150040, 1);		
		cm.gainItem(5110000, 1, 7);
		cm.gainItem(3012006, 1);		
		//cm.getPlayer().modifyCSPoints(1, +666, true);//����ȯ
		cm.getPlayer().modifyCSPoints(2, +1500, true);//������ȯ
		cm.getPlayer().gainBeans(+500);//������
		cm.gainMeso(100000);//�����
		cm.gainExp(10000);		
		cm.sendOk("�һ�������ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] ��ȡ�˻����!һ����ף����/����!");//����
		cm.dispose();
		}else{
		cm.sendOk("��û���㹻��#v4031250##r#z4031250#!");
		cm.dispose();
			}		
	}
    }
}


