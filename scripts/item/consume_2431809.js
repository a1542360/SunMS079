/* ==================
 脚本类型: 道具
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */function start(){1>im.getInventory(1).getNumFreeSlot()||2>im.getInventory(2).getNumFreeSlot()||1>im.getInventory(4).getNumFreeSlot()?im.sendOk("\u8bf7\u589e\u52a0\u5e93\u5b58\u7a7a\u95f4."):(im.gainItem(4310066,5),im.gainPotentialItem(1242053,1,18),im.gainItem(2430442,1),im.gainItem(2290285,1),im.removeItem(2431809));im.dispose()};