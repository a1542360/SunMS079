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
            txt = "���������Ҫ�����,�ύǰ�ٴμ�鱳���Ƿ�����λ��.#k\r\n#e�������� #v4032392#*1   #v5050000#*3 #l\r\n";

            if (cm.getPlayer().getBossLog("meitianrenwu5") == 1){
				txt += "#r������Ѿ���ɹ���,������������!";
                cm.sendOk(txt);
                cm.dispose();

            }else{
                txt += "#L1##b�ռ�40��#v4031109#";
                cm.sendSimple(txt);
            }

        } else if (selection == 1) {
            if (cm.haveItem(4031109, 40) ){
		        cm.gainItem(4031109, -40);
//				cm.gainItem(4002000, -1);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4032392, 1);//�������Ʒ1������˼
				cm.gainItem(5050000, 3);//�������Ʒ1������˼
//				cm.gainMeso(30000);
				cm.gainExp(40000);
				cm.getPlayer().setBossLog('meitianrenwu5');
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�40��#v4031109#������!");
                cm.dispose();
            }
        }
    }
}
