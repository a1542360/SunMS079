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
            text += "#L1##r�����λ�Ů����ػ���Ҫ���²���:\r\n";
            text += "#v1112915#*1 #v4001221#*25 #v4001222#*25 #v4001223#*10 #v4001224#*10 #v4001225#*10 #v4021000#*5 #v4021001#*5 #v4021002#*5 #v4021003#*5 #v4021004#*5 #v4021005#*5 #v4021006#*5 #v4021007#*5 +���200��\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(4001221, 25) && cm.haveItem(4001222, 25) && cm.haveItem(4001223, 10) && cm.haveItem(4001224, 10) && cm.haveItem(4001225, 10) && cm.haveItem(4021000, 5) && cm.haveItem(4021001, 5) && cm.haveItem(4021002, 5) && cm.haveItem(4021003, 5) && cm.haveItem(4021004, 5) && cm.haveItem(4021005, 5) && cm.haveItem(4021006, 5) && cm.haveItem(4021007, 5) && cm.haveItem(1112915, 1) &&cm.getMeso() >=2000000) {
                cm.gainItem(4001221,-25);
				cm.gainItem(4001222,-25); 
				cm.gainItem(4001223,-10);
				cm.gainItem(4001224,-10);
				cm.gainItem(4001225,-10);
				cm.gainItem(4021000,-5);
				cm.gainItem(4021001,-5);
				cm.gainItem(4021002,-5);
				cm.gainItem(4021003,-5);
				cm.gainItem(4021004,-5);
				cm.gainItem(4021005,-5);
				cm.gainItem(4021006,-5);
				cm.gainItem(4021007,-5);
				cm.gainItem(1112915,-1);
                cm.gainMeso(-2000000);
		var ii = MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(1112932); //���װ��������
		var toDrop = ii.randomizeStats(ii.getEquipById(1112932)).copy(); // ����һ��Equip��
		////toDrop. setFlag(1);//����������ʱ��һ�𣬷����BUG����ʧ//����
		toDrop. setStr(5);//������
		toDrop. setDex(5);//������ 
		toDrop. setInt(5);//������
		toDrop. setLuk(5);//������
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
                cm.sendOk("�ϳ�#v1112932#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ���!");
                cm.dispose();
            }
            }
			}
		}
    


