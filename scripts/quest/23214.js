/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */var status=-1;function end(a,b,c){start(a,b,c)}function end(a,b,c){if(0==a){if(0==status){qm.sendNext("\u8fd9\u662f\u4e3a\u4e86\u4e00\u4e2a\u91cd\u8981\u7684\u51b3\u5b9a.");qm.safeDispose();return}status--}else status++;0==status?qm.sendYesNo("\u4f60\u4eec\u5df2\u7ecf\u505a\u51fa\u4e86\u51b3\u5b9a\uff1f\u8be5\u51b3\u5b9a\u5c06\u662f\u6700\u7ec8\u7684\uff0c\u6240\u4ee5\u51b3\u5b9a\u505a\u4ec0\u4e48\u4e4b\u524d\uff0c\u4ed4\u7ec6\u8003\u8651\u3002\u4f60\u786e\u5b9a\u4f60\u60f3\u6210\u4e3a\u4e00\u4e2a\u65a9\u5996\u9664\u9b54?"):1==status?(qm.sendNext("\u6211\u521a\u521a\u6210\u578b\u4f60\u7684\u8eab\u4f53\uff0c\u4f7f\u5176\u5b8c\u7f8e\u7684\u65a9\u5996\u9664\u9b54\u3002\u5982\u679c\u4f60\u60f3\u53d8\u5f97\u66f4\u5f3a\u5927\uff0c\u4f7f\u7528\u7edf\u8ba1\u7a97\u53e3\uff08S\uff09\uff0c\u4ee5\u63d0\u9ad8\u76f8\u5e94\u7684\u7edf\u8ba1\u4fe1\u606f\u3002\u5982\u679c\u60a8arn't\u4e00\u5b9a\u8981\u63d0\u9ad8\u4ec0\u4e48\uff0c\u53ea\u8981\u70b9\u51fb #b\u6c7d\u8f66#k."),3110==qm.getJob()&&(qm.teachSkill(31110010,1,1),qm.changeJob(3111),qm.teachSkill(30011109,1,1)),qm.forceCompleteQuest()):2==status?qm.sendNextPrev("\u6211\u4e5f\u62d3\u5c55\u60a8\u7684\u5e93\u5b58\u65f6\u9699\u8ba1\u6570\u4e3a\u60a8\u7684\u8bbe\u5907\u7b49\u5b58\u8d27\u3002\u4f7f\u7528\u8fd9\u4e9b\u63d2\u69fd\u660e\u667a\u548c\u586b\u5145\u5b83\u4eec\u4e0e\u6297\u6027\u6240\u9700\u7269\u54c1\u968f\u8eab\u643a\u5e26."):3==status&&(qm.sendNextPrev("\u73b0\u5728...\u6211\u5e0c\u671b\u4f60\u53bb\u90a3\u91cc\uff0c\u5411\u4e16\u754c\u5c55\u793a\u4e86\u7535\u963b\u5982\u4f55\u8fd0\u4f5c."),qm.safeDispose())};