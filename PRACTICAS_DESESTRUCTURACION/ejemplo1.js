/*
//PREDECIR LA DESTRUCCIÓN
//PROBLEMA 1
const cars = ['Tesla', 'Mercedes', 'Honda'] //se crea el arreglo cars
const [ RandomCar] = cars //se crea la constante dentro se coloca un string el cual guardara el primer valor del arreglo
const [ ,otherRandomCar ] = cars //Aca se crea otro const el cual guardara el segundo valor del arreglo
//Predict the output
console.log(RandomCar) //Aqui randomcars lanzara como primer valor Tesla, porque para que lanze otra marca tiene que tener una coma
console.log(otherRandomCar)//Aqui se imprime otra const. que se llama otherRandomCar, el cual va imprimir "Mercedes"
//PROBLEMA 2 
const employee = { //Aqui se crea la constante employee el cual tiene un objeto
    name: 'Elon', //los datos del objeto son name, age, company
    age: 47,
    company: 'Tesla'
} 
//Aqui se crea una constante el cual alverga un anidado que es name 
const { name: otherName } = employee; //aqui se declara la const y luego se anida el name con el parametro otherName, luego se le asigna el objeto employee
//Predict the output
console.log(name); //aqui va salir name no esta definido porque el anidado es otherName
console.log(otherName); //En teoria aca tendria que salir el nombre que es Elon
*/
//PROBLEMA 3 
const person = { //Se declara una constante person que se le agrega un objeto el cual tiene los datos name, age, height
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345'; //Aqui se delcara la constante password el cual se le agrega los datos 12345
const { password: hashedPassword } = person;  //Aqui se declara la constante y se le anida hasshedpassword y se le agrega el objeto person
//Predict the output
console.log(password); //Aqui se llama a la constante password
console.log(hashedPassword); //aqui no va salir nada porque se llama a una const password dentro de un objeto person

//PROBLEMA 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2]; //Se declara un arreglo 
const [,first] = numbers; // Aqui se desestructura el arreglo que llama al  2
const [,,,second] = numbers; //Aqui se desestructura el arreglo que llama al 5
const [,,,,,,,,third] = numbers;//Aqui se desestructura el arreglo que llama al 2
//Predict the output

console.log(first == second); //Aqui dara falso porque el primero no es igual al segundo
console.log(first == third);//Aqui dara verdadero porque la constante first si es igual a tercero

//PROBLEMA 5
const lastTest = { //Aqui se crea la const Lastest a la cual se le agrega un objeto que tiene los valores key y secondKey
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; //Aqui se llama al valor key que esta dentro del objeto lastTest
const { secondKey } = lastTest; //Aqui se llama al valor secondKey que esta dentro del objeto lastTest
const [ ,willThisWork] = secondKey; //Aqui se llama al segundo item del arreglo que seria el 5 
//Predict the output
console.log(key); //Aqui se imprimira la palabra value porque se llama al valor key
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);





