var status = 0;
var cost = 50000;
function start() {
    cm.sendYesNo("����ȥ�Ϻ���?��Ҫ5����");
}

function action(mode, type, selection) {
    if (mode != 1) {
        if (mode == 0)
        cm.sendOk("��Ȼ�㲻Ҫ�Ǿ�����.");
        cm.dispose();
        return;
    }
    status++;
    if (status == 1) {
		if(cm.getMeso() < cost) {
		cm.sendOk("��Ľ��ò�Ʋ���50000.");
		cm.dispose();
		} else {
		cm.gainMeso(-cost);
		cm.warp(701000100, 0);
        cm.dispose();
    }
}
}