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
            //text += " #ro#b��#do#g��#bo#d��#ro#g��#do#r��#bo#d��#go#r��#k<#b#e�������#n#k>#r��#go#d��#go#r��#do#b��#go#r��#bo#d��#go#r��#b#go#k\r\n\r\n"
			text +=  "#bһ�ߺ���#k,ÿ���ܵ���ĩ��������ȡһ��Ӵ,������ɫ�����ظ���ȡ,����ͬ���ʺŶ����ɫ��ȡ,ͨ��#r�̳�ת��#k.�㶮��!\r\n\r\n"
			//text +=  "  #r��ȡ����#k :  #v5041000# x 1 .\r\n\r\n"
            //text += " �й��ٷ�û��������ʽ��#r���׽�#k���ڵ�����ϰ����ʹ��6�µ����������յ������׽�,̨�常�׽���8��8��.̨��ĸ��׽ڶ���ÿ��İ��°��գ��ֳ�Ϊ���˰˽ڡ���������Ϊ���˰ˡ��Ͱְ���������ҡ��˰ˡ�������׺�������ֺ���һ�� �������֣����Ը��׽��ر𱻶��ڰ��°���.\r\n"			
            text += "#L1##r#v4031347#ÿ�����#l"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.getPlayer().getOneTimeLog("meizhoulibao5") >= 1){
			cm.sendOk("#v4031347#ÿ����ݵ�����,��ȡһ��.");
            cm.dispose();
			}else{
			if (cm.getInventory(5).isFull(5)){
			cm.sendOk("#b�뱣֤�������п�λ,�����޷���ȡ.");
			cm.dispose();		
			} else {		
            cm.gainItem(5041000,1,7);
            cm.gainMeso(30000);		
            cm.getPlayer().modifyCSPoints(2, +500, true);//�����þ�			
            cm.sendOk("��ȡ�ɹ�!");
			cm.getPlayer().setOneTimeLog("meizhoulibao5");
			cm.worldMessage(6,"��ң�["+cm.getName()+"] ��ȡ ÿ�����,�����ĩ���!");
            cm.dispose();				
			}
		}
    }
}
}	

