/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */importPackage(Packages.client);var status=-1;function start(a,b,c){status++;if(1!=a)if(1==b&&0==a)status-=2;else{qm.sendOk("\u8fd9\u5c06\u662f\u4f60\u8fdb\u5165\u57ce\u5821\u7684\u552f\u4e00\u65b9\u5f0f\u3002 \u8bf7\u60f3\u60f3");qm.dispose();return}0==status&&qm.sendNext("\u554a! \u53ef\u80fd\u6709\u4e00\u79cd\u65b9\u6cd5...\u5982\u679c\u4f60\u80fd\u5229\u7528\u6211\u4eec\u4e3a\u4fdd\u62a4\u6211\u4eec\u7684\u57ce\u5821\u800c\u589e\u957f\u7684\u810a\u690e\u85e4\uff0c\u90a3\u4e48\u4f60\u53ea\u662f\u53ef\u4ee5\u8fdb\u5165\u524d\u63d0!");1==status&&qm.sendAcceptDecline("\u5982\u679c\u4f60\u80fd\u4ee5\u67d0\u79cd\u65b9\u5f0f\u6d88\u9664\u810a\u690e\u85e4\u8513\u7684\u810a\u690e\uff0c\u90a3\u4e48\u4f60\u5c06\u80fd\u591f\u722c\u4e0a\u7684\u57ce\u5821\u5899\u4e0a\u4f7f\u7528\u8461\u8404\u85e4\u3002 \u5f53\u7136\uff0c\u8fd9\u4e5f\u9700\u8981\u4e00\u4e2a\u8461\u8404\u6811\u5378\u5986...");2==status&&qm.sendOk("#b\u810a\u67f1\u5378\u9664#k\u662f\u4ece\u5728El Naths\u9ad8\u5730\u7684\u795e\u79d8\u8349\u672c\u7684\u63d0\u53d6\u7269\u521b\u9020\u7684\u3002 King Pepe\u4f7f\u7528\u8fd9\u4e9b\u8349\u836f\u6765\u4e2d\u6bd2\u732a\uff0c\u5e76\u63a5\u7ba1\u8611\u83c7\u68ee\u6797. #b\u9676\u9189\u732a\u5c3e\u5df4#k \u5728\u8fd9\u91cc\u4f60\u4f1a\u53d1\u73b0\u836f\u8349\u63d0\u53d6\u7269\u3002\u8bf7\u6536\u96c6\u8d77\u6765 #b100 \u9676\u9189\u732a\u5c3e\u5df4s#k \u5e76\u5e26\u4ed6\u4eec\u5230 #b\u9b54\u6cd5\u90e8\u90e8\u957f.#k");3==status&&(qm.gainExp(11E3),qm.sendOk("\u5e72\u5f97\u597d,\u901a\u8fc7\u8be5\u5730\u533a\u822a\u884c."),qm.forceCompleteQuest(),qm.dispose())}function end(a,b,c){status++;if(1!=a)if(1==b&&0==a)status-=2;else{qm.dispose();return}0==status&&qm.sendOk("\u55ef\uff0c\u6211\u770b\u5230\u4e86\u8fd9\u4e48\u5168\u5fc3\u5168\u610f\u5730\u8c03\u7528\u5b8c\u5168\u5173\u95ed\u5165\u53e3\u548c\u4e00\u5207.");1==status&&(qm.gainExp(11E3),qm.sendOk("\u5e72\u5f97\u597d \u901a\u8fc7\u8be5\u5730\u533a\u822a\u884c."),qm.forceCompleteQuest(),qm.dispose())};