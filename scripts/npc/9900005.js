
function start() {
	if(cm.getzb() > 0){
			var ��ֵ��� = cm.getzb();
			var ����� = ��ֵ��� * 150;
		//	var ���ֱ��� = ��ֵ��� * 1;
			cm.gainDJ(�����);
		//	cm.gainjf(���ֱ���);
			cm.setzb(-��ֵ���);
			cm.sendOk("���ѳɹ���ȡ�� "+�����+"���!\r\n�������ӵ������ʻ�! \r\n#r��л��������!#k");
			cm.getChar().saveToDB(false, false);
			cm.worldMessage(11, cm.getC().getChannel(),"����ֵϵͳ��" + " : " + " [" + cm.getPlayer().getName() + "]��ֵ��"+ ����� +"���,�Ͽ�ȥ�̳���ѡϲ������Ʒ�ɣ�", false);  
			cm.dispose();
		} else {
			cm.sendOk("��ȷ�����Ƿ���������");
			cm.dispose();
		}
}

