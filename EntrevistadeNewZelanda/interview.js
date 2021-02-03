// Multiplicar dos números sin utilizar el "x"
const multiply = (a, b) =>{
    let resultado = 0;
    const positivo = Math.abs(b) == b;
    for(let i = 0; i < Math.abs(b); i++){
        resultado = positivo ? resultado + a : resultado - a;
    }
    return resultado;
}

const a = multiply(50, 50)
console.log(a)

// obtener el número mayor sin usar 2 for
const getBigets = (arr) => arr.reduce((acc, el) => acc > el ? acc : el)
const b = getBigets([50, -1500, 1000, 0, 1, 54])
console.log(b);

// limpiar un array de undefined, null y 0 
const clean = (arr) => arr.reduce((acc, el) => {
    if (el) {
        acc.push(el)
    }
    return acc;
}, [])

const c = clean([1, undefined, null, 2, 3, 0, 4, undefined, null, 5])
console.log(c);

//escribir una funciona que aplane los arreglos en un nivel
const arr = [[1,2], [[3,4]], [1, []]]
// [1, 2, [3, 4], 1, []]

const flatten = arr => arr.reduce((acc, el) => acc.concat(el), [])
const d = flatten(arr);
console.log(d)

//cuenta la cantidad de veces que repite una palabra
const repeated = str =>{
    const lowered = str.toLowerCase();
    const splitted = lowered.split(' ');
    const reduced = splitted.reduce((acc, el) =>{
        if (acc[el]){
            acc[el]++
        } else {
            acc[el] = 1
        }
        return acc
    }, {})
    return Object.entries(reduced).reduce((acc, el) => acc[1] > el[1] ? acc : el)
}

const e = repeated('this is a repeated word test this is a a increibel A annuncement')
console.log(e);

//palindrome
const isPalindrome = (str) => {
    str = str.replace(/\s/g, '');
    const lowered = str.toLowerCase();
    const splitted = lowered.split('');
    const reversed = splitted.reverse();
    const joined = reversed.join('')
    return lowered == joined
}

const f = isPalindrome("Oro");
console.log(f)