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
			text += "\t\t\t#e��ӭ����#b���չȷ������������� #k!#n\r\n"
			text += "#n#k��ǰ���㣺#r" +cm.getPlayer().getCSPoints(1) +  "#k��    �����㣺#r" + cm.getPlayer().getBeans() + "#k��\r\n"
            text += "#L1##b200��ȯ����1��#v5220040##l\r\n\r\n"
            text += "#L2##b400��ȯ����2��#v5220040##l\r\n\r\n"
            text += "#L3##b1000��ȯ����5��#v5220040##l\r\n\r\n"
            text += "#L4##b2000��ȯ����10��#v5220040##l\r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) { 
		  if (cm.getPlayer().getCSPoints(1) >= 200) {//��������� �ǵû�
		        cm.gainDJ(-200);
	            cm.gainItem(5220040, 1);//��Ʒ
				cm.sendOk("200��ȯ����1��������ɹ���");
			    cm.worldMessage(6,"������ϵͳ��["+cm.getName()+"]200��ȯ����1��������ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("��û��200��ȯ!");
				cm.dispose();
			}
        } else if (selection == 2) {  
		  if (cm.getPlayer().getCSPoints(1) >= 400) {//��������� �ǵû�
		        cm.gainDJ(-400);
	            cm.gainItem(5220040, 2);//��Ʒ
				cm.sendOk("400��ȯ����2��������ɹ���");
			    cm.worldMessage(6,"������ϵͳ��["+cm.getName()+"]400��ȯ����2��������ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("��û��400��ȯ!");
				cm.dispose();
			}
        } else if (selection == 3) { 
		  if (cm.getPlayer().getCSPoints(1) >= 1000) {//��������� �ǵû�
		        cm.gainDJ(-1000);
	            cm.gainItem(5220040, 5);//��Ʒ
				cm.sendOk("1000��ȯ����5��������ɹ���");
			    cm.worldMessage(6,"������ϵͳ��["+cm.getName()+"]1000��ȯ����5��������ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("��û��1000��ȯ!");
				cm.dispose();
			}
        } else if (selection == 4) {
		  if (cm.getPlayer().getCSPoints(1) >= 2000) {//��������� �ǵû�
		        cm.gainDJ(-2000);
	            cm.gainItem(5220040, 10);//��Ʒ
				cm.sendOk("2000��ȯ����10��������ɹ���");
			    cm.worldMessage(6,"������ϵͳ��["+cm.getName()+"]2000��ȯ����10��������ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("��û��2000��ȯ!");
				cm.dispose();
			}
			}
			}
		}
    



