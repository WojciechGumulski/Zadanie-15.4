//Zadanie 1

const a = 'Hello';
const b = 'World!';
const c = `${a} ${b}`

console.log(c);

//Zadanie 2

const x = prompt('podaj wartość x');
const y = prompt('podaj wartość y');
let multiple = (x, y = 1) => x * y;

console.log(`${multiple(x,y)}`);

//Zadanie 3

let suma = 0;
let average = (...args) => {args.forEach(arg => suma = suma + arg); return suma = suma / args.length};

average(5,2,3,1);
console.log(`${suma}`);

//Zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const [first, second,...rest] = grades;
suma = 0;
console.log(average(first, second,...rest));

//Zadanie 5

const data = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstName, ,lastName] = data;
console.log(firstName);
console.log(lastName);