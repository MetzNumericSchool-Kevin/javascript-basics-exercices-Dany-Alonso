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

const QueVeuxTu = parseInt(prompt("Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔\n- 1. Le nom de la boutique \n- 2. Le nom du Sorcier \n- 3. Le prix d'un potion de soin \n- 4. La quantité d'une potion de soin"));

// console.log(typeof QueVeuxTu);

/**
 * Switch ... Case pour afficher dans la console une réponse celon le choix de l'utilisateur
 */
switch (QueVeuxTu) {
    case 1:
        console.log(store);
        break;
    case 2:
        console.log(nom_sorcier);
        break;
    case 3:
        console.log(PriceHealPot);
        break;
    case 4:
        console.log(QtyHealPot);
        break;
    default:
        console.log("Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕");
        break;
}

// Exercice 4 - Calcul du prix total d'une commande de potion 🪙
