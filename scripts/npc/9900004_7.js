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
            text +=" ��.���ǽ�ָ�ϳɹ���Ա\r\n"
            text += " #r����������²��ϵĻ��������Ҷһ�.\r\n"
			text += "#L0##e#d����˵��#l\r\n"
			text += "#L1##e#d�ϳ�#v4001322##r#z4001322##l\r\n"
			text += "#L2##e#d�ϳ�#v1112446##r#z1112446##l\r\n"
			text += "#L3##e#d����#v1112447##r#z1112447##l\r\n"
			text += "#L4##e#d����#v1112448##r#z1112448##l\r\n"
			text += "#L5##e#d����#v1112449##r#z1112449##l\r\n"
			text += "#L6##e#d����#v1112450##r#z1112450##l\r\n"
			text += "#L7##e#d����#v1112451##r#z1112451##l\r\n"
			text += "#L8##e#d����#v1112452##r#z1112452##l\r\n"
			text += "#L9##e#d����#v1112453##r#z1112453##l\r\n"
			text += "#L10##e#d����#v1112454##r#z1112454##l\r\n"
			text += "#L11##e#d����#v1112455##r#z1112455##l\r\n"
			text += "#L12##e#d����#v1112456##r#z1112456##l\r\n"
			text += "#L13##e#d����#v1112457##r#z1112457##l\r\n"
			text += "#L14##e#d����#v1112458##r#z1112458##l\r\n"
			text += "#L15##e#d����#v1112459##r#z1112459##l\r\n"
			text += "#L16##e#d����#v1112460##r#z1112460##l\r\n"
			text += "#L17##e#d����#v1112461##r#z1112461##l\r\n"
			text += "#L18##e#d����#v1112462##r#z1112462##l\r\n"
			text += "#L19##e#d����#v1112463##r#z1112463##l\r\n"
			text += "#L20##e#d����#v1112464##r#z1112464##l\r\n"
			text += "#L21##e#d����#v1112465##r#z1112465##l\r\n"
			text += "#L22##e#d����#v1112466##r#z1112466##l\r\n"
			text += "#L23##e#d����#v1112467##r#z1112467##l\r\n"
			text += "#L24##e#d����#v1112468##r#z1112468##l\r\n"
			text += "#L25##e#d����#v1112469##r#z1112469##l\r\n"
			text += "#L26##e#d����#v1112470##r#z1112470##l\r\n"
			text += "#L27##e#d����#v1112471##r#z1112471##l\r\n"
			text += "#L28##e#d����#v1112472##r#z1112472##l\r\n"
			text += "#L29##e#d����#v1112473##r#z1112473##l\r\n"
			text += "#L30##e#d����#v1112474##r#z1112474##l\r\n"
			text += "#L31##e#d����#v1112475##r#z1112475##l\r\n"
			text += "#L32##e#d����#v1112476##r#z1112476##l\r\n"
			text += "#L33##e#d����#v1112477##r#z1112477##l\r\n"
			text += "#L34##e#d����#v1112478##r#z1112478##l\r\n"
			text += "#L35##e#d����#v1112479##r#z1112479##l\r\n"
			text += "#L36##e#d����#v1112480##r#z1112480##l\r\n"
			text += "#L37##e#d����#v1112481##r#z1112481##l\r\n"
			text += "#L38##e#d����#v1112482##r#z1112482##l\r\n"
			text += "#L39##e#d����#v1112483##r#z1112483##l\r\n"
			text += "#L40##e#d����#v1112484##r#z1112484##l\r\n"
			text += "#L41##e#d����#v1112485##r#z1112485##l\r\n"
			text += "#L42##e#d����#v1112486##r#z1112486##l\r\n"
			text += "#L43##e#d����#v1112487##r#z1112487##l\r\n"
			text += "#L44##e#d����#v1112488##r#z1112488##l\r\n"
			text += "#L45##e#d����#v1112489##r#z1112489##l\r\n"
			text += "#L46##e#d����#v1112490##r#z1112490##l\r\n"
			text += "#L47##e#d����#v1112491##r#z1112491##l\r\n"
			text += "#L48##e#d����#v1112492##r#z1112492##l\r\n"
			text += "#L49##e#d����#v1112493##r#z1112493##l\r\n"
			text += "#L50##e#d����#v1112494##r#z1112494##l\r\n"
			text += "#L51##e#d����#v1112495##r#z1112495##l\r\n"
			
            cm.sendOk(text);
        } else if (selection == 0) {
		cm.sendOk("#b����˵��:#k\r\n1.#v4001322#��ͨ�����+�����ʯ��Ʒ+#v4000313##z4000313#5�����! \r\n�ϳ�1���Ϲ����Ž�ָ��Ҫ#v4000017##z4000017#x10\r\n 2-10���Ϲ����Ž�ָ��Ҫ#v4001322##z4001322#x10\r\n11-20���Ϲ����Ž�ָ��Ҫ#v4001322##z4001322#x20\r\n21-30���Ϲ����Ž�ָ��Ҫ#v4001322##z4001322#x30\r\n30-50���Ϲ����Ž�ָ��Ҫ#v4001322##z4001322#x50\r\n\r\ #rÿһ���ȼ����Ϲ����Ž�ָֻ����װ��һ��!#k");
		cm.dispose();
        } else if (selection == 1) {
		if (cm.haveItem(4000313, 5) && cm.haveItem(4011001, 1) && cm.getMeso() > 20000) {//�ж���Ʒ
		cm.gainItem(4000313, -5);//�۳���Ʒ
		cm.gainItem(4011001, -1);//�۳���Ʒ
		cm.gainItem(4001322, 1);//������Ʒ+����
        cm.gainMeso(-20000);//�۳����		
		cm.sendOk("�ϳ�#v4001322##z4001322#�ɹ�!");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �ϳ��˰�ѩ�˷��ϵ�����ʯ!���һ����ף����/����!");//����
		cm.dispose();
		}else if (cm.haveItem(4000313, 5) && cm.haveItem(4011004, 1) && cm.getMeso() > 20000) {//�ж���Ʒ
		cm.gainItem(4000313, -5);//�۳���Ʒ
		cm.gainItem(4011004, -1);//�۳���Ʒ
		cm.gainItem(4001322, 1);//������Ʒ+����
        cm.gainMeso(-20000);//�۳����			
		cm.sendOk("�ϳ�#v4001322##z4001322#�ɹ�!");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �ϳ��˰�ѩ�˷��ϵ�����ʯ!���һ����ף����/����!");//����
		cm.dispose();
		}else if (cm.haveItem(4000313, 5) && cm.haveItem(4011006, 1) && cm.getMeso() > 20000) {//�ж���Ʒ
		cm.gainItem(4000313, -5);//�۳���Ʒ
		cm.gainItem(4011006, -1);//�۳���Ʒ
		cm.gainItem(4001322, 1);//������Ʒ+����
        cm.gainMeso(-20000);//�۳����			
		cm.sendOk("�ϳ�#v4001322##z4001322#�ɹ�!");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �ϳ��˰�ѩ�˷��ϵ�����ʯ!���һ����ף����/����!");//����
		cm.dispose();
		}else if (cm.haveItem(4000313, 5) && cm.haveItem(4011002, 1) && cm.getMeso() > 20000) {//�ж���Ʒ
		cm.gainItem(4000313, -5);//�۳���Ʒ
		cm.gainItem(4011002, -1);//�۳���Ʒ
		cm.gainItem(4001322, 1);//������Ʒ+����
        cm.gainMeso(-20000);//�۳����			
		cm.sendOk("�ϳ�#v4001322##z4001322#�ɹ�!");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �ϳ��˰�ѩ�˷��ϵ�����ʯ!���һ����ף����/����!");//����
		cm.dispose();
		}else if (cm.haveItem(4000313, 5) && cm.haveItem(4011003, 1) && cm.getMeso() > 20000) {//�ж���Ʒ
		cm.gainItem(4000313, -5);//�۳���Ʒ
		cm.gainItem(4011003, -1);//�۳���Ʒ
		cm.gainItem(4001322, 1);//������Ʒ+����
        cm.gainMeso(-20000);//�۳����			
		cm.sendOk("�ϳ�#v4001322##z4001322#�ɹ�!");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �ϳ��˰�ѩ�˷��ϵ�����ʯ!���һ����ף����/����!");//����
		cm.dispose();
		}else if (cm.haveItem(4000313, 5) && cm.haveItem(4011005, 1) && cm.getMeso() > 20000) {//�ж���Ʒ
		cm.gainItem(4000313, -5);//�۳���Ʒ
		cm.gainItem(4011005, -1);//�۳���Ʒ
		cm.gainItem(4001322, 1);//������Ʒ+���� 
		cm.sendOk("�ϳ�#v4001322##z4001322#�ɹ�!");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �ϳ��˰�ѩ�˷��ϵ�����ʯ!���һ����ף����/����!");//����
		cm.dispose();
		}else if (cm.haveItem(4000313, 5) && cm.haveItem(4021000, 1) && cm.getMeso() > 20000) {//�ж���Ʒ
		cm.gainItem(4000313, -5);//�۳���Ʒ
		cm.gainItem(4021000, -1);//�۳���Ʒ
		cm.gainItem(4001322, 1);//������Ʒ+����
        cm.gainMeso(-20000);//�۳����			
		cm.sendOk("�ϳ�#v4001322##z4001322#�ɹ�!");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �ϳ��˰�ѩ�˷��ϵ�����ʯ!���һ����ף����/����!");//����
		cm.dispose();
		}else if (cm.haveItem(4000313, 5) && cm.haveItem(4021001, 1) && cm.getMeso() > 20000) {//�ж���Ʒ
		cm.gainItem(4000313, -5);//�۳���Ʒ
		cm.gainItem(4021001, -1);//�۳���Ʒ
		cm.gainItem(4001322, 1);//������Ʒ+���� 
		cm.sendOk("�ϳ�#v4001322##z4001322#�ɹ�!");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �ϳ��˰�ѩ�˷��ϵ�����ʯ!���һ����ף����/����!");//����
		cm.dispose();
		}else if (cm.haveItem(4000313, 5) && cm.haveItem(4021002, 1) && cm.getMeso() > 20000) {//�ж���Ʒ
		cm.gainItem(4000313, -5);//�۳���Ʒ
		cm.gainItem(4021002, -1);//�۳���Ʒ
		cm.gainItem(4001322, 1);//������Ʒ+����
        cm.gainMeso(-20000);//�۳����			
		cm.sendOk("�ϳ�#v4001322##z4001322#�ɹ�!");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �ϳ��˰�ѩ�˷��ϵ�����ʯ!���һ����ף����/����!");//����
		cm.dispose();
		}else if (cm.haveItem(4000313, 5) && cm.haveItem(4021003, 1) && cm.getMeso() > 20000) {//�ж���Ʒ
		cm.gainItem(4000313, -5);//�۳���Ʒ
		cm.gainItem(4021003, -1);//�۳���Ʒ
		cm.gainItem(4001322, 1);//������Ʒ+����
        cm.gainMeso(-20000);//�۳����			
		cm.sendOk("�ϳ�#v4001322##z4001322#�ɹ�!");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �ϳ��˰�ѩ�˷��ϵ�����ʯ!���һ����ף����/����!");//����
		cm.dispose();
		}else if (cm.haveItem(4000313, 5) && cm.haveItem(4021004, 1) && cm.getMeso() > 20000) {//�ж���Ʒ
		cm.gainItem(4000313, -5);//�۳���Ʒ
		cm.gainItem(4021004, -1);//�۳���Ʒ
		cm.gainItem(4001322, 1);//������Ʒ+����
        cm.gainMeso(-20000);//�۳����			
		cm.sendOk("�ϳ�#v4001322##z4001322#�ɹ�!");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �ϳ��˰�ѩ�˷��ϵ�����ʯ!���һ����ף����/����!");//����
		cm.dispose();
		}else if (cm.haveItem(4000313, 5) && cm.haveItem(4021005, 1) && cm.getMeso() > 20000) {//�ж���Ʒ
		cm.gainItem(4000313, -5);//�۳���Ʒ
		cm.gainItem(4021005, -1);//�۳���Ʒ
		cm.gainItem(4001322, 1);//������Ʒ+����
        cm.gainMeso(-20000);//�۳����			
		cm.sendOk("�ϳ�#v4001322##z4001322#�ɹ�!");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �ϳ��˰�ѩ�˷��ϵ�����ʯ!���һ����ף����/����!");//����
		cm.dispose();
		}else if (cm.haveItem(4000313, 5) && cm.haveItem(4021006, 1) && cm.getMeso() > 20000) {//�ж���Ʒ
		cm.gainItem(4000313, -5);//�۳���Ʒ
		cm.gainItem(4021006, -1);//�۳���Ʒ
		cm.gainItem(4001322, 1);//������Ʒ+����
        cm.gainMeso(-20000);//�۳����			
		cm.sendOk("�ϳ�#v4001322##z4001322#�ɹ�!");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �ϳ��˰�ѩ�˷��ϵ�����ʯ!���һ����ף����/����!");//����
		cm.dispose();
		}else if (cm.haveItem(4000313, 5) && cm.haveItem(4021007, 1) && cm.getMeso() > 20000) {//�ж���Ʒ
		cm.gainItem(4000313, -5);//�۳���Ʒ
		cm.gainItem(4021007, -1);//�۳���Ʒ
		cm.gainItem(4001322, 1);//������Ʒ+����
        cm.gainMeso(-20000);//�۳����			
		cm.sendOk("�ϳ�#v4001322##z4001322#�ɹ�!");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �ϳ��˰�ѩ�˷��ϵ�����ʯ!���һ����ף����/����!");//����
		cm.dispose();
		}else if (cm.haveItem(4000313, 5) && cm.haveItem(4011000, 1) && cm.getMeso() > 20000) {//�ж���Ʒ
		cm.gainItem(4000313, -5);//�۳���Ʒ
		cm.gainItem(4011000, -1);//�۳���Ʒ
		cm.gainItem(4001322, 1);//������Ʒ+���� 
		cm.sendOk("�ϳ�#v4001322##z4001322#�ɹ�!");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �ϳ��˰�ѩ�˷��ϵ�����ʯ!���һ����ף����/����!");//����
		cm.dispose();
		}else if (cm.haveItem(4000313, 5) && cm.haveItem(4021008, 1) && cm.getMeso() > 20000) {//�ж���Ʒ
		cm.gainItem(4000313, -5);//�۳���Ʒ
		cm.gainItem(4021008, -1);//�۳���Ʒ
		cm.gainItem(4001322, 1);//������Ʒ+����
        cm.gainMeso(-20000);//�۳����			
		cm.sendOk("�ϳ�#v4001322##z4001322#�ɹ�!");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �ϳ��˰�ѩ�˷��ϵ�����ʯ!���һ����ף����/����!");//����
		cm.dispose();
		}else if (cm.haveItem(4000313, 5) && cm.haveItem(4021005, 1) && cm.getMeso() > 20000) {//�ж���Ʒ
		cm.gainItem(4000313, -5);//�۳���Ʒ
		cm.gainItem(4021005, -1);//�۳���Ʒ
		cm.gainItem(4001322, 1);//������Ʒ+����
        cm.gainMeso(-20000);//�۳����			
		cm.sendOk("�ϳ�#v4001322##z4001322#�ɹ�!");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �ϳ��˰�ѩ�˷��ϵ�����ʯ!���һ����ף����/����!");//����
		cm.dispose();
		}else if (cm.haveItem(4000313, 5) && cm.haveItem(4021006, 1) && cm.getMeso() > 20000) {//�ж���Ʒ
		cm.gainItem(4000313, -5);//�۳���Ʒ
		cm.gainItem(4021006, -1);//�۳���Ʒ
		cm.gainItem(4001322, 1);//������Ʒ+����
        cm.gainMeso(-20000);//�۳����			
		cm.sendOk("�ϳ�#v4001322##z4001322#�ɹ�!");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �ϳ��˰�ѩ�˷��ϵ�����ʯ!���һ����ף����/����!");//����
		cm.dispose();
		}else if (cm.haveItem(4000313, 5) && cm.haveItem(4011008, 1) && cm.getMeso() > 20000) {//�ж���Ʒ
		cm.gainItem(4000313, -5);//�۳���Ʒ
		cm.gainItem(4011008, -1);//�۳���Ʒ
		cm.gainItem(4001322, 1);//������Ʒ+����
        cm.gainMeso(-20000);//�۳����			
		cm.sendOk("�ϳ�#v4001322##z4001322#�ɹ�!");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �ϳ��˰�ѩ�˷��ϵ�����ʯ!���һ����ף����/����!");//����
		cm.dispose();			
		}else{
		cm.sendOk("���ϲ���!#v4000313##z4000313#����5������û�������ʯ��2����!");
        cm.dispose();
			}					
        } else if (selection == 2) {
		if (!cm.haveItem(4000017, 10)) {//�ж�
		cm.sendOk("��û��10��#v4000017##r#z4000017#!");
		cm.dispose();
		}else{
		cm.gainItem(4000017, -10);//�۳�
		cm.gainItem(1112446, 1);//������Ʒ+����
        cm.gainMeso(-50000);//�۳����			
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �ϳ���1���Ϲ����Ž�ָ!���һ����ף����/����!");//����
		cm.dispose();
			}		
        } else if (selection == 3) {
		if (!cm.haveItem(1112446, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112446##r#z1112446#����5����!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 10)||cm.getMeso() <= 50000) {//�ж�
		cm.sendOk("��û��10��#v4001322##r#z4001322#!");
		cm.dispose();
		}else{
		cm.gainItem(1112446, -1);//�۳���Ʒ
		cm.gainItem(4001322, -10);//�۳���Ʒ
		cm.gainItem(1112447, 1);//������Ʒ
		cm.gainMeso(-50000);//�۳����	
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ2��!���һ����ף����/����!");//����
		cm.dispose();
			}	
        } else if (selection == 4) {
		if (!cm.haveItem(1112447, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112447##r#z1112447#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 10)||cm.getMeso() <= 50000) {//�ж�
		cm.sendOk("��û��10��#v4001322##r#z4001322#����5����!");
		cm.dispose();
		}else{
		cm.gainItem(1112447, -1);//�۳���Ʒ
		cm.gainItem(4001322, -10);//�۳���Ʒ
		cm.gainItem(1112448, 1);//������Ʒ
		cm.gainMeso(-50000);//�۳����			
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ3��!���һ����ף����/����!");//����
		cm.dispose();
			}	
        } else if (selection == 5) {
		if (!cm.haveItem(1112448, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112448##r#z1112448#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 10)||cm.getMeso() <= 50000) {//�ж�
		cm.sendOk("��û��10��#v4001322##r#z4001322#����5����!");
		cm.dispose();
		}else{
		cm.gainItem(1112448, -1);//�۳���Ʒ
		cm.gainItem(4001322, -10);//�۳���Ʒ
		cm.gainItem(1112449, 1);//������Ʒ
		cm.gainMeso(-50000);//�۳����			
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ4��!���һ����ף����/����!");//����
		cm.dispose();
			}	
        } else if (selection == 6) {
		if (!cm.haveItem(1112449, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112449##r#z1112449#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 10)||cm.getMeso() <= 50000) {//�ж�
		cm.sendOk("��û��10��#v4001322##r#z4001322#����5����!");
		cm.dispose();
		}else{
		cm.gainItem(1112449, -1);//�۳���Ʒ
		cm.gainItem(4001322, -10);//�۳���Ʒ
		cm.gainItem(1112450, 1);//������Ʒ
		cm.gainMeso(-50000);//�۳����			
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ5��!���һ����ף����/����!");//����
		cm.dispose();
			}	
       } else if (selection == 7) {
		if (!cm.haveItem(1112450, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112450##r#z1112450#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 10)||cm.getMeso() <= 300000) {//�ж�
		cm.sendOk("��û��10��#v4001322##r#z4001322#����30����!");
		cm.dispose();
		}else{
		cm.gainItem(1112450, -1);//�۳���Ʒ
		cm.gainItem(4001322, -10);//�۳���Ʒ
		cm.gainItem(1112451, 1);//������Ʒ
		cm.gainMeso(-300000);//�۳����			
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ6��!���һ����ף����/����!");//����
		cm.dispose();
			}	
       } else if (selection == 8) {
		if (!cm.haveItem(1112451, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112451##r#z1112451#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 10)||cm.getMeso() <= 300000) {//�ж�
		cm.sendOk("��û��10��#v4001322##r#z4001322#����30����!");
		cm.dispose();
		}else{
		cm.gainItem(1112451, -1);//�۳���Ʒ
		cm.gainItem(4001322, -10);//�۳���Ʒ
		cm.gainItem(1112452, 1);//������Ʒ
		cm.gainMeso(-300000);//�۳����			
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ7��!���һ����ף����/����!");//����
		cm.dispose();
			}	
       } else if (selection == 9) {
		if (!cm.haveItem(1112452, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112452##r#z1112452#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 10)||cm.getMeso() <= 300000) {//�ж�
		cm.sendOk("��û��10��#v4001322##r#z4001322#����30����!");
		cm.dispose();
		}else{
		cm.gainItem(1112452, -1);//�۳���Ʒ
		cm.gainItem(4001322, -10);//�۳���Ʒ
		cm.gainItem(1112453, 1);//������Ʒ
		cm.gainMeso(-300000);//�۳����	
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ8��!���һ����ף����/����!");//����
		cm.dispose();
			}	
       } else if (selection == 10) {
		if (!cm.haveItem(1112453, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112453##r#z1112453#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 10)||cm.getMeso() <= 300000) {//�ж�
		cm.sendOk("��û��10��#v4001322##r#z4001322#����30����!");
		cm.dispose();
		}else{
		cm.gainItem(1112453, -1);//�۳���Ʒ
		cm.gainItem(4001322, -10);//�۳���Ʒ
		cm.gainItem(1112454, 1);//������Ʒ
		cm.gainMeso(-300000);//�۳����			
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ9��!���һ����ף����/����!");//����
		cm.dispose();
			}		
        } else if (selection == 11) {
		if (!cm.haveItem(1112454, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112454##r#z1112454#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 10)||cm.getMeso() <= 300000) {//�ж�
		cm.sendOk("��û��10��#v4001322##r#z4001322#����30����!");
		cm.dispose();
		}else{
		cm.gainItem(1112454, -1);//�۳���Ʒ
		cm.gainItem(4001322, -10);//�۳���Ʒ
		cm.gainItem(1112455, 1);//������Ʒ
		cm.gainMeso(-300000);//�۳����			
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ10��!���һ����ף����/����!");//����
		cm.dispose();
			}		
        } else if (selection == 12) {
		if (!cm.haveItem(1112455, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112455##r#z1112455#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 20)||cm.getMeso() <= 500000) {//�ж�
		cm.sendOk("��û��20��#v4001322##r#z4001322#����50����!");
		cm.dispose();
		}else{
		cm.gainItem(1112455, -1);//�۳���Ʒ
		cm.gainItem(4001322, -20);//�۳���Ʒ
		cm.gainItem(1112456, 1);//������Ʒ
		cm.gainMeso(-500000);//�۳����			
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ11��!���һ����ף����/����!");//����
		cm.dispose();
			}	
        } else if (selection == 13) {
		if (!cm.haveItem(1112456, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112456##r#z1112456#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 20)||cm.getMeso() <= 500000) {//�ж�
		cm.sendOk("��û��20��#v4001322##r#z4001322#����50����!");
		cm.dispose();
		}else{
		cm.gainItem(1112456, -1);//�۳���Ʒ
		cm.gainItem(4001322, -20);//�۳���Ʒ
		cm.gainItem(1112457, 1);//������Ʒ
		cm.gainMeso(-500000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ12��!���һ����ף����/����!");//����
		cm.dispose();
			}	
        } else if (selection == 14) {
		if (!cm.haveItem(1112457, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112457##r#z1112457#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 20)||cm.getMeso() <= 500000) {//�ж�
		cm.sendOk("��û��20��#v4001322##r#z4001322#����50����!");
		cm.dispose();
		}else{
		cm.gainItem(1112457, -1);//�۳���Ʒ
		cm.gainItem(4001322, -20);//�۳���Ʒ
		cm.gainItem(1112458, 1);//������Ʒ
		cm.gainMeso(-500000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ13��!���һ����ף����/����!");//����
		cm.dispose();
			}	
        } else if (selection == 15) {
		if (!cm.haveItem(1112458, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112458##r#z1112458#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 20)||cm.getMeso() <= 500000) {//�ж�
		cm.sendOk("��û��20��#v4001322##r#z4001322#����50����!");
		cm.dispose();
		}else{
		cm.gainItem(1112458, -1);//�۳���Ʒ
		cm.gainItem(4001322, -20);//�۳���Ʒ
		cm.gainItem(1112459, 1);//������Ʒ
		cm.gainMeso(-500000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ14��!���һ����ף����/����!");//����
		cm.dispose();
			}	
        } else if (selection == 16) {
		if (!cm.haveItem(1112459, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112459##r#z1112459#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 20)||cm.getMeso() <= 500000) {//�ж�
		cm.sendOk("��û��20��#v4001322##r#z4001322#����50����!");
		cm.dispose();
		}else{
		cm.gainItem(1112459, -1);//�۳���Ʒ
		cm.gainItem(4001322, -20);//�۳���Ʒ
		cm.gainItem(1112460, 1);//������Ʒ
		cm.gainMeso(-500000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ15��!���һ����ף����/����!");//����
		cm.dispose();
			}	
        } else if (selection == 17) {
		if (!cm.haveItem(1112460, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112460##r#z1112460#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 20)||cm.getMeso() <= 1000000) {//�ж�
		cm.sendOk("��û��20��#v4001322##r#z4001322#����100����!");
		cm.dispose();
		}else{
		cm.gainItem(1112460, -1);//�۳���Ʒ
		cm.gainItem(4001322, -20);//�۳���Ʒ
		cm.gainItem(1112461, 1);//������Ʒ
		cm.gainMeso(-1000000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ16��!���һ����ף����/����!");//����
		cm.dispose();
			}	
        } else if (selection == 18) {
		if (!cm.haveItem(1112461, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112461##r#z1112461#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 20)||cm.getMeso() <= 1000000) {//�ж�
		cm.sendOk("��û��20��#v4001322##r#z4001322#����100����!");
		cm.dispose();
		}else{
		cm.gainItem(1112461, -1);//�۳���Ʒ
		cm.gainItem(4001322, -20);//�۳���Ʒ
		cm.gainItem(1112462, 1);//������Ʒ
		cm.gainMeso(-1000000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ17��!���һ����ף����/����!");//����
		cm.dispose();
			}	
        } else if (selection == 19) {
		if (!cm.haveItem(1112462, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112462##r#z1112462#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 20)||cm.getMeso() <= 1000000) {//�ж�
		cm.sendOk("��û��20��#v4001322##r#z4001322#����100����!");
		cm.dispose();
		}else{
		cm.gainItem(1112462, -1);//�۳���Ʒ
		cm.gainItem(4001322, -20);//�۳���Ʒ
		cm.gainItem(1112463, 1);//������Ʒ
		cm.gainMeso(-1000000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ18��!���һ����ף����/����!");//����
		cm.dispose();
			}	
        } else if (selection == 20) {
		if (!cm.haveItem(1112463, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112463##r#z1112463#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 20)||cm.getMeso() <= 1000000) {//�ж�
		cm.sendOk("��û��20��#v4001322##r#z4001322#����100����!");
		cm.dispose();
		}else{
		cm.gainItem(1112463, -1);//�۳���Ʒ
		cm.gainItem(4001322, -20);//�۳���Ʒ
		cm.gainItem(1112464, 1);//������Ʒ
		cm.gainMeso(-1000000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ19��!���һ����ף����/����!");//����
		cm.dispose();
			}	
        } else if (selection == 21) {
		if (!cm.haveItem(1112464, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112464##r#z1112464#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 20)||cm.getMeso() <= 1000000) {//�ж�
		cm.sendOk("��û��20��#v4001322##r#z4001322#����100����!");
		cm.dispose();
		}else{
		cm.gainItem(1112464, -1);//�۳���Ʒ
		cm.gainItem(4001322, -20);//�۳���Ʒ
		cm.gainItem(1112465, 1);//������Ʒ
		cm.gainMeso(-1000000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ20��!���һ����ף����/����!");//����
		cm.dispose();
			}	
        } else if (selection == 22) {
		if (!cm.haveItem(1112465, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112465##r#z1112465#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 30)||cm.getMeso() <= 1000000) {//�ж�
		cm.sendOk("��û��30��#v4001322##r#z4001322#����100����!");
		cm.dispose();
		}else{
		cm.gainItem(1112465, -1);//�۳���Ʒ
		cm.gainItem(4001322, -30);//�۳���Ʒ
		cm.gainItem(1112466, 1);//������Ʒ
		cm.gainMeso(-1000000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ21��!���һ����ף����/����!");//����
		cm.dispose();
			}		
        } else if (selection == 23) {
		if (!cm.haveItem(1112466, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112466##r#z1112466#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 30)||cm.getMeso() <= 1000000) {//�ж�
		cm.sendOk("��û��30��#v4001322##r#z4001322#����100����!");
		cm.dispose();
		}else{
		cm.gainItem(1112466, -1);//�۳���Ʒ
		cm.gainItem(4001322, -30);//�۳���Ʒ
		cm.gainItem(1112467, 1);//������Ʒ
		cm.gainMeso(-1000000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ22��!���һ����ף����/����!");//����
		cm.dispose();
			}	
        } else if (selection == 24) {
		if (!cm.haveItem(1112467, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112467##r#z1112467#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 30)||cm.getMeso() <= 1000000) {//�ж�
		cm.sendOk("��û��30��#v4001322##r#z4001322#����100����!");
		cm.dispose();
		}else{
		cm.gainItem(1112467, -1);//�۳���Ʒ
		cm.gainItem(4001322, -30);//�۳���Ʒ
		cm.gainItem(1112468, 1);//������Ʒ
		cm.gainMeso(-1000000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ23��!���һ����ף����/����!");//����
		cm.dispose();
			}		
        } else if (selection == 25) {
		if (!cm.haveItem(1112468, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112468##r#z1112468#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 30)||cm.getMeso() <= 1000000) {//�ж�
		cm.sendOk("��û��30��#v4001322##r#z4001322#����100����!");
		cm.dispose();
		}else{
		cm.gainItem(1112468, -1);//�۳���Ʒ
		cm.gainItem(4001322, -30);//�۳���Ʒ
		cm.gainItem(1112469, 1);//������Ʒ
		cm.gainMeso(-1000000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ24��!���һ����ף����/����!");//����
		cm.dispose();
			}	
        } else if (selection == 26) {
		if (!cm.haveItem(1112469, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112469##r#z1112469#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 30)||cm.getMeso() <= 1000000) {//�ж�
		cm.sendOk("��û��30��#v4001322##r#z4001322#����100����!");
		cm.dispose();
		}else{
		cm.gainItem(1112469, -1);//�۳���Ʒ
		cm.gainItem(4001322, -30);//�۳���Ʒ
		cm.gainItem(1112470, 1);//������Ʒ
		cm.gainMeso(-1000000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ25��!���һ����ף����/����!");//����
		cm.dispose();
			}			
       } else if (selection == 27) {
		if (!cm.haveItem(1112470, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112470##r#z1112470#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 30)||cm.getMeso() <= 1000000) {//�ж�
		cm.sendOk("��û��30��#v4001322##r#z4001322#����100����!");
		cm.dispose();
		}else{
		cm.gainItem(1112470, -1);//�۳���Ʒ
		cm.gainItem(4001322, -30);//�۳���Ʒ
		cm.gainItem(1112471, 1);//������Ʒ
		cm.gainMeso(-1000000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ26��!���һ����ף����/����!");//����
		cm.dispose();
			}		
        } else if (selection == 28) {
		if (!cm.haveItem(1112471, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112471##r#z1112471#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 30)||cm.getMeso() <= 1000000) {//�ж�
		cm.sendOk("��û��30��#v4001322##r#z4001322#����100����!");
		cm.dispose();
		}else{
		cm.gainItem(1112471, -1);//�۳���Ʒ
		cm.gainItem(4001322, -30);//�۳���Ʒ
		cm.gainItem(1112472, 1);//������Ʒ
		cm.gainMeso(-1000000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ27��!���һ����ף����/����!");//����
		cm.dispose();
			}		
        } else if (selection == 29) {
		if (!cm.haveItem(1112472, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112472##r#z1112472#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 30)||cm.getMeso() <= 1000000) {//�ж�
		cm.sendOk("��û��30��#v4001322##r#z4001322#����100����!");
		cm.dispose();
		}else{
		cm.gainItem(1112472, -1);//�۳���Ʒ
		cm.gainItem(4001322, -30);//�۳���Ʒ
		cm.gainItem(1112473, 1);//������Ʒ
		cm.gainMeso(-1000000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ28��!���һ����ף����/����!");//����
		cm.dispose();
			}		
        } else if (selection == 30) {
		if (!cm.haveItem(1112473, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112473##r#z1112473#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 30)||cm.getMeso() <= 1000000) {//�ж�
		cm.sendOk("��û��30��#v4001322##r#z4001322#����100����!");
		cm.dispose();
		}else{
		cm.gainItem(1112473, -1);//�۳���Ʒ
		cm.gainItem(4001322, -30);//�۳���Ʒ
		cm.gainItem(1112474, 1);//������Ʒ
		cm.gainMeso(-1000000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ29��!���һ����ף����/����!");//����
		cm.dispose();
			}	
        } else if (selection == 31) {
		if (!cm.haveItem(1112474, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112474##r#z1112474#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 30)||cm.getMeso() <= 1000000) {//�ж�
		cm.sendOk("��û��30��#v4001322##r#z4001322#����100����!");
		cm.dispose();
		}else{
		cm.gainItem(1112474, -1);//�۳���Ʒ
		cm.gainItem(4001322, -30);//�۳���Ʒ
		cm.gainItem(1112475, 1);//������Ʒ
		cm.gainMeso(-1000000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ30��!���һ����ף����/����!");//����
		cm.dispose();
			}			
		} else if (selection == 32) {
		if (!cm.haveItem(1112475, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112475##r#z1112475#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 50)||cm.getMeso() <= 1500000) {//�ж�
		cm.sendOk("��û��50��#v4001322##r#z4001322#����150����!");
		cm.dispose();
		}else{
		cm.gainItem(1112475, -1);//�۳���Ʒ
		cm.gainItem(4001322, -50);//�۳���Ʒ
		cm.gainItem(1112476, 1);//������Ʒ
		cm.gainMeso(-1500000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ31��!���һ����ף����/����!");//����
		cm.dispose();
			}			
		} else if (selection == 33) {
		if (!cm.haveItem(1112476, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112476##r#z1112476#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 50)||cm.getMeso() <= 1500000) {//�ж�
		cm.sendOk("��û��50��#v4001322##r#z4001322#����150����!");
		cm.dispose();
		}else{
		cm.gainItem(1112476, -1);//�۳���Ʒ
		cm.gainItem(4001322, -50);//�۳���Ʒ
		cm.gainItem(1112477, 1);//������Ʒ
		cm.gainMeso(-1500000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ32��!���һ����ף����/����!");//����
		cm.dispose();
			}		
		} else if (selection == 34) {
		if (!cm.haveItem(1112477, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112477##r#z1112477#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 50)||cm.getMeso() <= 1500000) {//�ж�
		cm.sendOk("��û��50��#v4001322##r#z4001322#����150����!!");
		cm.dispose();
		}else{
		cm.gainItem(1112477, -1);//�۳���Ʒ
		cm.gainItem(4001322, -50);//�۳���Ʒ
		cm.gainItem(1112478, 1);//������Ʒ
		cm.gainMeso(-1500000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ33��!���һ����ף����/����!");//����
		cm.dispose();
			}		
		} else if (selection == 35) {
		if (!cm.haveItem(1112478, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112478##r#z1112478#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 50)||cm.getMeso() <= 1500000) {//�ж�
		cm.sendOk("��û��50��#v4001322##r#z4001322#����150����!!");
		cm.dispose();
		}else{
		cm.gainItem(1112478, -1);//�۳���Ʒ
		cm.gainItem(4001322, -50);//�۳���Ʒ
		cm.gainItem(1112479, 1);//������Ʒ
		cm.gainMeso(-1500000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ34��!���һ����ף����/����!");//����
		cm.dispose();
			}		
		} else if (selection == 36) {
		if (!cm.haveItem(1112479, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112479##r#z1112479#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 50)||cm.getMeso() <= 1500000) {//�ж�
		cm.sendOk("��û��50��#v4001322##r#z4001322#����150����!!");
		cm.dispose();
		}else{
		cm.gainItem(1112479, -1);//�۳���Ʒ
		cm.gainItem(4001322, -50);//�۳���Ʒ
		cm.gainItem(1112480, 1);//������Ʒ
		cm.gainMeso(-1500000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ35��!���һ����ף����/����!");//����
		cm.dispose();
			}		
		} else if (selection == 37) {
		if (!cm.haveItem(1112480, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112480##r#z1112480#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 50)||cm.getMeso() <= 1500000) {//�ж�
		cm.sendOk("��û��50��#v4001322##r#z4001322#����150����!!");
		cm.dispose();
		}else{
		cm.gainItem(1112480, -1);//�۳���Ʒ
		cm.gainItem(4001322, -50);//�۳���Ʒ
		cm.gainItem(1112481, 1);//������Ʒ
		cm.gainMeso(-1500000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ36��!���һ����ף����/����!");//����
		cm.dispose();
			}		
		} else if (selection == 38) {
		if (!cm.haveItem(1112481, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112481##r#z1112481#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 50)||cm.getMeso() <= 1500000) {//�ж�
		cm.sendOk("��û��50��#v4001322##r#z4001322#!����150����!");
		cm.dispose();
		}else{
		cm.gainItem(1112481, -1);//�۳���Ʒ
		cm.gainItem(4001322, -50);//�۳���Ʒ
		cm.gainItem(1112482, 1);//������Ʒ
		cm.gainMeso(-1500000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ37��!���һ����ף����/����!");//����
		cm.dispose();
			}		
		} else if (selection == 39) {
		if (!cm.haveItem(1112482, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112482##r#z1112482#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 50)||cm.getMeso() <= 1500000) {//�ж�
		cm.sendOk("��û��50��#v4001322##r#z4001322#����150����!!");
		cm.dispose();
		}else{
		cm.gainItem(1112482, -1);//�۳���Ʒ
		cm.gainItem(4001322, -50);//�۳���Ʒ
		cm.gainItem(1112483, 1);//������Ʒ
		cm.gainMeso(-1500000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ38��!���һ����ף����/����!");//����
		cm.dispose();
			}		
		} else if (selection == 40) {
		if (!cm.haveItem(1112483, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112483##r#z1112483#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 50)||cm.getMeso() <= 1500000) {//�ж�
		cm.sendOk("��û��50��#v4001322##r#z4001322#����150����!!");
		cm.dispose();
		}else{
		cm.gainItem(1112483, -1);//�۳���Ʒ
		cm.gainItem(4001322, -50);//�۳���Ʒ
		cm.gainItem(1112484, 1);//������Ʒ
		cm.gainMeso(-1500000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ39��!���һ����ף����/����!");//����
		cm.dispose();
			}		
		} else if (selection == 41) {
		if (!cm.haveItem(1112484, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112484##r#z1112484#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 50)||cm.getMeso() <= 1500000) {//�ж�
		cm.sendOk("��û��50��#v4001322##r#z4001322#����150����!!");
		cm.dispose();
		}else{
		cm.gainItem(1112484, -1);//�۳���Ʒ
		cm.gainItem(4001322, -50);//�۳���Ʒ
		cm.gainItem(1112485, 1);//������Ʒ
		cm.gainMeso(-1500000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ40��!���һ����ף����/����!");//����
		cm.dispose();
			}		
		} else if (selection == 42) {
		if (!cm.haveItem(1112485, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112485##r#z1112485#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 50)||cm.getMeso() <= 2000000) {//�ж�
		cm.sendOk("��û��50��#v4001322##r#z4001322#����200����!!");
		cm.dispose();
		}else{
		cm.gainItem(1112485, -1);//�۳���Ʒ
		cm.gainItem(4001322, -50);//�۳���Ʒ
		cm.gainItem(1112486, 1);//������Ʒ
		cm.gainMeso(-2000000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ41��!���һ����ף����/����!");//����
		cm.dispose();
			}	
       } else if (selection == 43) {
		if (!cm.haveItem(1112486, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112486##r#z1112486#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 50)||cm.getMeso() <= 2000000) {//�ж�
		cm.sendOk("��û��50��#v4001322##r#z4001322#����200����!!!");
		cm.dispose();
		}else{
		cm.gainItem(1112486, -1);//�۳���Ʒ
		cm.gainItem(4001322, -50);//�۳���Ʒ
		cm.gainItem(1112487, 1);//������Ʒ
		cm.gainMeso(-2000000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ42��!���һ����ף����/����!");//����
		cm.dispose();
			}	
       } else if (selection == 44) {
		if (!cm.haveItem(1112487, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112487##r#z1112487#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 50)||cm.getMeso() <= 2000000) {//�ж�
		cm.sendOk("��û��50��#v4001322##r#z4001322#!����200����!!");
		cm.dispose();
		}else{
		cm.gainItem(1112487, -1);//�۳���Ʒ
		cm.gainItem(4001322, -50);//�۳���Ʒ
		cm.gainItem(1112488, 1);//������Ʒ
		cm.gainMeso(-2000000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ43��!���һ����ף����/����!");//����
		cm.dispose();
			}
       } else if (selection == 45) {
		if (!cm.haveItem(1112488, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112488##r#z1112488#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 50)||cm.getMeso() <= 2000000) {//�ж�
		cm.sendOk("��û��50��#v4001322##r#z4001322#����200����!!!");
		cm.dispose();
		}else{
		cm.gainItem(1112488, -1);//�۳���Ʒ
		cm.gainItem(4001322, -50);//�۳���Ʒ
		cm.gainItem(1112489, 1);//������Ʒ
		cm.gainMeso(-2000000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ44��!���һ����ף����/����!");//����
		cm.dispose();
			}
       } else if (selection == 46) {
		if (!cm.haveItem(1112489, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112489##r#z1112489#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 50)||cm.getMeso() <= 2000000) {//�ж�
		cm.sendOk("��û��50��#v4001322##r#z4001322#����200����!!!");
		cm.dispose();
		}else{
		cm.gainItem(1112489, -1);//�۳���Ʒ
		cm.gainItem(4001322, -50);//�۳���Ʒ
		cm.gainItem(1112490, 1);//������Ʒ
		cm.gainMeso(-2000000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ45��!���һ����ף����/����!");//����
		cm.dispose();
			}
       } else if (selection == 47) {
		if (!cm.haveItem(1112490, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112490##r#z1112490#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 50)||cm.getMeso() <= 3000000) {//�ж�
		cm.sendOk("��û��50��#v4001322##r#z4001322#����300����!!!");
		cm.dispose();
		}else{
		cm.gainItem(1112490, -1);//�۳���Ʒ
		cm.gainItem(4001322, -50);//�۳���Ʒ
		cm.gainItem(1112491, 1);//������Ʒ
		cm.gainMeso(-3000000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ46��!���һ����ף����/����!");//����
		cm.dispose();
			}	
       } else if (selection == 48) {
		if (!cm.haveItem(1112491, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112491##r#z1112491#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 50)||cm.getMeso() <= 3000000) {//�ж�
		cm.sendOk("��û��50��#v4001322##r#z4001322#����300����!!!");
		cm.dispose();
		}else{
		cm.gainItem(1112491, -1);//�۳���Ʒ
		cm.gainItem(4001322, -50);//�۳���Ʒ
		cm.gainItem(1112492, 1);//������Ʒ
		cm.gainMeso(-3000000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ47��!���һ����ף����/����!");//����
		cm.dispose();
			}	
       } else if (selection == 49) {
		if (!cm.haveItem(1112492, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112492##r#z1112492#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 50)||cm.getMeso() <= 3000000) {//�ж�
		cm.sendOk("��û��50��#v4001322##r#z4001322#!����300����!!");
		cm.dispose();
		}else{
		cm.gainItem(1112492, -1);//�۳���Ʒ
		cm.gainItem(4001322, -50);//�۳���Ʒ
		cm.gainItem(1112493, 1);//������Ʒ
		cm.gainMeso(-3000000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ48��!���һ����ף����/����!");//����
		cm.dispose();
			}	
       } else if (selection == 50) {
		if (!cm.haveItem(1112493, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112493##r#z1112493#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 50)||cm.getMeso() <= 3000000) {//�ж�
		cm.sendOk("��û��50��#v4001322##r#z4001322#!����300����!!");
		cm.dispose();
		}else{
		cm.gainItem(1112493, -1);//�۳���Ʒ
		cm.gainItem(4001322, -50);//�۳���Ʒ
		cm.gainItem(1112494, 1);//������Ʒ
		cm.gainMeso(-3000000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ49��!���һ����ף����/����!");//����
		cm.dispose();
			}	
       } else if (selection == 51) {
		if (!cm.haveItem(1112494, 1)) {//�ж�
		cm.sendOk("��û��1��#v1112494##r#z1112494#!");
		cm.dispose();
		}else if (!cm.haveItem(4001322, 50)||cm.getMeso() <= 5000000) {//�ж�
		cm.sendOk("��û��50��#v4001322##r#z4001322#����500����!!!");
		cm.dispose();
		}else{
		cm.gainItem(1112494, -1);//�۳���Ʒ
		cm.gainItem(4001322, -50);//�۳���Ʒ
		cm.gainItem(1112495, 1);//������Ʒ
		cm.gainMeso(-5000000);//�۳����		
		cm.sendOk("�һ��ɹ�");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] �������Ϲ����Ž�ָ50��!���һ����ף����/����!");//����
		cm.dispose();
			}				

	}
    }}



