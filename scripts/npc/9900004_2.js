importPackage(net.sf.sunms.tools);
importPackage(net.sf.sunms.client);
importPackage(net.sf.sunms.server);
importPackage(java.util);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools);
importPackage(Packages.tools.packet);
var status = 0;

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

	    var textz = "#ro#b��#do#g��#bo#d��#ro#g��#do#r��#bo#d��#go#r��#k<#r#e���� ����#n#k>#r��#go#d��#go#r��#do#b��#go#r��#bo#d��#go#r��#b#k\r\n  ������������Ϊ��һ�ߺ����������ر�Ĵ������߸���.\r\n��������: #b 1 : 100��ȯ : 1����� #k\r\n��ǰ���#r"+cm.getPlayer().getCSPoints(1)+" #k��\r\n��ǰ���֣�#r" + cm.getcz() + "#k ��\r\n#k#b#e һ�ߺ�Ϊ��������ѿ��Ÿ��������,������ȡ�κη���\r\n    ��򲻿���ҳ�븴����ַ�л���IE������\r\n ";
        textz += "#e#r#L1#����ת��������վ#l#n\r\n\r\n"
		textz += "#e#r#L2#����ǰ��ֵ��#b "+cm.getwzcz() +"#r ����δ��ȡ ������ȡ ��#l#n\r\n\r\n\r\n";;
		cm.sendSimple (textz);  

        } else if (selection == 1) {
		if(cm.getwzcz()==0){
         cm.openWeb("new.shoukabao.com/Payment/Service/8e9522d5b8c94b6973ae92a366b502e1");
		 cm.sendOk("��ֵ��Ϻ�,#r�뵥������--���߳�ֵ#k����������ȡ!\r\n");
         cm.dispose();	
         return;
            }
         cm.openWeb("new.shoukabao.com/Payment/Service/8e9522d5b8c94b6973ae92a366b502e1");
		 cm.sendOk("��ֵ��Ϻ�,#r�뵥������--���߳�ֵ#k����������ȡ!\r\n");
         cm.dispose();
}else if (selection == 2){//��ֵ��ȡ
		if(cm.getwzcz()==0){
		cm.sendOk("����ǰδ���ֽ��Ϊ"+ cm.getwzcz() +"�� ���һ�ʧ�ܣ�\r\n#r��ֵ����1Ԫ=100���.\r\n��ǰ����Ϊ"+ cm.getcz() +"��\r\n\r\n#r��ֵ����1Ԫ=100��ȯ1����.");
		cm.dispose();	
		}else{
		var  j = cm.getwzcz();
		cm.setwzcz(-j);
		cm.gainDJ(j*1);
        cm.gaincz(j*0.01);	//����
        cm.sendOk("���ֳɹ������"+ j*1 + "��ȯ��\r\n��ǰӵ��\r\nδ���ֽ��Ϊ"+ cm.getwzcz() +"�� \r\n��ǰ����Ϊ"+ cm.getcz() +"��\r\n\r\n#r��ֵ����1Ԫ=100��ȯ1����.");
		cm.dispose();
		}
			}
			}

}


