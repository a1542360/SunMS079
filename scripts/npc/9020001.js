/* ==================
 �ű�����:  NPC	    
 �ű����ߣ�����     
 ��ϵ��ʽ��2412614144
 =====================
 */

importPackage(Packages.tools);
importPackage(java.awt);

var status;
var curMap;
var random = java.lang.Math.floor(Math.random() * 9 + 1);
var random1 = java.lang.Math.floor(Math.random() * 20000 + 1);
var random2 = java.lang.Math.floor(Math.random() * 19 + 1);
var questions = Array("��һ�����⣺תְ��սʿ����͵ȼ��Ƕ��٣�#b\r\n���򵹹����ȡ��Ӧ������֤�顣��",
    "��һ�����⣺תְ��սʿ���������ֵ��SEX���Ƕ��٣�#b\r\n���򵹹����ȡ��Ӧ������֤�顣��",
    "��һ�����⣺תְ��ħ��ʦ���������ֵ��INT���Ƕ��٣�#b\r\n���򵹹����ȡ��Ӧ������֤�顣��",
    "��һ�����⣺תְ�ɹ����ֵ��������ֵ��DEX���Ƕ��٣�#b\r\n���򵹹����ȡ��Ӧ������֤�顣��",
    "��һ�����⣺תְ�ɷ������������ֵ��DEX���Ƕ��٣�#b\r\n���򵹹����ȡ��Ӧ������֤�顣��",
    "��һ�����⣺�ȼ�1 �� �ȼ�2 ����ľ���ֵ�Ƕ��٣�#b\r\n���򵹹����ȡ��Ӧ������֤�顣��");
var qanswers = Array(10, 35, 20, 25, 25, 15);
var party;
var preamble; // we dont even need this mother fucker ! --
var stage2Rects = Array(Rectangle(-770,-132,28,178),Rectangle(-733,-337,26,105),Rectangle(-601,-328,29,105),Rectangle(-495,-125,24,165));
//var stage2Rects = Array(Rectangle(-755,-132,4,218),Rectangle(-721,-340,4,166),Rectangle(-586,-326,4,150),Rectangle(-483,-181,4,222));
var stage3Rects = Array(Rectangle(608,-180,140,50),Rectangle(791,-117,140,45),
    Rectangle(958,-180,140,50),Rectangle(876,-238,140,45),
    Rectangle(702,-238,140,45));
var stage4Rects = Array(Rectangle(910,-236,35,5),Rectangle(877,-184,35,5),
    Rectangle(946,-184,35,5),Rectangle(845,-132,35,5),
    Rectangle(910,-132,35,5),Rectangle(981,-132,35,5));
var stage2combos = Array(Array(0,1,1,1),Array(1,0,1,1),Array(1,1,0,1),Array(1,1,1,0));
var stage3combos = Array(Array(0,0,1,1,1),Array(0,1,0,1,1),Array(0,1,1,0,1),
    Array(0,1,1,1,0),Array(1,0,0,1,1),Array(1,0,1,0,1),
    Array(1,0,1,1,0),Array(1,1,0,0,1),Array(1,1,0,1,0),
    Array(1,1,1,0,0));
var stage4combos = Array(Array(0,0,0,1,1,1),Array(0,0,1,0,1,1),Array(0,0,1,1,0,1),
    Array(0,0,1,1,1,0),Array(0,1,0,0,1,1),Array(0,1,0,1,0,1),
    Array(0,1,0,1,1,0),Array(0,1,1,0,0,1),Array(0,1,1,0,1,0),
    Array(0,1,1,1,0,0),Array(1,0,0,0,1,1),Array(1,0,0,1,0,1),
    Array(1,0,0,1,1,0),Array(1,0,1,0,0,1),Array(1,0,1,0,1,0),
    Array(1,0,1,1,0,0),Array(1,1,0,0,0,1),Array(1,1,0,0,1,0),
    Array(1,1,0,1,0,0),Array(1,1,1,0,0,0));	
var eye = 9300002;
var necki = 9300000;
var slime = 9300003;
var monsterIds = Array(eye, eye, eye, necki, necki, necki, necki, necki, necki, slime);
var prizeIdScroll = Array(2040502, 2040505,					// Overall DEX and DEF
    2040802,										// Gloves for DEX
    2040002, 2040402, 2040602);						// Helmet, Topwear and Bottomwear for DEF
