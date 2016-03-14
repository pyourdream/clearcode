#include<stdio.h>
int main()
{
    int byou,s,m,h;
    
    printf("秒数＝");
    scanf("%d", &byou);
    
    m =byou/60;
    s =byou%60;
    h =m/60;
    m =m%60;
    
    printf("%d秒＝%d時間%d分%d秒\n", byou,h,m,s);
    return 0;
}
