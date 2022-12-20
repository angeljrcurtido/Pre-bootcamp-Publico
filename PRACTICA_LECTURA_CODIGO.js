
//EJERCICIO 1 DE ASIGNACIÓN
console.log(hello);  //Aqui se llama a la variable hello aunque va mostrar undefined   
                    //Aqui lo que pasara es que el var ira arriba se elevara pero la asignación quedara abajo              
var hello = 'world'; // Aqui se declara la variable y se le asigna un valor 
//EJERCICIO 2 DE ASIGNACIÓN
var needle = 'haystack'; //Se declara la variable Global needle con un texto
test();//Aqui se llama a una función llamada test la cual regresara la funcion 
function test(){//Aqui se crea la función test 
    var needle = 'magnet';//Esto seria una variable local la cual solo sirve dentro de la función. 
    console.log(needle);//Aqui se muestra la variable needle lo cual mostrara 'magnet'.
}
//EJERCICIO 3 DE ASIGNACIÓN 
var brendan = 'super cool'; // Se crea la variable y se le asigna el valor super cool
function print(){//Se crea la funcion print
    brendan = 'only okay';//Se llama a la variable brendan y se le reasigna un valor only okay
    console.log(brendan);//Aqui se muestra el valor only okay
}
console.log(brendan);//Aqui se llama a la variable global de arriba super cool

//EJERCICIO 4 DE ASGINACIÓN
var food = 'chicken'; //Se crea una variable food y luego se le asigna el valor chicken
console.log(food);//Aqui se llama a la variable food
eat();//Se llama a la funcion eat
function eat(){//Aqui se crea la funcion eat 
    food = 'half-chicken';//Aqui llama a la variable food pero se le asigna un valor half chicken
    console.log(food);//se llama a mostrar la palabra half chicken
    var food = 'gone';//se vuelve a crear la variable food y se le vuelve a poner el valor gone
}

//EJERCICIO 5 DE ASIGNACION
mean();//Aqui se llama a la funcion mean 
console.log(food);//Aqui se imprime una variable 
var mean = function() {//Aqui se crea la funcion mean 
    food = "chicken";//Aqui se llama la variable food
    console.log(food);//Aqui se imprime la variable food 
    var food = "fish";//Aqui se vuelve a crear la variable food y se le asigna un valor fish
    console.log(food);//Aqui se imprime la variable que dice Fish
}
console.log(food);
/*Obs: al depurar me di cuenta que en un var se coloco una funcion cosa que no es correcto*/

//EJERCICIO 6 DE ASIGNACION  
console.log(genre); //Aqui se imprime la variable genre pero sin valor porque solo sube el var
var genre = "disco"; //Aqui se crea la variable genre y se le asigna el valor disco
rewind(); // Aqui se llama a la funcion rewind 
function rewind() {//Aqui se crea la function rewind
    genre = "rock"; //se vuelve a crear la variable genre y se le asigna un nuevo valor rock 
    console.log(genre);//se imprime ese valor rock
    var genre = "r&b";//aqui se vuelve a crear la variable genre pero con un nuevo valor 
    console.log(genre);//Aqui se vuelve a imprimir la variable genre y con el valor r&b
}
console.log(genre);//Aqui se imprime la variable global que es genre pero con el valor disco 

//EJERCICIO 7 DE ASIGNACION
dojo = "san jose"; // se crea una variable que tiene de valor san jose
console.log(dojo); // se imprime la variable que dira "san jose"
learn(); // se llama a la funcion learn 
function learn() { // se crea la function learn
    dojo = "seattle";//se reescribe la variable dojo y se le asigna el valor seattle
    console.log(dojo); //se imprime el nuevo valor de la variable dojo
    var dojo = "burbank"; // se vuelve a crear la variable dojo con un valor burbank
    console.log(dojo);// se imprime la variable dojo lo cual dira "burbank"
}
console.log(dojo); //aqui se imprime la variable global dojo el cual tiene valor "san jose"

//EJERCICIO 8 DE ASGINACION 
console.log(makeDojo("Chicago", 65)); // Aqui se imprime una function makedojo en donde se le manda los parametros de chicago y 65
console.log(makeDojo("Berkeley", 0)); // Aqui se vuelve a llamar a la function y en este caso se le envia los parametros de Berkeley y 0
function makeDojo(name, students){ // Aqui se crea la function de makeDojo, y se registra los nombres de parametros a recibir name, students
    const dojo = {}; // Aqui se crea una variable const dojo = {}
    dojo.name = name; // Aqui se dice que la const dojo es igual a name el parametro que se le enviara
    dojo.students = students; //Aqui se le dice que la const dojo es igual a students el cual se le enviara 
    if(dojo.students > 50){ //aqui comienza una condicional de si dojo.students es mayor a 50 entonces el dojo.hiring = true
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){ //si no si dojo.students es menor o igual a 0 entonces hace que la variable dojo muestre un closed for now
        dojo = "closed for now";
    }
    return dojo;//Aqui retorna el resultado de nuestra funcion 
}

