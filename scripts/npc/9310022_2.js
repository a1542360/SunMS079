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
			text += "\t\t\t#e��ӭ����#b���չȷ�����һ�������� #k!#n\r\n"
			text += "#n#k��ǰ���㣺#r" +cm.getPlayer().getCSPoints(1) +  "#k��    �����㣺#r" + cm.getPlayer().getBeans() + "#k��\r\n"
            text += "#L1##b1��#v5220040#�һ�#v2140000#10����#l\r\n\r\n"
            text += "#L2##b2��#v5220040#�һ�#v2140000#20����#l\r\n\r\n"
            text += "#L3##b5��#v5220040#�һ�#v2140001#50����#l\r\n\r\n"
            text += "#L4##b10��#v5220040#�һ�#v2140002#100����#l\r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) { 
		  if (cm.getMeso() >= 2000000000){//�ж϶��ٽ��
                cm.sendOk("��ı�����ҳ���20E,�޷��һ���");
        } else if (cm.haveItem(5220040,1)){
			    cm.gainItem(5220040, -1);
			    cm.gainMeso(100000);//�����	
				cm.sendOk("1��#v5220040#�һ�10���ҳɹ���");
			    cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]1��������һ�10���ҳɹ���");
				cm.dispose();
			}else{
				cm.sendOk("��û��1���������޷��һ�10���ң�");
				cm.dispose();
			}
        } else if (selection == 2) {  
		  if (cm.getMeso() >= 2000000000){//�ж϶��ٽ��
                cm.sendOk("��ı�����ҳ���20E,�޷��һ���");
        } else if (cm.haveItem(5220040,2)){
			     cm.gainItem(5220040, -2);
			    cm.gainMeso(200000);//�����
				cm.sendOk("2��#v5220040#�һ�20���ҳɹ���");
			    cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]2��������һ�20���ҳɹ���");
				cm.dispose();
			}else{
				cm.sendOk("��û��2���������޷��һ�20���ң�");
				cm.dispose();
			}
        } else if (selection == 3) { 
		  if (cm.getMeso() >= 2000000000){//�ж϶��ٽ��
                cm.sendOk("��ı�����ҳ���20E,�޷��һ���");
        } else if (cm.haveItem(5220040,5)){
			     cm.gainItem(5220040, -5);
			    cm.gainMeso(500000);//�����
				cm.sendOk("5��#v5220040#�һ�50���ҳɹ���");
			    cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]5��������һ�50���ҳɹ���");
				cm.dispose();
			}else{
				cm.sendOk("��û��5���������޷��һ�50���ң�");
				cm.dispose();
			}
        } else if (selection == 4) {
		  if (cm.getMeso() >= 2000000000){//�ж϶��ٽ��
                cm.sendOk("��ı�����ҳ���20E,�޷��һ���");
        } else if (cm.haveItem(5220040,10)){
			     cm.gainItem(5220040, -10);
			    cm.gainMeso(1000000);//�����
				cm.sendOk("10��#v5220040#�һ�100���ҳɹ���");
			    cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]10��������һ�100���ҳɹ���");
				cm.dispose();
			}else{
				cm.sendOk("��û��10���������޷��һ�100���ң�");
				cm.dispose();
			}
			}
			}
		}
    



