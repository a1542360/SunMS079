importPackage(net.sf.cherry.tools);
importPackage(net.sf.cherry.client);

var status = 0;
var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";

	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
		if (mode == -1) {
		cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
		}
		if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {

	    var textz = "����װ�������̣�����������ʲô����\r\n";

		textz += "#r#L1##v5220007##z5220007#   -  ��Ҷװ��ϵ��\r\n\r\n";

		//textz += "#r#L2##v5220007##z5220007#   -  38�������Ҷװ��\r\n\r\n";

		//textz += "#r#L3##v5220007##z5220007#   -  59�������Ҷװ��\r\n\r\n\r\n";

		cm.sendSimple (textz);  


	}else if (status == 1) {

	if (selection == 0){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r1��#k���#k");
      			cm.dispose();
			}
   }else if  (selection == 1) {
	   cm.openNpc(9000018, 1);
    }else if  (selection == 2) {
	   cm.openNpc(9000018, 2);
    }else if  (selection == 3) {
	   cm.openNpc(9000018, 3);
}
}
}
}