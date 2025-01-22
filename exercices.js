const nom_sorcier = ("Archibald");
// console.log("Le sorcier se nomme :" + nom_sorcier + " ! 🎉");

/**
 * Déclaration de variables
 */
const monnaie = "🪙";                           // Déclaration de la monnaie pour les exercices


// Exercice 1 - Définition de variables

const store = "Poney Fringuant";               // Déclaration du nom de la boutique en constante
let QtyHealPot = 42;                              // Déclaration d'une variable pour le nombre de potion de soin
let PriceHealPot = 10;                         // Déclaration d'une variable pour le prix d'une potion de soin
let StoreOpen = true;                          // Déclaration d'une variable pour savoir si la boutique est ouverte ou non


// Exercice 2 - Affichage conditionnel

/**
 * condition pour afficher dans la console un message celon si la boutique est ouverte ou non
 */
if (StoreOpen) {
    console.log("Bienvenue dans la boutique " + store + " aventurier ! 🎉");    
} else {
    console.log("La boutique " + store + " est fermée, revenez plus tard Aventurier ! 😴");    
}


// Exercice 3 - Affichage conditionnel avec switch

// const QueVeuxTu = parseInt(prompt("Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔\n- 1. Le nom de la boutique \n- 2. Le nom du Sorcier \n- 3. Le prix d'un potion de soin \n- 4. La quantité d'une potion de soin"));

// console.log(typeof QueVeuxTu);

/**
 * Switch ... Case pour afficher dans la console une réponse celon le choix de l'utilisateur
 */
//


// Exercice 4 - Calcul du prix total d'une commande de potion 🪙

// const Orders = parseInt(prompt("Combien de potions de soin veux-tu ?"));
// let TotalPrice = Orders*PriceHealPot
// console.log("Prix de " + Orders + " potions de soins : " + TotalPrice + " 🪙 mon cher Aventurier. 💸");


// // Exercice 5 - Bourse de l'Aventurier 💰

// let GoldAdventurer = 700;
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

const ArrayPotions = ["Potion de soin" , "Potion de mana" , "Potion d'expérience"];
console.log(ArrayPotions);


// Exercice 7 - Affichage des potions

console.log(ArrayPotions[0]);                           // Affiche la première potion du tableau
console.log(ArrayPotions[ArrayPotions.length - 1]);     // Affiche la dernière potion du tableau

for (let i = 0; i < ArrayPotions.length; i++) {         // Boucle for pour afficher toutes les potions du tableau
    // const test = ArrayPotions[i];
    console.log(ArrayPotions[i]);  
    
}


// Exercice 8 - Ajout d'une nouvelle potion

ArrayPotions.push("Potion d'endurance");
console.log(ArrayPotions);


// Exercice 9 - Finaly, nope.

ArrayPotions.pop("Potion d'endurance");
console.log(ArrayPotions);


// Excercice 10 - Rangeons les informations de la potion de soin dans un objet 🧹

let HealPot = {
    Nom: "Potion de soin",
    Prix: 10,
    Stock: 42
};
console.log(HealPot);


// Exercice 11 - Affichons les informations de la potion

console.log(HealPot.Nom);                       //Affiche le nom de la potion en utilisant la notation pointée `.`
console.log(HealPot["Prix"]);                   //Affiche le prix de la potion en utilisant la notation crochet `[]`


// Exercice 12 - C'est l'heure de faire l'inventaire...

const Inventaire = [
    {
        Nom: "Potion de soin",
        Prix: 10,
        Stock: 42 
    },

    {
        Nom: "Potion de mana",
        Prix: 5,
        Stock: 40 
    },

    {
        Nom: "Potion d'exérience",
        Prix: 20,
        Stock: 10 
    },
];

console.log(Inventaire);


// Exercice 13 - Aventurier, regarde tout ce que je vends !

for (let i = 0; i < Inventaire.length; i++) {
    console.log(Inventaire[i].Nom);   
    console.log(Inventaire[i].Prix);   
    console.log(Inventaire[i].Stock);   
}

/**
 * Affiche de façon dynamique les propriétés de chacunes des potions
 */
for (let i = 0; i < Inventaire.length; i++) {   // Boucle for pour itérer dans le tableau Inventaire pour récupèrer l'index
    for (const key in Inventaire[i]) {          // For in sur l'object pour récupérer les propriétés dans la const [key] de la potion indexé à [i]
        console.log(Inventaire[i][key]);        // Affiche dans la console les propriété [key] de la potion récupèrer à l'index [i] du tableau Inventaire 
    }
}


// Exercice 14 - L'heure est venu pour moi d'être un grand marchand de potion !
