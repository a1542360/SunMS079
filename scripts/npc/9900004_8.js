function start() {
    status = -1;

    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            if (cm.getPlayer().getMapId() == 108010101 || cm.getPlayer().getMapId() == 108010201 || cm.getPlayer().getMapId() == 108010301 || cm.getPlayer().getMapId() == 108010401 || cm.getPlayer().getMapId() == 108010501) {
                cm.sendOk("����ͼ��ʱ�޷�ʹ��ʹ����������");
                cm.dispose();
                return;
            }
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "\r\n\r\n�ٷ���վ��ֵ ��#r���Ѿ���ֵ����#r" + cm.getcz() + "#k ���\r\n����ά�ַ�������Ҫ����,ϣ���õ����֧��.��ֵ����1:100���#k\r\n"//2
            text += "#e#r#L1#����ת����ֵ��վ#l#n\r\n\r\n"
			text += "#e#r#L2#����ֵ��ȡ-��ǰ#g "+cm.getwzcz() +"#r��ȯ��δ��ȡ������ȡ��#l#n\r\n\r\n"

            cm.sendOk(text); 
        } else if (selection == 1) {
		if(cm.getwzcz()==0){
         cm.openWeb("new.shoukabao.com/Payment/Service/f93a58fbb293f0c2eb1328434462924a");
		 cm.sendOk("��ֵ��Ϻ�,#r�뵥������--��ֵ��ȡ#k������ȡ!\r\n");
         cm.dispose();	
         return;
            }
         cm.openWeb("new.shoukabao.com/Payment/Service/f93a58fbb293f0c2eb1328434462924a");
		 cm.sendOk("��ֵ��Ϻ�,#r�뵥������--��ֵ��ȡ#k������ȡ!\r\n");
         cm.dispose();
        } else if (selection == 2) {
            if(cm.getwzcz()==0){
		cm.sendOk("����ǰδ���ֽ��Ϊ"+ cm.getwzcz() +"��ȯ ���һ�ʧ�ܣ�\r\n#r��ֵ����1��ȯ=100���.");
		cm.dispose();	
		}else{
		var  j = cm.getwzcz();
		cm.setwzcz(-j);
		cm.gainDJ(j*1);
        cm.gaincz(+j);	
        cm.sendOk("���ֳɹ������"+ j*1 + "���\r\n#r��ֵ����1��ȯ=100���.");
		cm.dispose();
        }
    }
}}