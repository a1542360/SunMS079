/* ==================
 脚本类型:  传送门    
 版权：游戏盒团队     
 联系扣扣：297870163    609654666
 =====================
 */var quest,tomap,uncompletedmap;function enter(a){switch(a.getMapId()){case 270010100:quest=3501;tomap=270010110;uncompletedmap=27001E4;break;case 270010200:quest=3502;tomap=270010210;uncompletedmap=270010110;break;case 270010300:quest=3503;tomap=270010310;uncompletedmap=270010210;break;case 270010400:quest=3504;tomap=270010410;uncompletedmap=270010310;break;case 270010500:quest=3507;tomap=27002E4;uncompletedmap=270010410;break;case 270020100:quest=3508;tomap=270020110;uncompletedmap=27002E4;break;case 270020200:quest=3509;tomap=270020210;uncompletedmap=270020110;break;case 270020300:quest=3510;tomap=270020310;uncompletedmap=270020210;break;case 270020400:quest=3511;tomap=270020410;uncompletedmap=270020310;break;case 270020500:quest=3514;tomap=27003E4;uncompletedmap=270020410;break;case 270030100:quest=3515;tomap=270030110;uncompletedmap=27003E4;break;case 270030200:quest=3516;tomap=270030210;uncompletedmap=270030110;break;case 270030300:quest=3517;tomap=270030310;uncompletedmap=270030210;break;case 270030400:quest=3518;tomap=270030410;uncompletedmap=270030310;break;case 270030500:quest=3521;tomap=27004E4;uncompletedmap=270030410;break;case 27004E4:if(a.haveItem(4032002))return a.playPortalSE(),a.warp(270040100,"out00"),a.playerMessage("\u73b0\u5728\u79fb\u52a8\u5230\u5bfa\u5e99\u7684\u6df1\u90e8."),!0;a.playerMessage("\u65e0\u6cd5\u7ee7\u7eed\u8fdb\u884c\uff0c\u5c31\u597d\u50cf\u4e00\u4e2a\u529b\u91cf\u963b\u6b62\u4efb\u4f55\u4eba\u8fdb\u5165.");return!1;default:return!1}2==a.getQuestStatus(quest)?(a.playPortalSE(),a.warp(tomap,"out00")):(a.playPortalSE(),a.warp(uncompletedmap,0),a.playerMessage("\u5165\u4fb5\u8005\u65e0\u6cd5\u626d\u8f6c\u6765\u81ea\u5723\u6bbf\u7684\u7535\u6d41\uff0c\u5e76\u88ab\u9001\u56de\u5230\u4ed6\u4eec\u4ee5\u524d\u7684\u5730\u70b9."));return!0};