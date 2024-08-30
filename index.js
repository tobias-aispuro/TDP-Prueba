function suma(a,b) {
    return a+b
}

const array = [5,23,-2,5,76,13,97,0,-4]
const aux = 0;

function coleccion(array) {
    for (const i = 0; i < array.length-1; i++) {
        if (array[i] < array[i+1]) {
          aux = suma(array[i], array[i+1]);
        }
    }
}

console.log(aux);