/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali sono:
NUMBER. Includono sia numeri interi che decimali , sono usati come nella matematica a scuola ma da un computer.
STRING . Sono sequenze di caratteri da mettere dentro ai doppi apici.
BOOLEAN . E' come un'interrutore della luce acceso/spento, ci da solo due valori logici vero o falso.
UNDEFINED O NULL. UNDEFINED è una scatola vuota di cui non si sa cosa ci sara' dentro mentre NULL rimane vuota di proposito.
BIGINT. Sono numeri grandissimi che js non riesce a gestire con i semplici number 
SYMBOL. Sono come etichette 

/* ESERCIZIO 2
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let a1 = 12
let a2 = 20

let result = a1 + a2
console.log= (somma)

/* ESERCIZIO 3
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

/* ESERCIZIO 4
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = 'Eleonora TROIANI'


/* ESERCIZIO 5
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let x = 12
let y = 4
let result = x - y

console.log (result)

/* ESERCIZIO 6
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john'
let name2 = 'John'
console.log(name1 === name2)

let name1 = 'john'
let name2 = 'John'
console.log(name1.toLowerCase() === name2.toLowerCase())
