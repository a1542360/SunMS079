var status = 0;
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
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
            text += " #ro#b��#do#g��#bo#d��#ro#g��#do#r��#bo#d��#go#r��#k<#b#e�������#n#k>#r��#go#d��#go#r��#do#b��#go#r��#bo#d��#go#r��#b#go#k\r\n\r\n"
			text += " #b�й�������#k��1921��7��23�ճ������ڷ������������Ĳб�ͳ��֮�£�ֻ�ܴ�������״̬��û�й������л�Ļ������ڴ����ʱ�ڣ���æ�ڹ�����������չ��ũ�˶���֧Ԯ����ս����û�������Ե��ĵ������м��\r\n\r\n"
            text += " ��#b7��1��#k��Ϊ�й��������ĵ��������գ���ë��ͬ־��1938��5��������ġ���ʱ��ë���ڡ��۳־�ս��һ�������������������һ�գ����й�������������ʮ����������ա������������쵼ͬ־��һ����ȷ�������һ���ǵ��ĵ���������.\r\n"			
            text += "#L1##r#v4031347#��ȡ�����������#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.getPlayer().getOneTimeLog("lixinlibao13") >= 0){
			cm.sendOk("#v4031347#7��1����#r������#k\r\n�������ֻ���ڽ��յ�����ȡ,�������Ѿ���ȡ����");
            cm.dispose();
			}else{
			if (cm.getInventory(5).isFull(5)){
			cm.sendOk("#b�뱣֤�������п�λ,�����޷���ȡ.");
			cm.dispose();		
			} else {		
	        cm.getPlayer().modifyCSPoints(2, +500, true);//�����þ�			
			cm.gainMeso(100000);			
            cm.sendOk("��ȡ�ɹ�!�����ڿ���");
			cm.getPlayer().setOneTimeLog("lixinlibao12");
			cm.worldMessage(6,"��ң�["+cm.getName()+"] ��ȡ ����������� ף��ҽ��տ���!");
            cm.dispose();				
			}
		}
    }
}
}	