var prizeIdUse = Array(2000001, 2000002, 2000003, 2000006,	// Orange, White and Blue Potions and Mana Elixir
    2000004, 2022000, 2022003);						// Elixir, Pure Water and Unagi
var prizeQtyUse = Array(50, 50, 50, 30,
    5, 10, 10);
var prizeIdEquip = Array(1032004, 1032005, 1032009,			// Level 20-25 Earrings
    1032006, 1032007, 1032010,						// Level 30 Earrings
    1032002,										// Level 35 Earring
    1002026, 1002089, 1002090);						// Bamboo Hats
var prizeIdEtc = Array(4010000, 4010001, 4010002, 4010003,	// Mineral Ores
    4010004, 4010005, 4010006,						// Mineral Ores
    4020000, 4020001, 4020002, 4020003,				// Jewel Ores
    4020004, 4020005, 4020006,						// Jewel Ores
    4020007, 4020008, 4003000);						// Diamond and Black Crystal Ores and Screws
var prizeQtyEtc = Array(10, 10, 10, 10,
    8, 8, 8,
    8, 8, 8, 8,
    8, 8, 8,
    3, 3, 10);
		
function start() {
    status = -1;
    curMap = cm.getPlayer().getMapId() - 103000799;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (type == 0 && mode == 0)
        status--;
    else {
        cm.dispose();
        return;
    }
    if (curMap == 1) { // First Stage.
        if (cm.isLeader()) {
            var eim = cm.getPlayer().getEventInstance();
            party = eim.getPlayers();
            preamble = eim.getProperty("leader1stpreamble");
            if (preamble == null) {
                cm.sendNext("��ã���ӭ������һ���׶Σ�����������ܻῼ���ܶ��׺ݵ����㣬���ҶԻ����һ������ÿһ���˳�һ����Ŀ�������ٴ��׺ݵ������ȡ��Ӧ��Ŀ��֤�鿨�����ң������ˡ�֮���һ������һ��ͨ��֤�����ǰ�ͨ��֤ȫ��������ӳ�����ӳ��ٺ��ҽ������Ϳ���˳��ͨ���ˣ���ôף��һ��˳����");
                eim.setProperty("leader1stpreamble","done");
                cm.dispose();
            } else {
				var complete = eim.getProperty(curMap.toString() + "stageclear");
				if (complete != null) {
                    cm.sendNext("��Ͽ쵽��һ���׶Σ��������Ѿ���!");
                    cm.dispose();
                } else {
                    var numpasses = party.size() - 1; // All the players in the party need to get a pass besides the leader.
                    var strpasses = "#b" + numpasses + " ��#k";
                    if (!cm.haveItem(4001008, numpasses)) {
                        cm.sendNext("��Ǹ������û���㹻��#v4001008#��\r\n����Ҫ������ȷ������:#r " + numpasses + " #k��\r\n�������Ķ�Ա������⣬�ռ���#v4001008#���������Ǹ�����");
                        cm.dispose();
                    } else {
                        cm.sendNext("���ռ��� " + strpasses + "#v4001008#! ��ϲ���һ��÷�������һ�׶ε��Ż�����һ�����ڻ����ʱ�����ƣ�������ץ��ʱ�䡣ף�����˸���ң�");
                        clear(1, eim, cm);
                        cm.givePartyExp(2000, party);
                        cm.gainItem(4001008, -numpasses);
                        cm.dispose();
                    // TODO: Make the shiny thing flash
                    }
                }
            }
        } else { // Not leader
            var eim = cm.getPlayer().getEventInstance();
            pstring = "member1stpreamble" + cm.getPlayer().getId();
            preamble = eim.getProperty(pstring);
            if (status == 0) {
                if (preamble == null) {
                    var qstring = "member1st" + cm.getPlayer().getId();
                    var question = eim.getProperty(qstring);
                    if (question == null) {
                        // Select a random question to ask the player.
                        var questionNum = Math.floor(Math.random() * questions.length);
                        eim.setProperty(qstring, questionNum);
                    }
                    cm.sendNext("���ˣ�����Ҫ�ռ�#b��Ӧ��Ŀ#k��֤����ҡ�\r\n���������Ҫ������ͬ������������Ϊ�𰸵�������������ռ�#v4001007# .");
                } else { // Otherwise, check for stage completed
                    var complete = eim.getProperty(curMap + "stageclear");
                    if (complete != null) { // Strage completed
                        cm.sendNext("���ڿ��Ե���һ���ؿ��ˣ���������Ļ����ſ��ܾ͹ر��ˡ�");
						//cm.sendNext("Please hurry on to the next stage, the portal is open!");
                        cm.dispose();
                    } else {
                        // Reply to player correct/incorrect response to the question they have been asked
                        var qstring = "member1st" + cm.getPlayer().getId();
                        var numcoupons = qanswers[parseInt(eim.getProperty(qstring))];
                        var qcorr = cm.itemQuantity(4001007);
						var enough = false;
						var passed = eim.getProperty(cm.getPlayer().getId().toString() + "passed");
                        if (passed == 1) { 
                            cm.sendOk("���Ѿ���������ͨ��֤��������������Ѱ�");
                            cm.dispose();
							//�жϽ��������ܶһ�
                        } else if (numcoupons == qcorr) {
							 cm.sendOk("ף���㣬�õ�ͨ��֤#v4001008#1�ţ����ͨ��֤�����ӳ�֮�󣬰������Ѱɣ�.");
							cm.gainItem(4001007, -numcoupons);
                            cm.gainItem(4001008, 1);
							enough = true;
							eim.setProperty(cm.getPlayer().getId().toString() + "passed", 1);
								}
							}
							if (!enough) {
								var questionstring = "member1st" + cm.getPlayer().getId().toString();
								var thequestion = parseInt(eim.getProperty(qstring));
								cm.sendNext("����ҵ�֤�������ʹ𰸲���Ӧ����������ǣ�\r\n" + questions[thequestion]);
							}
							cm.dispose();
						//}
					}
            } else if (status == 1) {
                if (preamble == null) {
                    var qstring = "member1st" + cm.getPlayer().getId();
                    var question = parseInt(eim.getProperty(qstring));
                    cm.sendNextPrev(questions[question]);
                } else { // Shouldn't happen, if it does then just dispose
                    cm.dispose();
                }
            } else if (status == 2) { // Preamble completed
                eim.setProperty(pstring,"done");
                cm.dispose();
            }
        } // End first map scripts
    } else if (2 <= curMap && 4 >= curMap) {
        rectanglestages(cm);
    } else if (curMap == 5) { // Final stage
        var eim = cm.getPlayer().getEventInstance();
        var stage5done = eim.getProperty("5stageclear");
        if (stage5done == null) {
            if (cm.isLeader()) { // Leader
                if (cm.haveItem(4001008, 10)) {
                    // Clear stage
                    cm.sendNext("�������ͨ�����һ���ؿ��������кܶ����͵Ĺ��������ף�������������ͨ��������ս��");
						//cm.sendNext("Here's the portal that leads you to the last, bonus stage. It's a stage that allows you to defeat regular monsters a little easier. You'll be given a set amount of time to hunt as much as possible, but you can always leave the stage in the middle of it through the NPC. Again, congratulations on clearing all the stages. Take care...");
                    party = eim.getPlayers();
                    cm.gainItem(4001008, -10);
                    clear(5, eim, cm);
                    cm.givePartyExp(6000, party);
                    cm.dispose();
                } else { // Not done yet
                 	cm.sendNext("��ã���ӭ������#r5#k�׶Σ��������ߣ����ܻᷢ�ֺܶ����͵Ĺ��������ǣ���ȡͨ��֤���ٰ����ǽ����ҡ���ס��������ܱ���ǿ��ܶ࣬��С��һ�㣬ף��ͨ����һ�ء�");
					//   cm.sendNext("Hello. Welcome to the 5th and final stage. Walk around the map and you'll be able to find some Boss monsters. Defeat all of them, gather up #bthe passes#k, and please get them to me. Once you earn your pass, the leader of your party will collect them, and then get them to me once the #bpasses#k are gathered up. The monsters may be familiar to you, but they may be much stronger than you think, so please be careful. Good luck!\r\nAs a result of complaints, it is now mandatory to kill all the Slimes! Do it!");
                }
                cm.dispose();
            } else { // Members
                //cm.sendNext("Welcome to the 5th and final stage.  Walk around the map and you will be able to find some Boss monsters.  Defeat them all, gather up the #bpasses#k, and give them to your leader.  Once you are done, return to me to collect your reward.");
                cm.sendNext("��ӭ������#r5#k�׶Σ��ڵ�ͼ�����ߣ���ͻῴ��������͵Ĺ��������ǻ�ȡ�������ϵ�ͨ��֤���������ǵ���ӳ���");
					cm.dispose();
            }
        } else { // Give rewards and warp to bonus
            if (status == 0) {
                cm.sendNext("�������ţ����������Ա�����������������ս����Ϊ�������ҽ�����һЩ��������ȷ���������������������װ�����Ƿ���һ����Ŀ���ϵĿո�");
            } else if (status == 1) {
                getPrize(eim,cm);
                cm.dispose();
            }
        }
    } else { // No map found
        cm.sendNext("��Ч�ĵ�ͼ������ζ�Ž׶��ǲ�������.");
        cm.dispose();
    }
}

