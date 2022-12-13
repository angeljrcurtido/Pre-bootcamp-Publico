
/*EJERCICIO 1 SIEMPRE HAMBRIENTO*/
function siemprehambriento (alwaysHungry =[3.14, "comida", "pastel", true, "comida"]){
    for (var i = 0; i<alwaysHungry.length; i++){
        if (alwaysHungry[i]==="comida"){
            console.log("delicioso")
        }else {
            console.log ("Tengo Hambre")
        }
    }
    
}
siemprehambriento ();

/*EJERCICO 2 FILTRO PASO ALTO*/
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i<8; i++){
        if (arr[i]>cutoff){
            filteredArr[i] = arr[i];
        }
    }
    
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]

/*EJERCICO 3 MEJOR QUE EL PROMEDIO*/
function betterThanAverage(arr) {
    var sum = 0;

    for (var i = 0; i<7; i++){
        sum=sum + arr[i];
        
    }
    sum=sum/arr.length;
    console.log (sum);
    var count = 0
    for (var i= 0; i<8; i++){
        if (arr[i]>sum){
            count ++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

/*EJERCICIO 4 ARREGLO INVERTIDO */
function reverse(arr) {
    arr.reverse();
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

/*EJERCICO 5 ARREGLO DE FIBONACCI*/
function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    
    for (let i = 2; i<=n; i++){
        fibArr.push (fibArr[i -1 ] + fibArr[i -2 ])
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
