/* ==================
 脚本类型: 脚本
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */function init(){em.setProperty("started","false")}function monsterValue(a,b){return 1}function setup(){em.setProperty("started","true");var a=em.newInstance("s4resurrection");a.setInstanceMap(923000100).resetFully();a.startEventTimer(3E5);return a}function playerEntry(a,b){var c=a.getMapFactory().getMap(923000100);b.changeMap(c,c.getPortal(0))}function playerDead(a,b){}function playerRevive(a,b){}function scheduledTimeout(a){a.disposeIfPlayerBelow(100,230040300);em.setProperty("started","false")}function changedMap(a,b,c){923000100!=c&&(a.unregisterPlayer(b),a.disposeIfPlayerBelow(0,0)&&em.setProperty("started","false"))}function playerDisconnected(a,b){return 0}function leftParty(a,b){playerExit(a,b)}function disbandParty(a){a.disposeIfPlayerBelow(100,230040300);em.setProperty("started","false")}function playerExit(a,b){a.unregisterPlayer(b);var c=a.getMapFactory().getMap(230040300);b.changeMap(c,c.getPortal(0))}function clearPQ(a){a.disposeIfPlayerBelow(100,230040300)}function allMonstersDead(a){}function cancelSchedule(){};