function clear(stage, eim, cm) {
	eim.setProperty(stage.toString() + "stageclear","true");
   // eim.setProperty(stage + "stageclear", "true");
    var map = eim.getMapInstance(cm.getPlayer().getMapId());
   // map.broadcastMessage(MaplePacketCreator.showEffect("quest/party/clear"));
    //map.broadcastMessage(MaplePacketCreator.playSound("Party1/Clear"));
   // map.broadcastMessage(MaplePacketCreator.environmentChange("gate", 2));
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
    var mf = eim.getMapFactory();
    map = mf.getMap(103000800 + stage);
    var nextStage = eim.getMapInstance(103000800 + stage);
    var portal = nextStage.getPortal("next00");
    if (portal != null) {
		//portal.setScriptName("kpq" + (stage+1).toString());
        portal.setScriptName("kpq" + stage);
    }
}

function failstage(eim, cm) {
    var map = eim.getMapInstance(cm.getPlayer().getMapId());
    cm.showEffect(true, "quest/party/wrong_kor");
    cm.playSound(true, "Party1/Failed");
   // map.broadcastMessage(MaplePacketCreator.showEffect("quest/party/wrong_kor"));
   // map.broadcastMessage(MaplePacketCreator.playSound("Party1/Failed"));
}

function rectanglestages (cm) {
    var eim = cm.getPlayer().getEventInstance();
    var nthtext;
    var nthobj;
    var nthverb;
    var nthpos;
    var curArray;
    var curCombo;
    var objset;
    if (curMap == 2) {
        nthtext = "2";
        nthobj = "ropes";
        nthverb = "hang";
        nthpos = "hang on the ropes too low";
        curArray = stage2Rects;
        curCombo = stage2combos;
        objset = [0,0,0,0];
    } else if (curMap == 3) {
        nthtext = "3";
        nthobj = "platforms";
        nthverb = "stand";
        nthpos = "stand too close to the edges";
        curArray = stage3Rects;
        curCombo = stage3combos;
        objset = [0,0,0,0,0];
    } else if (curMap == 4) {
        nthtext = "4";
        nthobj = "barrels";
        nthverb = "stand";
        nthpos = "stand too close to the edges";
        curArray = stage4Rects;
        curCombo = stage4combos;
        objset = [0,0,0,0,0,0];
    }
    if (cm.isLeader()) { // Check if player is leader
        if (status == 0) {
            party = eim.getPlayers();
            preamble = eim.getProperty("leader" + nthtext + "preamble");
            if (preamble == null) { // first time talking.
                cm.sendNext("��ӭ������#r " + nthtext + "#k �׶Ρ� �����Ա�����ܻῴ���ܶ����ӣ���������ӳ�Ա�������ӣ��ҵ���ȷ��λ�ã��Ϳ���ͨ���˹ؿ�!");
                eim.setProperty("leader" + nthtext + "preamble","done");
                var sequenceNum = Math.floor(Math.random() * curCombo.length);
                eim.setProperty("stage" + nthtext + "combo", sequenceNum.toString());
                cm.dispose();
            } else {
                var complete = eim.getProperty(curMap + "stageclear");
                if (complete != null) {
                    cm.sendNext("��Ͽ쵽��һ���׶Σ��������Ѿ���!");
                    cm.dispose();
                } else { // Check for people on ropes and their positions
                    var playersOnCombo = 0;
                    for (var i = 0; i < party.size(); i++) {
                        for (var y = 0; y < curArray.length; y++) {
                            if (curArray[y].contains(party.get(i).getPosition())) {
                                playersOnCombo++;
                                objset[y] = 1;
                                break;
                            }
                        }
                    }
                   // if (playersOnCombo == 3 || cm.getPlayer().gmLevel() > 0) {
                    if (playersOnCombo == 3) {
                        var combo = curCombo[parseInt(eim.getProperty("stage" + nthtext + "combo"))];
                        var correctCombo = true;
                        for (i = 0; i < objset.length && correctCombo; i++)
                            if (combo[i] != objset[i])
                                correctCombo = false;
                      //  if (correctCombo || cm.getPlayer().gmLevel() > 0) {
                        if (correctCombo) {
                            clear(curMap, eim, cm);
                            //var exp = (Math.pow(10, curMap) * 50);
							
                            var exp = 0;
							if(curMap == 2){
								exp = 2000;
							}else if(curMap == 3){
							exp = 3000;
							}else if(curMap == 4){
							exp = 5000;
							}
                            cm.givePartyExp(exp, party);
                            cm.dispose();
                        } else { // Wrong
                            failstage(eim, cm);
                            cm.dispose();
                        }
                    } else {
                        cm.sendNext("�㿴��������û�з�����ȷ��λ�ã������٣�����ӳ�Ա���������ҵ���ȷ��λ�á�\r\n�������㻹û�з��ֺ��ʵ���ϡ������벻ͬ��� . ��#r3��#kͬʱ����������, �������3��Ա���޷���ɱ��׶Σ��������ס��һ�㡣 ���������!");
                        cm.dispose();
                    }
                }
            }
        } else {
            var complete = eim.getProperty(curMap + "stageclear");
            if (complete != null) {
                var target = eim.getMapInstance(103000800 + curMap);
                var targetPortal = target.getPortal("st00");
                cm.getPlayer().changeMap(target, targetPortal);
            }
            cm.dispose();
        }
    } else { // Not leader
        var complete = eim.getProperty(curMap.toString() + "stageclear");
        if (complete != null) {
            cm.sendNext("ʱ�䲻���ˣ����㵽����һ���ؿ���");
        } else {
            cm.sendNext("���������ӳ�����̸����");
        }
        cm.dispose();
    }
}

