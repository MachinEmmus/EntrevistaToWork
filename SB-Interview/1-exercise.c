#include <stdio.h>

int main()
{
    int a = Misterio(6,2);
    printf("%i", a);
}
// Dada la siguiente función:
int Misterio(a,b){
    if (a <= 0 && b <= 0){
        return 1;
    }
    if ((a % 2) == 0){
        return a + misterio(b, b-1);
    } else {
        return b + misterio(a+1, b);
    }
}
// Cual es el resultado del algoritmo se se ejecuta de la siguiente manera:
// Answer: 11