/* ==================
 �ű�����: NPC	    
 �ű���Ȩ����֮���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet); 
var status = -1;
var beauty = 0;
var hair_Colo_new;

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }

    if (status == 0) {
	cm.sendSimple("          #bһ�ߺ���#k,��������Զһ���Ӧ��#r����ѫ��#kӴ . \r\n  #L1#�һ����븱��ѫ��#v1142014#��Ҫ#v4001101#5�� and #v2140000##b5��#k#l\r\n  #L2#�һ���������ѫ��#v1142026#��Ҫ#v4002000#20�� and #v2140000##b20��#k#l\r\n  #L3#�һ���߸���ѫ��#v1142065#��Ҫ#v4002001#20�� and #v2140001##b100��#k#l\r\n  #L4#�һ�Ů�񸱱�ѫ��#v1142067#��Ҫ#v4002002#20�� and #v2140001##b200��#k#l\r\n  #L5#�һ���������ѫ��#v1142079#��Ҫ#v4002003#20�� and #v2140002##b500��#k#l");
    } else if (status == 1) {
	if (selection == 0) {
	    var hair = cm.getPlayerStat("HAIR");
	    hair_Colo_new = [];
	    beauty = 1;

	    if (cm.getPlayerStat("GENDER") == 0) {
		hair_Colo_new = [35000,35090,35220,38360,35060,35100,35150,35200,35260,35270,35340,35350,35290,35300,35420,35450,35310,35330,35360,35430,35440,35460,35470,35510,35550,35560,35600,35660,36690,36710,36750,36760,36810,36820,36920,36340,36030,33810,33980,33670,33580,33320,36000,36420,36460,36470,36480,36510,36520,36530,36560,36580,36590,36640,36680,36700,33550,33820,33380,33930,32120,33150,33310,33600,33640,36310,33750,33250,33350,33440,35050,35170,35180,33290,33040,36300,33780,33700,33390,33260,33340,33240,33120,33000,35070,36290,33750,36310,36220,36180,36330,36120,36540,36770,33800,33740,33690,33630,33180,34440,33280,33300,33220,36360,33830,36010,36020,35020,32470,35130,35160,36550,36380,32440,];
	    } else {
		hair_Colo_new = [37980,37860,37820,37670,37640,37300,37260,37140,37030,34670,38030,38050,38060,38220,38240,38320,37310,35080,35110,34980,35190,35210,38380,38390,38470,38480,38500,38310,38270,38130,38400,38410,38420,38430,38450,38530,38540,38600,38610,38440,38460,38490,38520,38560,38570,38580,38590,38620,36640,38650,38680,38690,38700,38770,31610,31560,31230,37640,37690,36980,38070,37990,37960,37930,37920,34450,37950,37810,37190,37060,37000,34970,34890,34860,34810,34770,34750,34670,34600,33970,34450,33140,37440,37450,37490,37560,34160,34300,34260,34240,34210,38290,38160,38100,38020,38010,38120,37330,37340,34060,37710,34870,34800,34760,37700,37320,34330,34840,34850,34830,34110,34510,34250,34270,37400,37370,37380,37350,37530,37520];
	    }
	    for (var i = 0; i < hair_Colo_new.length; i++) {
		hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
	    }
	    cm.sendYesNo("ȷ��Ҫʹ�� #b#t5150040##k ���������??");
        }else if(selection == 10){
			if(cm.getPlayer().getCSPoints(1) >= 980){
				cm.gainDJ(-980);
				cm.gainItem(5150040, 1);
				cm.sendOk("����ɹ���");
				cm.worldMessage(6,"��ң�["+cm.getName()+"] ������1�Żʼ����� ף��/�����˰�.");
				cm.dispose();
			}else{
				cm.sendOk("������޷�����!");
				cm.dispose();
			}
        }else if(selection == 20){
			if(cm.getPlayer().getCSPoints(1) >= 9500){
				cm.gainDJ(-9500);
				cm.gainItem(5150040, 10);
				cm.sendOk("����ɹ���");
				cm.worldMessage(6,"��ң�["+cm.getName()+"] ������10�Żʼ����� ף��/�����˰�.");
				cm.dispose();
			}else{
				cm.sendOk("������޷�����!");
				cm.dispose();
			}		
	    }else if(selection == 1){
	    if (cm.haveItem(4001101, 5)||cm.getMeso() <= 50000) { 
		cm.gainItem(4001101, -5);//�۳�����Ʒ
        cm.gainMeso(-50000);		
		var ii = MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(1142014); //���װ��������
		var toDrop = ii.randomizeStats(ii.getEquipById(1142014)).copy(); // ����һ��Equip��
		toDrop. setHp(50);//HP
		toDrop. setDex(2);//������ 
        toDrop. setMp(50);//MP
		toDrop. setAvoid(5);//�ر���
        toDrop. setSpeed(1);//�ٶ�		
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���				
				cm.sendOk("��ϲ�һ��ɹ�");
				cm.worldMessage(6,"��ң�["+cm.getName()+"] �ɹ��Ķһ������븱��ѫ��.һ������ϲ��/��!");
				cm.dispose();
			}else{
				cm.sendOk("��Ľ�Ҳ������#v4001101#����5��!");
				cm.dispose();
			}		
	    }else if(selection == 2){
	    if (cm.haveItem(4002000, 20)||cm.getMeso() <= 200000) { 
		cm.gainItem(4002000, -20);//�۳�����Ʒ
        cm.gainMeso(-200000);		
		var ii = MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(1142026); //���װ��������
		var toDrop = ii.randomizeStats(ii.getEquipById(1142026)).copy(); // ����һ��Equip��
		toDrop. setHp(100);//HP
        toDrop. setMp(100);//MP
		toDrop. setAvoid(5);//�ر���
		toDrop. setAcc(5);//����
		toDrop. setWdef(10);//����
        toDrop. setSpeed(5);//�ٶ�
		toDrop. setHands(1);//�ּ�		
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���				
				cm.sendOk("��ϲ�һ��ɹ�");
				cm.worldMessage(6,"��ң�["+cm.getName()+"] �ɹ��Ķһ��˷�������ѫ��.һ������ϲ��/��!");
				cm.dispose();
			}else{
				cm.sendOk("��Ľ�Ҳ������#v4002000#����20��!");
				cm.dispose();
			}		
	    }else if(selection == 3){
	    if (cm.haveItem(4002001, 20)||cm.getMeso() <= 1000000) { 
		cm.gainItem(4002001, -20);//�۳�����Ʒ
        cm.gainMeso(-1000000);		
		var ii = MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(1142065); //���װ��������
		var toDrop = ii.randomizeStats(ii.getEquipById(1142065)).copy(); // ����һ��Equip��
		toDrop. setHp(150);//HP		
        toDrop. setMp(150);//MP
		toDrop. setAvoid(10);//�ر���
		toDrop. setAcc(5);//����
		toDrop. setWdef(20);//����
        toDrop. setSpeed(10);//�ٶ�
		toDrop. setHands(5);//�ּ�
		toDrop. setWatk(1);//������
		toDrop. setMatk(1);//ħ����		
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���				
				cm.sendOk("��ϲ�һ��ɹ�");
				cm.worldMessage(6,"��ң�["+cm.getName()+"] �ɹ��Ķһ�����߸���ѫ��.һ������ϲ��/��!");
				cm.dispose();
			}else{
				cm.sendOk("��Ľ�Ҳ������#v4002001#����20��!");
				cm.dispose();
			}
	    }else if(selection == 4){
	    if (cm.haveItem(4002002, 20)||cm.getMeso() <= 3000000) { 
		cm.gainItem(4002002, -20);//�۳�����Ʒ
        cm.gainMeso(-3000000);		
		var ii = MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(1142067); //���װ��������
		var toDrop = ii.randomizeStats(ii.getEquipById(1142067)).copy(); // ����һ��Equip��
		toDrop. setStr(1);//������
        toDrop. setDex(1);//������ 
		toDrop. setInt(1);//������
		toDrop. setLuk(1);//������		
		toDrop. setHp(200);//HP		
        toDrop. setMp(200);//MP
		toDrop. setAvoid(20);//�ر���
		toDrop. setAcc(10);//����
		toDrop. setWdef(20);//����
        toDrop. setSpeed(10);//�ٶ�		
		toDrop. setHands(10);//�ּ�
		toDrop. setWatk(1);//������
		toDrop. setMatk(1);//ħ����		
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���				
				cm.sendOk("��ϲ�һ��ɹ�");
				cm.worldMessage(6,"��ң�["+cm.getName()+"] �ɹ��Ķһ���Ů�񸱱�ѫ��.һ������ϲ��/��!");
				cm.dispose();
			}else{
				cm.sendOk("��Ľ�Ҳ������#v4002002#����20��!");
				cm.dispose();
			}
	    }else if(selection == 5){
	    if (cm.haveItem(4002003, 20)||cm.getMeso() <= 5000000) { 
		cm.gainItem(4002003, -20);//�۳�����Ʒ
        cm.gainMeso(-5000000);		
		var ii = MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(1142079); //���װ��������
		var toDrop = ii.randomizeStats(ii.getEquipById(1142079)).copy(); // ����һ��Equip��
		//toDrop. setStr(1);//������		
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(CWvsContext.InventoryPacket.addInventorySlot(type, toDrop, false)); //ˢ�±���				
				cm.sendOk("��ϲ�һ��ɹ�");
				cm.worldMessage(6,"��ң�["+cm.getName()+"] �ɹ��Ķһ��˺�������ѫ��.һ������ϲ��/��!");
				cm.dispose();
			}else{
				cm.sendOk("��Ľ�Ҳ������#v4002003#����20��!");
				cm.dispose();
			}		
		}			
    } else if (status == 30){
	if (beauty == 1){
	    if (cm.setRandomAvatar(5150040, hair_Colo_new) == 1) {
		cm.sendOk("������·���������?");
	    } else {
		cm.sendOk("ò��û��#b#t5150040##k��");
	    }
	} 
	cm.safeDispose();
    }
	
}
