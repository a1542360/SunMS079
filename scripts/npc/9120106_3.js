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
            text +="#e����������ĸһ�飬���Զһ�һ��#v4170005##l#l\r\n\r\n";
			text +="#v3994071##v3994059##v3994074##v3994070##v3994063##v3994077##v3994078##v3994073##v3994076##v3994083#\r\n"
			text +="#rע��һ���ʱ���ڱ����������ճ����������ո�,�������̵��ߵ����GM�Ų�����\r\n";
			text +="                   #L4##r���ռ���һ�飬���������\r\n";
			
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(3994071, 2) && cm.haveItem(3994059, 2) && cm.haveItem(3994074, 1) && cm.haveItem(3994070, 1) && cm.haveItem(3994063, 2) && cm.haveItem(3994077, 1) && cm.haveItem(3994078, 1) && cm.haveItem(3994073, 2) && cm.haveItem(3994076, 1) && cm.haveItem(3994083, 1) && cm.haveItem(3990006, 1) && cm.haveItem(3990009, 1) &&cm.getMeso() >=1) {
                cm.haveItem(3994071,-2);
                cm.haveItem(3994059,-2);
                cm.haveItem(3994074,-1);
                cm.haveItem(3994070,-1);
				cm.haveItem(3994063,-2);
                cm.haveItem(3994077,-1);
                cm.haveItem(3994078,-1);
                cm.haveItem(3994073,-2);
                cm.haveItem(3994076,-1);
                cm.haveItem(3994083,-1);
                cm.haveItem(3990006,-1);
                cm.haveItem(3990009,-1);
                cm.gainMeso(-1);
		var ii = MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(4170005); //���װ��������
		var toDrop = ii.randomizeStats(ii.getEquipById(4170005)).copy(); // ����һ��Equip��
		//toDrop. setFlag(1);//����
		//toDrop. setStr(1);//������
		//toDrop. setDex(1);//������ 
		//toDrop. setInt(1);//������
		//toDrop. setLuk(1);//������
		//toDrop. setHp(1);//HP
        //toDrop. setMp(1);//MP
		//toDrop. setWatk(3);//������    
		//toDrop. setMatk(3);//ħ����

		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
                cm.sendOk("�һ�#v4170005#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�һ�ʧ�ܣ����ϲ���!");
                cm.dispose();
            }
        } else if (selection == 2) {
            if (cm.haveItem(1113164, 1) && cm.haveItem(4001266, 50) && cm.haveItem(4000487, 50) && cm.haveItem(2210006, 5) && cm.haveItem(4003002, 5) && cm.haveItem(4003003, 5) && cm.haveItem(4000463, 1) && cm.haveItem(4011000, 10) && cm.haveItem(4011002, 10) && cm.haveItem(4011003, 10) && cm.haveItem(4011004, 10) && cm.haveItem(4011006, 10) && cm.getMeso() >=5000000) {
                cm.gainItem(1113164,-1);
				cm.gainItem(4001266,-50);
				cm.gainItem(4000487,-50);
                cm.gainItem(2210006,-5);
				cm.gainItem(4003002,-5);
				cm.gainItem(4003003,-5);
				cm.gainItem(4000463,-1);
				cm.gainItem(4011000,-10);
				cm.gainItem(4011002,-10);
				cm.gainItem(4011003,-10);
				cm.gainItem(4011004,-10);
				cm.gainItem(4011006,-10);
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
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v1113164#*1�� #v4001266#*50�� #v4000487#*50�� #v2210006#*5�� #v4003002#*5�� #v4003003#*5�� #v4000463#*1�� #v4011000#*10�� #v4011002#*10�� #v4011003#*10�� #v4011004#*10�� #v4011006#*10�� 500����");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.haveItem(1113165, 1) && cm.haveItem(4001266, 100) && cm.haveItem(4000487, 100) && cm.haveItem(2210006, 8) && cm.haveItem(4003002, 10) && cm.haveItem(4003003, 10) && cm.haveItem(4000040, 5) && cm.haveItem(4000463, 3) && cm.haveItem(4021001, 10) && cm.haveItem(4021002, 10) && cm.haveItem(4021003, 10) && cm.haveItem(4021005, 10) && cm.haveItem(4021006, 10) && cm.haveItem(4021008, 10) &&cm.getMeso() >=10000000) {
                cm.gainItem(1113165,-1);
				cm.gainItem(4001266,-100);
				cm.gainItem(4000487,-100);
                cm.gainItem(2210006,-8);
				cm.gainItem(4003002,-10);
				cm.gainItem(4003003,-10);
				cm.gainItem(4000040,-5);
				cm.gainItem(4000463,-3);
				cm.gainItem(4021001,-10);
				cm.gainItem(4021002,-10);
				cm.gainItem(4021003,-10);
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
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v1113165#*1�� #v4001266#*100�� #v4000487#*100�� #v2210006#*8�� #v4003002#*10�� #v4003003#*10�� #v4000040#*5�� #v4000463#*3�� #v4021001#*10�� #v4021002#*10�� #v4021003#*10�� #v4021005#*10�� #v4021006#*10�� #v4021008#*10��+ 1000����");
                cm.dispose();
            }
        } else if (selection == 4) {
            if  (cm.haveItem(3994071, 1) && cm.haveItem(3994059, 1) && cm.haveItem(3994074, 1) && cm.haveItem(3994070, 1) && cm.haveItem(3994063, 1) && cm.haveItem(3994077, 1) && cm.haveItem(3994078, 1) && cm.haveItem(3994073, 1) && cm.haveItem(3994076, 1) && cm.haveItem(3994083, 1) &&cm.getMeso() >=1) {
                cm.gainItem(3994071,-1);
                cm.gainItem(3994059,-1);
                cm.gainItem(3994074,-1);
                cm.gainItem(3994070,-1);
				cm.gainItem(3994063,-1);
                cm.gainItem(3994077,-1);
                cm.gainItem(3994078,-1);
                cm.gainItem(3994073,-1);
                cm.gainItem(3994076,-1);
                cm.gainItem(3994083,-1);
                cm.gainMeso(-1);
				cm.gainItem(4170005,1);
                cm.sendOk("�һ��ɹ�");
                cm.dispose();
            } else {
                cm.sendOk("�һ�ʧ��");
                cm.dispose();
            }
        } else if (selection == 5) {
            if (cm.haveItem(1113167, 1) && cm.haveItem(4001266, 300) && cm.haveItem(4000487, 300) && cm.haveItem(4001006, 100) && cm.haveItem(4000040, 20) && cm.haveItem(4000176, 20) && cm.haveItem(4021009, 20) && cm.haveItem(4011007, 20) && cm.haveItem(4021010, 5) && cm.haveItem(4000257, 10) && cm.haveItem(4000463, 10) && cm.getMeso() >=30000000) {
                cm.gainItem(1113167,-1);
				cm.gainItem(4001266,-300);
				cm.gainItem(4000487,-300);
                cm.gainItem(4001006,-100);
				cm.gainItem(4000040,-20);
				cm.gainItem(4000176,-20);
				cm.gainItem(4021009,-20);
				cm.gainItem(4011007,-20);
				cm.gainItem(4021010,-5);
				cm.gainItem(4000257,-10);
				cm.gainItem(4000463,-10);
                cm.gainMeso(-30000000);
				cm.gainItem(1113168,1);
                cm.sendOk("�ϳ�#v1113168#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v1113167#*1�� #v4001266#*300�� #v4000487#*300�� #v4001006#*100�� #v4000040#*20�� #v4000176#*20�� #v4021009#*20�� #v4011007#*20�� #v4021010#*5�� #v4000257#*10�� #v4000463#*10��+ 3000����");
                cm.dispose();
            }
        } else if (selection == 6) {
			
            if (cm.haveItem(1112679, 3) && cm.haveItem(4000313, 1250) && cm.haveItem(4011004, 50) && cm.haveItem(4021007, 50) && cm.haveItem(4011006, 50) && cm.haveItem(4021005, 50) && cm.haveItem(4021002, 50) && cm.haveItem(4251202, 5) && cm.haveItem(4001083, 5) && cm.haveItem(4001084, 15) && cm.haveItem(4001085, 15) && cm.haveItem(4000175, 15) && cm.haveItem(4001126, 12500) && cm.haveItem(4000487, 100) && cm.haveItem(4002000, 500) && cm.haveItem(4002001, 75) && cm.haveItem(4002002, 25) && cm.haveItem(4002003, 90) && cm.haveItem(4031559, 50) && cm.getMeso() >=50000000) {
                cm.gainItem(1112679,-3);
				cm.gainItem(4000313,-1250);
				cm.gainItem(4011004,-50);
                cm.gainItem(4021007,-50);
				cm.gainItem(4011006,-50);
				cm.gainItem(4021005,-50);
				cm.gainItem(4021002,-50);
				cm.gainItem(4251202,-5);
				cm.gainItem(4001083,-5);
				cm.gainItem(4001084,-15);
				cm.gainItem(4001085,-15);
				cm.gainItem(4000175,-15);
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
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4000313#*1250�� #v1112679#*3�� #v4011004#*50��  #v4021007#*50��   #v4011006#*50��   #v4021005#*50��  #v4021002#*50��   #v4251202#*5�� #v4001083#*5�� #v4001084#*15�� #v4001085#*15�� #v4000175#*15��  #v4001126#*12500��   #v4000487#*100��  #v4002000#*500��  #v4002001#*100�� #v4002002#*25�� #v4002003#*90�� #v4031559#*50�� 5000����");
                cm.dispose();
            }
			        } else if (selection == 7) {
            if (cm.haveItem(1112679, 3) && cm.haveItem(4000313, 1250) && cm.haveItem(4011004, 50) && cm.haveItem(4021007, 50) && cm.haveItem(4011006, 50) && cm.haveItem(4021005, 50) && cm.haveItem(4021002, 50) && cm.haveItem(4251202, 5) && cm.haveItem(4001083, 5) && cm.haveItem(4001084, 15) && cm.haveItem(4001085, 15) && cm.haveItem(4000175, 15) && cm.haveItem(4001126, 12500) && cm.haveItem(4000487, 100) && cm.haveItem(4002000, 500) && cm.haveItem(4002001, 75) && cm.haveItem(4002002, 25) && cm.haveItem(4002003, 90) && cm.haveItem(4031559, 50) && cm.getMeso() >=50000000) {
                cm.gainItem(1112679,-3);
				cm.gainItem(4000313,-1250);
				cm.gainItem(4011004,-50);
                cm.gainItem(4021007,-50);
				cm.gainItem(4011006,-50);
				cm.gainItem(4021005,-50);
				cm.gainItem(4021002,-50);
				cm.gainItem(4251202,-5);
				cm.gainItem(4001083,-5);
				cm.gainItem(4001084,-15);
				cm.gainItem(4001085,-15);
				cm.gainItem(4000175,-15);
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
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4000313#*1250�� #v1112679#*3�� #v4011004#*50�� #v4021007#*50�� #v4011006#*50�� #v4021005#*50�� #v4021002#*50�� #v4251202#*5��  #v4001083#*5��   #v4001084#*15��   #v4001085#*15��   #v4000175#*15��  #v4001126#*12500��  #v4000487#*100��  #v4002000#*500��  #v4002001#*100��  #v4002002#*25�� #v4002003#*90�� #v4031559#*50�� 5000����");
                cm.dispose();
            }
			}
		}
    }
    


