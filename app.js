// Escribe tu código aquí.
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
const newArray = bigWords('bocina', myArray);
let lista = document.getElementById("lista")

console.log(newArray);
printList(newArray)

function bigWords(string, array){
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.length > string.length){
            newArray.push(element)
        }
    }
    return newArray;
}

function printList (array){
    array.forEach(element => {
        lista.innerHTML += `<li>${element}</li>`
    }) ;
}