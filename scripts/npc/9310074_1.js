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
            text +="#v3991033##v3991026##v3991041##v3991041##v3991050#           #v3990001##v3990009##v3990000##v3990006#\r\n";
			text +="#v3991039##v3991030##v3991048#    #v3991050##v3991030##v3991026##v3991043#\r\n";
			text +="#L1#50��#v3994044#�һ�#v1142218#��ȫ��+5������/ħ��+2#l\r\n\r\n";
			text +=" PS�����Ǽ��ɵļ��ɣ����ռ������� �ְɣ�������˼�벻Ҫ̫���࣬����û��ȥ�۷�O__O ��\r\n";
            cm.sendSimple(text);
		} else if (selection == 1) {
        			if (cm.getInventory(1).isFull(1)){
			cm.sendOk("#b�뱣֤װ����λ������2���ո�,�����޷��һ�.");
			cm.dispose();	
        } else if (cm.haveItem(3994044, 58)){
                cm.gainItem(3994044,-58);
		var ii = MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(1142218); //���װ��������
		var toDrop = ii.randomizeStats(ii.getEquipById(1142218)).copy(); // ����һ��Equip��
		////toDrop. setFlag(1);//����������ʱ��һ�𣬷����BUG����ʧ//����
		toDrop. setStr(5);//������
		toDrop. setDex(5);//������ 
		toDrop. setInt(5);//������
		toDrop. setLuk(5);//������
		//toDrop. setHp(1);//HP
        //toDrop. setMp(1);//MP
		toDrop. setWatk(2);//������    
		toDrop. setMatk(2);//ħ����
		toDrop. setAvoid(0);//�ر���
		toDrop. setHands(0);//�ּ�

		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
                cm.sendOk("�ϳ�#v1142218#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ���!");
                cm.dispose();
			}
	}
    }
}