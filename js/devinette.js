/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var essais = 1;

while(essais <= 6)
{
    var valeurSaisie = Number(prompt("Essaies de deviner le nombre secret et priere de le saisir: "));
    
        if(valeurSaisie > solution){
            console.log(valeurSaisie + " est trop grand");
            essais ++;
        }
        else
            {
                if(valeurSaisie === solution){
                    console.log("Bravo ! La solution etait " + solution);
                    console.log("Vous avez trouve en " + essais + " essais");
                    essais = 8;
                }
                else{
                console.log(valeurSaisie + " est trop petit");
                    essais ++;
                }
            }
}

if(essais === 7)
    console.log("Perdu ! La solution etait " + solution);
