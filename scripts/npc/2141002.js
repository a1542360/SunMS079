/* Amon
 * Last Mission : Zakum's Altar (280030000)
 */

function start() {
    cm.sendYesNo("����������뿪���㽫���ò����¿�ʼ����ȷ��Ҫ�뿪���ﵽ����ȥ��");
}

function action(mode, type, selection) {
    if (mode == 1) {
        if (cm.getPlayer().getClient().getChannel() != 1) {
            cm.warp(270050000);
        } else {
            cm.warp(270050000);
        }
	
    }
    cm.dispose();
}