/* 
 * Sharen III's Soul, Sharenian: Sharen III's Grave (990000700)
 * Guild Quest - end of stage 4
 */

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        if (cm.getEventInstance().getProperty("leader").equals(cm.getPlayer().getName())) {
            if (cm.getEventInstance().getProperty("stage4clear") != null && cm.getEventInstance().getProperty("stage4clear").equals("true")) {
				cm.sendOk("֮������Ϊ����һ�������˯�ߣ������ڷ��������ܾ����������ڿ�����������Ϣ��.");
                cm.safeDispose();
            } else {
                var prev = cm.getEventInstance().setProperty("stage4clear", "true", true);
                if (prev == null) {
                    cm.sendNext("����Ϊ����һ�������˯��֮�������ڷ������ˣ�����ʡɱ���ꡣ����ͷ������ƽ��·Ϊ���������.");
                } else { //if not null, was set before, and Gp already gained
                    cm.sendOk("֮������Ϊ����һ�������˯�ߣ������ڷ��������ܾ����������ڿ�����������Ϣ��.");
                    cm.safeDispose();
                }
            }
        } else {
            if (cm.getEventInstance().getProperty("stage4clear") != null && cm.getEventInstance().getProperty("stage4clear").equals("true")) {
                cm.sendOk("֮������Ϊ����һ�������˯�ߣ������ڷ��������ܾ����������ڿ�����������Ϣ��.");
            } else {
                cm.sendOk("����Ҫ��Ķ���Ķӳ�����˵��.");
            }
            cm.safeDispose();
        }
    } else if (status == 1) {
        var react = cm.getPlayer().getEventInstance().getMapFactory().getMap(990000700).getReactorByName("ghostgate");//������޸�
        cm.getPlayer().getEventInstance().getMapFactory().getMap(990000700).getReactorByName("ghostgate").forceHitReactor(react.getState() + 1);//������޸�
        //cm.getMap().getReactorByName("ghostgate").hitReactor(cm.getC());//ԭ��
        cm.gainGP(180);
		cm.showEffect(true, "quest/party/clear");
        cm.playSound(true, "Party1/Clear");
        cm.dispose();
    }
}