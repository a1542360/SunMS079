/* ==================
 脚本类型: 脚本
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */function init(){}function monsterValue(a,d){return 1}function setup(a){for(var d=em.newInstance("Visitor"+a),c=0;16>c;c++){var b=d.setInstanceMap(50203E4+16*parseInt(a)+c);b.resetFully();if(1==c)for(var e=0;3>e;e++)b.spawnMonsterOnGroundBelow(em.getMonster(9420024+6*parseInt(a)),new java.awt.Point(94,0)),b.spawnMonsterOnGroundBelow(em.getMonster(9420024+6*parseInt(a)),new java.awt.Point(-67,-140)),b.spawnMonsterOnGroundBelow(em.getMonster(9420027+6*parseInt(a)),new java.awt.Point(-67,-140)),b.spawnMonsterOnGroundBelow(em.getMonster(9420027+6*parseInt(a)),new java.awt.Point(-287,50));else if(2==c)for(e=0;3>e;e++)b.spawnMonsterOnGroundBelow(em.getMonster(9420029+6*parseInt(a)),new java.awt.Point(177,110)),b.spawnMonsterOnGroundBelow(em.getMonster(9420029+6*parseInt(a)),new java.awt.Point(177,-160)),b.spawnMonsterOnGroundBelow(em.getMonster(9420029+6*parseInt(a)),new java.awt.Point(-237,-20));else if(3==c)for(e=0;3>e;e++)b.spawnMonsterOnGroundBelow(em.getMonster(9420025+6*parseInt(a)),new java.awt.Point(160,50)),b.spawnMonsterOnGroundBelow(em.getMonster(9420026+6*parseInt(a)),new java.awt.Point(0,50)),b.spawnMonsterOnGroundBelow(em.getMonster(9420028+6*parseInt(a)),new java.awt.Point(-160,50));else if(4==c)for(e=0;6>e;e++)b.spawnMonsterOnGroundBelow(em.getMonster(9420042+parseInt(a)),new java.awt.Point(-50,-160)),b.spawnMonsterOnGroundBelow(em.getMonster(9420045+parseInt(a)),new java.awt.Point(-50,100)),b.spawnMonsterOnGroundBelow(em.getMonster(9420048+parseInt(a)),new java.awt.Point(-50,320));else if(5==c)b.spawnReactorOnGroundBelow(em.getReactor(5029E3),new java.awt.Point(-140,70)),b.spawnReactorOnGroundBelow(em.getReactor(5029E3),new java.awt.Point(0,70)),b.spawnReactorOnGroundBelow(em.getReactor(5029E3),new java.awt.Point(140,70)),d.setProperty("stage5",java.lang.Math.floor(3*java.lang.Math.random())+1+"");else if(6==c)for(e=0;6>e;e++)b.spawnMonsterOnGroundBelow(em.getMonster(9420051+parseInt(a)),new java.awt.Point(0,-50)),b.spawnMonsterOnGroundBelow(em.getMonster(9420051+parseInt(a)),new java.awt.Point(0,320));else if(7==c)for(e=0;6>e;e++)b.spawnMonsterOnGroundBelow(em.getMonster(9420054+parseInt(a)),new java.awt.Point(0,0));else 8==c?(b.spawnNpc(9250139,new java.awt.Point(-5,-150)),d.setProperty("stage8","1")):9==c?b.spawnMonsterOnGroundBelow(em.getMonster(9420057+parseInt(a)),new java.awt.Point(0,0)):10==c?b.spawnMonsterOnGroundBelow(em.getMonster(9420060+parseInt(a)),new java.awt.Point(0,0)):11==c&&b.spawnMonsterOnGroundBelow(em.getMonster(9420065+parseInt(a)),new java.awt.Point(0,0))}d.setProperty("entryTimestamp",""+java.lang.System.currentTimeMillis());d.setProperty("current_instance","0");d.setProperty("mode",a);d.startEventTimer(36E5);return d}function playerEntry(a,d){var c=a.getMapInstance(0);d.changeMap(c,c.getPortal(0))}function playerDead(a,d){}function changedMap(a,d,c){50203E4>c||502030100<=c?(a.unregisterPlayer(d),a.disposeIfPlayerBelow(2,502029E3)):a.setProperty("current_instance",""+c)}function playerRevive(a,d){}function playerDisconnected(a,d){return-2}function leftParty(a,d){a.disposeIfPlayerBelow(2,502029E3)||playerExit(a,d)}function disbandParty(a){a.disposeIfPlayerBelow(100,502029E3)}function scheduledTimeout(a){clearPQ(a)}function playerExit(a,d){a.unregisterPlayer(d);a.disposeIfPlayerBelow(2,502029E3)}function clearPQ(a){a.disposeIfPlayerBelow(100,502029E3)}function allMonstersDead(a){}function cancelSchedule(){};