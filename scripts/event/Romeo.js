/* ==================
 脚本类型: 脚本
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */var minPlayers=4;function init(){em.setProperty("state","0");em.setProperty("leader","true")}function setup(a,c){em.getProperties().clear();em.setProperty("state","1");em.setProperty("leader","true");var b=em.newInstance("Romeo"+c);em.setProperty("stage","0");em.setProperty("stage1","0");em.setProperty("stage3","0");em.setProperty("stage4","0");em.setProperty("stage5","0");em.setProperty("summoned","0");var d;for(d=0;4>d;d++){em.setProperty("stage6_"+d,"0");for(var e=0;10>e;e++)for(var f=0;4>f;f++)em.setProperty("stage6_ "+d+"_"+e+"_"+f+"","0")}for(d=0;4>d;d++)for(e=0;10>e;e++)for(f=!1;!f;)for(var g=0;4>g;g++)if(!f){for(var k=!1,h=0;4>h;h++)if(null==em.getProperty("stage6_"+h+"_"+e+"_"+g+""))em.setProperty("stage6_"+h+"_"+e+"_"+g+"","0");else if(em.getProperty("stage6_"+h+"_"+e+"_"+g+"").equals("1")){k=!0;break}if(!k&&.25>java.lang.Math.random()){em.setProperty("stage6_"+d+"_"+e+"_"+g+"","1");f=!0;break}}em.setProperty("stage7","0");b.setInstanceMap(9261E5).resetPQ(a);b.setInstanceMap(926100001).resetPQ(a);b.setInstanceMap(926100100).resetPQ(a);b.setInstanceMap(926100200).resetPQ(a);d=b.setInstanceMap(926100201);d.resetPQ(a);d=b.setInstanceMap(926100202);d.resetPQ(a);d=b.setInstanceMap(926100203);d.resetPQ(a);d.spawnNpc(2112E3,new java.awt.Point(200,188));b.setInstanceMap(926100300).resetPQ(a);b.setInstanceMap(926100301).resetPQ(a);b.setInstanceMap(926100302).resetPQ(a);b.setInstanceMap(926100303).resetPQ(a);b.setInstanceMap(926100304).resetPQ(a);b.setInstanceMap(926100400).resetPQ(a);b.setInstanceMap(926100401).resetPQ(a);b.setInstanceMap(926100500).resetPQ(a);b.setInstanceMap(926100600).resetPQ(a);b.startEventTimer(12E5);return b}function playerEntry(a,c){var b=a.getMapInstance(0);c.changeMap(b,b.getPortal(0));c.tryPartyQuest(1205)}function playerRevive(a,c){}function scheduledTimeout(a){end(a)}function changedMap(a,c,b){if(9261E5>b||926100600<b)a.unregisterPlayer(c),a.disposeIfPlayerBelow(0,0)&&(em.setProperty("state","0"),em.setProperty("leader","true"));926100401!=b||null!=em.getProperty("summoned")&&!em.getProperty("summoned").equals("0")||(c=9300139,em.getProperty("stage").equals("2")&&(c=9300140),c=em.getMonster(c),a.registerMonster(c),em.setProperty("summoned","1"),a.getMapInstance(b).spawnMonsterOnGroundBelow(c,new java.awt.Point(240,150)))}function playerDisconnected(a,c){return 0}function monsterValue(a,c){if(9300137==c||9300138==c)em.setProperty("stage7","1"),a.broadcastPlayerMsg(5,"\u4f60\u4fdd\u62a4\u7684\u4eba\u5df2\u7ecf\u6b7b\u4ea1,\u554a~~\u4e0d\u8981,\u518d\u89c1\u6211\u7684\u7231.");else if(9300139==c||9300140==c)a.getMapInstance(13).spawnNpc(2112004,new java.awt.Point(-416,-116)),em.getProperty("stage7").equals("0")?(a.getMapInstance(14).spawnNpc(2112002,new java.awt.Point(232,150)),a.getMapInstance(15).spawnNpc(2112018,new java.awt.Point(111,128)),a.getMapInstance(15).spawnNpc(2112002,new java.awt.Point(320,128))):(a.getMapInstance(14).spawnNpc(2112001,new java.awt.Point(232,150)),a.getMapInstance(15).spawnNpc(2112009,new java.awt.Point(111,128)),a.getMapInstance(15).spawnNpc(2112008,new java.awt.Point(211,128)));return 1}function playerExit(a,c){a.unregisterPlayer(c);a.disposeIfPlayerBelow(0,0)&&(em.setProperty("state","0"),em.setProperty("leader","true"))}function end(a){a.disposeIfPlayerBelow(100,926100700);em.setProperty("state","0");em.setProperty("leader","true")}function clearPQ(a){end(a)}function allMonstersDead(a){}function leftParty(a,c){end(a)}function disbandParty(a){end(a)}function playerDead(a,c){}function cancelSchedule(){};