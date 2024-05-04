//Calcular o fatorial de maneira recursiva.

function fatorial (n){
    if (n == 1){ //Se o número que eu recebi for igual a 1, então o resultado é 1 (return)
        return 1
    } else {
        return n * fatorial(n - 1)

    }

}
console.log(fatorial(5))



/*Cálculo do fatorial de 5
5! = 5 x 4 x 3 x 2 x 1 = 120
5! = 5 x 4! = 120

n! = n x (n - 1)!
1! = 1 x (1 - 1)!
1! = 1 x 0! = 1
*/
