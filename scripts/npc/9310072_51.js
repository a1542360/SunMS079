importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
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
            text +=" #k��ӭ����Machi&�鼪ð�յ���ָ�ϳ�!\r\n����֮ǰ����ȷ����鱳��װ�������п�λû.�����Ϊ����������ɵ���ʧGM�Ų�����!\r\n";
            text +="      #r����#v1112774#C������ά+5 ����+2 ħ��+4 ����+15��\r\n      ��Ҫ���²���:\r\n ";
			text +="     ���Ȱ�#v1112657#ж�·��ڱ�����\r\n";
			text +="  #v4011004#10�� #v4021004#10�� #v4021005#10�� #v4005002#5��\r\n";
			text +="  #v4021008#10��  #v4005004#5�� #v4021009#5�� #v4011007#5�� #v4003000#200�� \r\n";
			text +="  #v4031560#15�� #v4031559#10��  #v4031561#5�� #v4032392#5�� #v4032393#5��\r\n";
			text +="                  �ϳɷ��ã�2,000,000��ң�������\r\n";
			text += "                                    #L1##r��Ҫ�ϳ�\r\n";
			
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(1112657, 1) && cm.haveItem(4011004, 10) && cm.haveItem(4021000, 10) && cm.haveItem(4021005, 10) && cm.haveItem(4005002, 5) && cm.haveItem(4021008, 10) && cm.haveItem(4005004, 5) && cm.haveItem(4021009, 5) && cm.haveItem(4011007, 5) && cm.haveItem(4003000, 200) && cm.haveItem(4031560, 10) && cm.haveItem(4031559, 15) && cm.haveItem(4031561, 5) && cm.haveItem(4032392, 5) && cm.haveItem(4032393, 5) && cm.getMeso() >=2000000) {
                cm.gainItem(1112657,-1);
				cm.gainItem(4011004,-10);
				cm.gainItem(4021000,-10);
				cm.gainItem(4021005,-10);
				cm.gainItem(4005002,-5);
				cm.gainItem(4021008,-10);
				cm.gainItem(4005004,-5);
				cm.gainItem(4021009,-5);
				cm.gainItem(4011007,-5);
				cm.gainItem(4003000,-200);
				cm.gainItem(4031560,-10);
				cm.gainItem(4031559,-15);
				cm.gainItem(4031561,-5);
				cm.gainItem(4032392,-5);
				cm.gainItem(4032393,-5);
                cm.gainMeso(-2000000);
		var ii = MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(1112774); //���װ��������
		var toDrop = ii.randomizeStats(ii.getEquipById(1112774)).copy(); // ����һ��Equip��
		//toDrop. setFlag(1);//����
		toDrop. setStr(5);//������
		toDrop. setDex(5);//������ 
		toDrop. setInt(5);//������
		toDrop. setLuk(5);//������
		toDrop. setHp(0);//HP
        toDrop. setMp(0);//MP
		toDrop. setWatk(2);//������    
		toDrop. setMatk(4);//ħ����
		toDrop. setWdef(0);//�������
		toDrop. setMdef(0);//ħ������
		toDrop. setAcc(15);//����
		toDrop. setAvoid(0);//�ر�
		toDrop. setHands(0);//�ּ�
		toDrop. setSpeed(0);//�ƶ��ٶ�
		toDrop. setJump(0);//��Ծ

		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
                cm.sendOk("�ϳ�#v1112774#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ���!");
                cm.dispose();
            }
        } else if (selection == 2) {
            if (cm.haveItem(1113164, 1) && cm.haveItem(4001266, 50) && cm.haveItem(4000487, 50) && cm.haveItem(4031559, 5) && cm.haveItem(4003002, 5) && cm.haveItem(4003003, 5) && cm.haveItem(4000463, 1) && cm.haveItem(4021000, 10) && cm.haveItem(4021004, 10) && cm.haveItem(4021005, 10) && cm.haveItem(4021004, 10) && cm.haveItem(4021006, 10) && cm.getMeso() >=5000000) {
                cm.gainItem(1113164,-1);
				cm.gainItem(4001266,-50);
				cm.gainItem(4000487,-50);
                cm.gainItem(4031559,-5);
				cm.gainItem(4003002,-5);
				cm.gainItem(4003003,-5);
				cm.gainItem(4000463,-1);
				cm.gainItem(4021000,-10);
				cm.gainItem(4021004,-10);
				cm.gainItem(4021005,-10);
				cm.gainItem(4021004,-10);
				cm.gainItem(4021006,-10);
                cm.gainMeso(-5000000);
		var ii = MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(1113165); //���װ��������
		var toDrop = ii.randomizeStats(ii.getEquipById(1113165)).copy(); // ����һ��Equip��
		//toDrop. setFlag(1);//����
		toDrop. setStr(1);//������
		toDrop. setDex(1);//������ 
		toDrop. setInt(1);//������
		toDrop. setLuk(1);//������
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
                cm.sendOk("�ϳ�#v1113165#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v1113164#*1�� #v4001266#*50�� #v4000487#*50�� #v4031559#*5�� #v4003002#*5�� #v4003003#*5�� #v4000463#*1�� #v4021004#*10�� #v4021004#*10�� #v4021005#*10�� #v4021004#*10�� #v4021006#*10�� 500����");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.haveItem(1113165, 1) && cm.haveItem(4001266, 100) && cm.haveItem(4000487, 100) && cm.haveItem(4031559, 8) && cm.haveItem(4003002, 10) && cm.haveItem(4003003, 10) && cm.haveItem(4031561, 5) && cm.haveItem(4000463, 7) && cm.haveItem(4021005, 10) && cm.haveItem(4021004, 10) && cm.haveItem(4021005, 10) && cm.haveItem(4021005, 10) && cm.haveItem(4021006, 10) && cm.haveItem(4021008, 10) &&cm.getMeso() >=10000000) {
                cm.gainItem(1113165,-1);
				cm.gainItem(4001266,-100);
				cm.gainItem(4000487,-100);
                cm.gainItem(4031559,-8);
				cm.gainItem(4003002,-10);
				cm.gainItem(4003003,-10);
				cm.gainItem(4031561,-5);
				cm.gainItem(4000463,-7);
				cm.gainItem(4021005,-10);
				cm.gainItem(4021004,-10);
				cm.gainItem(4021005,-10);
				cm.gainItem(4021005,-10);
				cm.gainItem(4021006,-10);
				cm.gainItem(4021008,-10);
                cm.gainMeso(-10000000);
		var ii = MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(1113166); //���װ��������
		var toDrop = ii.randomizeStats(ii.getEquipById(1113166)).copy(); // ����һ��Equip��
		//toDrop. setFlag(1);//����
		toDrop. setStr(1);//������
		toDrop. setDex(1);//������ 
		toDrop. setInt(1);//������
		toDrop. setLuk(1);//������
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
                cm.sendOk("�ϳ�#v1113166#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v1113165#*1�� #v4001266#*100�� #v4000487#*100�� #v4031559#*8�� #v4003002#*10�� #v4003003#*10�� #v4031561#*5�� #v4000463#*7�� #v4021005#*10�� #v4021004#*10�� #v4021005#*10�� #v4021005#*10�� #v4021006#*10�� #v4021008#*10��+ 1000����");
                cm.dispose();
            }
        } else if (selection == 4) {
            if (cm.haveItem(1113166, 1) && cm.haveItem(4001266, 200) && cm.haveItem(4000487, 200) && cm.haveItem(4003002, 20) && cm.haveItem(4003003, 20) && cm.haveItem(4001006, 50) && cm.haveItem(4031561, 10) && cm.haveItem(4031560, 10) && cm.haveItem(4021000, 10) && cm.haveItem(4021005, 10) && cm.haveItem(4021010, 2) && cm.haveItem(4000463, 5) && cm.getMeso() >=10000000) {
                cm.gainItem(1113166,-1);
				cm.gainItem(4001266,-200);
				cm.gainItem(4000487,-200);
                cm.gainItem(4003002,-20);
				cm.gainItem(4003003,-20);
				cm.gainItem(4001006,-50);
				cm.gainItem(4031561,-10);
				cm.gainItem(4031560,-10);
				cm.gainItem(4021000,-10);
				cm.gainItem(4021005,-10);
				cm.gainItem(4021010,-2);
				cm.gainItem(4000463,-5);
                cm.gainMeso(-10000000);
				cm.gainItem(1113167,1);
                cm.sendOk("�ϳ�#v1113167#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v1113166#*1�� #v4001266#*200�� #v4000487#200�� #v4003002#20�� #v4003003#*20�� #v4001006#*50�� #v4031561#*10�� #v4031560#*10�� #v4021004#*10�� #v4021005#*10�� #v4021010#*2�� #v4000463#*5��+ 1000����");
                cm.dispose();
            }
        } else if (selection == 5) {
            if (cm.haveItem(1113167, 1) && cm.haveItem(4001266, 700) && cm.haveItem(4000487, 700) && cm.haveItem(4001006, 100) && cm.haveItem(4031561, 20) && cm.haveItem(4031560, 20) && cm.haveItem(4021000, 20) && cm.haveItem(4021005, 20) && cm.haveItem(4021010, 5) && cm.haveItem(4000257, 10) && cm.haveItem(4000463, 10) && cm.getMeso() >=30000000) {
                cm.gainItem(1113167,-1);
				cm.gainItem(4001266,-300);
				cm.gainItem(4000487,-300);
                cm.gainItem(4001006,-100);
				cm.gainItem(4031561,-20);
				cm.gainItem(4031560,-20);
				cm.gainItem(4021000,-20);
				cm.gainItem(4021005,-20);
				cm.gainItem(4021010,-5);
				cm.gainItem(4000257,-10);
				cm.gainItem(4000463,-10);
                cm.gainMeso(-30000000);
				cm.gainItem(1113168,1);
                cm.sendOk("�ϳ�#v1113168#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v1113167#*1�� #v4001266#*300�� #v4000487#*300�� #v4001006#*100�� #v4031561#*20�� #v4031560#*20�� #v4021004#*20�� #v4021005#*20�� #v4021010#*5�� #v4000257#*10�� #v4000463#*10��+ 3000����");
                cm.dispose();
            }
        } else if (selection == 6) {
			
            if (cm.haveItem(1112679, 7) && cm.haveItem(4000313, 1250) && cm.haveItem(4021004, 50) && cm.haveItem(4021007, 50) && cm.haveItem(4021006, 50) && cm.haveItem(4021005, 50) && cm.haveItem(4021004, 50) && cm.haveItem(4251202, 5) && cm.haveItem(4001083, 5) && cm.haveItem(4001084, 10) && cm.haveItem(4001085, 10) && cm.haveItem(4000175, 10) && cm.haveItem(4001126, 12500) && cm.haveItem(4000487, 100) && cm.haveItem(4002000, 500) && cm.haveItem(4002001, 75) && cm.haveItem(4002002, 25) && cm.haveItem(4002003, 90) && cm.haveItem(4031559, 50) && cm.getMeso() >=50000000) {
                cm.gainItem(1112679,-7);
				cm.gainItem(4000313,-1250);
				cm.gainItem(4021004,-50);
                cm.gainItem(4021007,-50);
				cm.gainItem(4021006,-50);
				cm.gainItem(4021005,-50);
				cm.gainItem(4021004,-50);
				cm.gainItem(4251202,-5);
				cm.gainItem(4001083,-5);
				cm.gainItem(4001084,-10);
				cm.gainItem(4001085,-10);
				cm.gainItem(4000175,-10);
				cm.gainItem(4001126,-12500);
				cm.gainItem(4000487,-100);
				cm.gainItem(4002000,-500);
				cm.gainItem(4002001,-100);
				cm.gainItem(4002002,-25);
				cm.gainItem(4002003,-90);
				cm.gainItem(4031559,-50);
                cm.gainMeso(-50000000);
				cm.gainItem(1113178,1);
                cm.sendOk("�ϳ�#v1113178#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4000313#*1250�� #v1112679#*7�� #v4021004#*50��  #v4021007#*50��   #v4021006#*50��   #v4021005#*50��  #v4021004#*50��   #v4251202#*5�� #v4001083#*5�� #v4001084#*10�� #v4001085#*10�� #v4000175#*10��  #v4001126#*12500��   #v4000487#*100��  #v4002000#*500��  #v4002001#*100�� #v4002002#*25�� #v4002003#*90�� #v4031559#*50�� 5000����");
                cm.dispose();
            }
			        } else if (selection == 7) {
            if (cm.haveItem(1112679, 7) && cm.haveItem(4000313, 1250) && cm.haveItem(4021004, 50) && cm.haveItem(4021007, 50) && cm.haveItem(4021006, 50) && cm.haveItem(4021005, 50) && cm.haveItem(4021004, 50) && cm.haveItem(4251202, 5) && cm.haveItem(4001083, 5) && cm.haveItem(4001084, 10) && cm.haveItem(4001085, 10) && cm.haveItem(4000175, 10) && cm.haveItem(4001126, 12500) && cm.haveItem(4000487, 100) && cm.haveItem(4002000, 500) && cm.haveItem(4002001, 75) && cm.haveItem(4002002, 25) && cm.haveItem(4002003, 90) && cm.haveItem(4031559, 50) && cm.getMeso() >=50000000) {
                cm.gainItem(1112679,-7);
				cm.gainItem(4000313,-1250);
				cm.gainItem(4021004,-50);
                cm.gainItem(4021007,-50);
				cm.gainItem(4021006,-50);
				cm.gainItem(4021005,-50);
				cm.gainItem(4021004,-50);
				cm.gainItem(4251202,-5);
				cm.gainItem(4001083,-5);
				cm.gainItem(4001084,-10);
				cm.gainItem(4001085,-10);
				cm.gainItem(4000175,-10);
				cm.gainItem(4001126,-12500);
				cm.gainItem(4000487,-100);
				cm.gainItem(4002000,-500);
				cm.gainItem(4002001,-100);
				cm.gainItem(4002002,-25);
				cm.gainItem(4002003,-90);
				cm.gainItem(4031559,-50);
                cm.gainMeso(-50000000);
				cm.gainItem(1113037,1);
                cm.sendOk("�ϳ�#v1113037#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4000313#*1250�� #v1112679#*7�� #v4021004#*50�� #v4021007#*50�� #v4021006#*50�� #v4021005#*50�� #v4021004#*50�� #v4251202#*5��  #v4001083#*5��   #v4001084#*10��   #v4001085#*10��   #v4000175#*10��  #v4001126#*12500��  #v4000487#*100��  #v4002000#*500��  #v4002001#*100��  #v4002002#*25�� #v4002003#*90�� #v4031559#*50�� 5000����");
                cm.dispose();
            }
			}
		}
    }
    


