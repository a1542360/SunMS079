/* ==================
 �ű�����:  NPC	    
 �ű����ߣ�����     
 ��ϵ��ʽ��2412614144
 =====================
 */

var status = 0;
//��������
var fbmc = "��߳�-(�����101����)";

var eventname = "LudiPQ";//���������ļ�

var maxjinbi = 10000;//�ж���������

var minLevel = 35;
var maxLevel = 200;//�ȼ�����

var minPartySize = 3;
var maxPartySize = 6;//��������

var open = true;//false true//��������

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
            text += "#k\t\t    #r#v4030001#" + fbmc + "#r#v4030001##k\r\n";
            text += "#b��������Ҫ�����£�#k\r\n";
			text += "�ٵȼ����ƣ�#r" + minLevel + "#k - #r" + maxLevel + "#k��\t\t���������ƣ�#r" + minPartySize + " #k- #r" + maxPartySize + " ��Ա#k\r\n";
			text += "#L1##r#v4030011#��ʼ��Ӹ���#l   #L2##r#v4030010#����������#k" + maxjinbi + "���/��#l\r\n\r\n";
			text += "       #L3##r����#v4002001#�һ�#v1022073##z1022073##b#l\r\n\r\n";
			//text += "   #L4##r#v4001324#��ȡ�߼���ߴ����˽���#k(#b����#k)\r\n\r\n#l"//3
			//text += "         #L5##e�߼���Ҵ�����˵��#k\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
	cm.removeAll(4001022);
	cm.removeAll(4001023);
        if (!cm.isLeader()) { // Not Party Leader
	   cm.sendSimple("��������������� #b�ӳ�#k ����̸."); 
	   cm.dispose();
	} else if (cm.getParty() == null) { // No Party
	   cm.sendSimple("��ò��û�дﵽҪ��...:\r\n\r\n#r��ҳ�ԱҪ��: " + minPartySize + " , ÿ���˵ĵȼ������� " + minLevel + " �� �ȼ� " + maxLevel + ".");
	   cm.dispose();
	} else {
		cm.getMap(922010401).resetFully();
		cm.getMap(922010402).resetFully();
		cm.getMap(922010403).resetFully();
		cm.getMap(922010404).resetFully();
		cm.getMap(922010405).resetFully();
		cm.spawnMobOnMap(9300008,1,-65,-1578,922010401);
		cm.spawnMobOnMap(9300008,1,335,131,922010402);
		cm.spawnMobOnMap(9300014,1,-610,177,922010403);
		cm.spawnMobOnMap(9300014,1,-669,189,922010404);
		cm.spawnMobOnMap(9300014,1,-610,177,922010405);
	    var party = cm.getParty().getMembers();
	    var mapId = cm.getMapId();
	    var next = true;
	    var levelValid = 0;
	    var inMap = 0;
	    var it = party.iterator();

	    while (it.hasNext()) {
		var cPlayer = it.next();
		if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
		    levelValid += 1;
		} else {
		    next = false;
		}
		if (cPlayer.getMapid() == mapId) {
		    inMap += (cPlayer.getJobId() == 900 ? 6 : 1);
		}
	    }
	    if (party.size() > maxPartySize || inMap < minPartySize) {
		next = false;
	    }
	    if (next) {
		var em = cm.getEventManager("LudiPQ");
		if (em == null) {
		    cm.sendSimple("�Ҳ����ű�������GM#b\r\n");//#L0#��Ҫ�һ����Ѻ۵��۾�#l
		} else {
		    var prop = em.getProperty("state");
		    if (prop.equals("0") || prop == null) {
			em.startInstance(cm.getParty(), cm.getMap());
			cm.removeAll(4001022);
			cm.removeAll(4001023);
			cm.dispose();
			return;
		    } else {
			cm.sendSimple("���������Ѿ��������� #r���������#k �볢�Ի�Ƶ�����ߵ�����������ɡ�");//#b\r\n#L0#��Ҫ�һ����Ѻ۵��۾�#l
		    cm.dispose();
			}
		}
	    } else {
		cm.sendSimple("��Ķ���ò��û�дﵽҪ��.\r\n\r\n#rҪ��: " + minPartySize + " ��ҳ�Ա, ÿ���˵ĵȼ������� " + minLevel + " �� �ȼ� " + maxLevel + ".");//#b\r\n#L0#��Ҫ�һ����Ѻ۵��۾�#l
		cm.dispose();
	    }
	cm.dispose();
    }		
        } else if (selection == 2) {
		if (cm.getMeso() >= maxjinbi){//�ж϶��ٽ��
        cm.gainMeso(- maxjinbi );//�۳����ٽ��
	    cm.laba(cm.getPlayer().getName() + " [������]" + " : " + "[" + fbmc + "] �����һ�����",11);
        cm.dispose();
        }else{
        cm.sendOk("���ð�ձҲ���" + maxjinbi + "���޷�����������");
        cm.dispose();
					}
        } else if (selection == 5) {
            if (cm.haveItem(4001316, 100) ){
		        cm.gainItem(4001316, -100);
                cm.dispose();
            }else{
                cm.sendOk(" #r˵��:#k\r\n\r\n�ȼ�����#b71��#k����Ҵ����������#b���������񸱱�#k\r\n���ɻ��#v4001324##z4001324# һö\r\n#v4001324#������#b����������NPC#k�һ��Լ��ȼ���Ӧ��#b����#k��#b���þ�#k����");
                cm.dispose();					
		 }					
        } else if (selection == 4) {
            if (cm.haveItem(4001324, 1) ){
		        cm.gainItem(4001324, -1);
                cm.sendOk("��ϲ������˽���!");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] ����������������Ӹ�������˽��� ! ");//����							
                cm.gainExp(cm.getPlayer().getLevel()*cm.getPlayer().getLevel()*20);
			    cm.getPlayer().modifyCSPoints(2, +30, true);//�����þ�
                cm.dispose();
            }else{
                cm.sendOk("�����Ʒ����!����������ɸ������Ի��#v4001324##z4001324#!");
                cm.dispose();			
        }					
        } else if (selection == 3) {	
	if (cm.haveItem(4002001, 20)) {//�ж�����Ʒ
	cm.gainItem(4002001, -20);//�۳�����Ʒ
		cm.gainItem(1022073, 1);
	    cm.sendOk("�����ˡ�");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�������߸���20�γɹ��һ��˻����۾�,ôô��!");		
		}else{
		cm.sendOk("��û��20��#v4002001##r#z4002001#!");
		cm.dispose();
			}		
	}
    }
}





