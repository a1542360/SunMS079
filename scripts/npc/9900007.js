/*
 ���
 */

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
var Editing = false //true=��ʾ;false=�����һ�
          if(Editing){
          cm.sendOk("�һ���δ����");
          cm.dispose();
          return;
        } 
cm.sendSimple("#b#r#h ##k ,��ӭ��������һ����ģ�#b�һ�ǰ��ȷ�ϱ�������,�������Ը�����" +
            "#k\r\n#L101##r���һ\r\n#L102##r�����\r\n#L103##r�����\r\n#L104##r�����\r\n#L105##r�����\r\n#L106##r�����");
        } else if (status == 1) {
            
            if (selection == 101) {
                if (cm.haveItem(4000423, 1) ) {//�жϽ�ɫ�Ƿ�����Ʒ
                    cm.gainItem(1032061,100,100,100,100,150,150,1,1,80,80,50,50,20,20);//��Ʒ����,����,����,����,����,HP,MP,������,ħ����,������,������,�ر���,�ƶ��ٶ�,��Ծ��
                    cm.gainItem(4000423,-1)
                    cm.sendOk("�һ��ɹ�");//�һ��ɹ��������� �Լ��Ĵ���
                    cm.dispose();
                } else {
                    cm.sendOk("������û���㹻����Ʒ���ڴ�ȷ���㹻����Ʒ���ڴ�ȷ��");
                    cm.dispose();
                }
            } else if (selection == 102) {
                if (cm.haveItem(4000423, 3) ) {
                    cm.gainItem(4000423, -3);
                    cm.gainItem(5121009, 1);
                    cm.gainItem(4031456, 3);
                    cm.sendOk("�һ��ɹ�");
                    cm.dispose();
                } else {
                    cm.sendOk("������û���㹻����Ʒ���ڴ�ȷ��");
                    cm.dispose();
}
 }else if (selection == 103) {
                if (cm.haveItem(4000423, 15) ) {
                    cm.gainItem(4000423, -15);
                    cm.gainItem(2040914, 1);
                    cm.gainItem(4031456, 15);
                    cm.sendOk("�һ��ɹ�");
                    cm.dispose();
                } else {
                    cm.sendOk("������û���㹻����Ʒ,���ڴ�ȷ��");
                    cm.dispose();
}
 }else if (selection == 104) {
                if (cm.haveItem(4000423, 20) ) {
                    cm.gainItem(4000423, -20);
                    cm.gainItem(2049104, 1);
                    cm.gainItem(4031456,20)
                    cm.sendOk("�һ��ɹ�#i2049104#x1#i4031456#x20");
                    cm.dispose();
                } else {
                    cm.sendOk("������û���㹻����Ʒ,���ڴ�ȷ��");
                    cm.dispose();
}
 }else if (selection == 105) {
                if (cm.haveItem(4000423, 30) ) {
                    cm.gainItem(4000423, -30);
                    cm.gainItem(2040917, 1);
                    cm.gainItem(4031456,30)
                    cm.sendOk("�һ��ɹ�");
                    cm.dispose();
                } else {
                    cm.sendOk("������û���㹻����Ʒ,���ڴ�ȷ��");
                    cm.dispose();
}
 }else if (selection == 106) {
                if (cm.haveItem(4000423, 100) ) {
                    cm.gainItem(4000423, -100);
                    cm.gainItem(1142005, 1);
                    cm.gainItem(4031456,100)
                    cm.sendOk("�һ��ɹ�");
                    cm.dispose();
                } else {
                    cm.sendOk("������û���㹻����Ʒ,���ڴ�ȷ��");
                    cm.dispose();
}
 }else if (selection == 107) {
                if (cm.haveItem(4032226, 1) ) {
                    cm.gainItem(4032226, -1);
                    cm.gainItem(2022488, 1);
                    cm.sendOk("�һ��ɹ�");
                    cm.dispose();
                } else {
                    cm.sendOk("������û���㹻����Ʒ,���ڴ�ȷ��");
                    cm.dispose();
}
 }else if (selection == 108) {
                if (cm.haveItem(4032226, 20) ) {
                    cm.gainItem(4032226, -20);
                    cm.gainItem(2022489, 1);
                    cm.sendOk("�һ��ɹ�");
                    cm.dispose();
                } else {
                    cm.sendOk("������û���㹻����Ʒ,���ڴ�ȷ��");
                    cm.dispose();
}
 }else if (selection == 109) {
                if (cm.haveItem(4032226, 20) ) {
                    cm.gainItem(4032226, -20);
                    cm.gainItem(2022490, 1);
                    cm.sendOk("�һ��ɹ�");
                    cm.dispose();
                } else {
                    cm.sendOk("������û���㹻����Ʒ,���ڴ�ȷ��");
                    cm.dispose();
}
 }
        }
    }
}