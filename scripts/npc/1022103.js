/* ==================
 �ű�����: NPC	    
 �ű���Ȩ��һ�ߺ�ð�յ��Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	cm.sendYesNo("���������Ļ�?");
    } else if (status == 1) {
	cm.warp(193000000);
	cm.dispose();
    }
}
