/* ==================
 脚本类型: 脚本
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */function init(){em.setProperty("state","0")}function monsterValue(a,b){return 1}function setup(){em.setProperty("state","1");var a=em.newInstance("KerningPQ"),b=a.setInstanceMap(103000800);b.resetFully();b.getPortal("next00").setScriptName("kpq0");b=a.setInstanceMap(103000801);b.resetFully();b=a.setInstanceMap(103000802);b.resetFully();b=a.setInstanceMap(103000803);b.resetFully();b=a.setInstanceMap(103000804);b.resetFully();a.setInstanceMap(103000805);a.startEventTimer(18E5);return a}function playerEntry(a,b){var c=a.getMapFactory().getMap(103000800);b.changeMap(c,c.getPortal(0));b.tryPartyQuest(1201)}function playerDead(a,b){}function changedMap(a,b,c){switch(c){case 103000800:case 103000801:case 103000802:case 103000803:case 103000804:case 103000805:return}a.unregisterPlayer(b);a.disposeIfPlayerBelow(0,0)&&em.setProperty("state","0")}function playerRevive(a,b){}function playerDisconnected(a,b){return-2}function leftParty(a,b){a.disposeIfPlayerBelow(3,103000890)?em.setProperty("started","false"):playerExit(a,b)}function disbandParty(a){a.disposeIfPlayerBelow(100,103000890);em.setProperty("state","0")}function playerExit(a,b){a.unregisterPlayer(b);var c=a.getMapFactory().getMap(103000890);b.changeMap(c,c.getPortal(0))}function clearPQ(a){a.disposeIfPlayerBelow(100,103000890);em.setProperty("state","0")}function scheduledTimeout(a){for(var b=a.getPlayers(),c=a.getMapFactory().getMap(103000890),d=0;d<b.size();d++){var e=b.get(d);a.unregisterPlayer(e);e.changeMap(c,c.getPortal(0))}}function allMonstersDead(a){}function cancelSchedule(){};