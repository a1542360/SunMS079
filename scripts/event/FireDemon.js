/* ==================
 脚本类型: 脚本
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */function init(){}function monsterValue(a,b){return 1}function setup(){var a=em.newInstance("FireDemon");a.getMapFactory().getMap(9211E5).resetReactors();a.startEventTimer(3E5);return a}function playerEntry(a,b){var c=a.getMapFactory().getMap(9211E5);b.changeMap(c,c.getPortal(0))}function playerDead(a,b){}function playerRevive(a,b){}function scheduledTimeout(a){a.disposeIfPlayerBelow(100,211042300)}function changedMap(a,b,c){9211E5!=c&&(a.unregisterPlayer(b),a.disposeIfPlayerBelow(0,0))}function playerDisconnected(a,b){return 0}function leftParty(a,b){playerExit(a,b)}function disbandParty(a){a.disposeIfPlayerBelow(100,211042300)}function playerExit(a,b){a.unregisterPlayer(b);var c=a.getMapFactory().getMap(211042300);b.changeMap(c,c.getPortal(0))}function clearPQ(a){a.disposeIfPlayerBelow(100,211042300)}function allMonstersDead(a){}function cancelSchedule(){};