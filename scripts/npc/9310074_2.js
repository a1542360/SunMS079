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
            text +=" #k��ӭ������֮�Ƚ�ָ����!����֮ǰ����ȷ����鱳��װ�������п�λû.���������ɵ���ʧ���ге�!\r\n";
            text += "#L1##r����������ָ��Ҫ���²���:\r\n";
            text += "#v1112915#*1 #v4001221#*15 #v4001222#*15 #v4001223#*5 #v4001224#*5 #v4001225#*5 #v4011000#*5 #v4011001#*5 #v4011002#*5 #v4011003#*5 #v4011004#*5 #v4011005#*5 #v4011006#*5 +���100��\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(4001221, 15) && cm.haveItem(4001222, 15) && cm.haveItem(4001223, 5) && cm.haveItem(4001224, 5) && cm.haveItem(4001225, 5) && cm.haveItem(4011000, 5) && cm.haveItem(4011001, 5) && cm.haveItem(4011002, 5) && cm.haveItem(4011003, 5) && cm.haveItem(4011004, 5) && cm.haveItem(4011005, 5) && cm.haveItem(4011006, 5) && cm.haveItem(1112907, 1) &&cm.getMeso() >=1000000) {
                cm.gainItem(4001221,-15);
				cm.gainItem(4001222,-15); 
				cm.gainItem(4001223,-5);
				cm.gainItem(4001224,-5);
				cm.gainItem(4001225,-5);
				cm.gainItem(4011000,-5);
				cm.gainItem(4011001,-5);
				cm.gainItem(4011002,-5);
				cm.gainItem(4011003,-5);
				cm.gainItem(4011004,-5);
				cm.gainItem(4011005,-5);
				cm.gainItem(4011006,-5);
				cm.gainItem(1112907,-1);
                cm.gainMeso(-1000000);
        var ii = MapleItemInformationProvider.getInstance();		                
        var type = ii.getInventoryType(1112915); //���װ��������
        var toDrop = ii.randomizeStats(ii.getEquipById(1112915)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		////toDrop. setFlag(1);//����������ʱ��һ�𣬷����BUG����ʧ//����
		toDrop. setStr(3);//������
		toDrop. setDex(3);//������ 
		toDrop. setInt(3);//������
		toDrop. setLuk(3);//������
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
                cm.sendOk("�ϳ�#v1112915#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ���!");
                cm.dispose();
            }
            }
			}
		}
    


