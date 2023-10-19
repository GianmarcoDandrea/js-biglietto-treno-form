### Esercizio
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero  

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.


### Svolgimento:
Fare Struttura HTML

JS:
Tutto deve partire al click del tasto INVIA
Il codive va all'interno dell'event listener:

**Raccolta Dati**
1. Prelevare il numero di chilometri da percorrere
2. Prelevare l'età del passeggero

**Logica**
1. Controllare l'età dell'utente:  
    -SE l'eta è maggiore di 65 anni applicare lo del 40%;  
    -SE l'età è minore di 18 anni applicare lo sconto del 20%;  
    -ALTRIMENTI applicare il prezzo normale
2. Preparare il risultato.

**Output**
1. Trovare l'elemento in HTML dove stampare il risultato.
2. Inserire nome, prezzo  e numero biglietto nella pagina html.


**Per cancellare**
Aggiungiamo event listener sul tasto ANNULLA:
Al click:

1. Cancellare dati dall'input.
2. Cancellare campi dei risultati.
3. Nascondere la sezione del biglietto.