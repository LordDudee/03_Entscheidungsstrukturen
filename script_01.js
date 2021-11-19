// Entscheidungsstrukturen | control flow

//Deklaration + Assignment (Wertzuweisung)
// const ageJohn = 20; // const = Konstante, wird nicht verändert
// const ageMark = 20;

// // Deklaration
// let isJohnOlder, isJohnEqual; // let = Variable, kann sich ändern

// //Test | Logische Aussage
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);

// // // Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);


/************* IF ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos

// if (true) 
// if (false)
// if(isJohnOlder)
// if(ageJohn > ageMark)
// {
//     console.log("John ist älter.");
// }

/************* IF - ELSE ************/
// mit Alternative
// entweder ja oder nein

// if (isJohnOlder)
// { 
//     // Ja-Zweig / true
//     console.log("John ist älter.");
// }
// else 
// { 
//     // Nein- Zweig / false
//     console.log("John ist jünger.");
// }

/****** Ternäre (ternary) Schreibweise *******/
// console.log( (isJohnOlder) ? "John is Older" : "Mark is Older");

/************* IF - ELSE ************/
// mit alternativen Fällen (älter, jünger, gleich alt)

// if (isJohnOlder) // John ist älter
// { 
//     console.log("John ist älter.");
// }
// // 1.Alternative
// else if(isJohnEqual)  // John gleich alt
// {
//     console.log("John ist gleich alt.");
// }
// // 2...n Alternative(n)

// // Alternative
// else // John ist jünger
// { 
//     console.log("John ist jünger.");
// }

/******** Fallunterscheidung / Case | Switch 1 *******/
// const firstName = "Jane";
// let job;

// job = "driver"; // ..fährt TAXI! / UBER
// job = "diver"; // .. taucht im Rhein!
// job = "artist"; // .. malt ein Bild!
// job = "pilot"; // .. fliegt das Flugzeug!
// job = "nichts"; // .. macht etwas anderes!

// switch (job) 
// {
//     case "driver":   // Test auf == (Gleichheit)
//         console.log(firstName + " fährt TAXI!");
//         break;
//     case "diver":    // Test auf == (Gleichheit)
//         console.log(firstName + " taucht im Rhein!"); 
//         break;
//     case "artist":   // Test auf == (Gleichheit)
//         console.log(firstName + " malt ein Bild!"); 
//         break;
//     case "pilot":    // Test auf == (Gleichheit)
//         console.log(firstName + " fliegt das Flugzeug!");
//         break; 

//     default:  // Black Swan = das unerwartete Ereignis
//         console.log(firstName + " macht etwas anderes!"); 
//         break;
// }

/******** Fallunterscheidung / Case | Switch 2 *******/

const a = 2;

switch (true)
 {
    case (a == 1):
        console.log("a ist 1");
        break;
    case (a == 2):
        console.log("a ist 2");
    default:
        break;
}