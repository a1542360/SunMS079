/* ==================
 脚本类型: 脚本
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */var minPlayers=2;function init(){em.setProperty("state","0");em.setProperty("leader","true")}function setup(a,b){em.setProperty("state","1");em.setProperty("leader","true");var c=em.newInstance("Iceman"+b);c.setInstanceMap(932000100).resetPQ(a);c.setInstanceMap(932000200).resetPQ(a);var d=c.setInstanceMap(932000300);d.resetPQ(a);var e=em.getMonster(9300441);c.registerMonster(e);e.changeLevel(a);d.spawnMonsterOnGroundBelow(e,d.getPortal(0).getPosition());d.spawnNpc(2159017,d.getPortal(0).getPosition());c.setInstanceMap(932000400).resetPQ(a);c.startEventTimer(12E5);return c}function playerEntry(a,b){var c=a.getMapInstance(0);b.changeMap(c,c.getPortal(0))}function playerRevive(a,b){a.unregisterPlayer(b);a.disposeIfPlayerBelow(0,0)&&(em.setProperty("state","0"),em.setProperty("leader","true"));return!0}function scheduledTimeout(a){end(a)}function changedMap(a,b,c){if(932000100>c||932000400<c)a.unregisterPlayer(b),a.disposeIfPlayerBelow(0,0)&&(em.setProperty("state","0"),em.setProperty("leader","true"))}function playerDisconnected(a,b){return 0}function monsterValue(a,b){return 1}function playerExit(a,b){a.unregisterPlayer(b);b.changeMap(em.getChannelServer().getMapFactory().getMap(932E6),em.getChannelServer().getMapFactory().getMap(932E6).getPortal(0));a.disposeIfPlayerBelow(0,0)&&(em.setProperty("state","0"),em.setProperty("leader","true"))}function end(a){a.disposeIfPlayerBelow(100,932E6);em.setProperty("state","0");em.setProperty("leader","true")}function clearPQ(a){end(a)}function allMonstersDead(a){}function leftParty(a,b){end(a)}function disbandParty(a){end(a)}function playerDead(a,b){}function cancelSchedule(){};