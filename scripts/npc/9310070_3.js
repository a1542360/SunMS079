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
            text +="�Ƿ�Ҫ��#v1122029#����Ϊ#v1122143#��? \r\n������#r800����#l#k��#r��ö������#v4310029##k\r\n";
            text += "#L1#��׼���ò����� #l\r\n\r\n";
			text +="�ǵð�#v1122029#ж�������ڱ�����. \r\n";
			text +="�ϳɲ���:  #v4250801#*1�� #v4031560#*40�� #v4031559#*50�� #v4031561#*15�� \r\n";
			text +="#v4000313#*400��  #v4001126#*2000��  #v4003000#*200��  #v4021007#*20��\r\n";
			text +="#v4021000#*20�� #v4021004#*20�� #v4011002#*20��  #v4021008#*20�� #v4005004#*20��\r\n";
			text +="#v4000040#*8�� #v4000176#*8�� \r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(1122029, 1) && cm.haveItem(4250801, 1) && cm.haveItem(4031560, 40) && cm.haveItem(4031559, 50) && cm.haveItem(4031561, 15) && cm.haveItem(4000313, 400) && cm.haveItem(4001126, 2000) && cm.haveItem(4003000, 200) && cm.haveItem(4021007, 20) && cm.haveItem(4021000, 20) && cm.haveItem(4021004, 20) && cm.haveItem(4011002, 20) && cm.haveItem(4021008, 20) && cm.haveItem(4005004, 20) && cm.haveItem(4310029, 6) && cm.haveItem(4000040, 8) && cm.haveItem(4000176, 8) && cm.getMeso() >=8000000) {
                cm.gainItem(1122029,-1);
                cm.gainItem(4250801,-1);
                cm.gainItem(4031560,-40);
                cm.gainItem(4031559,-50);
                cm.gainItem(4031561,-15);
                cm.gainItem(4000313,-400);
                cm.gainItem(4001126,-2000);
                cm.gainItem(4003000,-200);
                cm.gainItem(4021007,-20);
                cm.gainItem(4021000,-20);
                cm.gainItem(4021004,-20);
                cm.gainItem(4011002,-20);
                cm.gainItem(4021008,-20);
                cm.gainItem(4005004,-20);
                cm.gainItem(4310029,-6);
                cm.gainItem(4000040,-8);
                cm.gainItem(4000176,-8);
                //cm.gainItem(4005001,-1);
                //cm.gainItem(4005002,-1);
                //cm.gainItem(4005003,-1);
                //cm.gainItem(4005004,-1);
                //cm.gainItem(4001126,-300);
                //cm.gainItem(4000313,-100);
                //cm.gainItem(4031560,-10);
                cm.gainMeso(-8000000);
                cm.gainItem(1122143,8,2,0,0,150,0,30,0,15,15,15,15,0,0);
                cm.sendOk("�ϳ�#v1122143#�ɹ���");
                cm.dispsoe();
            } else {
                cm.sendOk("׼���Ķ���������,�����ռ���");
                cm.dispsoe();
            } 
			}
		}
    }


