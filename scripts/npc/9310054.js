/*
	�ű�����: 		NPC
	���ڵ�ͼ:		�ֹ�լۡ
	�ű�����:		�ֹ�լۡ����npc
           ������                     һֽ������ؼ
           ����ָ����              �ҷ�ʱ�г���
*/
function start() {
    cm.sendYesNo("�����Ҫ��ȥ��?");
}

function action(mode, type, selection) {
    if (mode == 1) {
        cm.warp(682000100);
    }
    cm.dispose();
}