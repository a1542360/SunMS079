/* ==================
 脚本类型: 脚本
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */function init(){em.setProperty("state","0")}function setup(a,b){em.setProperty("state","1");a=em.newInstance("Ravana_HELL"+b);var c=a.setInstanceMap(809061010);c.resetFully();var d=em.getMonster(9409018);a.registerMonster(d);c.spawnMonsterOnGroundBelow(d,new java.awt.Point(1E3,513));a.startEventTimer(36E5);return a}function playerEntry(a,b){var c=a.getMapInstance(0);b.changeMap(c,c.getPortal(0));b.haveItem(4001433,30)?b.removeItem(4001433,-30):b.removeAll(4001433)}function playerRevive(a,b){return!1}function scheduledTimeout(a){end(a)}function changedMap(a,b,c){809061010!=c&&(a.unregisterPlayer(b),a.disposeIfPlayerBelow(0,0)&&em.setProperty("state","0"))}function playerDisconnected(a,b){return 0}function monsterValue(a,b){return 1}function playerExit(a,b){a.unregisterPlayer(b);a.disposeIfPlayerBelow(0,0)&&em.setProperty("state","0")}function end(a){a.disposeIfPlayerBelow(100,809061100);em.setProperty("state","0")}function clearPQ(a){end(a)}function allMonstersDead(a){}function leftParty(a,b){}function disbandParty(a){}function playerDead(a,b){}function cancelSchedule(){};