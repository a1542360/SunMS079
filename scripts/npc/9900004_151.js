importPackage(Packages.client);
var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            var txt = "";
            txt = "����ÿ������NPC����������񽫻�ý���#k\r\n\r\n";
            if (cm.getPlayer().getBossLog("meirirenwu") == 1){
                txt += "���Ѿ������ÿ������ÿ��1�Σ�";
                 cm.sendOk(txt);
				 cm.dispose();
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 30){
			    txt += "#L30##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 29){
			    txt += "#L29##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 28){
			    txt += "#L28##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 27){
			    txt += "#L27##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 26){
			    txt += "#L26##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 25){
			    txt += "#L25##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 24){
			    txt += "#L24##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 23){
			    txt += "#L23##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 22){
			    txt += "#L22##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 21){
			    txt += "#L21##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 20){
			    txt += "#L20##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 19){
			    txt += "#L19##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 18){
			    txt += "#L18##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 17){
			    txt += "#L17##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 16){
			    txt += "#L16##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 15){
			    txt += "#L15##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 14){
			    txt += "#L14##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 13){
			    txt += "#L13##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 12){
			    txt += "#L12##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 11){
			    txt += "#L11##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 10){
			    txt += "#L10##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 9){
			    txt += "#L9##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 8){
			    txt += "#L8##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 7){
			    txt += "#L7##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 6){
			    txt += "#L6##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 5){
			    txt += "#L5##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 4){
			    txt += "#L4##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 3){
			    txt += "#L3##b�ռ�100��#v4000012##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 2){
			    txt += "#L2##b�ռ�100��#v4000003##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 1){
			    txt += "#L1##b�ռ�100��#v4000037##l";
                cm.sendSimple(txt);
            }else if (cm.getPlayer().getOneTimeLog("meiri") == 0){
			    txt += "#L0##b�ռ�100��#v4000001##l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ������ÿ������ÿ��1�Σ�";
                 cm.sendOk(txt);
				 cm.dispose();
				 }
        } else if (selection == 0) {
            if (cm.haveItem(4000001,100) ){
				cm.gainItem(4000001, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000001#������!");
                cm.dispose();
            }
        } else if (selection == 1) {
            if (cm.haveItem(4000037,100) ){
				cm.gainItem(4000037, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000037#������!");
                cm.dispose();
            }
        } else if (selection == 2) {
            if (cm.haveItem(4000003,100) ){
				cm.gainItem(4000003, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000003#������!");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.haveItem(4000012,100) ){
				cm.gainItem(4000012, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000012#������!");
                cm.dispose();
            }
        } else if (selection == 4) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 5) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 6) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 7) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 8) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 9) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 10) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 11) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 12) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 13) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 14) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 15) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 16) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 17) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 18) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 19) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 20) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 21) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 22) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 23) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 24) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 25) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 26) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 27) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 28) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 29) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
        } else if (selection == 30) {
            if (cm.haveItem(4000195,100) ){
				cm.gainItem(4000195, -100);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(4031559, 1);//�������Ʒ1������˼
				cm.gainItem(4031560, 1);//�������Ʒ1������˼
				cm.gainMeso(10000);//�����1�����˼
				cm.gainExp(20000);//��2�������˼
				cm.getPlayer().setBossLog('meirirenwu');
				cm.getPlayer().setOneTimeLog("meiri");
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�100��#v4000195#������!");
                cm.dispose();
            }
            }
            }
        }
    

