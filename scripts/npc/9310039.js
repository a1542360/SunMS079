/* ==================
 �ű�����:  NPC	    
 �ű����ߣ�һ�ߺ�ð�յ��Ŷ�    
 ��ϵ�ۿۣ�297870163   609654666 
 =====================
 */
var status = 0;

function start() 
	{
	status = -1;
	action(1, 0, 0);
	}

function action(mode, type, selection)
{
	if (mode == -1)
	{
		cm.dispose();
	}
	else if (mode == 0)
	{
		cm.sendOk("�õ����Ҫ��ս#b��ɮ#k��ʱ������.");
		cm.dispose();
	} 
	else 
	{
	if (mode == 1)
	status++;
	else
	status--;
		
	if (status == 0)
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                cm.dispose();
                }else if( cm.getPlayer().getBossLog("shaoling") >= 2) {
	            cm.sendOk("����,�޶�ÿ��ֻ����ս2�Σ�");
                cm.dispose();
		        }else if(!party.getMembers().size() < 3) {//�ж�����
	            cm.sendOk("��Ҫ 3 �����ϵ���Ӳ��ܽ��룡!");
                cm.dispose();
				}else if(!cm.getPlayerCount(702060000) <= 0) {//�ж�������û����
	            cm.sendOk("����������ʱ�޷����룡!");
                cm.dispose();
		}else{
	//map = cm.getPlayer().getMap();
	cm.getMap(702060000).resetFully();//��ͼˢ��
	cm.warpParty(702060000, 0);
	cm.getPlayer().setBossLog("shaoling");
	//cm.getPlayer().startMapTimeLimitTask(1200, map);//����ͼʱ��
	cm.dispose();
		}
	}
}
