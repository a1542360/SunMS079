/* ==================
 脚本类型: 脚本
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */function init(){em.setProperty("leader","true");em.setProperty("state","0")}function setup(a,b){em.setProperty("leader","true");a=em.newInstance("VonLeon");var c=a.setInstanceMap(211070100);c.resetFully();c.spawnNpc(2161E3,new java.awt.Point(0,-181));em.setProperty("state","1");a.startEventTimer(36E5);return a}function playerEntry(a,b){var c=a.getMapFactory().getMap(211070100);b.changeMap(c,c.getPortal(0))}function playerRevive(a,b){b.addHP(50);var c=a.getMapFactory().getMap(211070100);b.changeMap(c,c.getPortal(0));return!0}function scheduledTimeout(a){a.disposeIfPlayerBelow(100,211061001);em.setProperty("state","0");em.setProperty("leader","true")}function changedMap(a,b,c){211070100!=c&&211070101!=c&&(a.unregisterPlayer(b),a.disposeIfPlayerBelow(0,0)&&(em.setProperty("state","0"),em.setProperty("leader","true")))}function playerDisconnected(a,b){return 0}function monsterValue(a,b){return 1}function playerExit(a,b){a.unregisterPlayer(b);a.disposeIfPlayerBelow(0,0)&&(em.setProperty("state","0"),em.setProperty("leader","true"))}function end(a){a.disposeIfPlayerBelow(100,211061001)&&(em.setProperty("state","0"),em.setProperty("leader","true"))}function clearPQ(a){end(a)}function allMonstersDead(a){a.getMapInstance(0).spawnNpc(2161008,new java.awt.Point(0,-181));a.getMapInstance(0).spawnNpc(2161009,new java.awt.Point(0,0))}function leftParty(a,b){}function disbandParty(a){}function playerDead(a,b){}function cancelSchedule(){};