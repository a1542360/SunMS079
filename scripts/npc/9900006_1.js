var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ��ͷ = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2# ";

/*
 * 
 * @wnms
 * @����̨���͸���npc
 */
function start() {
    status = -1;
    action(1, 0, 0);
}
var ð�ձ� = 5000;
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {
            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
			var tt = "��ѡ����Ҫȥ�ĸ�����BOSS��[���ั����BOSS���ڸ���]\r\n";
			tt += "#L0#"+��ɫ��ͷ+"#e#d��սBOSS����#l\t\t#L1#"+��ɫ��ͷ+"��սBOSS��ɮ#l\r\n"
			tt += "#L2#"+��ɫ��ͷ+"��սBOSS����#l\t\t#L3#"+��ɫ��ͷ+"��սBOSS����#l\r\n"
			tt += "#L19#"+��ɫ��ͷ+"��սBOSS����#l\t\t#L20#"+��ɫ��ͷ+"��սBOSS�칷#l\r\n"
			tt += "#L4#"+��ɫ��ͷ+"��սBOSSƷ����#l\t  #L5#"+��ɫ��ͷ+"��սBOSS������#l\r\n"
			tt += "#L6#"+��ɫ��ͷ+"��սBOSS������#l\t  #L22#"+��ɫ��ͷ+"��սBOSS���#l\r\n\r\n"
			tt += "#k=============================================="
			tt += "#L8##b"+��ɫ��ͷ+"#e#rLv10.Ӣ��ѧԺ����#l  #L9##b"+��ɫ��ͷ+"#e#d#rLv10.������Ӹ���#k#l\r\n"
			tt += "#L10#"+��ɫ��ͷ+"#d#rLv21.������Ӹ���#l  #L12#"+��ɫ��ͷ+"#d#rLv35.�����Ӹ���#l\r\n"
			tt += "#L11#"+��ɫ��ͷ+"#d#rLv51.�����Ӹ���#l  #L13#"+��ɫ��ͷ+"#d#rLv55.������Ӹ���#l\r\n"
			tt += "#L14#"+��ɫ��ͷ+"Lv70.����ŷ������Ҷ��Ӹ���#l\r\n"
			tt += "#L15#"+��ɫ��ͷ+"#d#rLv100.������Ӹ���#l\r\n"
			tt += "#L7#"+��ɫ��ͷ+"#d#rLv130.��żʦ��Ӹ���#l\r\n"
			tt += "#L18#"+��ɫ��ͷ+"#d#rLv120.��ظ���[�ɵ���]\r\n"
			tt += "#L21#"+��ɫ��ͷ+"#d#rLv120.��ս糺츱��#k#l\r\n"
			tt += "#L17#"+��ɫ��ͷ+"#d#rLv30.������껪(��ӶԿ�����.���2V2)\r\n"
			tt += "#L16#"+��ɫ��ͷ+"#d#r��ַ����Կ�ս(���帱��)#l\r\n"


			//tt += "#L3#" //"#r��ѡ����Ҫȥ�ĸ�����\r\n\r\n#d#L0#���������������#l\r\n\r\n#L1##g���101�������#n#l\r\n\r\n#b#L2##r���Ů���������\r\n\r\n#L3#����ŷ��������\r\n\r\n#L4#������������"
            cm.sendSimple(tt);
        } else if (status == 1) {
            if (selection == 0) {
			cm.warp(220080000);cm.dispose();//����
            } else if (selection == 1) {
			cm.warp(702070400);cm.dispose()//����
            }else if(selection == 2) {
			cm.warp(211042300);cm.dispose()//����
            } else if (selection == 3) {
			cm.warp(240040700);cm.dispose()//����    
            } else if (selection == 4) {
			cm.warp(270050000);cm.dispose()//PB
            }else if (selection == 5) {
			cm.warp(551030100);cm.dispose();//������
            }else if (selection == 6) {
			cm.warp(541020700);cm.dispose();//����
            }else if (selection == 7) {
			cm.warp(105070300);cm.dispose();//��ż
            }else if (selection == 8) {
			cm.warp(702090400);cm.dispose();//Ӣ��ѧ����
            }else if (selection == 9) {
			cm.warp(100000200);cm.dispose();//�����
            }else if (selection == 10) {
			cm.warp(103000000);cm.dispose();//��������
            }else if (selection == 11) {
			cm.warp(200080101);cm.dispose();//������
            }else if (selection == 12) {
			cm.warp(221024500);cm.dispose();//������
            }else if (selection == 13) {
			cm.warp(251010404);cm.dispose();//�������
            }else if (selection == 14) {
			cm.warp(261000011);cm.dispose()//����ŷ������Ҷ����
            }else if (selection == 15) {
			cm.warp(300030100);cm.dispose()//������Ӹ���
            }else if (selection == 16) {
			cm.warp(101030104);cm.dispose()//��ַ����Կ�ս
            }else if (selection == 17) {
			cm.warp(980000000);cm.dispose()//������껪����
            }else if (selection == 18) {
			cm.warp(925020000);cm.dispose()//���
            }else if (selection == 19) {
			cm.warp(230040420);cm.dispose()//����
            }else if (selection == 20) {
			cm.warp(800020130);cm.dispose()//�칷
            }else if (selection == 21) {
			cm.warp(803001200);cm.dispose()//糺�
            }else if (selection == 22) {
			cm.warp(701010320);cm.dispose()//���
			
			}
        }
    }
}


