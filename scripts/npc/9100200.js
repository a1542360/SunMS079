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
            text +="  #v2140000##v3994077##v3994079##v3994076##v3994074##v3994076##v3994067##v3994077##v3994063##v2140000#\r\n"
            text += " �Ҿ���#bһ�ߺ�ð�յ�#k�ķ�����,���ǲ���Ҫʹ��#r���#k���г齱��?Ҳ�п��ܲ��н��Ƿ����?��Ʒȫ�漴,�û�ȫ����\r\n         #e#v2140002#����ǰ���Ϊ:#b"+cm.getMeso() + "\r\n"
			text += " #L0##e#r#v2140002#500���ҳ�ȡ����#l\r\n\r\n"
			//text += "#L2##e#d#v5220000#���ְٱ�ȯ����#l\r\n"
            cm.sendOk(text);
        } else if (selection == 0) {
		cm.openNpc(9100200, 1);//��ȡ����
        } else if (selection == 2) {
		cm.openNpc(9100200, 2);//���ְٱ�ȯ����
	}
    }
}


