/* ==================
 �ű�����:  NPC	    
 �ű����ߣ�����     
 ��ϵ��ʽ��2412614144
 =====================
 */

var status;
var fbmc = "��������-(��������)";//��������
var minLevel = 21;
var maxLevel = 200;
var minPartySize = 3;
var maxPartySize = 6;
var maxjinbi = 5000;//�ж���������
var eventname = "KerningPQ";//���������ļ�

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.dispose();
        return;
    }
    if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#k\t\t   #r#v4030001#" + fbmc + "#v4030001##k\r\n#b����Ҫ��:#k\r\n����������:#r " + minPartySize + " #b- #r" + maxPartySize + "#k ��Ա\t�ڵȼ����ƣ�#r " + minLevel + " #b- #r" + maxLevel + "�� #k\r\n"//3
            text += "#L1##r#v4030011#��ʼ��Ӹ���#l  #L2##r#v4030010#����������#k" + maxjinbi + "���/��#l\r\n\r\n"//3
			text += "        #L3##r��Ҫ�һ��һ�#v1072369##z1072369##b#l\r\n\r\n"
			//text += "   #L4##r#v4001323#��ȡ�߼���ߴ����˽���#k(#b����#k)\r\n\r\n#l"//3
			//text += "         #L5##e�߼���Ҵ�����˵��#k\r\n"//3
            cm.sendSimple(text);
	} else if (selection == 1) {
        if (cm.getParty() == null) { // No Party
            cm.sendOk("��û�ж����޷����룡");
            cm.dispose();
        } else if (!cm.isLeader()) { // Not Party Leader
            cm.sendOk("������Ķӳ�����˵��~");
            cm.dispose();
        } else {
            var party = cm.getParty().getMembers();
            var inMap = cm.partyMembersInMap();
            var levelValid = 0;
            for (var i = 0; i < party.size(); i++) {
                if (party.get(i).getLevel() >= minLevel && party.get(i).getLevel() <= maxLevel)
                    levelValid++;
            }
            if (inMap < minPartySize || inMap > maxPartySize) {
                cm.sendOk("��Ķ�����������"+minPartySize+"��.�����Ķ�����Ա�ټ������������ڽ��븱��.");
                cm.dispose();
            } else if (levelValid != inMap) {
                cm.sendOk("��ȷ����Ķ�����������Ա���ڱ���ͼ������С�ȼ��� "+minLevel+" �� "+maxLevel+"֮��.");
                cm.dispose();
            } else {
                var em = cm.getEventManager("KerningPQ");
                if (em == null) {
                    cm.sendOk("��̨�����ǵ�ǰ������.");
                //} else if (em.getProperty("KPQOpen").equals("true")) {
                } else {
        if (cm.getPlayerCount(103000800) <= 0 && cm.getPlayerCount(103000801) <= 0 && cm.getPlayerCount(103000802) <= 0 && cm.getPlayerCount(103000803) <= 0 && cm.getPlayerCount(103000804) <= 0) {
        cm.getMap(103000804).resetFully();
		cm.getMap(103000803).resetFully();
		cm.getMap(103000802).resetFully();
		cm.getMap(103000801).resetFully();
		cm.getMap(103000800).resetFully();
        /*cm.spawnMobOnMap(9300002,1,297,-2188,103000804);
        cm.spawnMobOnMap(9300002,1,433,-2192,103000804);
        cm.spawnMobOnMap(9300002,1,132,-2193,103000804);
		cm.spawnMobOnMap(9300000,1,-18,-1480,103000804);
		cm.spawnMobOnMap(9300000,1,80,-1486,103000804);
		cm.spawnMobOnMap(9300000,1,391,-1488,103000804);
		cm.spawnMobOnMap(9300000,1,247,-1485,103000804);
		cm.spawnMobOnMap(9300000,1,-111,-1475,103000804);
		cm.spawnMobOnMap(9300000,1,299,-1485,103000804);
		cm.spawnMobOnMap(9300003,1,162,-451,103000804);
        //var papuMap = pi.getMap(103000804);
		//pi.getPlayer().setbosslog(1);
        //pi.playPortalSE();
*/
			//}
				//em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
                em.startInstance(cm.getParty(), cm.getPlayer().getMap());
		} else {
                            cm.sendOk("���Ե�...�������ڽ�����.");
                        }
						// Capt. Lac Map
				//em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
                    // Begin the PQ.
                //    em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                    // Remove Passes and Coupons GMS DOESNT DO THIS!!!
                    //party = cm.getPlayer().getEventInstance().getPlayers();
                    //cm.removeFromParty(4001008, party);
                    //cm.removeFromParty(4001007, party);
                  //  em.setProperty("KPQOpen" , "false");
                //} else {
                 //   cm.sendNext("There is already another party inside. Please wait !");
                }
                cm.dispose();
						 }
		 }
        } else if (selection == 5) {
            if (cm.haveItem(4001316, 100) ){
		        cm.gainItem(4001316, -100);
                cm.dispose();
            }else{
                cm.sendOk(" #r˵��:#k\r\n\r\n�ȼ�����#b50��#k����Ҵ����������#b����������񸱱�#k\r\n���ɻ��#v4001323##z4001323# һö\r\n#v4001323#������#b������˹#k�һ��Լ��ȼ���Ӧ��#b����#k��#b���þ�#k����");
                cm.dispose();					
		 }
        } else if (selection == 4) {
            if (cm.haveItem(4001323, 1) ){
		        cm.gainItem(4001323, -1);
                cm.sendOk("��ϲ������˽���!");
		cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"] ����������ɷ�����Ӹ�������˽��� ! ");//����							
                cm.gainExp(cm.getPlayer().getLevel()*cm.getPlayer().getLevel()*20);
			    cm.getPlayer().modifyCSPoints(2, +20, true);//�����þ�
                cm.dispose();
            }else{
                cm.sendOk("�����Ʒ����!����������ɸ������Ի��#v4001323##z4001323#!");
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
                            //cm.sendOk(".");
                //cm.dispose();
    }
			    } else if (selection == 3) {
		if(cm.getPlayer().getOneTimeLog("feiqi1") >= 100){
			cm.sendOk("���Ѿ��һ���#v1072369##r#z1072369#��");
            cm.dispose();
		}else if(cm.getPlayer().getOneTimeLog("feiqi") <= 20){
			cm.sendOk("����ս������û����20��,�����޷��һ�#v1072369##r#z1072369#��\r\n#k��ǰ��ս�ˣ�#r"+cm.getPlayer().getOneTimeLog("feiqi")+"#k��");
            cm.dispose();
		}else if (cm.getInventory(1).isFull(0)){
			cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
			cm.dispose();		
			} else {
			cm.gainItem(1072369, 1);
            cm.sendOk("�һ��ɹ�!");
			cm.getPlayer().setOneTimeLog("feiqi1");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]����˷�������20�γɹ��һ������ҺЬ��,�����!");
            cm.dispose();
	}
}}