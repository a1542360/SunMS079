/* ==================
 脚本类型: 脚本
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */var minPlayers=6;function init(){em.setProperty("state","0")}function monsterValue(a,b){return 1}function setup(){em.setProperty("state","1");var a=em.newInstance("LudiPQ"),b=a.setInstanceMap(922010100);b.resetFully();b.getPortal("next00").setScriptName("lpq1");b=a.setInstanceMap(922010200);b.resetFully();b.getPortal("next00").setScriptName("lpq2");a.setInstanceMap(922010201).resetFully();b=a.setInstanceMap(922010300);b.resetFully();b.getPortal("next00").setScriptName("lpq3");b=a.setInstanceMap(922010400);b.resetFully();b.getPortal("next00").setScriptName("lpq4");a.setInstanceMap(922010401).resetFully();a.setInstanceMap(922010402).resetFully();a.setInstanceMap(922010403).resetFully();a.setInstanceMap(922010404).resetFully();a.setInstanceMap(922010405).resetFully();b=a.setInstanceMap(922010500);b.resetFully();b.getPortal("next00").setScriptName("lpq5");a.setInstanceMap(922010501).resetFully();a.setInstanceMap(922010502).resetFully();a.setInstanceMap(922010503).resetFully();a.setInstanceMap(922010504).resetFully();a.setInstanceMap(922010505).resetFully();a.setInstanceMap(922010506).resetFully();b=a.setInstanceMap(922010700);b.resetFully();b.getPortal("next00").setScriptName("lpq7");b=a.setInstanceMap(922010800);b.getPortal("next00").setScriptName("lpq8");a.setInstanceMap(922010900).resetFully();a.setInstanceMap(922011E3).resetFully();a.startEventTimer(36E5);return a}function scheduledTimeout(a){a.disposeIfPlayerBelow(100,null==a.getProperty("cleared")?92201E4:922011100);em.setProperty("state","0")}function changedMap(a,b,c){switch(c){case 922010100:case 922010200:case 922010201:case 922010300:case 922010400:case 922010401:case 922010402:case 922010403:case 922010404:case 922010405:case 922010500:case 922010501:case 922010502:case 922010503:case 922010504:case 922010505:case 922010506:case 922010600:case 922010700:case 922010800:case 922010900:case 922011E3:return}a.unregisterPlayer(b);a.disposeIfPlayerBelow(0,0)&&em.setProperty("state","0")}function playerEntry(a,b){var c=em.getMapFactory().getMap(922010100);b.changeMap(c,c.getPortal(0));b.tryPartyQuest(1202)}function playerRevive(a,b){}function playerDisconnected(a,b){return-3}function leftParty(a,b){a.disposeIfPlayerBelow(minPlayers,null==a.getProperty("cleared")?92201E4:922011100)?em.setProperty("state","0"):playerExit(a,b)}function disbandParty(a){a.disposeIfPlayerBelow(100,null==a.getProperty("cleared")?92201E4:922011100);em.setProperty("state","0")}function playerExit(a,b){var c=em.getMapFactory().getMap(null==a.getProperty("cleared")?92201E4:922011100);a.unregisterPlayer(b);b.changeMap(c,c.getPortal(0))}function removePlayer(a,b){a.unregisterPlayer(b)}function clearPQ(a){a.disposeIfPlayerBelow(100,null==a.getProperty("cleared")?92201E4:922011100);em.setProperty("state","0")}function finish(a){a.disposeIfPlayerBelow(100,null==a.getProperty("cleared")?92201E4:922011100);em.setProperty("state","0")}function timeOut(a){a.disposeIfPlayerBelow(100,null==a.getProperty("cleared")?92201E4:922011100);em.setProperty("state","0")}function cancelSchedule(){}function playerDead(){}function allMonstersDead(a){};