importPackage(Packages.client);
var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            var txt = "";
            txt = " ÿ���ռ���Ҫ����:#k    #v4002000#3��,#v4002001#2��,#v4002002#1��\r\n\r\n #b���������Ҫ�����,�ύǰ�ٴμ�鱳���Ƿ�����λ��#k\r\n\r\n #r������:\r\n\r\n    #v5200000#*1  #v4000313#*5  #v4110010#*1  #v2370004#*1  #v4001266#*1 #k#l \r\n";

            if (cm.getPlayer().getBossLog("meitianrenwu5") == 1){
				txt += " #r#e            ������Ѿ���ɹ�����#k";
                cm.sendOk(txt);
                cm.dispose();

            }else{
                txt += "#L1##v4002000##b�һ�����";
                cm.sendSimple(txt);
            }

        } else if (selection == 1) {
           	   if (cm.haveItem(4002000, 3)&&cm.haveItem(4002001, 2)&&cm.haveItem(4002002, 1)){
		        cm.gainItem(4002000, -3);
				cm.gainItem(4002001, -2);
				cm.gainItem(4002002, -1);
                cm.sendOk("��ϲ������˽���!");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] ���ÿ���������˽���! ");//����				
				cm.gainItem(5200000, 1);//�������Ʒ1������˼
				cm.gainItem(4000313, 5);//�������Ʒ1������˼
				cm.gainItem(4110010, 1);//�������Ʒ1������˼
				cm.gainItem(2370004, 1);//�������Ʒ1������˼
				cm.gainItem(4001266, 1);//�������Ʒ1������˼
				cm.getPlayer().setBossLog('meitianrenwu5');
                cm.dispose();
            }else{
                cm.sendOk("�����Ʊ��������Ҫ����\r\n\r\n #v4002000#3��,#v4002001#2��,#v4002002#1�� !");
                cm.dispose();
            }
        }
    }
}
