/* ==================
 �ű�����:  NPC	    
 �ű����ߣ�����     
 ��ϵ��ʽ��2412614144
 =====================
 */
 
var ��ɫ��ͷ = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2# ";
var status = 0;
var zones = 0;
var ItemId = Array(
	Array(1302081,4031456,200, "�����Ƽ׽�"),
    Array(1402046,4031456,200, "1"),//������ڤ��
	Array(1432047,4031456,200, "2"),//������ʥǹ
	Array(1442063,4031456,200, "3"),//��������
	Array(1412033,4031456,200, "4"),//����������
    Array(1332073,4031456,200, "4"),//��������
    Array(1452057,4031456,200, "5"),//���㾪�繭
	Array(1462050,4031456,200, "6"),//��������ڤ����
	Array(1472068,4031456,200, "7"),//����󱯸�
    Array(1332073,4031456,200, "8"),//���������
    Array(1372044,4031456,200, "9"),//���������
    Array(1382057,4031456,200, "10"),//���������
	Array(1482023,4031456,200, "11"),//�����ȸ��
	Array(1492023,4031456,200, "12"),//�������
    Array(1002776,4031456,200, "13"),//����ھ���
    Array(1002777,4031456,200, "14"),//��������ñ
    Array(1002778,4031456,200, "15"),//��������ñ
	Array(1002779,4031456,200, "16"),//��������ñ
	Array(1002780,4031456,200, "17"),//���㺣����
    Array(1082238,4031456,200, "18"),//���㸧������
    Array(1082237,4031456,200, "19"),//����̽������
    Array(1082236,4031456,200, "20"),//�����������
	Array(1082235,4031456,200, "21"),//������ң����
	Array(1082234,4031456,200, "22"),//���㶨������
    Array(1072359,4031456,200, "23"),//���㶨��ѥ
    Array(1072358,4031456,200, "24"),//�������ѥ
    Array(1072357,4031456,200, "25"),//����ʺ�Ь
	Array(1072356,4031456,200, "26"),//�������Ь
	Array(1072355,4031456,200, "27"),//������ѥ
    Array(1052155,4031456,200, "28"),//����������
    Array(1052156,4031456,200, "29"),//���������
    Array(1052157,4031456,200, "30"),//����Ѳ����
	Array(1052158,4031456,200, "31"),//���㷭�Ʒ�
	Array(1052159,4031456,200, "32")//������ߺ�

        );

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
           var sl = cm.getPlayer().getItemQuantity(4031456, false);
            var StringS = "#b#n   ��ɫʣ��:" + sl + " ��#v4031456#";
            for (var i = 0; i < ItemId.length; i++) {
                StringS += "\r\n#L" + i + "##b" + ��ɫ��ͷ + "#b#v " + ItemId[i][1] + " #" + ItemId[i][2] + "#n��#k �һ� #r#v" + ItemId[i][0] + "##z" + ItemId[i][0] + "##k#l";
            }
            cm.sendSimple(StringS, 2);
            zones == 0;

    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selequantity = item[1];
            cm.sendYesNo("�һ� #i" + selectedItem + "# ��Ҫ #r" + selequantity + "#k��������ȷ���һ���?");//��������� �ǵû� 40000000������ţ��
        } else {
            cm.sendOk("�һ�����,����ϵ����Ա��");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selequantity <= 0 || selectedItem <= 0) {
            cm.sendOk("�һ�����,����ϵ����Ա��");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getBeans() >=selequantity) {//��������� �ǵû�
            if (cm.canHold(selectedItem)) {
				cm.getPlayer().gainBeans(-selequantity);
                cm.gainItem(selectedItem, 1);
                cm.sendOk("�һ��ɹ�,��Ʒ#i" + selectedItem + ":# #b#t" + selectedItem + "##k������������");
                        cm.dispose();
						} else {
                cm.sendOk("����������Ŀ������һ�����ϵĿռ�ſ��Խ��жһ���");
				cm.dispose();
            }

        } else {
            cm.sendOk("��û���㹻�Ķ����һ���");
			            cm.dispose();
						            return;
        }
    }
}}