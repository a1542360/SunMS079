/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */var status=-1;function start(a,b,c){if(1==a)status++;else{if(2==status){qm.sendNext("\u4f60\u9ed8\u9ed8\u4e0d\u660e\u767d\u8fd9\u662f\u600e\u4e48\u56de\u4e8b\uff1f\u6211\u4f1a\uff0c\u5982\u679c\u4f60\u8ddf\u6211\u4e00\u6b21\u518d\u6b21\u89e3\u91ca\u7ed9\u4f60\u542c.");qm.dispose();return}status--}0==status?qm.sendNext("#t4032315#... #r\u8fd9\u4e2a\u6728\u5076\u6b63\u5728\u53d1\u51fa\u5947\u602a\u7684\u566a\u97f3#k. \u4f60\u4e0d\u80fd\u7528\u4f60\u7684\u8033\u6735\u542c\u5230\uff0c\u5f53\u7136\uff0c\u56e0\u4e3a\u5b83\u53ea\u80fd\u542c\u5230 #o1210102#. \u6211\u76f8\u4fe1\u8fd9\u662f\u566a\u97f3\u6539\u53d8\u4e86\u4e2a\u6027\u7684#o1210102#."):1==status?qm.askAcceptDecline("#o1210102# \u5df2\u7ecf\u53d7\u5230\u566a\u97f3\u7684\u5f71\u54cd\u5df2\u53d8\u5f97\u6124\u4e16\u5ac9\u4fd7\u3002 \u4ed6\u4eec\u5df2\u7ecf\u5f00\u59cb\u4e0e\u672a\u53d7\u5f71\u54cd\u7684\u4eba\u6253 #o1210102#, \u8fd9\u5df2\u7ecf\u4f7f\u6240\u6709 #o1210102# \u51c6\u5907\u6218\u6597. #b\u7684 \u6240\u6709\u8fd9\u4e9b\u7684\u539f\u56e0 \u6539\u53d8\u5728 \u7684 #o1210102# \u662f\u8fd9\u4e2a\u6728\u5076#k! \u4f60\u660e\u767d\u5417?"):2==status?(qm.forceStartQuest(),qm.sendNextS("\u6211\u4e0d\u77e5\u9053\u4ec0\u4e48\u89e6\u53d1\u4e86\u8fd9\u4e2a \u7684 \u7b2c\u4e00\u540d. \u7684\u662f\u6ca1\u6709\u529e\u6cd5\u8fd9\u4e2a\u6728\u5076\u662f\u81ea\u7136\u521b\u9020\u7684\uff0c\u8fd9\u610f\u5473\u7740\u6709\u4eba\u8ba1\u5212\u8fd9\u4e2a\u3002 \u6211\u5e94\u8be5\u7559\u610f\u7684 #o1210102#.",9)):3==status&&(qm.sendPrevS("#b(\u4f60\u80fd\u591f\u627e\u51fa\u5bfc\u81f4\u7684\u539f\u56e0 \u7684 \u6539\u53d8\u5728 \u7684 #o1210102#.\u4f60\u5e94\u8be5\u62a5\u544a#p1002104#\u5e76\u63d0\u4f9b \u4f60\u7684\u4fe1\u606f.)#k",2),qm.dispose())}function end(a,b,c){qm.dispose()};