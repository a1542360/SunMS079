importPackage(java.lang);
importPackage(java.util);
importPackage(Packages.tools);
importPackage(Packages.server.quest);
importPackage(Packages.client);
importPackage(Packages.scripting);
importPackage(Packages.handling.channel);
importPackage(Packages.handling);
importPackage(Packages.handling.word);
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
            text += "              #v3994084##v3994083##v3994071##v3994082##v3994062#\r\n" //showghrs
            text += "               #e#b��������ʱ����#r" + cm.getPlayer().getzxsj() + "#b ����\r\n"//2
            text += "#k��ǰ���#r" +cm.getPlayer().getCSPoints(1) +  "#k�� ��ǰ����Ϊ:#r"+ cm.getcz() +"#k�� ������#r" + cm.getPlayer().getBeans() + "#k��\r\n#k"
            text += "#L1##e#r#v3992025#���߽���#l #L2##e#r#v3992025#��Ϸ����#l #L3##e#r#v3992025#�� �� ��#l\r\n"
            text += "#L7##e#r#v3992025#��ָ�ϳ�#l #L5##e#r#v3992025#ѫ��ϵͳ#l #L4##e#r#v3992025#ɾ������#l\r\n"
			text += "#L17##e#r#v3992025#ÿ�����#l #L6##e#r#v3992025#ÿ������#l #L18##e#r#v3992025#ѧϰ����#l #l\r\n\r\n"
            text += "#L1000##v3992025##b��ݴ���#l#L1001##v3992025#����תְ#l#L1002##v3992025#��������#l\r\n#L1003##v3992025#ˢ��Ʒ#l#L1004##v3992025#ˢ��ȯ��Ҿ���#l"
			
            cm.sendOk(text); 
        } else if (selection == 1) {
            cm.openNpc(9900004, 1); //���߽���		
        } else if (selection == 2) {
            cm.openNpc(9900004, 2); //����
        } else if (selection == 3) {
            cm.openNpc(9900004, 3); //���а�
        } else if (selection == 4) {
            cm.openNpc(9900004, 4); //ɾ������
	    } else if (selection == 5) {
            cm.openNpc(9900004, 5); //����ѫ��
	    } else if (selection == 6) {
			if(cm.getLevel() >= 51){
			cm.openNpc(9900004, 18);//�����
		}else{
				cm.sendOk("��ȼ�δ�ﵽ51��,���ܲμ�ÿ������!");
				cm.dispose();
}				
		} else if (selection == 7) {
            cm.openNpc(9900004, 7); //��ָ�ϳ�
		} else if (selection == 8) {
		    cm.openNpc(9900004, 30); //���ֶһ�
		} else if (selection == 16) {
            cm.openNpc(9900004, 16); //�������			
		} else if (selection == 17) {
            cm.openNpc(9900004, 17); //û��	
		} else if (selection == 18) {
            cm.openNpc(9310073, 51); //û��	
 } else if (selection == 1000) {//
            cm.openNpc(9900004, 1000);
        } else if (selection == 1001) {//
            cm.openNpc(9900004, 1001);		
        } else if (selection == 1002) {//
            cm.openNpc(9900004, 1002);	
        } else if (selection == 1003) {//
            cm.openNpc(9900004, 1003);	
        } else if (selection == 1004) {//
            cm.openNpc(9900004, 1004);	
        }
    }
}
