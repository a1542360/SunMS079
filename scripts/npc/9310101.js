var status = -1;

function start()
{
	cm.sendSimple("��������#r�߼����#k������������ɸ���������Խ�����һ��#b�����߼����#k.����#b25#k�����Ҷһ�����Ҫ�Ľ����ɣ�\r\n#L0##bʹ��25��#v4000463# �һ� #v2048010# #k#l\r\n#L1##bʹ��25��#v4000463# �һ� #v2048011# #k#l\r\n#L2##bʹ��25��#v4000463# �һ� #v2048012# #k#l\r\n#L3##bʹ��25��#v4000463# �һ� #v2048013# #k#l");
	
}

function action(mode, type, selection) {
	if(selection == 0)
	{
		if(!cm.haveItem(4000463, 25))
		{
			cm.sendOk("�ܿ�ϧŶ, �㲢û��#b25#k��#v4000463#.");
			cm.dispose();
			return;
		}
		
		if(!cm.canHold(2048010, 1))
		{
			cm.sendOk("����#b����#k�Ѿ�û�пռ���, �뼰ʱ��������#b����#kŶ��");
			cm.dispose();
			return;
		}

		cm.gainItem(4000463, -25);
		cm.gainItem(2048010, 1);
		cm.sendOk("�һ��ɹ�, #v2048010# #bx1#k.");
		cm.dispose();
	}
	else if(selection == 1)
	{
		if(!cm.haveItem(4000463, 25))
		{
			cm.sendOk("�ܿ�ϧŶ, �㲢û��#b10#k��#v4000463#.");
			cm.dispose();
			return;
		}
		
		if(!cm.canHold(2048011, 1))
		{
			cm.sendOk("����#b����#k�Ѿ�û�пռ���, �뼰ʱ��������#b����#kŶ��");
			cm.dispose();
			return;
		}

		cm.gainItem(4000463, -25);
		cm.gainItem(2048011, 1);
		cm.sendOk("�һ��ɹ�, #v2048011# #bx1#k.");
		cm.dispose();
	}
	else if(selection == 2)
	{
		if(!cm.haveItem(4000463, 25))
		{
			cm.sendOk("�ܿ�ϧŶ, �㲢û��#b10#k��#v4000463#.");
			cm.dispose();
			return;
		}
		
		if(!cm.canHold(2048012, 1))
		{
			cm.sendOk("����#b����#k�Ѿ�û�пռ���, �뼰ʱ��������#b����#kŶ��");
			cm.dispose();
			return;
		}

		cm.gainItem(4000463, -25);
		cm.gainItem(2048012, 1);
		cm.sendOk("�һ��ɹ�, #v2048012# #bx1#k.");
		cm.dispose();
	}
	else if(selection == 3)
	{
		if(!cm.haveItem(4000463, 25))
		{
			cm.sendOk("�ܿ�ϧŶ, �㲢û��#b10#k��#v4000463#.");
			cm.dispose();
			return;
		}
		
		if(!cm.canHold(2048013, 1))
		{
			cm.sendOk("����#b����#k�Ѿ�û�пռ���, �뼰ʱ��������#b����#kŶ��");
			cm.dispose();
			return;
		}

		cm.gainItem(4000463, -25);
		cm.gainItem(2048013, 1);
		cm.sendOk("�һ��ɹ�, #v2048013# #bx1#k.");
		cm.dispose();
	}
}