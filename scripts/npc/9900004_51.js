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
            txt = "���������Ҫ�����,�ύǰ�ٴμ�鱳���Ƿ�����λ��.#k\r\n#e�������� #v4032391#*1  #v5072000#*1 #l\r\n";

            if (cm.getPlayer().getBossLog("meitianrenwu") == 1){// cm.getPS()  ����˼�� ��ȡ����ֵ�������0 �͵ó���û�п�ʼ���� �����������е�һ������!
			    txt += "#r������Ѿ���ɹ���,������������!";
                cm.sendOk(txt);
                cm.dispose();
            }else{
                txt += "#L1##b�ռ�100��#v4000019##l";
                cm.sendSimple(txt);
            }

        } else if (selection == 1) {
            if (cm.haveItem(1112804) >= 2){
				cm.gainItem(1112804, 1);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4032391, 1);
				cm.gainItem(5072000, 1);
				//cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(5000);//��2�������˼
				cm.getPlayer().setBossLog('meitianrenwu');
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000019#������!");
                cm.dispose();
            }
        }
    }
}
