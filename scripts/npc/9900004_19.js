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
            text += "#n#k��ӭ����#dʢ��ð�յ�#k,ף����������,��Դ����!!!\r\n\r\n"
            text += "#L1##e#d�鿴���#l\r\n\r\n#L2##e#rƴ�������#l\r\n#L3##e#r��ͨ���#l\r\n#L4##e#r������#l\r\n\r\n#L5##e#d��ȡ������#l"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.sendOk("2017��������֣�����\r\n#rʢ��ð�յ�#k�Ƴ�ȫ��#r���ϵͳ#k,�����ǻ���������и��õ��뷨��������ǣ���\r\n\r\n#r�����#k\r\n1��ÿ����һ�����������һ��#v5120015##z5120015#,Ұ����е��䣻\r\n2����������촰�����롰#r@�����#k������ɷ��������\r\n3:�����10����֮��ֻ�ܽ���һ�η�����������������ĺ��������֮����ܽ�����һ�η����������\r\n\r\n#r�����#k\r\n1��ƴ�����������ͨ���������Ϊ��#r@�����+�ո�+�������#k����ע��ո񣩣�\r\n2��������������Ϊ��#r@�����+�ո�+�������+�ո�+����#k����ע��ո񣩣�\r\n3:ͬһ�����ÿ�����ֻ����һ�Ρ�"); 
		cm.dispose();
        } else if (selection == 2) {
		if (cm.haveItem(5120015,1) ){
		cm.gainItem(5120015, -1);
        cm.sendOk("ִ������!");
		cm.dispose();
		} else{
		cm.sendOk("��û��1��#v5120015##z5120015#,�Ͽ�ȥ�ռ���!");
	    cm.dispose();
		}
        } else if (selection == 3) {
		if (cm.haveItem(5120015,1) ){
		cm.gainItem(5120015, -1);
        cm.sendOk("ִ������!");
		cm.dispose();
		} else{
		cm.sendOk("��û��1��#v5120015##z5120015#,�Ͽ�ȥ�ռ���!");
	    cm.dispose();
		}
        } else if (selection == 4) {
		if (cm.haveItem(5120015,1) ){
		cm.gainItem(5120015, -1);
        cm.sendOk("ִ������!");
		cm.dispose();
		} else{
		cm.sendOk("��û��1��#v5120015##z5120015#,�Ͽ�ȥ�ռ���!");
	    cm.dispose();
		}
        } else if (selection == 5) {
		if (cm.haveItem(5120015,1) ){//���ﲻ֪���ж�ʲô��
		cm.gainItem(5120015, -1);
        cm.sendOk("ִ������!");
		cm.dispose();
		} else{
		cm.sendOk("�Բ�����û�п�����");
	    cm.dispose();
		}
	}
    }
}


