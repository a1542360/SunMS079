var status = 0;

cztp = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var txt = "\r\n#d������������������������Ȩ�����ĩ���������������������#k\r\n";
     //   txt += "#r\t\t\t\t#L0#�ۼƳ�ֵ�齱ϵͳ#l\r\n";
        txt += "��#r#L2# #rˢ���#l��#b#L6# ˢ���#k#l��#d#L7# ˢ����#k#l\r\n\r\n";
       txt += "��#b#L3# ˢ���þ�#k#l��#d#L8# ˢ����#k#l\r\n\r\n";
      //  txt += "��#d#L7# ˢ����#k#l��#d#L8# ������#b#l��#d#L9# �޸�����#b#l\r\n\r\n";
        //txt += "��#r#e#L10# ˢ��Ʒ#k#l #d#L12# ת����#b#l #r#L11# �˺�ͻ��#k#l\r\n\r\n#n";
        txt += "#d������������������������������������������������������#k\r\n\r\n";
        cm.sendSimple(txt);
    } else if (status == 1) {
        switch (selection) {
            case 2://�齱
               
              cm.sendOk("\r\n\r\n\t\t\t#e#r��ϲ������999999���!");
              cm.gainDJ(9999999); 
              cm.dispose();
                break;
            case 1://��ֵ
cm.gainPlayerPoints(999999);
             cm.sendOk("\r\n\r\n\t\t\t#e#r��ϲ������999999����!");
              cm.dispose();
                break;
            case 3://�н�ϵͳ
                cm.gainNX(999999);
              cm.sendOk("\r\n\r\n\t\t\t#e#r��ϲ������99999���!");
                cm.dispose();
                break;
            case 4://�����
    cm.gainPlayerEnergy(999999);
              cm.sendOk("\r\n\r\n\t\t\t#e#r��ϲ������999999����ֵ!");
                cm.dispose();
                break;
            case 5://��ֵ���
             cm.addHyPay(-999999)
              cm.sendOk("\r\n\r\n\t\t\t#e#r��ϲ������999999���!");
                cm.dispose();
                break;
            case 6://���ϵͳ
                cm.gainMeso(210000000);
        cm.sendOk("\r\n\r\n\t\t\t#e#r��ϲ������2E���!");
                cm.dispose();
                break;
            case 7://���ϵͳ
                cm.gainExp( + 1000000000);
        cm.sendOk("\r\n\r\n\t\t\t#e#r��ϲ������10E����!");
                cm.dispose();
                break;
            case 8://���ϵͳ
                cm.dispose();
                cm.gaincz(9999999);
                break;
            case 9://���ϵͳ
                cm.dispose();
                cm.openNpc(9001000,1)
                break;
            case 10://���ϵͳ
                cm.dispose();
                cm.openNpc(9001000,2)
                break;
            case 11://���ϵͳ
                cm.dispose();
                cm.openNpc(9001000,27)
                break;
            case 12://���ϵͳ
                cm.dispose();
                cm.openNpc(9001000,29)
                break;

        }
    } else if (status == 2) {
        if (cztp == 1) {
            switch (selection) {
                case 10://����ֵ���
                    if (cm.getHyPay(1) < 1) {
                        cm.sendOk("#r#e��Ǹ �����������Ŀ [0] ���ܽ��г�ֵ ");
                        status = -1;
                    } else {
                        var revenue0 = cm.getHyPay(1);
                        cm.sendGetText("#r#e�����������ֵ���ġ�����������#d\r\n\r\n���������ֵ�������� [ 1��3000 ]\r\n\r\n��ǰ [ #r#h ##d ] ��ҳ��н�" + revenue0.formatMoney(0, "") + " Ԫ\r\n\r\n#k ");
                    }
                    break;
            case 0://���ϵͳ
                cm.dispose();
                cm.openNpc(9000111,"yue");
                break;
            }
        }
    } else if (status == 3) {
        if (cm.getHyPay(1) - cm.getText() < 0) {
            cm.sendOk("#r#e��Ǹ ����ֵ�������� [ 0 ] ");
            cm.dispose();
        } else {
            cm.addHyPay(+cm.getText());
            cm.gainNX(cm.getText() * 3000);
            cm.sendOk("#d#e��ϲ��\r\n\r\n������������#r" + cm.getText() * 3000 + "#k#n\r\n ");
            cm.dispose();

        }
    }
}

Number.prototype.formatMoney = function (places, symbol, thousand, decimal) {
    places = !isNaN(places = Math.abs(places)) ? places : 2;
    symbol = symbol !== undefined ? symbol : "��";
    thousand = thousand || ",";
    decimal = decimal || ".";
    var number = this,
        negative = number < 0 ? "-" : "",
        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};