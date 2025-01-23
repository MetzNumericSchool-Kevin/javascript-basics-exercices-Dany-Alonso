const nom_sorcier = ("Archibald");
// console.log("Le sorcier se nomme :" + nom_sorcier + " ! 🎉");

/**
 * Déclaration de variables
 */
// const monnaie = "🪙";                           // Déclaration de la monnaie pour les exercices


// Exercice 1 - Définition de variables

const store = "Poney Fringuant";               // Déclaration du nom de la boutique en constante
let QtyHealPot = 42;                           // Déclaration d'une variable pour le nombre de potion de soin
let PriceHealPot = 10;                         // Déclaration d'une variable pour le prix d'une potion de soin
let StoreOpen = true;                          // Déclaration d'une variable pour savoir si la boutique est ouverte ou non


// Exercice 2 - Affichage conditionnel

/**
 * condition pour afficher dans la console un message celon si la boutique est ouverte ou non
 */
// if (StoreOpen) {
//     console.log("Bienvenue dans la boutique " + store + " aventurier ! 🎉");    
// } else {
//     console.log("La boutique " + store + " est fermée, revenez plus tard Aventurier ! 😴");    
// }


// Exercice 3 - Affichage conditionnel avec switch

// const QueVeuxTu = parseInt(prompt("Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔\n- 1. Le nom de la boutique \n- 2. Le nom du Sorcier \n- 3. Le prix d'un potion de soin \n- 4. La quantité d'une potion de soin"));

// console.log(typeof QueVeuxTu);

/**
 * Switch ... Case pour afficher dans la console une réponse celon le choix de l'utilisateur
 */
// switch (QueVeuxTu) {
//     case 1:
//         console.log(store);
//         break;
//     case 2:
//         console.log(nom_sorcier);
//         break;
//     case 3:
//         console.log(PriceHealPot);
//         break;
//     case 4:
//         console.log(QtyHealPot);
//         break;
//     default:
//         console.log("Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕");
//         break;
// }


// Exercice 4 - Calcul du prix total d'une commande de potion 🪙

// const Orders = parseInt(prompt("Combien de potions de soin veux-tu ?"));
// let TotalPrice = Orders*PriceHealPot
// console.log("Prix de " + Orders + " potions de soins : " + TotalPrice + " 🪙 mon cher Aventurier. 💸");


// // Exercice 5 - Bourse de l'Aventurier 💰

// let GoldAdventurer = 100;
// // console.log(GoldAdventurer);

// /**
//  * Condition if avec opération && (ET) pour savoir si l'aventurier possède assez d'argent pour acheter des potions et si la boutique possède assez de potions.
//  */
// if (GoldAdventurer >= TotalPrice && Orders <= QtyHealPot) {
//     QtyHealPot = QtyHealPot - Orders;
//     // console.log(QtyHealPot);
    
//     GoldAdventurer = GoldAdventurer - TotalPrice;
//     // console.log(GoldAdventurer);
    
// } else if (GoldAdventurer < TotalPrice) {
//     console.log("Tu n'as pas assez d'argent");

// } else {
//     console.log("Il ne reste plus assez de potion");  
    
// }


// Exercice 6 - Liste des potions

// const ArrayPotions = ["Potion de soin" , "Potion de mana" , "Potion d'expérience"];
// console.log(ArrayPotions);


// Exercice 7 - Affichage des potions

// console.log(ArrayPotions[0]);                           // Affiche la première potion du tableau
// console.log(ArrayPotions[ArrayPotions.length - 1]);     // Affiche la dernière potion du tableau

// for (let i = 0; i < ArrayPotions.length; i++) {         // Boucle for pour afficher toutes les potions du tableau
//     // const test = ArrayPotions[i];
//     console.log(ArrayPotions[i]);  
    
// }


// Exercice 8 - Ajout d'une nouvelle potion

// ArrayPotions.push("Potion d'endurance");
// console.log(ArrayPotions);


// // Exercice 9 - Finaly, nope.

