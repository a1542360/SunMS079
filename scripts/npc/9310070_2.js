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
            text +="�Ƿ�Ҫ��#v1122133#����Ϊ#v1122029#��? \r\n������#r500����#l#k��#r��ö������#v4310029##k\r\n";
            text += "#L1#��׼���ò����� #l\r\n\r\n";
			text +="�ǵð�#v1122133#ж�������ڱ�����. \r\n";
			text +="�ϳɲ���:  #v4250800#*1�� #v4031560#*30�� #v4031559#*30�� #v4031561#*8�� \r\n";
			text +="#v4000313#*300��  #v4001126#*1000��  #v4003000#*100��  #v4021007#*10��\r\n";
			text +="#v4021000#*10�� #v4021004#*10�� #v4011002#*10��  #v4021008#*10�� #v4005004#*10��\r\n";
			text +="#v4000040#*3�� #v4000176#*3�� \r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(1122133, 1) && cm.haveItem(4250800, 1) && cm.haveItem(4031560, 30) && cm.haveItem(4031559, 30) && cm.haveItem(4031561, 8) && cm.haveItem(4000313, 300) && cm.haveItem(4001126, 1000) && cm.haveItem(4003000, 100) && cm.haveItem(4021007, 10) && cm.haveItem(4021000, 10) && cm.haveItem(4021004, 10) && cm.haveItem(4011002, 10) && cm.haveItem(4021008, 10) && cm.haveItem(4005004, 10) && cm.haveItem(4310029, 3) && cm.haveItem(4000040, 3) && cm.haveItem(4000176, 3) && cm.getMeso() >=5000000) {
                cm.gainItem(1122133,-1);
                cm.gainItem(4250800,-1);
                cm.gainItem(4031560,-30);
                cm.gainItem(4031559,-30);
                cm.gainItem(4031561,-8);
                cm.gainItem(4000313,-300);
                cm.gainItem(4001126,-1000);
                cm.gainItem(4003000,-100);
                cm.gainItem(4021007,-10);
                cm.gainItem(4021000,-10);
                cm.gainItem(4021004,-10);
                cm.gainItem(4011002,-10);
                cm.gainItem(4021008,-10);
                cm.gainItem(4005004,-10);
                cm.gainItem(4310029,-3);
                cm.gainItem(4000040,-3);
                cm.gainItem(4000176,-3);
                //cm.gainItem(4005001,-1);
                //cm.gainItem(4005002,-1);
                //cm.gainItem(4005003,-1);
                //cm.gainItem(4005004,-1);
                //cm.gainItem(4001126,-300);
                //cm.gainItem(4000313,-100);
                //cm.gainItem(4031560,-10);
                cm.gainMeso(-5000000);
                cm.gainItem(1122029,4,1,0,0,100,0,15,0,10,10,10,10,0,0);
                cm.sendOk("�ϳ�#v1122029#�ɹ���");
                cm.dispsoe();
            } else {
                cm.sendOk("׼���Ķ���������,�����ռ���");
                cm.dispsoe();
            } 
			}
		}
    }


