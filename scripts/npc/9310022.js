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
			text += "\t\t\t#e��ӭ����#b���չȷ�����һ����� #k!#n\r\n\r\n"
			text += "#n#k��ǰ���㣺#r" +cm.getPlayer().getCSPoints(1) +  "#k��    �����㣺#r" + cm.getPlayer().getBeans() + "#k��\r\n"
            text += "#L1##b#v5220040#�һ�#v2140002#���#l\t\t#L2##b��ȯ����#v5220040##l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) { 
		cm.openNpc(9310022, 1); //�һ����		
        } else if (selection == 2) {  
        cm.openNpc(9310022, 2); //���������ĵ�
			}
		}
    }



