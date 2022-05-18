function teste1(num) {
    if(num > 7) 
        console.log(num)
        console.log('Final') /* Essa setença está fora da estrutura de controle
                              * e sempre será executado o if dando false ou true
                              */
}
teste1(6)
teste1(8)

function teste2(numero) {
    if(numero > 7); { //cuidado com o ';', não usar com as estruturas de controle.
        console.log(numero)
    }
}
teste2(6)
teste2(8)