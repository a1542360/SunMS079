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
            text +="�Ƿ�Ҫ��#v1122143#����Ϊ#v1122122#��? \r\n������#r1200����#l#k��#rʮö������#v4310029##k\r\n";
            text += "#L1#��׼���ò����� #l\r\n\r\n";
			text +="�ǵð�#v1122143#ж�������ڱ�����. \r\n";
			text +="�ϳɲ���:  #v4250802#*1�� #v4031560#*50�� #v4031559#*80�� #v4031561#*25�� \r\n";
			text +="#v4000313#*600��  #v4001126#*3000��  #v4003000#*500��  #v4021007#*30��\r\n";
			text +="#v4021000#*30�� #v4021004#*30�� #v4011002#*30��  #v4021008#*30�� #v4005004#*30��\r\n";
			text +="#v4000040#*15�� #v4000176#*15�� \r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(1122143, 1) && cm.haveItem(4250802, 1) && cm.haveItem(4031560, 50) && cm.haveItem(4031559, 80) && cm.haveItem(4031561, 25) && cm.haveItem(4000313, 600) && cm.haveItem(4001126, 3000) && cm.haveItem(4003000, 500) && cm.haveItem(4021007, 30) && cm.haveItem(4021000, 30) && cm.haveItem(4021004, 30) && cm.haveItem(4011002, 30) && cm.haveItem(4021008, 30) && cm.haveItem(4005004, 30) && cm.haveItem(4310029, 10) && cm.haveItem(4000040, 15) && cm.haveItem(4000176, 15) && cm.getMeso() >=12000000) {
                cm.gainItem(1122143,-1);
                cm.gainItem(4250802,-1);
                cm.gainItem(4031560,-50);
                cm.gainItem(4031559,-80);
                cm.gainItem(4031561,-25);
                cm.gainItem(4000313,-600);
                cm.gainItem(4001126,-3000);
                cm.gainItem(4003000,-500);
                cm.gainItem(4021007,-30);
                cm.gainItem(4021000,-30);
                cm.gainItem(4021004,-30);
                cm.gainItem(4011002,-30);
                cm.gainItem(4021008,-30);
                cm.gainItem(4005004,-30);
                cm.gainItem(4310029,-10);
                cm.gainItem(4000040,-15);
                cm.gainItem(4000176,-15);
                //cm.gainItem(4005001,-1);
                //cm.gainItem(4005002,-1);
                //cm.gainItem(4005003,-1);
                //cm.gainItem(4005004,-1);
                //cm.gainItem(4001126,-300);
                //cm.gainItem(4000313,-100);
                //cm.gainItem(4031560,-10);
                cm.gainMeso(-12000000);
                cm.gainItem(1122122,16,4,0,0,200,0,50,0,20,20,20,20,0,0);
                cm.sendOk("�ϳ�#v1122122#�ɹ���");
                cm.dispsoe();
            } else {
                cm.sendOk("׼���Ķ���������,�����ռ���");
                cm.dispsoe();
            } 
			}
		}
    }


