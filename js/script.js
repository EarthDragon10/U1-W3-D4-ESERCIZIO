// Primo punto dell'esercizio

let startString = "Epicode-FullStack";

const lowerLetter = startString[0].toLowerCase();
const upperLetter = startString[3].toUpperCase();

console.log(startString);
console.log({ lowerLetter, upperLetter });

let newString = startString.slice(3, 7).concat(startString.slice(8, 12));
console.log(newString);

let suddivisionString = startString.split("");
console.log(suddivisionString);

let newString_2 = suddivisionString[2].concat(suddivisionString[6]);
console.log(newString_2);
// Secondo punto dell'esercizio

let persons = ["Paolo", "Francesca", "Andrea", "Benedetta", "Fabio"];

// Terzo punto dell'esercizio

console.log({ terzo_elemento: persons[2] });

// Quarto punto dell'esercizio

console.log({
	"array iniziale": persons,
	"Lunghezza iniziale dell'array": persons.length,
});

const numRandom = 22;
persons.push(numRandom);

console.log({
	"array finale": persons,
	"Lunghezza finale dell'array": persons.length,
});

// Quinto punto dell'esercizio

let numberedArray = [12, 7, 90, 35, 5];

const multiply = () => {
	let result = numberedArray[3] * numberedArray[0];
	return result;
};

console.log(multiply());

// Sesto punto dell'esercizio

// Metodo push(): aggiunge uno o piú elementi alla fine dell'array
// e ritorna la lunghezza del nuovo array

let pushMethod = numberedArray.push(22, 21);
console.log(pushMethod); // lunghezza del nuovo array
console.log(numberedArray); // Qui vedo l'array trasformato rispetto all'originale

// Metodo pop(): rimuove l'ultimo elemento e ritorna l'elemento rimosso
// questo metodo trasforma/cambia l'array originale

let newNumberedArr = [10, 32, 58, 2, 6];
const removedLastElement = newNumberedArr.pop();
console.log(removedLastElement, newNumberedArr);

// Metodo shift(): rimuove il primo elemento da un array e ritorna l'elemento rimosso
// questo metodo trasforma/cambia l'array originale

const removedFirstElement = newNumberedArr.shift();
console.log(removedFirstElement, newNumberedArr);

// Metodo unshift(): aggiunge uno o piú elementi all'inizio array
// e ritorna la lunghezza del nuovo array

const addBeginningElement = newNumberedArr.unshift(45);
console.log(addBeginningElement, newNumberedArr);
