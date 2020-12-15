//Imprimir la serie de Fibonnaci para n Números

#include <stdio.h>

int main()
{
    //Call Fibonnacci method
    Fibonnaci(5);
    
    return 0;
}

void Fibonnaci(int num){
    int a = 0;
    int b = 1;
    printf("0,1,");
    for (int i = 0; i < num; i++){
        int c = a + b;
        printf("%i,",c);
        a = b;
        b = c;
    }
}