//2017-30-31 �޸�38�������� --lul

importPackage(java.util);
importPackage(net.sf.sunms.client);
importPackage(net.sf.sunms.server);
importPackage(java.util);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools);
importPackage(Packages.tools.packet);
var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
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
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t\t  #e#v3992017#��ӭ�������߽���ϵͳ#v3992017#\r\n"
			text += "         #e#d#k#v4000443#��������ʱ����#r" + cm.getPlayer().getzxsj() +" #k#e����#k\r\n\r\n"
			if(cm.getPlayer().getzxsj() >= 60 && cm.getPlayer().getBossLog("zxsj") == 0){
					text += "#L2##r"+��ɺ�+"����ʱ�䳬��60���� "+���+"#v5310000#x1. #l\r\n\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() >= 60 && cm.getPlayer().getBossLog("zxsj") > 0){
					text += ""+��ɺ�+"#r����ʱ�䳬��60���� #l"+���+"\r\n\r\n"//3
				} else if(cm.getPlayer().getzxsj() < 60 && cm.getPlayer().getBossLog("zxsj") == 0){
					text += "#L1#"+���ڽ�������+"#r����ʱ�䳬��60���� #l"+���ڽ�����+"#v5310000#x1\r\n\r\n"
			}else{
				text += ""+���ڽ�������+"#r����ʱ�䳬��60���� #l"+"#v5310000#x1\r\n\r\n"
			}
			
			if(cm.getPlayer().getzxsj() >= 120 && cm.getPlayer().getBossLog("zxsj") == 1){
					text += "#L3##r"+��ɺ�+"����ʱ�䳬��120���� "+���+"#v5130000#x1.#l\r\n\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() >= 120 && cm.getPlayer().getBossLog("zxsj") > 1){
					text += ""+��ɺ�+"#r����ʱ�䳬��120���� #l"+���+"\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() < 120 && cm.getPlayer().getBossLog("zxsj") == 1){
					text += "#L1#"+���ڽ�������+"#r����ʱ�䳬��120���� #l"+���ڽ�����+"#v5130000#x1\r\n\r\n"
			}else{
				text += ""+���ڽ�������+"#r����ʱ�䳬��120���� #l"+"#v5130000#x1\r\n\r\n"
			}
			
			if(cm.getPlayer().getzxsj() >= 180 && cm.getPlayer().getBossLog("zxsj") == 2){
					text += "#L4##r"+��ɺ�+"����ʱ�䳬��180���� "+���+"#v5072000#x1.#l\r\n\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() >= 180 && cm.getPlayer().getBossLog("zxsj") > 2){
					text += ""+��ɺ�+"#r����ʱ�䳬��180���� #l"+���+"\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() < 180 && cm.getPlayer().getBossLog("zxsj") == 2){
					text += "#L1#"+���ڽ�������+"#r����ʱ�䳬��180���� #l"+���ڽ�����+"#v5072000#x1\r\n\r\n"
			}else{
				text += ""+���ڽ�������+"#r����ʱ�䳬��180���� #l"+"#v5072000#x1\r\n\r\n"
			}
			
			if(cm.getPlayer().getzxsj() >= 240 && cm.getPlayer().getBossLog("zxsj") == 3){
					text += "#L5##r"+��ɺ�+"����ʱ�䳬��240���� "+���+"#v4001322#x1.#l\r\n\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() >= 240 && cm.getPlayer().getBossLog("zxsj") > 3){
					text += ""+��ɺ�+"#r����ʱ�䳬��240���� #l"+���+"\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() < 240 && cm.getPlayer().getBossLog("zxsj") == 3){
					text += "#L1#"+���ڽ�������+"#r����ʱ�䳬��240���� #l"+���ڽ�����+"#v4001322#x1.\r\n\r\n"
			}else{
				text += ""+���ڽ�������+"#r����ʱ�䳬��240���� #l"+"#v4001322#x1.\r\n\r\n"
			}
			
			if(cm.getPlayer().getzxsj() >= 300 && cm.getPlayer().getBossLog("zxsj") == 4){
					text += "#L6##r"+��ɺ�+"����ʱ�䳬��300���� "+���+" ���þ�x200.#l\r\n\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() >= 300 && cm.getPlayer().getBossLog("zxsj") > 4){
					text += ""+��ɺ�+"#r����ʱ�䳬��300���� #l"+���+"\r\n\r\n"
				} else if(cm.getPlayer().getzxsj() < 300 && cm.getPlayer().getBossLog("zxsj") == 4){
					text += "#L1#"+���ڽ�������+"#r����ʱ�䳬��300���� #l"+���ڽ�����+" ���þ�x200\r\n\r\n"
			}else{
				text += ""+���ڽ�������+"#r����ʱ�䳬��300���� #l"+" ���þ�x200\r\n\r\n"
			}
            cm.sendSimple(text);
			
        }else if (selection == 1) {
			cm.sendOk("�����Ŭ��Ŷ��");
			cm.safeDispose();
        }else if (selection == 2) {
			cm.gainItem(5310000, 1, 1);//��������
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��60�������߽��� ��������.");
            cm.dispose();
        } else if (selection == 3) {
			cm.gainItem(5130000, 1, 1);//�����
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��120�������߽��� �����.");
            cm.dispose();
        } else if (selection == 4) {
			cm.gainItem(5072000, 1);//����
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��180�������߽��� ���ʵ�����.");
            cm.dispose();
        } else if (selection == 5) {
			if (cm.getInventory(5).isFull(1)){
			cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷���ȡ.");
			cm.dispose();
		} else {
			cm.gainItem(4001322, 1);//����ʯ
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��240�������߽��� ����ʯ.");
            cm.dispose();
			}
        } else if (selection == 6) {
			if (cm.getInventory(5).isFull(1)){
			cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷���ȡ.");
			cm.dispose();
		} else {
			cm.gainD(200);//���þ�
			cm.getPlayer().setBossLog('zxsj');
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��300�������߽��� ���þ�.");
            cm.dispose();
		}}
    }
}


