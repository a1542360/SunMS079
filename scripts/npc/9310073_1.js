importPackage(net.sf.Start.client);

var status = 0;
var fee;//�Լ��¶��ٵ��ѡ��
var chance = Math.floor(Math.random()*4+1);
var mingzi = "�����ϵͳ";
var zuidi = "100";//��͵��
var zuididianjuan = 100;//��͵��
var zuigao = "5��";//��ߵ��
var zuigaodianjuan = 50000;//��ߵ��

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("��ӭ�´ι���,�ټ�!");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendYesNo("\t\t#e��ӭ����#r" + cm.getChannelServer().getServerName() + "#k-#d" + mingzi + "#n#k\r\n\r\n��עҪ��:���" + zuidi + "���-------���" + zuigao + "���");
        } else if (status == 1) {
            cm.sendGetText("������ע���ٵ����?���Ӯ�˵Ļ����Ի��3��������,�Ǻ�,������˵��!����������Ҫ���ʵĵ���!���˱���!");
        } else if (status == 2) {
			
            fee = cm.getText();
            cm.sendYesNo("��ȷ��Ҫ��ע #r" + fee + "#k �����?���ȼ������û����ô����Ŷ!");
        } else if (status == 3) {
            if (cm.getPlayer().getCSPoints(1) < fee) {
                cm.sendOk("Ŷ�ǣ�������˼��û��ô�����ˣ�ȥ׬���������ɣ���ɲ�����ѵ�!");
                cm.dispose();
			} else if (cm.getPlayer().getCSPoints(1) < zuididianjuan) {
                cm.sendOk("�Բ���,�����˺Ų���#r" + zuidi + "���#k,���Բ��ܲ��ڴ˴���ע");
                cm.dispose();
            } else if (cm.getText() < zuididianjuan) {
                cm.sendOk("�Բ���,�����ע:#r" + zuidi + "���#k,���Բ��ܲ��ڴ˴���ע!");
                cm.dispose();
            } else if (cm.getText() > zuigaodianjuan) {
                cm.sendOk("�Բ���,�����ע:#r" + zuigao + "���#k,���Բ��ܲ��ڴ˴���ע!");
                cm.dispose();
            } else {
                 if (chance <= 1) { 
	                    cm.gainD(-fee); 
	                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����"); 
                        cm.laba(cm.getPlayer().getName() + "���ĳ����桻" + " : " + "�ڵ��ĳ����ˣ���Ұ�οһ�°�",9);
	                    cm.dispose(); 
	                } 
	                else if (chance == 2) { 
	                    cm.gainD(-fee); 
	                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����"); 
                        cm.laba(cm.getPlayer().getName() + "���ĳ����桻" + " : " + "�ڵ��ĳ����ˣ���Ұ�οһ�°�",9);
	                    cm.dispose(); 
	                } 
	                else if (chance == 3) { 
	                    cm.gainD(-fee); 
	                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����"); 
                        cm.laba(cm.getPlayer().getName() + "���ĳ����桻" + " : " + "�ڵ��ĳ����ˣ���Ұ�οһ�°�",9);
	                    cm.dispose(); 
	                } 
                else if (chance >= 4) {
                    cm.gainD(fee * 3);                   
                    cm.sendNext("#r��������ϲ��#k! ��Ӯ��! ���3���ĵ���⳥");
                    cm.laba(cm.getPlayer().getName() + "���ĳ����桻" + " : " + "�ڵ��ĳ�Ӯ��3���ĵ�����һ��ף������",9);
                    cm.dispose();
                }
            }
        }
    }
}
