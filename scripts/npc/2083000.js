function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} 
	else {
		if (mode == 0) {
			cm.sendOk("���ǵ�ѡ�� �����ı����⣬��ʱ����˵��.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.getPlayer().getLevel() < 80) {
				cm.sendOk("��͵ȼ�Ҫ80��Ŷ����");
				cm.dispose();
				return;
			}
			else {
				if (cm.haveItem(4001086)) {
					cm.sendYesNo("����������Ʒ#b�����ӵ�����#k�Ƿ�Ը���ȥһ̽�������� \r\n    ǰ���·�ܼ�ࡣԸ��ȥ��?");
				}
				else {
					cm.sendOk("�������ս�����Σ��..����Ҫ�߱�������Ʒ��\r\n�����ӵ�����");
					cm.dispose();
					return;
				}
			}
		} 
		else if (status == 1) {
			cm.warp(240050400);
			cm.dispose();
			return;
		}
	}
}
