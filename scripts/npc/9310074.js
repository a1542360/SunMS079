var status = 0;
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
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		var Editing = false //true=��ʾ;false=��ʼ�
          if(Editing){
          cm.sendOk("��ͣ����");
          cm.dispose();
          return;
        } 
			cm.sendSimple("  ������ֵ������ȡ���ֲμ��г��ζεĻ��ֳ齱!!\r\n  ������ֵ1000��ȯ�ɻ��10������Դ�����.\r\n#b  ����ǰ��ȷ���Լ��ı����Ƿ���λ��\r\n#k          #v4000009#���ĵ�ǰ����Ϊ��#r"+ cm.getcz() +"#k\r\n#L3##v4001232# 10����ֹ���������� #l \r\n#L1##v5520000# 30�����һ���������#l\r\n#L0# #v1142006# 100�����һ���������  #l\r\n#L5##v4032226# 50������޸�һ�ν�ɫ����#l \r\n  #L6##v5590000#���#z5590000# (#r��Ҫ2000���#k)#l");
        } else if (status == 1) {
            if (selection == 0) {
				if(cm.getPlayer().getOneTimeLog("libao10") >= 1){//�ж����ü�¼
				cm.sendOk("�������ֻ�ܶһ�1��!");
				cm.dispose();
             } else { 
			 if (cm.getcz() >= 100 ) {
                    cm.gaincz(-100);                   
		var ii = MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(1142006); //���װ��������
		var toDrop = ii.randomizeStats(ii.getEquipById(1142006)).copy(); // ����һ��Equip��
		//toDrop. setFlag(1);//����������ʱ��һ�𣬷����BUG����ʧ//����
		toDrop. setStr(10);//������
		toDrop. setDex(10);//������ 
		toDrop. setInt(10);//������
		toDrop. setLuk(10);//������
		toDrop. setHp(200);//HP
        toDrop. setMp(200);//MP
		toDrop. setWatk(5);//������    
		toDrop. setMatk(5);//ħ����
		//toDrop. setAvoid(0);//�ر���
		toDrop. setHands(10);//�ּ�
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���
                    cm.sendOk("�ɹ��һ����������л������");
					cm.getPlayer().setOneTimeLog("libao10");//�����ü�¼	
cm.worldMessage(6,"��ϲ[ " + cm.getPlayer().getName() + "] ʹ�û��ֶһ� һ�ߺ�ð�յ�ż������ѫ�� �����һ��ף����(��)��!");
                    cm.dispose();
                } else {
                    cm.sendOk("���ֲ���!");
                    cm.dispose();
                }
				}
            } else if (selection == 1) {
				if (cm.getcz() >= 30 ) {
                    cm.gaincz(-30);
                    cm.gainItem(5520000, 1);
                    cm.gainItem(2022245, 2);					
                    cm.sendOk("�ɹ��һ����������л������");
					
cm.worldMessage(6,"��ϲ[ " + cm.getPlayer().getName() + "] ʹ�û��ֶһ� �������������һ��ף����(��)��!");
                    cm.dispose();
                } else {
                    cm.sendOk("���ֲ���!");
                    cm.dispose();
                }
            } else if (selection == 5) {
				if (cm.getcz() >= 50 ) {
                    cm.gaincz(-50);
                    cm.gainItem(4032226, 1);
                    cm.gainItem(2022245, 2);					
                    cm.sendOk("������һ���޸Ľ�ɫ���ֵĻ���,���#v4032226#��������Ա�޸���Ľ�ɫ���ְ�!");
					
cm.worldMessage(6,"��ϲ[ " + cm.getPlayer().getName() + "] ʹ�û��ֶһ��ƽ��������һ���޸Ľ�ɫ���ֵĻ���!");
                    cm.dispose();
                } else {
                    cm.sendOk("���ֲ���!");
                    cm.dispose();
                }
            } else if (selection == 6) {
			if(cm.getPlayer().getCSPoints(1) >= 2000){
                    cm.gainDJ(-2000);
                    cm.gainItem(5590000, 1, 5);					
                    cm.sendOk("���ɹ�,ʱЧ5��!");				
                    cm.dispose();
                } else {
                    cm.sendOk("�����!");
                    cm.dispose();
                }				
            } else if (selection == 3) {
                if(cm.getPlayer().getOneTimeLog("libao20") >= 1){//�ж����ü�¼
				cm.sendOk("�������ֻ�ܶһ�1��!");
				cm.dispose();
            } else {
				if (cm.getcz() >= 10 ) {
                    cm.gaincz(-10);
                    cm.gainItem(5150040, 2);
                    cm.gainItem(5074000, 2);
                    cm.gainItem(3012001, 1);
                    cm.gainItem(1432009, 1, 1);					
		            cm.gainMeso(100000);//�����	
cm.getPlayer().setOneTimeLog("libao20");//�����ü�¼					
                    cm.sendOk("�ɹ��һ����������л������");
cm.worldMessage(6,"��ϲ[ " + cm.getPlayer().getName() + "] �ɹ��һ�������������һ��ף����(��)��!");
                    cm.dispose();
                } else {
                    cm.sendOk("���ֲ���!");
                    cm.dispose();					
                }				
}
}
}
}}
