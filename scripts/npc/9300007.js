/*
	���� - ������ �쳤
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendSimple("������ĺ�𽹬�ſڡ�������ʲô��\r\n#L5#����ؼҡ�#l\r\n");
    } else if (status == 1) {
        if (selection == 0) { //�����ȥ��𽹬
            if (cm.getParty() == null || !cm.isLeader()) {
                cm.sendOk("ֻ����ӳ�������˵�ſ������������ǽ�ȥ���������жӳ�������˵�ɡ�");
                cm.dispose();
            } else {
                cm.sendYesNo("Ŷ���������ȥ�����𣿽�����������£�Ҫ��ȥ����Ҫ���㼸�������������������Ҫ�������������Ը����˵����");
            }
        } else if (selection == 5) { //�����ȥ���ǵ
            status = 15;
            cm.sendNext("�����ȥ���������ȥ�ٴ�������ʱ��Ҫ���ѡ�");
        }
    } else if (status == 2) {
        cm.sendNext("�ã��ҿ������Ƿ�������������󣬾����㵽�����");
    } else if (status == 15) {
            cm.warp(700000101);
            cm.dispose();
    } else if (status == 16) {
        var returnMap = cm.getSavedLocation("MULUNG_TC");
        cm.clearSavedLocation("MULUNG_TC");
        if (returnMap < 0) {
            returnMap = 211000000;
        }
        var target = cm.getMap(returnMap);
        var portal = target.getPortal("unityPortal2");
        if (portal == null) {
            portal = target.getPortal(0);
        }
        if (cm.getMapId() != target) {
            cm.getPlayer().changeMap(target, portal);
        }
        cm.dispose();
    }
}