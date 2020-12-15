/* Construya un algoritmo que calcule el mínimo común multiplo(MCM)
de varios números. El MCM es el menor número que es multiplo
de todos ellos a la vez. Por ejemplo el MCM de 3 y 7 es 21,
el de 4 y 12 es 12 y el de 9 y 12 es 36.*/

#include <stdio.h>

int main(){
    int mcm = FunctionMcm(7, 3);
    printf("El mínimo común multíplo es: %i", mcm);

    return 0;
}
/* Funcion que deberia modificarse para que resiva la cantidad
que el usuario desee el resto de la lógica es totalmente funcional
deberia hacerle unos cuantos ajustes*/
int FunctionMcm(int a, int b){
    int mcm = 0;
    int flag = 1;
    int count = 1;
    if (a == b)
        return a;
    else if (a > b)
        mcm = a;
    else 
        mcm = b;
    while (flag == 1){
        if ((mcm * count) % a == 0 && (mcm * count) % b == 0){
            mcm = mcm * count;
            flag = 0;
        }
        count++;
    }
    return mcm;
}