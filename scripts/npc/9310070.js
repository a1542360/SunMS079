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
                text += "";//
            }
			text += "\t\t\t     #e#b#v3992026#һ�ߺ�ð�յ�#v3992026# #k#n\r\n"
			text += "\t #dսʤָ��BOSS���ս��Ʒ���Զһ���Ӧ�ĵ��þ�#k\r\n              #e��ǰ���þ�Ϊ��#r"+cm.getPlayer().getCSPoints(2)+"#k ��   \r\n"
            text += "#L9##r1��#v4000040#�һ�100���þ�#l"//3
            text += "#L10##r1��#v4000176#�һ�100���þ�#l\r\n\r\n"//3
			text += "#L14##r1��#v4031227#�һ�100���þ�#l"//3
			text += "#L15##r1��#v4001111#�һ�200���þ�#l\r\n\r\n"//3
			text += "#L16##r1��#v4000235#�һ�200���þ�#l"//3
			text += "#L17##r1��#v4000243#�һ�200���þ�#l\r\n\r\n"//3
			text += "#L11##r1��#v4001085#�һ�200���þ�#l"//3
			text += "#L12##r1��#v4001084#�һ�200���þ�#l\r\n\r\n"//3
			text += "#L13##r1��#v4001083#�һ�500���þ�#l"//3
            cm.sendSimple(text);
        } else if (selection == 9) {
        if (cm.haveItem(4000040, 1)) {
			cm.gainItem(4000040,-1);
			cm.getPlayer().modifyCSPoints(2, 100);
			cm.sendOk("������100���þ���");
		}else{
            cm.sendOk("#b��Ʒ���� �޷��һ���.");
		}
                    cm.dispose();
        } else if (selection == 10) {
        if (cm.haveItem(4000176, 1)) {
			cm.gainItem(4000176,-1);
			cm.getPlayer().modifyCSPoints(2, 100);
			cm.sendOk("������100���þ���");
		}else{
            cm.sendOk("#b��Ʒ���� �޷��һ���.");
		}
                    cm.dispose();
		} else if (selection == 11) {
        if (cm.haveItem(4001085, 1)) {
			cm.gainItem(4001085,-1);
			cm.getPlayer().modifyCSPoints(2, 200);
			cm.sendOk("������200�����");
		}else{
            cm.sendOk("#b��Ʒ���� �޷��һ���.");
		}
                    cm.dispose();
		} else if (selection == 12) {
        if (cm.haveItem(4001084, 1)) {
			cm.gainItem(4001084,-1);
			cm.getPlayer().modifyCSPoints(2, 200);
			cm.sendOk("������200�����");
		}else{
            cm.sendOk("#b��Ʒ���� �޷��һ���.");
		}
                    cm.dispose();	
		} else if (selection == 13) {
        if (cm.haveItem(4001083, 1)) {
			cm.gainItem(4001083,-1);
			cm.getPlayer().modifyCSPoints(2, 500);
			cm.sendOk("������500�����");
		}else{
            cm.sendOk("#b��Ʒ���� �޷��һ���.");
		}
                    cm.dispose();	
        } else if (selection == 14) {
        if (cm.haveItem(4031227, 1)) {
			cm.gainItem(4031227,-1);
			cm.getPlayer().modifyCSPoints(2, 100);
			cm.sendOk("������100���þ���");
		}else{
            cm.sendOk("#b��Ʒ���� �޷��һ���.");
		}
                    cm.dispose();	
        } else if (selection == 15) {
        if (cm.haveItem(4001111, 1)) {
			cm.gainItem(4001111,-1);
			cm.getPlayer().modifyCSPoints(2, 100);
			cm.sendOk("������200���þ���");
		}else{
            cm.sendOk("#b��Ʒ���� �޷��һ���.");
		}
                    cm.dispose();	
        } else if (selection == 16) {
        if (cm.haveItem(4000235, 1)) {
			cm.gainItem(4000235,-1);
			cm.getPlayer().modifyCSPoints(2, 100);
			cm.sendOk("������100���þ���");
		}else{
            cm.sendOk("#b��Ʒ���� �޷��һ���.");
		}
                    cm.dispose();
        } else if (selection == 17) {
        if (cm.haveItem(4000243, 1)) {
			cm.gainItem(4000243,-1);
			cm.getPlayer().modifyCSPoints(2, 200);
			cm.sendOk("������200���þ���");
		}else{
            cm.sendOk("#b��Ʒ���� �޷��һ���.");
		}
                    cm.dispose();					
		}
    }
}


