/*EJERCICIO 1 IMPRIMIR IMPARES 1-20
for (var i = 0; i<21; i ++ ){
   if (i % 2 == 0){
    console.log("");
   }else console.log (i)
}


/*EJERCICIO 2 DISMINUIR MULTIPLOS DE 3
    if (i % 3 == 0) {
        console.log (i);
    }
}

/*EJERCICIO 3 IMPRIME LA SECUENCIA
var resta = 0;
for (var i = 4; i>-3.6; i-=1.5){
   console.log(i)
}

/*EJERCICIO 4 SIGMA*/ 
var suma = 0;
var i= 0;
var arreglo = [0];

while ( i < 100){
    i++
    suma= i + suma;
    arreglo.push ("+" + i);
}
console.log (arreglo);
console.log (suma);

/*EJERCICIO 5 FACTORIAL*/

var product = [1];
for (var i = 1; i<13; i++){
    product.push (i)
}
console.log (product);
const res = product.reduce((acumulador,valoractual)=>acumulador*valoractual); /*La funcion flecha nos permite omitir el return y los corchetes*/
console.log(res);