// ArrayPotions.pop("Potion d'endurance");
// console.log(ArrayPotions);


// Excercice 10 - Rangeons les informations de la potion de soin dans un objet 🧹

// let HealPot = {
//     Nom: "Potion de soin",
//     Prix: 10,
//     Stock: 42
// };
// console.log(HealPot);


// // Exercice 11 - Affichons les informations de la potion

// console.log(HealPot.Nom);                       //Affiche le nom de la potion en utilisant la notation pointée `.`
// console.log(HealPot["Prix"]);                   //Affiche le prix de la potion en utilisant la notation crochet `[]`


// Exercice 12 - C'est l'heure de faire l'inventaire...

// const InventairePotions = [
//     {
//         Nom: "Potion de soin",
//         Prix: 40,
//         Stock: 1 
//     },

//     {
//         Nom: "Potion de mana",
//         Prix: 20,
//         Stock: 2 
//     },

//     {
//         Nom: "Potion d'endurance",
//         Prix: 20,
//         Stock: 1 
//     },
// ];

// console.log(Inventaire);


// Exercice 13 - Aventurier, regarde tout ce que je vends !

// for (let i = 0; i < Inventaire.length; i++) {
//     console.log(Inventaire[i].Nom);   
//     console.log(Inventaire[i].Prix);   
//     console.log(Inventaire[i].Stock);   
// }

// /**
//  * Affiche de façon dynamique les propriétés de chacunes des potions
//  */
// for (let i = 0; i < Inventaire.length; i++) {   // Boucle for pour itérer dans le tableau Inventaire pour récupèrer l'index
//     for (const key in Inventaire[i]) {          // For in sur l'object pour récupérer les propriétés dans la const [key] de la potion indexé à [i]
//         console.log(Inventaire[i][key]);        // Affiche dans la console les propriété [key] de la potion récupèrer à l'index [i] du tableau Inventaire 
//     }
// }


// Exercice 14 - L'heure est venu pour moi d'être un grand marchand de potion !

/**
 *  Déclaration des variables
 */
let GoldAdventurer = 100;               // Bourse de l'aventurier
let GoldVendor = 0;                     // Bourse de ma boutique
const InventairePotions = [             // Inventaire de potions de la boutique
    {
        Nom: "Potion de soin",
        Prix: 40,
        Stock: 1 
    },

    {
        Nom: "Potion de mana",
        Prix: 20,
        Stock: 2 
    },

    {
        Nom: "Potion d'endurance",
        Prix: 20,
        Stock: 1 
    },
];
const InventaireAdventurer = [];        // Inventaire de l'aventurier
// console.log(GoldAdventurer);
// console.log(GoldVendor);
// console.log(InventairePotions);
// console.log(InventaireAdventurer);

const YourChoice = parseInt(prompt(`Que souhaites-tu avanturier ?
    1. Acheter une potion
    2. Vendre une potion
    3. Quitter`));

/**
 * Affiche de façon dynamique les propriétés de chacunes des potions
 */
function Potions(params) {
    for (let i = 0; i < InventairePotions.length; i++) {   // Boucle for pour itérer dans le tableau Inventaire pour récupèrer l'index
        for (const key in InventairePotions[i]) {          // For in sur l'object pour récupérer les propriétés dans la const [key] de la potion indexé à [i]
            console.log(InventairePotions[i][key]);        // Affiche dans la console les propriété [key] de la potion récupèrer à l'index [i] du tableau Inventaire 
        }
    }
}


    switch (YourChoice) {
        case 1:
            let PotionChoice = parseInt(prompt(`Quelle potion souhaites-tu acheter ?`));
                switch (PotionChoice) {
                    case "Potion de soin":
                        
                        break;
                    case "Potion de mana":
                    
                        break;
                    case "Potion d'endurance'":
                    
                        break;
                    default:
                        break;
                }
            break;
    
        default:
            break;
    }
// do {
//     YourChoice;
// } while (GoldAdventurer !== 0);