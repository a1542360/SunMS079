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
            text += "#e#r��Ʊ�Ǻϳɸ߼�װ������Ҫ����֮һ�.\r\n"
			text += "#L1##e#d20��+#r ����:1���� 2���� 1��#v4031559# 1��#v4031560##k\r\n\r\n"//3
			text += "#L2##e#d20-50��#r ����:2���� 4���� 1��#v4031559# 1��#v4031560##k\r\n\r\n"//3
			text += "#L3##e#d20-50��#r ����:2���� 4���� 1��#v4031559# 1��#v4031560##k\r\n\r\n"//3
			text += "#L4##e#d50-100��#r ����:3���� 7���� 1��#v4031559# 1��#v4031560##k\r\n\r\n"//3
			text += "#L5##e#d50-100��#r ����:3���� 7���� 1��#v4031559# 1��#v4031560##k\r\n\r\n"//3
			text += "#L6##e#d100��+#r ����:5���� 10���� 1��#v4031559# 1��#v4031560##k\r\n\r\n"//3
			text += "#L7##e#d100��+#r ����:5���� 10���� 1��#v4031559# 1��#v4031560##k\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.getLevel() >= 20){
			cm.openNpc(9900004, 151);
		}else{
				cm.sendOk("��ȼ�δ�ﵽ20��!");
				cm.dispose();
			}		
        } else if (selection == 2) {
			if(cm.getLevel() >= 20 && cm.getLevel() <= 50){
		cm.openNpc(9900004, 152);
		}else{
				cm.sendOk("��ȼ�δ��20��-50��֮��!");
				cm.dispose();
			}
		} else if (selection == 3) {
			if(cm.getLevel() >= 20 && cm.getLevel() <= 50){
		cm.openNpc(9900004, 153);
		}else{
				cm.sendOk("��ȼ�δ��20��-50��֮��!");
				cm.dispose();
			}	
        } else if (selection == 4) {
						if(cm.getLevel() >= 51 && cm.getLevel() <= 100){
		cm.openNpc(9900004, 154);
		}else{			
				cm.sendOk("��ȼ�δ��51��-100��֮��!");
				cm.dispose();
			}
		} else if (selection == 5) {
						if(cm.getLevel() >= 51 && cm.getLevel() <= 100){
		cm.openNpc(9900004, 155);
		}else{			
				cm.sendOk("��ȼ�δ��51��-100��֮��!");
				cm.dispose();
			}	
		} else if (selection == 6) {
						if(cm.getLevel() >= 100 && cm.getLevel() <= 200){
		cm.openNpc(9900004, 156);
		}else{
			
				cm.sendOk("��ȼ�δ�ﵽ100��!");
				cm.dispose();
			}	
		} else if (selection == 7) {
						if(cm.getLevel() >= 100 && cm.getLevel() <= 200){
		cm.openNpc(9900004, 157);
		}else{
			
				cm.sendOk("��ȼ�δ�ﵽ100��!");
				cm.dispose();
			}
	}
    }
}


