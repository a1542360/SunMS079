importPackage(Packages.tools);
importPackage(Packages.client);

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

	    var textz = "                  #r��ӭ����ð�յ�#b\r\n     ��������ÿ�������ȡһЩ�����Լ�ǩ��֤��\r\n   #v4001266#�һ�ǩ�����������ཱ����������ǩ������\r\n �Լ�ǩ��:"
		+cm.getmoneyb() +"��,��30�λ�ô�,��������\r\n";

            textz += "#r#L0##rǩ��\r\n";//setmoneyb

		cm.sendSimple (textz);  

	}else if (status == 1) {
if (selection == 0){
		if (cm.getLevel() <= 29) {
	            cm.sendOk("�ȼ�����30������ȡ");
                    cm.dispose();
			} else if( cm.getPlayer().getBossLog("meiri") > 0 ){	

						cm.sendOk("                 ÿ��ֻ����ȡһ��");
					cm.dispose();
				}else{
                  cm.getPlayer().setBossLog("meiri")
				 cm.setmoneyb(1);//ǩ��+1
				if(cm.getmoneyb() ==30 ){//����
				cm.setmoneyb(-30);	
				 cm.sendOk("�������");
			    }
                if(cm.getmoneyb() ==2 ){//ǩ2���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("2�����");
				} 
				 if(cm.getmoneyb() ==3 ){//ǩ3���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("3�����");
				} 
				 if(cm.getmoneyb() ==4 ){//ǩ4���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("4�����");
				} 
				if(cm.getmoneyb() ==5 ){//ǩ5���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("5�����");
				} 
				if(cm.getmoneyb() ==6 ){//ǩ6���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("6�����");
				} 
				if(cm.getmoneyb() ==7 ){//ǩ7���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("7�����");
				} 
				if(cm.getmoneyb() ==8 ){//ǩ8���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("8�����");
				} 
				if(cm.getmoneyb() ==9 ){//ǩ9���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("9�����");
				} 
				if(cm.getmoneyb() ==10 ){//ǩ10���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("10�����");
				} 
				if(cm.getmoneyb() ==11 ){//ǩ11���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("11�����");
				} 
				if(cm.getmoneyb() ==12 ){//ǩ12���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("12�����");
				} 
				if(cm.getmoneyb() ==13 ){//ǩ13���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("13�����");
				} 
				if(cm.getmoneyb() ==14 ){//ǩ14���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("14�����");
				} 
				if(cm.getmoneyb() ==15 ){//ǩ15���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("15�����");
				} 
				if(cm.getmoneyb() ==16 ){//ǩ16���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("16�����");
				} 
				if(cm.getmoneyb() ==17 ){//ǩ17���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("17�����");
				} 
				if(cm.getmoneyb() ==18 ){//ǩ18���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("18�����");
				} 
				if(cm.getmoneyb() ==19 ){//ǩ19���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("19�����");
				} 
				if(cm.getmoneyb() ==20 ){//ǩ20���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("20�����");
				} 
				if(cm.getmoneyb() ==21 ){//ǩ21���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("21�����");
				} 
				if(cm.getmoneyb() ==22 ){//ǩ22���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("22�����");
				} 
				if(cm.getmoneyb() ==23 ){//ǩ23���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("23�����");
				} 
				if(cm.getmoneyb() ==24 ){//ǩ24���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("14�����");
				} 
				if(cm.getmoneyb() ==25 ){//ǩ25���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("25�����");
				} 
				if(cm.getmoneyb() ==26 ){//ǩ26���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("26�����");
				} 
				if(cm.getmoneyb() ==27 ){//ǩ27���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("27�����");
				} 
				if(cm.getmoneyb() ==28 ){//ǩ28���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("28�����");
				} 
				if(cm.getmoneyb() ==29 ){//ǩ29���ʲô
					cm.gainItem(4001266, 1);
				   cm.sendOk("29�����");
				} 
				 //������������ 
				 cm.dispose();	 
				}

}
}
}
}
