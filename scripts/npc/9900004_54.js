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
            txt = "���������Ҫ�����,�ύǰ�ٴμ�鱳���Ƿ�����λ��.#k\r\n#e�������� #v4032393#*1  #v4001136#*1 #l\r\n";

            if (cm.getPlayer().getBossLog("meitianrenwu2") == 1){
				txt += "#r������Ѿ���ɹ���,������������!";
                cm.sendOk(txt);
                cm.dispose();

            }else{
                txt += "#L1##b�ռ�100��#v4031401#";
                cm.sendSimple(txt);
            }

        } else if (selection == 1) {
            if (cm.haveItem(4031401,100) ){
		        cm.gainItem(4031401, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4032393, 1);
				cm.gainItem(4001136, 1);//�������Ʒ1������˼
				//cm.gainMeso(20000);
				cm.gainExp(15000);
				cm.getPlayer().setBossLog('meitianrenwu2');
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4031401#������!");
                cm.dispose();
            }
        }
    }
}
