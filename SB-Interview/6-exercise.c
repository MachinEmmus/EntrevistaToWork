/*Desarrollar un programa por consola que imprima la siguiente figura
...
*/
#include <stdio.h>

int main()
{
    //Imprimir Figura
    Figure();
    return 0;
}

void Figure(){
    for(int i = 1; i < 10; i++){
        for (int j = 1; j < 12; j++){
            if (i == 1 || i == 5 || i == 9)
                printf("*");
            if (i == 2 || i == 4 || i == 6 || i == 8)
                if (j == 1 || j == 6 || j == 11)
                    printf("*");
                else    
                    printf(" ");
            if (i == 3 || i == 7)
                if (j == 1 || j == 11)
                    printf("*");
                else    
                    printf(" ");
        }
        printf("\n");
    }
}

void Figure2(){
    for(int i = 1; i < 10; i++){
        for (int j = 1; j < 12; j++){
            printf("*");  
        }
        printf("\n");
    }
}