function suma(a,b) {
    return a+b
}

const array = [1,2,3,4,5,6,7,8,9]
const aux = 0;

function coleccion(array) {
    for (const i = 0; i < array.length-1; i++) {
        if (array[i] < array[i+1]) {
          aux = suma(array[i], array[i+1]);
        }
    }
}

console.log(aux);