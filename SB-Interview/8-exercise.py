# Que retorna este metodo

letras = 'WAEFLHCJOOMTE';
n = 13;
izq = 0;
der = 0;
aux = 0;
salida = "";

for i in range(n):
    if(aux > n):
        break;
    der = aux + 1;
    while(der >= izq):
        if (der == izq):
            salida += letras[aux];
            aux = aux + izq;
        der  = der -1;
    izq = izq + 1;
print(salida);