
function action(mode, type, selection) {
cm.dispose();
if (selection == 0) {
       if(cm.haveItem(5252006) == true) {
        cm.gainItem(5252006,-1);
        cm.summonMob(9400592, 200000000, 40000, 1);//��ħ��     
cm.serverNotice("��糺���ʿ�Ź��桻����"+ cm.getChar().getName() +"���������Ķ��ѿ�ʼ��ս糺���ʿ���ռ�BOSS����ħ�ˡ���"); 
        }else{
        cm.sendOk("��Ǹ��û��糺�����Կ�ס��Ҳ���Ϊ���ٻ�"); 
	cm.dispose();}
} else if (selection == 1) {
       if(cm.haveItem(5252006) == true) {
        cm.gainItem(5252006,-1);
cm.serverNotice("��糺���ʿ�Ź��桻����"+ cm.getChar().getName() +"���������Ķ��ѿ�ʼ��ս糺���ʿ���ռ�BOSS��Ѫ�潫������");  
        cm.summonMob(9400591, 200000000, 40000, 1);//Ѫ�潫��     
        }else{
        cm.sendOk("��Ǹ��û��糺�����Կ�ס��Ҳ���Ϊ���ٻ�"); 
	cm.dispose();}
} else if (selection == 2) {
       if(cm.haveItem(5252006) == true) {
        cm.gainItem(5252006,-1);
cm.serverNotice("����Ա���桻����"+ cm.getChar().getName() +"���������Ķ��ѿ�ʼ��ս糺���ʿ���ռ�BOSS��������������"); 
        cm.summonMob(9400589, 200000000, 40000, 1);//��������     
        }else{
        cm.sendOk("��Ǹ��û��糺�����Կ�ס��Ҳ���Ϊ���ٻ�"); 
	cm.dispose();}
} else if (selection == 3) { 
        if (!cm.haveItem(4001009,1)) {
        cm.sendOk("��Ǹ����û��1��#v4001009#�޷�Ϊ�㿪��");
        } else if (!cm.haveItem(4001010,1)) {
        cm.sendOk("��Ǹ����û��1��#v4001010#�޷�Ϊ�㿪��"); 
        } else if (!cm.haveItem(4001011,1)) {
        cm.sendOk("��Ǹ����û��1��#v4001011#�޷�Ϊ�㿪��"); 
        } else if (!cm.haveItem(4001012,1)) {
        cm.sendOk("��Ǹ����û��1��#v4001012#�޷�Ϊ�㿪��"); 
        } else if (!cm.haveItem(4001013,1)) {
        cm.sendOk("��Ǹ����û��1��#v4001013#�޷�Ϊ�㿪��"); 
        }else{
	cm.gainItem(4001009,-1);
	cm.gainItem(4001010,-1);
	cm.gainItem(4001011,-1);
	cm.gainItem(4001012,-1);
	cm.gainItem(4001013,-1);
	cm.gainItem(4021010,1);
	cm.dispose();
}
} else if (selection == 4) {
        if (!cm.haveItem(4021010,1)) {
        cm.sendOk("��Ǹ����û��#v4021010#�޷�Ϊ�㿪��");
cm.dispose();
    } else {
cm.warp(803001400, 0);
cm.dispose();
}
}else if (selection == 8) {
    cm.warp(910000000, 0);
    cm.dispose();
}else if (selection == 5) {
cm.sendOk("���������������е�BOSS����ÿһ��BOSS���ᱬ��һ��ƾ֤#r��ƾ֤����90%��#k���ռ�5��ƾ֤�����������Ҷһ�ͨ��֤����Ȼ���ڵ��ң��ҽ������Ǵ��͵��콱��ͼ��");      
cm.dispose();
} else if (selection == 6) {
       if(cm.haveItem(5252006) == true) {
        cm.gainItem(5252006,-1);
cm.serverNotice("����Ա���桻����"+ cm.getChar().getName() +"���������Ķ��ѿ�ʼ��ս糺���ʿ���ռ�BOSS����֮ħŮ����"); 
        cm.summonMob(9400590, 200000000, 40000, 1);//��������     
        }else{
        cm.sendOk("��Ǹ��û��糺�����Կ�ס��Ҳ���Ϊ���ٻ�"); 
	cm.dispose();}
} else if (selection == 7) {
       if(cm.haveItem(5252006) == true) {
        cm.gainItem(5252006,-1);
cm.serverNotice("����Ա���桻����"+ cm.getChar().getName() +"���������Ķ��ѿ�ʼ��ս糺���ʿ���ռ�BOSS����Ӱɱ�֡���"); 
        cm.summonMob(9400593, 200000000, 40000, 1);//��������     
        }else{
        cm.sendOk("��Ǹ��û��糺�����Կ�ס��Ҳ���Ϊ���ٻ�"); 
	cm.dispose();}
} else if (selection == 8) {
	if(cm.getMeso() <= 50000000) {
        cm.sendOk("��Ǹ��û��5000���Ҳ���Ϊ���ٻ�"); 
        }else{ 
        cm.gainMeso(-50000000);
        cm.summonMob(9400300, 100000000, 175000000, 1);//��ɮ
	cm.dispose(); } 
} else if (selection == 9) {
	if(cm.getMeso() <= 50000000) {
        cm.sendOk("��Ǹ��û��5000���Ҳ���Ϊ���ٻ�"); 
        }else{ 
        cm.gainMeso(-50000000);
        cm.summonMob(9400549, 1, 200300000, 1);//����
	cm.dispose(); } 
} 
}