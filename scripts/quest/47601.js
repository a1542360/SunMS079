/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */var status=-1;function start(a,b,c){-1==a?qm.dispose():(1==a?status++:status--,0==status?qm.sendNext("\u597d\u4e45\u4e0d\u89c1\u3002\u8fd9\u6bb5\u65f6\u95f4\u4f60\u771f\u7684\u5f3a\u4e86\u5f88\u591a\u3002\u73b0\u5728\u5192\u9669\u9a91\u58eb\u56e2\u51e0\u4e4e\u627e\u4e0d\u5230\u6bd4\u4f60\u66f4\u5f3a\u7684\u4eba\u4e86\u3002\u9a91\u58eb\u56e2\u957f\u4eec\u597d\u50cf\u4e5f\u4e0d\u662f\u4f60\u7684\u5bf9\u624b\u4e86\u2026\u2026\u5ba2\u5957\u8bdd\u5c31\u8bf4\u5230\u8fd9\u91cc\uff0c\u4e0b\u9762\u6211\u5c31\u76f4\u8bdd\u76f4\u8bf4\u4e86\u3002"):1==status?qm.sendNextPrev("\u6709\u4e00\u4e2a\u65b0\u4efb\u52a1\u3002\u6839\u636e\u524d\u4e0d\u4e45\u6536\u5230\u7684\u60c5\u62a5\uff0c#r\u9ed1\u8272\u4e4b\u7ffc#k\u7684\u67d0\u4e2a\u6210\u5458\u5984\u56fe\u5bf9\u5973\u7687\u4e0d\u5229\u3002\u4e3a\u4e86\u963b\u6b62\u4ed6\uff0c\u9a91\u58eb\u56e2\u7684\u9ad8\u7ea7\u9a91\u58eb#b#p1103000##k\u6b63\u5728\u91c7\u53d6\u884c\u52a8\uff0c\u4f46\u4ed6\u4e00\u4e2a\u4eba\u597d\u50cf\u6709\u70b9\u56f0\u96be\u3002"):2==status?qm.sendNextPrev("\u91d1\u94f6\u5c9b\u8fd8\u884c\uff0c\u800c\u795e\u79d8\u5c9b\u662f\u8fde\u9a91\u58eb\u56e2\u7684\u60c5\u62a5\u5458\u90fd\u4e0d\u592a\u4e86\u89e3\u7684\u5730\u65b9\uff0c\u56e0\u6b64\u9700\u8981\u652f\u63f4\u3002\u4f60\u80fd\u53bb\u652f\u63f4#p1103000#\u5417\uff1f\u5979\u6700\u540e\u4e00\u6b21\u548c\u6211\u4eec\u8054\u7cfb\u662f\u5728#b#m211000000##k\uff0c\u4f60\u5148\u53bb\u90a3\u91cc\u627e\u627e#p1103000#\u3002"):3==status&&(qm.forceStartQuest(),qm.sendAcceptDecline("\u6700\u540e\u5fd8\u8bb0\u544a\u8bc9\u4f60\u7684\u662f\uff0c\u675c\u7eb3\u7c73\u65af\u6700\u540e\u662f\u5728#b\u51b0\u5cf0\u96ea\u57df#k\u5931\u53bb\u8054\u7cfb\u7684\uff0c\u53bb\u51b0\u5cf0\u96ea\u57df\u5e94\u8be5\u5c31\u80fd\u627e\u5230\u4ed6\u2026\u2026"),qm.dispose()))};