function getPrize(eim,cm) {
    var itemSetSel = Math.random();
    var itemSet;
    var itemSetQty;
    var hasQty = false;
	var ItemName;
	var item;
    if (itemSetSel < 0.3)
	itemSet = prizeIdScroll;
    else if (itemSetSel < 0.6)
	itemSet = prizeIdEquip;
    else if (itemSetSel < 0.9) {
	itemSet = prizeIdUse;
	itemSetQty = prizeQtyUse;
	hasQty = true;
    } else {
	itemSet = prizeIdEtc;
	itemSetQty = prizeQtyEtc;
	hasQty = true;
    }
    var sel = Math.floor(Math.random()*itemSet.length);
    var qty = 1;
    if (hasQty)
	qty = itemSetQty[sel];
	ItemName = cm.getItemName(itemSet[sel]);
	item = new Packages.client.inventory.Item(itemSet[sel], 0, qty, 0);
	if(cm.getLevel() >= 20){//�жϵȼ�
    cm.gainGetItemMegas1(itemSet[sel], qty);
    cm.gainItem(4002000, 1);//��Ʊ
    cm.getPlayer().setOneTimeLog("feiqi");
    cm.removeAll(4001007);
    cm.removeAll(4001008);
    cm.getPlayer().endPartyQuest(1201);
	var msg = "x"+qty+" ��ϲ���-"+ cm.getPlayer().getName() + "-��ɷ�����Ӹ���,��ҹ�ϲ���ǰ�!";
	} else {
    cm.gainGetItemMegas1(itemSet[sel], qty);
    cm.getPlayer().setOneTimeLog("feiqi");
    cm.removeAll(4001007);
    cm.removeAll(4001008);
    cm.getPlayer().endPartyQuest(1201);
	var msg = "x"+qty+" ��ϲ���-"+ cm.getPlayer().getName() + "-��ɷ�����Ӹ���,��ҹ�ϲ���ǰ�!";
	if(itemSet[sel] / 1000 == 1032){
		World.Broadcast.broadcastMessage(MaplePacketCreator.getGachaponMega("��������ӡ� ", " : " + msg, item,  0, cm.getPlayer().getClient().getChannel()).getBytes());
	} 
	} 
	cm.warp(103000805);
	eim.restartEventTimer(120000);//��������ʱ��
		cm.dispose();
	}
		
	
