/* ==================
 �ű�����:  NPC	    
 �ű����ߣ�����     
 ��ϵ��ʽ��2412614144
 =====================
 */
var ��ɫ��ͷ = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2# ";

importPackage(net.sf.Start.client);
var status = 0;
var zones = 0;
var ItemId = Array(
    //��Ʒ1     ��Ʒ2    ����    ��ע
    Array(2340000,4000463, 1, "ף������"),
	Array(2049100,4000463, 1, "�������")
    //�����������߶һ����밴�մ˸�ʽ�������á�
    //����,�۸�,����
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
        sl = cm.getPlayer().getItemQuantity(4000463, false);
        StringS = "#b#n   ��ɫʣ��:" + sl + " ��#v4000463#";
        for (var i = 0; i < ItemId.length; i++) {
        StringS += "\r\n#L" + i + "##b" + ��ɫ��ͷ + "#b#v " + ItemId[i][1] + " #" + ItemId[i][2] + "#n��#k �һ� #r#v" + ItemId[i][0] + "##z" + ItemId[i][0] + "##k#l";
        }
        cm.sendSimple(StringS, 2);
        zones == 0;

    } else if (status == 1) {
        if (zones == 0) {
            if (cm.getInventory(1).isFull()){
            cm.sendOk("#b�뱣֤װ����λ������2���ո�,�����޷�����.");
            cm.dispose();
            } else if (cm.getInventory(2).isFull()){
            cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷�����.");
            cm.dispose();
            } else if (cm.getInventory(3).isFull()){
            cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷�����.");
            cm.dispose();
            } else if (cm.getInventory(4).isFull()){
            cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷�����.");
            cm.dispose();
        } else if (cm.haveItem(ItemId[selection][1], ItemId[selection][2])) {
            cm.gainItem(ItemId[selection][1], -ItemId[selection][2]);
            cm.gainItem(ItemId[selection][0], 1);
            cm.sendOk("�һ��ɹ�����챳��!"); 
            cm.dispose();
        } else {
            cm.sendOk("#v4000463#���㣡");
            cm.dispose();
        }
        }
    }
    }
}	