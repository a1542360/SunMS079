/* ==================
 �ű�����:  NPC	    
 �ű����ߣ�����     
 ��ϵ��ʽ��2412614144
 =====================
 */
 
var jj = cm.getPlayer.getItemQuantity(1002448,1002448, false);

var status = -1;
var itemList = Array(
	Array(1002448,5000,200, "1"),
	Array(1002543,5000,200, "2"),
	Array(1002583,5000,200, "3"),
	Array(1002589,5000,200, "4"),
	Array(1002609,5000,200, "5"),
	Array(1002665,5000,200, "6"),
	Array(1002695,5000,200, "7"),
	Array(1002760,5000,200, "8"),
	Array(1002761,5000,200, "9"),
	Array(1002789,5000,200, "10")

        );
var selectedItem = -1;
var selequantity = -1;
var selectedCos = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var selStr = "���ã���ѡ������Ҫ�һ�����Ʒ                          ��#r�����㣺#r" + "#k��\r\n";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "# #k��Ҫ #r" + itemList[i][1] + "#k����#l";
        }
        cm.sendSimple(selStr);
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
        if (cm.canHold(2300001,selequantity)) {//��������� �ǵû�
            if (cm.canHold(selectedItem)) {
				cm.gainItem(-selequantity);
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
        status = -1;
    }
}