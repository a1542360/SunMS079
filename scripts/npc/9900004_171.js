importPackage(java.lang);
importPackage(Packages.client);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
importPackage(Packages.constants);
importPackage(Packages.net.channel);
importPackage(Packages.tools);
importPackage(Packages.scripting);
importPackage(Packages.tools.packet);
importPackage(Packages.tools.data);
importPackage(Packages.tools);
var status = 0;
var itemList =   
Array(   
			Array(4000463,10,1,1),//�����

        	Array(3010898,100,1,1),//������������
        	Array(3010465,100,1,1),//�ɰ���������
        	Array(3010460,100,1,1),//��������
        	Array(3010450,100,1,1),//����������
        	Array(3010455,100,1,1),//�����ĵ�������
        	Array(3010456,100,1,1),//�ž黨����
        	Array(3010458,100,1,1),//������������
        	Array(3010863,50,1,1),//��ŭ������ʦ����
        	Array(3010447,100,1,1),//˯��С������
        	Array(3010446,100,1,1),//Ƥ���ʺ�����
        	Array(3010448,100,1,1),//����ԡ����
        	Array(3010434,100,1,1),//�ȴ���������
        	Array(3010428,100,1,1),//ˮ������
        	Array(3010409,100,1,1),//��������
      	    Array(3010094,100,1,1),//ƯƯ������-----------------------
        	Array(3010411,100,1,1),//��βʨ����
        	Array(3010085,50,1,1),//����������
        	Array(3010077,100,1,1),//èͷӥ����
        	Array(3010053,50,1,1),//���Ӽ��������
        	Array(3010151,200,1,1),//���˵�����
        	Array(3015415,50,1,1),//��������
        	Array(3010142,50,1,1),//ˮ�������
        	Array(3010144,100,1,1),//��Ϧ����
        	Array(3015430,100,1,1),//��������
        	Array(3010117,100,1,1),//ħ��������
        	Array(3015424,100,1,1),//������������
        	Array(3015428,100,1,1),//�ͺ���һ����̻�����
        	Array(3015427,100,1,1),//�ͺ���һ�����齫����
        	Array(3010804,100,1,1),//���������������
        	Array(3015045,50,1,1),//������������--------------
        	Array(3010375,50,1,1),//����ĳ���ҩˮ����
        	Array(3015057,50,1,1),//�̻���������
        	Array(3010373,50,1,1),//�ƶ�ϴ�ּ�����
        	Array(3010799,50,1,1),//��Ĺ��������
        	Array(3010737,50,1,1),//����Ӣ��������
        	Array(3010734,100,1,1),//è������
        	Array(3010738,50,1,1),//��������������
        	Array(3010740,100,1,1),//ʥ��������
        	Array(3010365,100,1,1),//�ݱ˵����ĹŴ�ʯ������
        	Array(3010306,100,1,1),//�����Ļ�����
        	Array(3010301,50,1,1),//�߼�HPҩˮ����
        	Array(3010188,100,1,1),//�ࡤ�װ�����
        	Array(3010186,100,1,1),//��������
        	Array(3010184,50,1,1),//��������
         	Array(3010173,50,1,1),//��ʥ����������
        	Array(3010175,50,1,1),//����������
        	Array(3010195,100,1,1),//�޼�֮������
        	Array(3010210,100,1,1),//��ݮ������±�����--------------
        	Array(3010224,300,1,1),//�����������
        	Array(3010036,50,1,1),//������ǧ
        	Array(3010044,50,1,1),//ͬһ��ɡ��
        	Array(3010111,100,1,1),//��������
        	Array(3010115,100,1,1),//�ܱ�����
        	Array(3010126,50,1,1),//����ħ����
        	Array(3010313,50,1,1),//�ۺ���������
        	Array(3010128,50,1,1),//��������
        	Array(3010133,50,1,1),//������
        	Array(3010152,200,1,1),//������������
        	Array(3010291,50,1,1),//���տ�����
        	Array(3010172,50,1,1),//�ǿ�����
        	Array(3010168,50,1,1),//������������
        	Array(3010185,100,1,1),//С���Ʒ����
        	Array(3010622,100,1,1),//�ҵĺ��ѵ���֮��
        	Array(3010453,50,1,1),//���ӳ˷���
        	Array(3010493,50,1,1),//�Ǿ�����--------------------------------
        	Array(3010527,50,1,1),//�����
        	Array(3010531,50,1,1),//С���ϳ���
        	Array(3010565,50,1,1),//�ҵ�Ů������
        	Array(3010587,50,1,1),//ʱ�佺��
        	Array(3010609,50,1,1),//����������
        	Array(3010608,50,1,1),//��������������
        	Array(3010661,50,1,1),//�����������
        	Array(3010678,50,1,1),//���Ӷ�֮��Ϣ
        	Array(3010739,50,1,1),//ѩ���㲨����
        	Array(3010744,50,1,1),//ð�յ���שͷ������
        	Array(3010752,50,1,1),//õ������
        	Array(3010756,50,1,1),//�����в�è����
        	Array(3010767,50,1,1),//ѩ������
        	Array(3010760,50,1,1),//�Ŵ�ԡ������
        	Array(3010795,50,1,1),//ɭ������Ϣ��
        	Array(3010806,50,1,1),//��ӣ������
        	Array(3010848,50,1,1),//���̺���˹�����
        	Array(3012024,50,1,1)//ɳ̲��������
);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
           selStr = "#e#r���������Ի��������Ʒ��99%���\r\n\#b�Ƿ����� 200�㶹����һ����#n#k\r\n";
		   for (i = 0; i < itemList.length; i++) {
                selStr += "#d#v" + itemList[i][0] + "#";
            }
			
			cm.sendOk(selStr);
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
		selStr = "\r\n";
		   for (i = 0; i < itemList.length; i++) {
                selStr += "#d#v" + itemList[i][0] + "#";
            }
        if (cm.getPlayer().getBeans() >= 200) {//�ж϶���
            cm.sendYesNo("ֻҪ����200�㶹�����Ϳ���������Ի��������Ʒ��99%���\r\n\#b�Ƿ����� 200�㶹����һ����?"+selStr);
        } else {
            cm.sendOk("ֻҪ����200�㶹�����Ϳ���������������Ʒ��99%���\r\n\#b�Ƿ����� 200�㶹����һ��?"+selStr);
            cm.safeDispose();
        }
    } else if (status == 1) {
		var ii = MapleItemInformationProvider.getInstance();
        var chance = Math.floor(Math.random()*500);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
           //var notice = finalitem[finalchance][3];
           // item = cm.gainGachaponItem(itemId, quantity,);//, notice
			var Laba = finalitem[finalchance][3];
			       
				   
				   if(ii.getInventoryType(itemId).getType() == 1){
			        	var toDrop = ii.randomizeStats(ii.getEquipById(itemId)).copy();
						MapleInventoryManipulator.addFromDrop(cm.getC(),toDrop,false);
				}else{
				 	 var toDrop = new Equip(itemId,0).copy();
				cm.gainItem(itemId,quantity);
				}
				
            if (Laba == 1) {
			
			 cm.itemlaba("���㷢�͵߸�",toDrop)
                //cm.gainBeans(-200);//�۳�����
                cm.sendOk("������ #b#t" + itemId + "##k " + quantity + "����");
            } else {//������
                cm.sendOk("������ #b#t" + itemId + "##k " + quantity + "����");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("�������������ʲô��û���õ���");
            cm.gainBeans(-200);//�۳�����
            cm.safeDispose();
        }
    }
}