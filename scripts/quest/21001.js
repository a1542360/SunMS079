/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */var status=-1;function start(a,b,c){if(1==a)status++;else{if(0==status){qm.sendNext("\u4e0d\uff01 \u72c2\u72fc\u52c7\u58eb\u62d2\u7edd\u4e86\uff01");qm.dispose();return}status--}0==status?qm.askAcceptDecline("...\u5dee\u70b9\u88ab\u5413\u6b7b...\u5feb\uff01\u5feb\u70b9\u5e26\u6211\u53bb\u627e\u8d6b\u4e3d\u5a1c\u5927\u4eba\uff01"):1==status&&(0==qm.getQuestStatus(21001)&&(qm.gainItem(4001271,1),qm.forceStartQuest(21001,null)),qm.warp(914000300,0),qm.dispose())}function end(a,b,c){if(1==a)status++;else{if(0==status){qm.sendNext("\u5b69\u5b50\u5462\uff1f \u5018\u82e5\u60a8\u6551\u4e86\u90a3\u4e9b\u5b69\u5b50\uff0c\u5c31\u5feb\u70b9\u8ba9\u4ed6\u4eec\u4e0a\u6765\u5427\uff01");qm.dispose();return}if(8==status){qm.haveItem(4001271)&&qm.gainItem(4001271,-1);qm.MovieClipIntroUI(!0);qm.forceCompleteQuest();qm.warp(914090010,0);qm.dispose();return}status--}0==status?qm.sendYesNo("\u554a\u554a\uff0c\u60a8\u5e73\u5b89\u65e0\u4e8b\u5f52\u6765\u4e86\uff01 \u5b69\u5b50\u5462\uff1f\u60a8\u628a\u90a3\u4e9b\u5b69\u5b50\u5e26\u56de\u6765\u4e86\u5417\uff1f"):1==status?qm.sendNext("\u771f\u662f\u592a\u597d\u4e86... \u771f\u662f\u592a\u597d\u4e86....."):2==status?qm.sendNextPrevS("\u5feb\u70b9\u5750\u4e0a\u98de\u884c\u8239\u5427\uff01\u6ca1\u65f6\u95f4\u4e86\u3002",3):3==status?qm.sendNextPrev("\u5bf9\uff0c\u5bf9\u4e86\uff01\u73b0\u5728\u4e0d\u662f\u8c08\u8fd9\u4e9b\u4e8b\u60c5\u7684\u65f6\u673a\u3002\u9ed1\u9b54\u6cd5\u5e08\u7684\u6c14\u606f\u5df2\u7ecf\u6162\u6162\u5730\u9760\u8fd1\u4e86\uff01\u597d\u50cf\u5df2\u7ecf\u5bdf\u89c9\u65b9\u821f\u7684\u4f4d\u7f6e\u4e86\uff01\u4e0d\u8d76\u5feb\u51fa\u53d1\u7684\u8bdd\uff0c\u5c31\u4f1a\u88ab\u902e\u4e2a\u6b63\u7740\u3002"):4==status?qm.sendNextPrevS("\u7acb\u523b\u51fa\u53d1\uff01",3):5==status?qm.sendNextPrev("\u72c2\u72fc\u52c7\u58eb\uff01\u4f60\u4e5f\u5750\u4e0a\u65b9\u821f\u5427\uff01\u6211\u867d\u7136\u4e86\u89e3\u60a8\u60f3\u706b\u62da\u5230\u6700\u540e\u4e00\u523b\u7684\u5fc3\u60c5...\u53ef\u662f\u5df2\u7ecf\u592a\u8fdf\u4e86\uff01\u6253\u4ed7\u8fd9\u4e2a\u4efb\u52a1\u5c31\u4ea4\u7ed9\u60a8\u7684\u540c\u4f34\uff0c\u8ddf\u6211\u4eec\u4e00\u8d77\u524d\u5f80\u7ef4\u591a\u5229\u4e9a\u5c9b\u5427\uff01"):6==status?qm.sendNextPrevS("\u7edd\u5bf9\u4e0d\u884c\uff01",3):7==status?qm.sendNextPrevS("\u8d6b\u4e3d\u5a1c\uff0c\u60a8\u5148\u53bb\u7ef4\u591a\u5229\u4e9a\u5c9b\u5427\uff01\u6211\u7edd\u5bf9\u4e0d\u4f1a\u6b7b\u5fc3\u7684\uff0c\u6211\u4eec\u540e\u4f1a\u6709\u671f\u3002\u6211\u8981\u548c\u540c\u4f34\u4eec\u4e00\u8d77\u53bb\u5bf9\u4ed8\u9ed1\u9b54\u6cd5\u5e08\uff01",3):8==status?qm.sendYesNo("\u8bf7\u95ee\u60a8\u60f3\u8df3\u8fc7\u52a8\u753b\u5417\uff1f"):9==status&&(qm.haveItem(4001271)&&qm.gainItem(4001271,-1),qm.forceCompleteQuest(),qm.warp(14009E4,0),qm.dispose())};