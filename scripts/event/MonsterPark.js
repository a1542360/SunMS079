/* ==================
 脚本类型: 脚本
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */var minPlayers=1;function init(){}function setup(a){var b=em.newInstance("MonsterPark"+a);a=parseInt(a);var d=952==a/1E6?5:6;b.setProperty("max",""+d);b.setProperty("boss","0");for(var c=0;c<d;c++)b.setInstanceMap(a+100*c).resetFully(),b.setProperty("map"+c,""+(a+100*c));b.startEventTimer(12E5);return b}function playerEntry(a,b){var d=a.getMapInstance(0);b.changeMap(d,d.getPortal(0))}function playerRevive(a,b){}function scheduledTimeout(a){end(a)}function changedMap(a,b,d){for(var c=0;c<parseInt(a.getProperty("max"));c++)if(d==parseInt(a.getProperty("map"+c)))return;a.unregisterPlayer(b);a.disposeIfPlayerBelow(0,0)}function playerDisconnected(a,b){return 0}function monsterValue(a,b){return 1}function playerExit(a,b){a.unregisterPlayer(b);a.disposeIfPlayerBelow(0,0)}function end(a){a.disposeIfPlayerBelow(100,951E6)}function clearPQ(a){end(a)}function allMonstersDead(a){}function leftParty(a,b){end(a)}function disbandParty(a){end(a)}function playerDead(a,b){}function cancelSchedule(){};