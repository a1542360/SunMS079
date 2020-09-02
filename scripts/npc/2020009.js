/* ==================
 脚本类型: NPC	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */

var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 1) {
            cm.sendOk("等您下定决心再次找我吧.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		if (cm.getJob() == 211 || cm.getJob() == 221 || cm.getJob() == 231 || cm.getJob() == 212 || cm.getJob() == 222 || cm.getJob() == 232) {	
	    cm.sendOk("您属于法师职业,但是您已经成功三转了,已经超越了教官的强大了!");
	    cm.dispose();
	    return;
		}
            if (!(cm.getJob()==210 ||cm.getJob()==220||cm.getJob()==230)) {
		cm.sendOk("请找您的转职教官,您不属于法师职业!");
                cm.dispose();
                return;
			} else if (cm.getPlayer().getLevel() < 70) {
				cm.sendOk("你的等级尚未达到70级");
				cm.dispose();
				return;		
            }	
			if (cm.isQuestActive(100111)){
                cm.sendNext("恭喜你到达这里,最后我将给你一个考验!");					
            } else if (!(cm.haveItem(4031057,1))) {
				//cm.warp(101000003);
				cm.forceStartQuest(100110); //开始任务
                cm.sendOk("看起来你并没有资格转职，去找#r汉斯#k他会帮助你的!");
                cm.dispose();
            } else if (cm.getPlayer().getRemainingSp() <= (cm.getLevel() - 70) * 3) {
                cm.sendNext("你的技能点数还没点完..");
		} else {
                cm.sendOk("你还不能转职...");
                cm.dispose();
            }
        } else if (status == 1) {
            if (cm.haveItem(4031058, 1) && cm.isQuestActive(100113)) {
                if (cm.getJob()==210) {
                    cm.changeJob(211);
                    //cm.getPlayer().gainAp(5);
					cm.gainItem(4031057, -1);
					cm.gainItem(4031058, -1);
					cm.sendOk("恭喜你现在已经成为巫师(火.毒)了!");
					cm.worldMessage("恭喜玩家 - "+cm.getChar().getName()+"成功三转火毒巫师让我们热烈的祝福他/她吧！");
                    cm.dispose();
                } else if (cm.getJob()==220) {
                    cm.changeJob(221);
                    //cm.getPlayer().gainAp(5);
					cm.gainItem(4031057, -1);
					cm.gainItem(4031058, -1);
                    cm.sendOk("恭喜你现在已经成为巫师(冰.雷)了!");
					cm.worldMessage("恭喜玩家 - "+cm.getChar().getName()+"成功三转冰雷巫师让我们热烈的祝福他/她吧！");
					
                    cm.dispose();
                } else if (cm.getJob()==230) {
                    cm.changeJob(231);
                    //cm.getPlayer().gainAp(5);
					cm.gainItem(4031057, -1);
					cm.gainItem(4031058, -1);
                    cm.sendOk("恭喜你现在已经成为祭司了!");
					cm.worldMessage("恭喜玩家 - "+cm.getChar().getName()+"成功三转祭司让我们热烈的祝福他/她吧！");
                    cm.dispose();
                }
            } else if (cm.isQuestFinished(100111))
                cm.sendAcceptDecline("你准备承担最终测试??");
            else
                cm.sendAcceptDecline("但是，我可以让你更加强大。虽然你必须证明不仅是你的实力，以你的能力,你准备好挑战了吗？");
        } else if (status == 2) {
            if (!cm.isQuestFinished(100111)) {
				cm.forceStartQuest(100112); //开始任务
                cm.sendOk("去找神圣的石头测验吧!!它在#k雪原圣地#k");
                cm.dispose();
            }
        }
    }
}
