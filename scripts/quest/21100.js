/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */var status=-1;function start(a,b,c){if(1==a)status++;else{if(6==status){qm.sendNext("\u6709\u4ec0\u4e48\u597d\u72b9\u8c6b\u7684\u5462\uff1f\u5047\u5982#p1201001#\u6ca1\u6709\u53cd\u5e94\uff0c\u4e5f\u6ca1\u4ec0\u4e48\u597d\u5931\u671b\u7684\u3002\u5feb\u70b9\u53bb\u6478#p1201001#\u3002\u5728\u9002\u5f53\u7684\u5730\u65b9#b\u70b9\u9009#k\u5c31\u53ef\u4ee5\u4e86\u3002");qm.dispose();return}status--}0==status?qm.sendNextS("\u548c\u9ed1\u9b54\u6cd5\u5e08\u51b3\u6597\u7684\u82f1\u96c4...\u51e0\u4e4e\u6ca1\u6709\u4efb\u4f55\u76f8\u5173\u7684\u8d44\u8baf\u4fdd\u5b58\u4e0b\u6765\u3002\u9884\u8a00\u4e66\u4e0a\u4e5f\u53ea\u8bb0\u5f55\u6709\u4e94\u540d\u82f1\u96c4\uff0c\u6ca1\u6709\u4efb\u4f55\u548c\u5916\u8c8c\u6709\u5173\u7684\u8d44\u6599\u3002\u4f60\u96be\u9053\u4ec0\u4e48\u90fd\u60f3\u4e0d\u8d77\u6765\u5417\uff1f",8):1==status?qm.sendNextPrevS("\u4ec0\u4e48\u90fd\u60f3\u4e0d\u8d77\u6765...",2):2==status?qm.sendNextPrevS("\u539f\u6765\u5982\u6b64\u3002\u9ed1\u9b54\u6cd5\u5e08\u7684\u8bc5\u5492\u4e0d\u4f1a\u90a3\u4e48\u5bb9\u6613\u5c31\u88ab\u89e3\u9664\u3002\u53ef\u662f\u5c31\u7b97\u5982\u6b64\uff0c\u82f1\u96c4\u60a8\u548c\u8fc7\u53bb\u4e4b\u95f4\u5e94\u8be5\u6709\u4ec0\u4e48\u8fde\u7ed3\u3002\u5230\u5e95\u6709\u4ec0\u4e48\u6b66\u5668\u5462\uff1f\u56e0\u4e3a\u51b3\u6597\u7684\u5173\u7cfb\uff0c\u6b66\u5668\u6216\u8863\u670d\u90fd\u4e0d\u89c1\u4e86...\u554a\uff01\u5bf9\u4e86\uff01 #b\u6b66\u5668#k\uff01",8):3==status?qm.sendNextPrevS("\u6b66\u5668\uff1f",2):4==status?qm.sendNextPrevS("\u4e4b\u524d\u5728\u51b0\u96ea\u4e2d\u6316\u6398\u82f1\u96c4\u65f6\u66fe\u7ecf\u627e\u5230\u4e00\u4e9b\u5389\u5bb3\u7684\u6b66\u5668\u3002\u5f53\u65f6\u63a8\u6d4b\u5e94\u8be5\u662f\u82f1\u96c4\u4f7f\u7528\u8fc7\u7684\u4e1c\u897f\uff0c\u56e0\u6b64\u4fdd\u5b58\u5728\u6751\u5e84\u4e2d\u592e\u3002\u60a8\u7ecf\u8fc7\u65f6\u6ca1\u770b\u5230\u5417\uff1f #b#p1201001##k... \r\r#i4032372#\r\r\u957f\u6210\u8fd9\u6837...",8):5==status?qm.sendNextPrevS("\u96be\u602a\u6211\u89c9\u5f97\u5f88\u5947\u602a\uff0c\u6709\u628a #p1201001# \u5c31\u5728\u6751\u5e84\u91cc\u9762...",2):6==status?qm.askAcceptDecline("\u662f\uff0c\u5c31\u662f\u90a3\u4e2a\u3002\u6839\u636e\u7eaa\u5f55\u82f1\u96c4\u7684\u6b66\u5668\u4f1a\u8ba4\u4e3b\u4eba\u3002\u5047\u5982\u60a8\u662f\u4f7f\u7528 #p1201001#\u7684\u82f1\u96c4\uff0c\u6293\u4f4f #p1201001#\u65f6\u5e94\u8be5\u4f1a\u6709\u4ec0\u4e48\u53cd\u5e94\u3002\u5feb\u70b9\u53bb\u6309#b#p1201001#\u5427\u3002#k"):7==status&&(0==qm.getQuestStatus(21100)&&qm.forceCompleteQuest(),qm.sendOkS("\u5047\u5982 #p1201001#\u6709\u53cd\u5e94\u7684\u8bdd\uff0c\u60a8\u5c31\u4f7f\u7528#p1201001#\u7684\u82f1\u96c4 #b\u72c2\u72fc\u52c7\u58eb#k\u3002",8),qm.showWZEffect("Effect/Direction1.img/aranTutorial/ClickPoleArm"),qm.dispose())}function end(a,b,c){qm.dispose()};